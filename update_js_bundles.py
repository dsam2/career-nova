import os
import glob
import re

scripts_dir = 'career-nova-export/scripts'

replacements = [
    # Navbar button
    ('`Get in touch`', '`Book Counselling`'),
    ('"Get in touch"', '"Book Counselling"'),
    
    # Navbar Pricing -> How It Works
    ('`Pricing`', '`How It Works`'),
    ('"Pricing"', '"How It Works"'),
    ('path: `/pricing`', 'path: `/how-it-works`'),
    ('path: "/pricing"', 'path: "/how-it-works"'),

    # CTA Button
    ('`Book Consultation`', '`Book Counselling`'),
    ('"Book Consultation"', '"Book Counselling"'),

    # CTA Heading
    ('`Let’s Build Better Business`', '`Ready To Plan Your Future Abroad?`'),
    ('`Let\'s Build Better Business`', '`Ready To Plan Your Future Abroad?`'),
    ('`Let\ufffds Build Better Business`', '`Ready To Plan Your Future Abroad?`'),
    ('"Let’s Build Better Business"', '"Ready To Plan Your Future Abroad?"'),
    ('"Let\'s Build Better Business"', '"Ready To Plan Your Future Abroad?"'),
    
    # CTA Body
    (
        '`Get an outside perspective on your priorities and discover practical ways to turn ambition into progress.`',
        '`Talk to a counsellor about your profile, your goals and the best path to study or build a career abroad.`'
    ),
    (
        '"Get an outside perspective on your priorities and discover practical ways to turn ambition into progress."',
        '"Talk to a counsellor about your profile, your goals and the best path to study or build a career abroad."'
    ),

    # CTA Rating / Social proof
    ('`Trusted by 150+ Teams`', '`Guidance for students across India`'),
    ('"Trusted by 150+ Teams"', '"Guidance for students across India"'),
    ('`4.8/5`', '``'),
    ('"4.8/5"', '""'),

    # Footer Copyright
    ('Career Nova. All rights reserved.', 'CareerNova Education Services. All rights reserved.'),
    ('Career Nova', 'CareerNova Education Services'),
]

files = glob.glob('career-nova-export/scripts/**/*.mjs', recursive=True) + glob.glob('career-nova-export/scripts/**/*.js', recursive=True)
print(f"Scanning and updating {len(files)} script files...")

for fp in files:
    with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    changed = False
    new_content = content

    # Handle Let.*Build Better Business regex
    if 'Build Better Business' in new_content:
        new_content = re.sub(r'Let[^\w\s]?s Build Better Business', 'Ready To Plan Your Future Abroad?', new_content)
        changed = True

    for old_val, new_val in replacements:
        if old_val in new_content:
            new_content = new_content.replace(old_val, new_val)
            changed = True

    if changed:
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {fp}")

print("All JS bundles updated successfully!")
