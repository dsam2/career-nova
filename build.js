import fs from 'node:fs';
import path from 'node:path';

const srcDir = fs.existsSync('career-nova-export/index.html') ? 'career-nova-export' : '.';
const outDir = 'public';

fs.mkdirSync(outDir, { recursive: true });

fs.cpSync(path.join(srcDir, 'index.html'), path.join(outDir, 'index.html'), { force: true });
fs.cpSync(path.join(srcDir, 'assets'), path.join(outDir, 'assets'), { recursive: true, force: true });
fs.cpSync(path.join(srcDir, 'scripts'), path.join(outDir, 'scripts'), { recursive: true, force: true });
fs.cpSync(path.join(srcDir, 'subpages'), path.join(outDir, 'subpages'), { recursive: true, force: true });

console.log('Build completed successfully: public/ is ready for Vercel.');
