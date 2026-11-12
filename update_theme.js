const fs = require('fs');
const path = require('path');

// 1. Read theme_style.css
let css = fs.readFileSync('theme_style.css', 'utf8');

// Replacement for section 9 (Approach)
const oldSection9Regex = /\/\*\s*={10,}\s*9\.\s*APPROACH[\s\S]*?\/\*\s*={10,}\s*10\.\s*COMPARISON/i;

const newSection9 = `/* =========================================================================
     9. APPROACH: Navy background, White Cards with Navy/Muted Text, Gold Accents
     ========================================================================= */
  section[data-framer-name="Our Approach"],
  .framer-amq3p3 {
    background-color: #0C2250 !important;
    background: #0C2250 !important;
  }
  section[data-framer-name="Our Approach"] h2,
  .framer-amq3p3 h2 {
    color: #FFFFFF !important;
    --framer-text-color: #FFFFFF !important;
  }
  section[data-framer-name="Our Approach"] div[data-framer-name="Tag"] p,
  .framer-amq3p3 div[data-framer-name="Tag"] p {
    color: #F0BE55 !important;
    --framer-text-color: #F0BE55 !important;
  }

  /* Left Tabs (01 Understand, 02 Direction, 03 Progress) */
  /* Active Tab Pill (White Background) */
  .framer-V6wIU[style*="255, 255, 255"],
  .framer-V6wIU[style*="rgb(255,255,255)"],
  .framer-V6wIU[style*="#fff"],
  .framer-V6wIU[style*="#FFF"],
  .framer-V6wIU:not([data-framer-name="Disabled"]):not(.framer-v-1cha28u),
  .framer-V6wIU[data-framer-name="Variant 1"],
  .framer-V6wIU[data-framer-name="Active"] {
    background-color: #FFFFFF !important;
    background: #FFFFFF !important;
    opacity: 1 !important;
    box-shadow: 0 4px 14px rgba(8, 24, 56, 0.12) !important;
  }

  /* Active Pill - Step Number (01, 02, 03): Rich Gold 700 (#8A5A06) */
  .framer-V6wIU[style*="255, 255, 255"] .framer-90x3vz p,
  .framer-V6wIU[style*="rgb(255,255,255)"] .framer-90x3vz p,
  .framer-V6wIU[style*="#fff"] .framer-90x3vz p,
  .framer-V6wIU[style*="#FFF"] .framer-90x3vz p,
  .framer-V6wIU:not([data-framer-name="Disabled"]):not(.framer-v-1cha28u) .framer-90x3vz p,
  .framer-V6wIU[data-framer-name="Variant 1"] .framer-90x3vz p,
  .framer-V6wIU[data-framer-name="Active"] .framer-90x3vz p {
    color: #8A5A06 !important;
    --framer-text-color: #8A5A06 !important;
    font-weight: 700 !important;
    opacity: 1 !important;
  }

  /* Active Pill - Label (Understand, Direction, Progress): Bold Navy 900 (#081838) */
  .framer-V6wIU[style*="255, 255, 255"] .framer-63sh2d p,
  .framer-V6wIU[style*="rgb(255,255,255)"] .framer-63sh2d p,
  .framer-V6wIU[style*="#fff"] .framer-63sh2d p,
  .framer-V6wIU[style*="#FFF"] .framer-63sh2d p,
  .framer-V6wIU:not([data-framer-name="Disabled"]):not(.framer-v-1cha28u) .framer-63sh2d p,
  .framer-V6wIU[data-framer-name="Variant 1"] .framer-63sh2d p,
  .framer-V6wIU[data-framer-name="Active"] .framer-63sh2d p {
    color: #081838 !important;
    --framer-text-color: #081838 !important;
    font-weight: 600 !important;
    opacity: 1 !important;
  }

  /* Catch-all for any text inside active white pill */
  .framer-V6wIU[style*="255, 255, 255"] p,
  .framer-V6wIU[style*="rgb(255,255,255)"] p,
  .framer-V6wIU[style*="#fff"] p,
  .framer-V6wIU[style*="#FFF"] p,
  .framer-V6wIU:not([data-framer-name="Disabled"]):not(.framer-v-1cha28u) p {
    color: #081838 !important;
    --framer-text-color: #081838 !important;
  }

  /* Inactive Tab (on Navy background) */
  .framer-V6wIU[data-framer-name="Disabled"],
  .framer-V6wIU.framer-v-1cha28u,
  .framer-V6wIU[style*="rgba(0, 0, 0, 0)"],
  .framer-V6wIU[style*="transparent"] {
    background-color: transparent !important;
    background: transparent !important;
    opacity: 1 !important;
  }

  /* Inactive Tab - Step Number: Gold 400 (#F0BE55) */
  .framer-V6wIU[data-framer-name="Disabled"] .framer-90x3vz p,
  .framer-V6wIU.framer-v-1cha28u .framer-90x3vz p,
  .framer-V6wIU[style*="rgba(0, 0, 0, 0)"] .framer-90x3vz p,
  .framer-V6wIU[style*="transparent"] .framer-90x3vz p {
    color: #F0BE55 !important;
    --framer-text-color: #F0BE55 !important;
    font-weight: 600 !important;
    opacity: 1 !important;
  }

  /* Inactive Tab - Label: Muted Dark (#C7D0E0) */
  .framer-V6wIU[data-framer-name="Disabled"] .framer-63sh2d p,
  .framer-V6wIU.framer-v-1cha28u .framer-63sh2d p,
  .framer-V6wIU[style*="rgba(0, 0, 0, 0)"] .framer-63sh2d p,
  .framer-V6wIU[style*="transparent"] .framer-63sh2d p {
    color: #C7D0E0 !important;
    --framer-text-color: #C7D0E0 !important;
    font-weight: 500 !important;
    opacity: 1 !important;
    transition: color 0.2s ease !important;
  }

  /* Inactive Tab - Hover: Pure White (#FFFFFF) */
  .framer-V6wIU[data-framer-name="Disabled"]:hover .framer-63sh2d p,
  .framer-V6wIU.framer-v-1cha28u:hover .framer-63sh2d p {
    color: #FFFFFF !important;
    --framer-text-color: #FFFFFF !important;
  }

  /* Right Cards (Heading and subtext) - White Surface */
  .framer-iaxgtx,
  div[data-framer-name="Heading and subtext"] {
    background-color: #FFFFFF !important;
    background: #FFFFFF !important;
    border: 1px solid #E3DCC8 !important;
    box-shadow: 0 4px 20px rgba(8, 24, 56, 0.05) !important;
  }

  /* Card Headings: Bold Navy 900 (#081838) */
  .framer-iaxgtx h4,
  div[data-framer-name="Heading and subtext"] h4,
  .framer-iaxgtx .framer-styles-preset-hpamux,
  div[data-framer-name="Heading and subtext"] .framer-styles-preset-hpamux,
  .framer-iaxgtx .framer-1l62bih h4,
  div[data-framer-name="Heading and subtext"] .framer-1l62bih h4,
  .framer-tjWP0 .framer-iaxgtx h4 {
    color: #081838 !important;
    --framer-text-color: #081838 !important;
    font-weight: 700 !important;
    opacity: 1 !important;
  }

  /* Card Body Text Container Opacity Override (removes inline opacity:0.75) */
  .framer-iaxgtx .framer-n5b5i9,
  div[data-framer-name="Heading and subtext"] .framer-n5b5i9 {
    opacity: 1 !important;
  }

  /* Card Body Text: High-Contrast Muted Dark (#4A5878) */
  .framer-iaxgtx p,
  div[data-framer-name="Heading and subtext"] p,
  .framer-iaxgtx .framer-styles-preset-qlsyr3,
  div[data-framer-name="Heading and subtext"] .framer-styles-preset-qlsyr3,
  .framer-iaxgtx .framer-n5b5i9 p,
  div[data-framer-name="Heading and subtext"] .framer-n5b5i9 p,
  .framer-tjWP0 .framer-iaxgtx p {
    color: #4A5878 !important;
    --framer-text-color: #4A5878 !important;
    opacity: 1 !important;
    font-weight: 450 !important;
    line-height: 1.6 !important;
  }

  /* Card Icons: Gold 500 (#D9A53A) */
  .framer-iaxgtx svg,
  div[data-framer-name="Heading and subtext"] svg,
  .framer-iaxgtx .framer-r76qei svg,
  div[data-framer-name="Heading and subtext"] .framer-r76qei svg,
  .framer-tjWP0 .framer-iaxgtx svg {
    color: #D9A53A !important;
    fill: #D9A53A !important;
    stroke: #D9A53A !important;
    --21h8s6: #D9A53A !important;
  }
  .framer-iaxgtx svg use,
  div[data-framer-name="Heading and subtext"] svg use,
  .framer-tjWP0 .framer-iaxgtx svg use {
    color: #D9A53A !important;
    fill: #D9A53A !important;
  }

  /* =========================================================================
     10. COMPARISON`;

if (oldSection9Regex.test(css)) {
  css = css.replace(oldSection9Regex, newSection9);
  console.log('Replaced section 9 in CSS');
} else {
  console.log('WARNING: oldSection9Regex did not match, appending newSection9 to end');
  css += '\n' + newSection9;
}

fs.writeFileSync('theme_style.css', css);

// 2. Apply updated CSS to all 24 HTML files
function getHtmlFiles(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) res.push(...getHtmlFiles(full));
    else if (f.endsWith('.html')) res.push(full);
  }
  return res;
}

const htmlFiles = getHtmlFiles('career-nova-export');
console.log('Updating', htmlFiles.length, 'HTML files...');

const styleTagRegex = /<style[^>]*id="career-nova-theme"[^>]*>[\s\S]*?<\/style>/;
const newStyleTag = `<style data-theme="navy" id="career-nova-theme">\n${css}\n</style>`;

let count = 0;
for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  if (styleTagRegex.test(content)) {
    content = content.replace(styleTagRegex, newStyleTag);
    fs.writeFileSync(file, content, 'utf8');
    count++;
  } else {
    console.log('Style tag not found in:', file);
  }
}
console.log(`Successfully updated ${count} of ${htmlFiles.length} files.`);
