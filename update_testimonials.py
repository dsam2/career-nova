import os
import glob
import re

testimonials_replacements = [
    # Elena Morgan -> Aditi
    ("Elena Morgan", "Aditi"),
    ("Director, Northbridge Group", "B.Tech Computer Science | Top Engineering College, Bengaluru, India"),
    ("“Career Nova helped us see the bigger picture, prioritize what mattered, and move forward with far greater confidence.”",
     "“CareerNova made the entire college selection and counselling process transparent and stress-free. Their realistic guidance helped me land my dream CSE seat.”"),
    
    # Marcus Bennett -> Karan
    ("Marcus Bennett", "Karan"),
    ("CEO, Vertex Labs", "MBA / Management Programme | Top Business School, Mumbai, India"),
    ("“The strategic clarity and operational insights Career Nova brought to our team were transformative. We achieved in months what used to take years.”",
     "“Their interview preparation and profile mentoring were game-changers. No exaggerated promises, just honest, actionable advice that worked.”"),
     
    # Amelia Rhodes -> Sneha
    ("Amelia Rhodes", "Sneha"),
    ("Operating Officer, Haven &amp; Co.", "B.Com (Hons) &amp; Economics | Premier Central University, Delhi, India"),
    ("Operating Officer, Haven & Co.", "B.Com (Hons) & Economics | Premier Central University, Delhi, India"),
    ("“Working with Career Nova gave us the leadership alignment and focus we needed during a critical phase of organizational growth.”",
     "“From cutoff trends analysis to application tracking and scholarship paperwork, the team supported me at every single stage.”"),
     
    # Daniel Foster -> Rohan
    ("Daniel Foster", "Rohan"),
    ("Manager, Crestwell Partners", "B.Des Industrial Design | Top National Design Institute, Pune, India"),
    ("“Career Nova provided the steady guidance and actionable roadmap that allowed us to navigate market complexity with total certainty.”",
     "“The portfolio review and design studio guidance gave me the exact confidence I needed to clear the studio test and interview rounds.”")
]

files = [
    'career-nova-export/index.html',
    'career-nova-export/subpages/about.html',
    'career-nova-export/scripts/vendor/FHCAzGgU2TWDQ3k_3-k3mzJ8HGzXfNoo8EhqBDT_XFc.BeRkMNeR.mjs',
    'career-nova-export/scripts/vendor/ZPozsjziW160kd1sSUerMsDZrpEY6KxMxxb2qADntD0.BxbnnuTl.mjs'
]

for fpath in files:
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        for old_val, new_val in testimonials_replacements:
            content = content.replace(old_val, new_val)
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated testimonials in {fpath}")

print("Testimonials updated with Indian student templates!")
