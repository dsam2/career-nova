# update_theme.py
import re

with open('theme_style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update distorted counting in Comparison Section:
old_counter_block = """  /* Metric numbers (180+, 15+, 97%, 18+) -> Bold Navy Blue (#081838) */
  section[data-framer-name="Comparison"] .framer-I9tjZ p,
  section[data-framer-name="Comparison"] .framer-jzo14d-container p,
  section[data-framer-name="Comparison"] .framer-jzo14d-container *,
  .framer-7t69tj .framer-I9tjZ p,
  .framer-7t69tj .framer-jzo14d-container p,
  .framer-7t69tj .framer-jzo14d-container *,
  .framer-1r75qix .framer-I9tjZ p,
  .framer-1r75qix .framer-jzo14d-container p,
  .framer-1r75qix .framer-jzo14d-container *,
  .framer-I9tjZ .framer-jzo14d-container *,
  .framer-I9tjZ .framer-jzo14d-container p,
  .framer-I9tjZ p,
  .framer-jzo14d-container p,
  .framer-jzo14d-container * {
    color: #081838 !important;
    --framer-text-color: #081838 !important;
    font-weight: 700 !important;
    opacity: 1 !important;
  }"""

new_counter_block = """  /* =========================================================================
     FIX DISTORTED COUNTING:
     Keep the ghost sizer layout <p> completely hidden (opacity: 0).
     Style ONLY the active animated counter <p> in Navy Blue (#081838).
     ========================================================================= */
  .framer-jzo14d-container p:first-child,
  .framer-jzo14d-container p[style*="opacity:0"],
  .framer-jzo14d-container p[style*="opacity: 0"] {
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }

  .framer-jzo14d-container p:not(:first-child),
  .framer-jzo14d-container p[style*="position:absolute"],
  .framer-jzo14d-container p[style*="position: absolute"] {
    color: #081838 !important;
    --framer-text-color: #081838 !important;
    font-weight: 500 !important;
    opacity: 1 !important;
    visibility: visible !important;
  }"""

if old_counter_block in css:
    css = css.replace(old_counter_block, new_counter_block)
    print("Replaced old_counter_block successfully")
else:
    print("Warning: old_counter_block not found by exact match, using regex replacement")
    css = re.sub(
        r'/\* Metric numbers \(180\+, 15\+, 97%, 18\+\) -> Bold Navy Blue \(#081838\) \*/.*?(?=/\* Metric labels)',
        new_counter_block + '\n\n  ',
        css,
        flags=re.DOTALL
    )

# 2. Add comprehensive button misalignment & pure white text rules, plus contact reach-out box alignment
addon_rules = """

  /* =========================================================================
     UNIVERSAL BUTTON ALIGNMENT & WHITE TEXT OVER GOLD BACKGROUND
     Fixes:
     - Text overflow & misalignment on pill edges ("View all services")
     - Sets button text color strictly to Pure White (#FFFFFF)
     - Ensures proper flex alignment, padding, and arrow icon color
     ========================================================================= */
  .framer-Xl5mj,
  .framer-yhbd3f,
  a[data-framer-name="Line"],
  a[data-framer-name="Simple"],
  a[data-framer-name="Simple arrow"],
  a[data-framer-name="Button"],
  div[data-framer-name="Button"] a,
  .framer-rkuqdx-container a,
  .framer-wye0lu a,
  .framer-12plb68 a,
  section[data-framer-name="Why us"] a.framer-Xl5mj,
  button[type="submit"],
  .framer-1fe5dgd button,
  .framer-1c9xq7x button,
  .framer-1shwfl button,
  .framer-1xyvegf button,
  .framer-1473l0o button,
  form button {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    box-sizing: border-box !important;
    background: #D9A53A !important;
    background-color: #D9A53A !important;
    color: #FFFFFF !important;
    --framer-text-color: #FFFFFF !important;
    text-decoration: none !important;
    border-radius: 9999px !important;
  }

  /* All text inside any button variant -> Pure White (#FFFFFF) */
  .framer-Xl5mj *,
  .framer-yhbd3f *,
  a[data-framer-name="Line"] *,
  a[data-framer-name="Simple"] *,
  a[data-framer-name="Simple arrow"] *,
  a[data-framer-name="Button"] *,
  div[data-framer-name="Button"] a *,
  .framer-rkuqdx-container a *,
  .framer-wye0lu a *,
  .framer-12plb68 a *,
  section[data-framer-name="Why us"] a.framer-Xl5mj *,
  button[type="submit"] *,
  .framer-1fe5dgd button *,
  .framer-1c9xq7x button *,
  .framer-1shwfl button *,
  .framer-1xyvegf button *,
  .framer-1473l0o button *,
  form button * {
    color: #FFFFFF !important;
    --framer-text-color: #FFFFFF !important;
    font-weight: 600 !important;
    text-shadow: none !important;
  }

  /* Specific padding & flex alignment for "View all services" (.framer-v-1uc1f7v) */
  .framer-Xl5mj.framer-v-1uc1f7v,
  .framer-v-1uc1f7v.framer-39xvlj,
  a[data-framer-name="Simple arrow"] {
    padding: 10px 22px 10px 24px !important;
    gap: 8px !important;
    width: auto !important;
    min-width: max-content !important;
    overflow: visible !important;
  }

  .framer-Xl5mj.framer-v-1uc1f7v .framer-17hpsvh,
  .framer-v-1uc1f7v .framer-17hpsvh {
    overflow: visible !important;
    width: auto !important;
    height: auto !important;
  }

  /* Specific padding for "Talk to us" (.framer-v-18a8r8k) */
  .framer-Xl5mj.framer-v-18a8r8k,
  .framer-v-18a8r8k.framer-39xvlj,
  a[data-framer-name="Simple"] {
    padding: 10px 24px !important;
    gap: 12px !important;
    width: auto !important;
    min-width: max-content !important;
  }

  /* Navbar CTA "Get in touch" */
  .framer-wye0lu a.framer-Xl5mj,
  .framer-wye0lu .framer-Xl5mj,
  a[data-framer-name="Line"].framer-Xl5mj {
    padding: 10px 24px !important;
    width: auto !important;
    min-width: max-content !important;
  }

  /* Hero & Section CTA "Book Consultation" */
  .framer-1npfag2 a[data-framer-name="Button"],
  div[data-framer-name="Hero"] a[data-framer-name="Button"],
  .framer-12plb68 a.framer-Xl5mj,
  section[data-framer-name="Why us"] a.framer-Xl5mj {
    padding: 8px 10px 8px 24px !important;
    gap: 12px !important;
    width: auto !important;
    min-width: max-content !important;
  }

  /* Arrow icon inside simple buttons (like View all services) -> Pure White */
  .framer-Xl5mj.framer-v-1uc1f7v svg,
  .framer-v-1uc1f7v .framer-f97dkt svg,
  a[data-framer-name="Simple arrow"] svg,
  a[data-framer-name="Simple"] svg {
    color: #FFFFFF !important;
    fill: #FFFFFF !important;
    stroke: #FFFFFF !important;
    --18mrqx2: #FFFFFF !important;
  }

  /* Arrow badge in Hero & Why Us: white circular badge with Navy arrow */
  .framer-12plb68 a.framer-Xl5mj .framer-f97dkt,
  section[data-framer-name="Why us"] a.framer-Xl5mj .framer-f97dkt,
  .framer-1npfag2 a[data-framer-name="Button"] .framer-f97dkt {
    background-color: #FFFFFF !important;
    border-radius: 9999px !important;
  }
  .framer-12plb68 a.framer-Xl5mj .framer-f97dkt svg,
  section[data-framer-name="Why us"] a.framer-Xl5mj .framer-f97dkt svg,
  .framer-1npfag2 a[data-framer-name="Button"] .framer-f97dkt svg {
    color: #081838 !important;
    fill: #081838 !important;
    stroke: #081838 !important;
    --18mrqx2: #081838 !important;
  }

  /* =========================================================================
     CONTACT PAGE: REACH OUT BOX ALIGNMENT & TYPOGRAPHY
     ========================================================================= */
  .framer-14wc3ae {
    align-items: flex-start !important;
    text-align: left !important;
    place-content: flex-start !important;
  }

  .framer-14wc3ae .framer-16czdg2,
  .framer-14wc3ae .framer-1c3u5nr,
  .framer-16czdg2,
  .framer-1c3u5nr {
    align-items: flex-start !important;
    text-align: left !important;
    width: 100% !important;
  }

  .framer-14wc3ae h2,
  .framer-14wc3ae h2 span,
  .framer-16czdg2 h2,
  .framer-16czdg2 h2 span,
  h2.framer-styles-preset-hcmt7i,
  h2.framer-styles-preset-hcmt7i span {
    color: #081838 !important;
    --framer-text-color: #081838 !important;
    text-align: left !important;
    font-weight: 700 !important;
    filter: none !important;
    opacity: 1 !important;
  }

  .framer-14wc3ae p,
  .framer-1c3u5nr p,
  p.framer-styles-preset-qlsyr3 {
    color: #4A5878 !important;
    --framer-text-color: #4A5878 !important;
    text-align: left !important;
    opacity: 1 !important;
  }

  /* Eyebrow tag: Reach out */
  .framer-9bzoa9-container p.framer-styles-preset-12qamiq,
  .framer-9bzoa9-container .framer-zvw3p p {
    color: #8A5A06 !important;
    --framer-text-color: #8A5A06 !important;
    font-weight: 600 !important;
  }
"""

# Append addon rules before closing style tag if any, or at the end
css = css + addon_rules

with open('theme_style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("theme_style.css successfully updated!")
