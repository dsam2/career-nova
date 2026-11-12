import os
import re

with open('theme_style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Remove all drop-shadow filters on career-nova-nav-logo
css = re.sub(
    r'filter:\s*drop-shadow\([^;]+\);?',
    'filter: none !important;',
    css
)

# 2. Remove any rules setting opacity: 0.16 or display: none on lh02uz
css = re.sub(
    r'/\*[^*]*\*/\s*\.framer-lh02uz-container,\s*div\[data-framer-appear-id=\"lh02uz\"\]\s*\{[^}]*\}',
    '',
    css
)
css = re.sub(
    r'\.framer-lh02uz-container,\s*div\[data-framer-appear-id=\"lh02uz\"\]\s*\{[^}]*\}',
    '',
    css
)

# 3. Ensure Hero WebGL shader animation is crisp and visible
hero_rule = """
  /* Hero WebGL interactive fluid animation */
  .framer-lh02uz-container,
  div[data-framer-appear-id="lh02uz"] {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: none !important;
    z-index: 0 !important;
  }
  .framer-lh02uz-container canvas,
  div[data-framer-appear-id="lh02uz"] canvas {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
"""

# 4. Ensure complete removal of shadows from Nav bar
nav_clean_rule = """
  /* Complete Shadow Removal from Entire Nav Bar */
  .framer-1vs21cr-container,
  .framer-AsZ1t,
  .framer-wye0lu,
  div[data-framer-name="Desktop navigation"],
  div[data-framer-name="Container"],
  .framer-wye0lu div[data-framer-name="Nav items"] p,
  div[data-framer-name="Nav items"] p,
  .framer-wye0lu div[data-framer-name="Button"] a,
  .framer-rkuqdx-container a,
  .framer-UXcol,
  a.framer-UXcol,
  .career-nova-nav-logo,
  img.career-nova-nav-logo {
    box-shadow: none !important;
    text-shadow: none !important;
    filter: none !important;
    -webkit-filter: none !important;
  }
"""

css = css + '\n' + hero_rule + '\n' + nav_clean_rule

with open('theme_style.css', 'w', encoding='utf-8') as f:
    f.write(css)

def get_html_files(dir_path):
    res = []
    for root, dirs, files in os.walk(dir_path):
        for file in files:
            if file.endswith('.html'):
                res.append(os.path.join(root, file))
    return res

html_files = get_html_files('career-nova-export')
style_tag_pattern = re.compile(r'<style[^>]*id="career-nova-theme"[^>]*>[\s\S]*?</style>')
new_style_tag = f'<style data-theme="navy" id="career-nova-theme">\n{css}\n</style>'

count = 0
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    if style_tag_pattern.search(content):
        updated = style_tag_pattern.sub(lambda _: new_style_tag, content)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(updated)
        count += 1

print(f"Updated {count} HTML files.")
