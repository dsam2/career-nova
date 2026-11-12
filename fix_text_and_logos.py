# fix_text_and_logos.py
import re

with open('theme_style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Fix the unscoped h2.framer-styles-preset-hcmt7i and p.framer-styles-preset-qlsyr3 at the bottom
old_contact_block = """  .framer-14wc3ae h2,
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
  }"""

new_contact_block = """  .framer-14wc3ae h2,
  .framer-14wc3ae h2 span,
  .framer-16czdg2 h2,
  .framer-16czdg2 h2 span,
  .framer-14wc3ae h2.framer-styles-preset-hcmt7i,
  .framer-14wc3ae h2.framer-styles-preset-hcmt7i span {
    color: #081838 !important;
    --framer-text-color: #081838 !important;
    text-align: left !important;
    font-weight: 700 !important;
    filter: none !important;
    opacity: 1 !important;
  }

  .framer-14wc3ae p,
  .framer-1c3u5nr p,
  .framer-14wc3ae p.framer-styles-preset-qlsyr3 {
    color: #4A5878 !important;
    --framer-text-color: #4A5878 !important;
    text-align: left !important;
    opacity: 1 !important;
  }"""

if old_contact_block in css:
    css = css.replace(old_contact_block, new_contact_block)
    print("Replaced old_contact_block successfully!")
else:
    print("Warning: old_contact_block not found exactly, searching regex...")
    css = re.sub(
        r'\.framer-14wc3ae h2,.*?opacity: 1 !important;\s*\}',
        new_contact_block,
        css,
        flags=re.DOTALL
    )

# 2. Add high-contrast rules for "Our Approach" and complete removal of logo ticker
new_additions = """

  /* =========================================================================
     OUR APPROACH: High-Contrast Pure White Headline, Crisp Subtext & Gold Tag
     Fixes dark-on-dark unreadable headline in "A Better Way To Solve Business Challenges"
     ========================================================================= */
  section[data-framer-name="Our Approach"],
  .framer-amq3p3 {
    background-color: #081838 !important;
    background: #081838 !important;
  }

  section[data-framer-name="Our Approach"] h2,
  section[data-framer-name="Our Approach"] h2 span,
  section[data-framer-name="Our Approach"] .framer-1grx4cn h2,
  section[data-framer-name="Our Approach"] .framer-1grx4cn h2 span,
  section[data-framer-name="Our Approach"] .framer-tn8jyu h2,
  section[data-framer-name="Our Approach"] .framer-tn8jyu h2 span,
  .framer-amq3p3 h2,
  .framer-amq3p3 h2 span,
  .framer-amq3p3 .framer-1grx4cn h2,
  .framer-amq3p3 .framer-1grx4cn h2 span,
  .framer-amq3p3 .framer-tn8jyu h2,
  .framer-amq3p3 .framer-tn8jyu h2 span {
    color: #FFFFFF !important;
    --framer-text-color: #FFFFFF !important;
    opacity: 1 !important;
    filter: none !important;
    font-weight: 700 !important;
  }

  section[data-framer-name="Our Approach"] .framer-4h1vua p,
  section[data-framer-name="Our Approach"] .framer-4h1vua *,
  section[data-framer-name="Our Approach"] .framer-1grx4cn p,
  section[data-framer-name="Our Approach"] .framer-1grx4cn p *,
  .framer-amq3p3 .framer-4h1vua p,
  .framer-amq3p3 .framer-4h1vua *,
  .framer-amq3p3 .framer-1grx4cn p,
  .framer-amq3p3 .framer-1grx4cn p * {
    color: #C7D0E0 !important;
    --framer-text-color: #C7D0E0 !important;
    opacity: 1 !important;
    filter: none !important;
    font-size: 1.15rem !important;
    line-height: 1.6 !important;
  }

  section[data-framer-name="Our Approach"] div[data-framer-name="Tag"] p,
  section[data-framer-name="Our Approach"] div[data-framer-name="Tag"] span,
  .framer-amq3p3 div[data-framer-name="Tag"] p,
  .framer-amq3p3 div[data-framer-name="Tag"] span,
  .framer-19q0rnq-container p {
    color: #F0BE55 !important;
    --framer-text-color: #F0BE55 !important;
    font-weight: 600 !important;
  }

  /* =========================================================================
     REMOVE LOGO TICKER / CLIENT LOGOS MARQUEE (Mercury, Leafe, hues, etc.)
     ========================================================================= */
  div[data-framer-name="Logos"],
  .framer-1ydpvd6,
  div[data-framer-name="Logo ticker"],
  .framer-17mlodp,
  .framer-17mlodp ul,
  .framer-17mlodp li,
  div[data-framer-name="Logos"][data-border="true"] {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    min-height: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
    border-width: 0 !important;
    overflow: hidden !important;
    pointer-events: none !important;
  }
"""

css = css + new_additions

with open('theme_style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated theme_style.css successfully!")
