import fs from 'fs';
fs.copyFileSync('dist/index-standalone.html', 'export-index.html');
console.log('File copied to export-index.html');
