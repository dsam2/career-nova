import os
import glob
import re

with open('theme_style.css', 'r', encoding='utf-8') as f:
    base_css = f.read()

# CSS strictly for the HOME PAGE ONLY (re-enabling the fluid hero animation seamlessly)
home_page_animation_css = """
  /* =========================================================================
     HERO SHADER ANIMATION: HOME PAGE ONLY (index.html)
     - Re-enables the fluid WebGL interactive animation
     - Blends seamlessly into Deep Navy 900 (#081838) without harsh horizontal bands
     - Eliminates text washout and navbar separation
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
    mask-image: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%) !important;
    -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%) !important;
  }

  .framer-1npfag2 .framer-lh02uz-container canvas,
  div[data-framer-name="Hero"] .framer-lh02uz-container canvas,
  div[data-framer-appear-id="lh02uz"] canvas,
  .framer-lh02uz-container canvas {
    display: block !important;
    visibility: visible !important;
    opacity: 0.42 !important;
    mix-blend-mode: screen !important;
    filter: brightness(0.88) contrast(1.15) !important;
    width: 100% !important;
    height: 100% !important;
    pointer-events: none !important;
  }

  .framer-1npfag2 div[data-framer-component-type="Shader"],
  .framer-1npfag2 div[data-framer-component-type="Shader"] * {
    display: block !important;
    visibility: visible !important;
  }

  /* Clean Hero Headline: pure white typography, zero shadow, zero glow/highlight */
  .framer-1npfag2 h1,
  .framer-1npfag2 h1 span,
  .framer-u5gmvc h1,
  .framer-u5gmvc h1 span,
  .framer-1npfag2 .framer-text {
    color: #FFFFFF !important;
    text-shadow: none !important;
    filter: none !important;
    -webkit-filter: none !important;
    position: relative !important;
    z-index: 2 !important;
  }

  .framer-1npfag2 p,
  .framer-1npfag2 .framer-1hcgniv p {
    color: #D3DDF0 !important;
    text-shadow: none !important;
    filter: none !important;
    -webkit-filter: none !important;
    position: relative !important;
    z-index: 2 !important;
  }

  /* Ensure Hero CTA Button ("Book Consultation ↗") is fully visible and clickable */
  .framer-pmsnwe-container,
  .framer-1ngdnik {
    opacity: 1 !important;
    visibility: visible !important;
    z-index: 5 !important;
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

html_files = glob.glob('career-nova-export/**/*.html', recursive=True)
print(f"Total HTML files found: {len(html_files)}")

pattern = r'<style data-theme="navy" id="career-nova-theme">.*?</style>'

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    is_home = os.path.basename(file_path).lower() == 'index.html' and 'subpages' not in file_path.lower()
    
    if is_home:
        full_css = base_css + "\n" + home_page_animation_css
    else:
        full_css = base_css + "\n" + subpages_blocking_css
        
    style_tag = f'<style data-theme="navy" id="career-nova-theme">\n{full_css}\n</style>'
    
    if re.search(pattern, content, flags=re.DOTALL):
        new_content = re.sub(pattern, style_tag, content, flags=re.DOTALL)
    elif '<style data-theme="navy">' in content:
        alt_pattern = r'<style data-theme="navy">.*?</style>'
        new_content = re.sub(alt_pattern, style_tag, content, flags=re.DOTALL)
    elif '</head>' in content:
        new_content = content.replace('</head>', f'{style_tag}\n</head>')
    else:
        new_content = content + f'\n{style_tag}'
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    mode_label = "HOME (Animation Active)" if is_home else "SUBPAGE (Animation Disabled)"
    print(f"Processed {file_path}: {mode_label}")

print("All 24 files synchronized with Home-Only Hero Animation policy!")
