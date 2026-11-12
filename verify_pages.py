import os

files = [
    'career-nova-export/index.html',
    'career-nova-export/subpages/services.html',
    'career-nova-export/subpages/how-it-works.html',
    'career-nova-export/subpages/about.html',
    'career-nova-export/subpages/contact.html',
    'career-nova-export/subpages/blogs.html'
]

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    has_sec22 = 'SECTION 22' in content
    has_yellow_inline_top = 'rgb(178, 123, 0)' in content
    has_counselling_yellow = '--framer-text-color:#FFBF00">Counselling & Planning' in content
    has_guidance_yellow = '--framer-text-color:#FFBF00">Personalised Guidance' in content
    
    print(f"File: {fpath}")
    print(f"  Has Section 22 in CSS: {has_sec22}")
    print(f"  Has rgb(178, 123, 0): {has_yellow_inline_top}")
    print(f"  Has yellow Counselling & Planning: {has_counselling_yellow}")
    print(f"  Has yellow Personalised Guidance: {has_guidance_yellow}")
