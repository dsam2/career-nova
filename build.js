import fs from 'node:fs';
import path from 'node:path';

const srcDir = fs.existsSync('career-nova-export/index.html') ? 'career-nova-export' : '.';
const outDir = 'public';

console.log('--- CareerNova Production Build Pipeline ---');
console.log('1. Cleaning public directory...');
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

console.log('2. Copying static directories (assets, scripts, data, subpages)...');
fs.cpSync(path.join(srcDir, 'assets'), path.join(outDir, 'assets'), { recursive: true, force: true });
fs.cpSync(path.join(srcDir, 'scripts'), path.join(outDir, 'scripts'), { recursive: true, force: true });

if (fs.existsSync(path.join(srcDir, 'data'))) {
  fs.cpSync(path.join(srcDir, 'data'), path.join(outDir, 'data'), { recursive: true, force: true });
}

if (fs.existsSync(path.join(srcDir, 'subpages'))) {
  fs.cpSync(path.join(srcDir, 'subpages'), path.join(outDir, 'subpages'), { recursive: true, force: true });
}

if (fs.existsSync('theme_style.css')) {
  fs.copyFileSync('theme_style.css', path.join(outDir, 'theme_style.css'));
} else if (fs.existsSync(path.join(srcDir, 'theme_style.css'))) {
  fs.copyFileSync(path.join(srcDir, 'theme_style.css'), path.join(outDir, 'theme_style.css'));
}

if (fs.existsSync('CareerNova_Website_Directory.pdf')) {
  fs.copyFileSync('CareerNova_Website_Directory.pdf', path.join(outDir, 'CareerNova_Website_Directory.pdf'));
} else if (fs.existsSync(path.join(srcDir, 'CareerNova_Website_Directory.pdf'))) {
  fs.copyFileSync(path.join(srcDir, 'CareerNova_Website_Directory.pdf'), path.join(outDir, 'CareerNova_Website_Directory.pdf'));
}

console.log('3. Writing root index.html...');
const rootIndexHtml = fs.readFileSync(path.join(srcDir, 'index.html'), 'utf-8');
fs.writeFileSync(path.join(outDir, 'index.html'), rootIndexHtml, 'utf-8');

// Helper to deploy an HTML page to both:
// 1) public/<route>.html
// 2) public/<route>/index.html
function deployPage(content, routePath) {
  const htmlFile = path.join(outDir, `${routePath}.html`);
  fs.mkdirSync(path.dirname(htmlFile), { recursive: true });
  fs.writeFileSync(htmlFile, content, 'utf-8');

  const dirFile = path.join(outDir, routePath, 'index.html');
  fs.mkdirSync(path.dirname(dirFile), { recursive: true });
  fs.writeFileSync(dirFile, content, 'utf-8');
}

console.log('4. Generating first-class static routes for all subpages...');
const subpagesDir = path.join(srcDir, 'subpages');
if (fs.existsSync(subpagesDir)) {
  const files = fs.readdirSync(subpagesDir).filter(f => f.endsWith('.html'));
  for (const file of files) {
    const content = fs.readFileSync(path.join(subpagesDir, file), 'utf-8');
    const name = file.replace('.html', '');

    if (name === 'services') {
      deployPage(content, 'services');
    } else if (name === 'about') {
      deployPage(content, 'about');
    } else if (name === 'contact') {
      deployPage(content, 'contact');
    } else if (name === 'how-it-works') {
      deployPage(content, 'how-it-works');
    } else if (name === 'pricing') {
      deployPage(content, 'pricing');
    } else if (name === 'blogs') {
      deployPage(content, 'blogs');
    } else if (name === 'case-studies') {
      deployPage(content, 'case-studies');
    } else if (name.startsWith('services_')) {
      const slug = name.replace('services_', '');
      deployPage(content, `services/${slug}`);
    } else if (name.startsWith('blogs_')) {
      const slug = name.replace('blogs_', '');
      deployPage(content, `blogs/${slug}`);
    } else if (name.startsWith('case-studies_')) {
      const slug = name.replace('case-studies_', '');
      deployPage(content, `case-studies/${slug}`);
    }
  }
}

console.log('5. Standardizing links across all HTML files in public/...');
function standardizeHtml(html) {
  let res = html;

  // Replace navigation hrefs with canonical routes
  const linkMap = [
    ['href="subpages/services.html"', 'href="/services"'],
    ['href="subpages/about.html"', 'href="/about"'],
    ['href="subpages/contact.html"', 'href="/contact"'],
    ['href="subpages/how-it-works.html"', 'href="/how-it-works"'],
    ['href="subpages/pricing.html"', 'href="/pricing"'],
    ['href="subpages/blogs.html"', 'href="/blogs"'],
    ['href="subpages/case-studies.html"', 'href="/case-studies"'],
    ['href="services.html"', 'href="/services"'],
    ['href="about.html"', 'href="/about"'],
    ['href="contact.html"', 'href="/contact"'],
    ['href="how-it-works.html"', 'href="/how-it-works"'],
    ['href="pricing.html"', 'href="/pricing"'],
    ['href="blogs.html"', 'href="/blogs"'],
    ['href="case-studies.html"', 'href="/case-studies"'],
  ];

  for (const [from, to] of linkMap) {
    res = res.replaceAll(from, to);
  }

  // Slugs
  res = res.replace(/href="subpages\/services_([^"]+)\.html"/g, 'href="/services/$1"');
  res = res.replace(/href="services_([^"]+)\.html"/g, 'href="/services/$1"');
  res = res.replace(/href="subpages\/blogs_([^"]+)\.html"/g, 'href="/blogs/$1"');
  res = res.replace(/href="blogs_([^"]+)\.html"/g, 'href="/blogs/$1"');
  res = res.replace(/href="subpages\/case-studies_([^"]+)\.html"/g, 'href="/case-studies/$1"');
  res = res.replace(/href="case-studies_([^"]+)\.html"/g, 'href="/case-studies/$1"');

  return res;
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name.endsWith('.html')) {
      const original = fs.readFileSync(fullPath, 'utf-8');
      const updated = standardizeHtml(original);
      if (updated !== original) {
        fs.writeFileSync(fullPath, updated, 'utf-8');
      }
    }
  }
}

processDirectory(outDir);

console.log('Build complete! All 50+ routes and CMS data are deployed in public/.');
