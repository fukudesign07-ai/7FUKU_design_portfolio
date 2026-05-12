import fs from 'fs';
import path from 'path';

let html = fs.readFileSync('dist/index.html', 'utf-8');

const publicDir = 'public';
const files = fs.readdirSync(publicDir);

for (const file of files) {
  if (file.match(/\.(jpg|jpeg|png|gif|svg)$/i)) {
    const filePath = path.join(publicDir, file);
    const ext = path.extname(file).slice(1).toLowerCase();
    const mime = ext === 'jpg' ? 'jpeg' : ext === 'svg' ? 'svg+xml' : ext;
    const base64 = fs.readFileSync(filePath, 'base64');
    const dataUrl = `data:image/${mime};base64,${base64}`;
    
    console.log(`Inlining ${file} (${(base64.length/1024).toFixed(2)} KB)`);
    
    // Replace "/file", "/file?v=2"
    // Handle both / and \/ escaping in JSON strings
    const regex1 = new RegExp(`["']((\\\\?)/)${file}(\\\\?\\?v=\\d+)?["']`, 'g');
    html = html.replace(regex1, `"${dataUrl}"`);
    
    // For CSS background-image: url("/file")
    const regex3 = new RegExp(`url\\(["']?(\\\\?)/${file}(\\\\?\\?v=\\d+)?["']?\\)`, 'g');
    html = html.replace(regex3, `url("${dataUrl}")`);
  }
}

fs.writeFileSync('dist/index-standalone.html', html);
console.log('Saved to dist/index-standalone.html (size: ' + (html.length / 1024 / 1024).toFixed(2) + ' MB)');
