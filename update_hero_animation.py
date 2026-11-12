# update_hero_animation.py
import re
import glob

# Read base theme_style.css
with open('theme_style.css', 'r', encoding='utf-8') as f:
    base_css = f.read()

# 1. In theme_style.css, remove the broad `canvas { display: none !important; ... }` block that was appended
old_kill_block = """  /* =========================================================================
     PERMANENT FIX: ELIMINATE SHADER CANVAS GLOW (RESTORE SOLID NAVY BACKGROUND)
     The Framer WebGL shader canvas rendered a yellow/white fluid glow that washed
     out the background behind the logo and navbar. Completely disable it to
     restore the crisp, professional Deep Navy 900 (#081838) background.
     ========================================================================= */
  .framer-lh02uz-container,
  div[data-framer-appear-id="lh02uz"],
  .framer-v9sz9r-container,
  div[data-framer-appear-id="v9sz9r"],
  div[data-framer-component-type="Shader"],
  div[data-framer-component-type="Shader"] *,
  .framer-lh02uz-container canvas,
  div[data-framer-appear-id="lh02uz"] canvas,
  canvas {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    pointer-events: none !important;
  }"""

if old_kill_block in base_css:
    base_css = base_css.replace(old_kill_block, "")
    print("Removed old broad kill block from base_css")
else:
    # Use regex
    base_css = re.sub(
        r'/\* =+ \s*PERMANENT FIX: ELIMINATE SHADER CANVAS GLOW.*?(?=\s*/\* Solid Deep Navy 900)',
        '',
        base_css,
        flags=re.DOTALL
    )
    print("Cleaned broad kill block via regex")

# Write cleaned base_css
with open('theme_style.css', 'w', encoding='utf-8') as f:
    f.write(base_css)

# CSS strictly for the HOME PAGE ONLY (re-enabling the fluid hero animation with top nav protection)
home_page_animation_css = """
  /* =========================================================================
     HERO SHADER ANIMATION: HOME PAGE ONLY (index.html)
     - Re-enables the fluid WebGL interactive animation
     - Preserves Deep Navy 900 behind logo/nav via gentle top mask
     ========================================================================= */
  .framer-1npfag2 .framer-lh02uz-container,
  div[data-framer-name="Hero"] .framer-lh02uz-container,
  div[data-framer-appear-id="lh02uz"],
  .framer-lh02uz-container {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: none !important;
    z-index: 0 !important;
    position: absolute !important;
    inset: 0px !important;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0.15) 50px, rgba(0,0,0,0.85) 100px, rgba(0,0,0,1) 140px, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%) !important;
    -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0.15) 50px, rgba(0,0,0,0.85) 100px, rgba(0,0,0,1) 140px, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%) !important;
  }

  .framer-1npfag2 .framer-lh02uz-container canvas,
  div[data-framer-name="Hero"] .framer-lh02uz-container canvas,
  div[data-framer-appear-id="lh02uz"] canvas,
  .framer-lh02uz-container canvas {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    width: 100% !important;
    height: 100% !important;
    pointer-events: none !important;
  }

  .framer-1npfag2 div[data-framer-component-type="Shader"],
  .framer-1npfag2 div[data-framer-component-type="Shader"] * {
    display: block !important;
    visibility: visible !important;
  }

  /* Ensure Hero CTA Button ("Book Consultation ↗") is fully visible */
  .framer-pmsnwe-container,
  .framer-1ngdnik {
    opacity: 1 !important;
    visibility: visible !important;
  }
"""

# CSS strictly for SUBPAGES (strictly blocking any shader canvas or animation)
subpages_blocking_css = """
  /* =========================================================================
     SUBPAGES: HERO SHADER ANIMATION STRICTLY DISABLED
     Ensures no subpage (About, Pricing, Services, Contact, Blog, etc.) ever
     displays any shader canvas or background animation distortion.
     ========================================================================= */
  .framer-v9sz9r-container,
  div[data-framer-appear-id="v9sz9r"],
  .framer-lh02uz-container,
  div[data-framer-appear-id="lh02uz"],
  div[data-framer-component-type="Shader"],
  div[data-framer-component-type="Shader"] *,
  canvas {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    pointer-events: none !important;
  }
"""

# 2. Inject into career-nova-export/index.html (HOME PAGE)
home_html_path = 'career-nova-export/index.html'
with open(home_html_path, 'r', encoding='utf-8') as f:
    home_content = f.read()

home_full_css = base_css + "\n" + home_page_animation_css
home_style_tag = f'<style data-theme="navy" id="career-nova-theme">\n{home_full_css}\n</style>'

home_pattern = r'<style data-theme="navy" id="career-nova-theme">.*?</style>'
if re.search(home_pattern, home_content, flags=re.DOTALL):
    home_content = re.sub(home_pattern, home_style_tag, home_content, flags=re.DOTALL)
else:
    home_content = home_content.replace('</head>', f'{home_style_tag}\n</head>')

with open(home_html_path, 'w', encoding='utf-8') as f:
    f.write(home_content)
print(f"Updated Home Page ({home_html_path}) with Hero Animation enabled!")

# 3. Inject into all subpages in career-nova-export/subpages/*.html
subpage_files = glob.glob('career-nova-export/subpages/*.html')
subpage_full_css = base_css + "\n" + subpages_blocking_css
subpage_style_tag = f'<style data-theme="navy" id="career-nova-theme">\n{subpage_full_css}\n</style>'

for sub_path in subpage_files:
    with open(sub_path, 'r', encoding='utf-8') as f:
        sub_content = f.read()
    
    if re.search(home_pattern, sub_content, flags=re.DOTALL):
        sub_content = re.sub(home_pattern, subpage_style_tag, sub_content, flags=re.DOTALL)
    else:
        sub_content = sub_content.replace('</head>', f'{subpage_style_tag}\n</head>')
    
    with open(sub_path, 'w', encoding='utf-8') as f:
        f.write(sub_content)
    print(f"Updated Subpage ({sub_path}) with Hero Animation DISABLED.")

print("Completed updating Home Page and Subpages successfully!")
