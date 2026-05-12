import fs from 'fs';
if (!fs.existsSync('export')) fs.mkdirSync('export');
fs.renameSync('export-index.html', 'export/index.html');
console.log('Moved to export/index.html');
