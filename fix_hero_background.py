# fix_hero_background.py
import re

with open('theme_style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace any rule that enabled the shader canvas
css = re.sub(
    r'\.framer-lh02uz-container canvas[^{]*\{[^}]*\}',
    '',
    css
)
css = re.sub(
    r'div\[data-framer-appear-id="lh02uz"\] canvas[^{]*\{[^}]*\}',
    '',
    css
)
css = re.sub(
    r'/\* Hero WebGL interactive fluid animation \*/\s*\.framer-lh02uz-container,.*?opacity: 1 !important;\s*\}',
    '',
    css,
    flags=re.DOTALL
)

# Append authoritative rule to completely eliminate the shader canvas glow
shader_kill_rules = """

  /* =========================================================================
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
  }

  /* Solid Deep Navy 900 (#081838) for Hero & Top Navigation backdrop */
  .framer-1npfag2,
  div[data-framer-name="Hero"],
  .framer-HDnou .framer-1npfag2,
  .framer-kcrqvk .framer-1npfag2,
  section[data-framer-name="Hero"] {
    background: #081838 !important;
    background-color: #081838 !important;
  }

  /* Ensure navigation bar is transparent and shows the clean Navy 900 background */
  .framer-1vs21cr-container,
  .framer-AsZ1t,
  .framer-wye0lu,
  div[data-framer-name="Desktop navigation"],
  div[data-framer-name="Container"] {
    background: transparent !important;
    background-color: transparent !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }

  /* Ensure logo emblem and its parent containers have zero background & zero blur */
  .framer-4yblnf,
  .framer-2r7npf-container,
  .framer-UXcol,
  a.framer-UXcol,
  .career-nova-nav-logo,
  img.career-nova-nav-logo {
    background: transparent !important;
    background-color: transparent !important;
    box-shadow: none !important;
    filter: none !important;
    -webkit-filter: none !important;
  }

  /* Ensure Hero Video is visible and playing smoothly */
  .framer-1ur3sde-container,
  .framer-xreo94-container,
  .framer-xreo94-container video,
  div[data-framer-name="Video"] video {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    border-radius: 15px !important;
  }
"""

css = css + shader_kill_rules

with open('theme_style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated theme_style.css with shader kill rules successfully!")
