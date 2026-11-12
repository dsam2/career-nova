import os
import glob

replacements = [
    # Subtext replacement
    ("Our approach is built on transparency, accountability, and practical thinking—helping businesses make smarter decisions.",
     "Our approach is built on honesty, transparency and personal attention to every student."),
    ("Our approach is built on transparency, accountability, and practical thinking—helping students across India make smarter admissions decisions.",
     "Our approach is built on honesty, transparency and personal attention to every student."),
    
    # Card 1
    ("Student-Centric Approach", "Student-First Advice"),
    ("Every recommendation starts with your academic strengths, budget, and career goals, ensuring guidance is tailored to your future.",
     "Every recommendation is based on what fits your profile and goals."),
    
    # Card 2
    ("Career-Focused Growth", "Honest Guidance"),
    ("Our focus extends beyond admission letters, helping you choose programs with high placement records and long-term career growth.",
     "We tell you what is realistic. No guaranteed admissions, no fake promises."),
     
    # Card 3
    ("Dedicated Mentorship", "Transparency"),
    ("We work alongside students and parents at every step, simplifying counselling procedures and delivering honest guidance.",
     "Clear information about the process, timelines and costs at every stage."),
     
    # Card 4
    ("Data-Driven Guidance", "Support Beyond Admission"),
    ("We combine past cutoff trends, seat matrix analysis, and institutional rankings to help you make confident decisions.",
     "Help with college onboarding, career readiness and professional planning so you are prepared after you get in.")
]

files = [
    'career-nova-export/index.html',
    'career-nova-export/subpages/about.html',
    'career-nova-export/scripts/vendor/FHCAzGgU2TWDQ3k_3-k3mzJ8HGzXfNoo8EhqBDT_XFc.BeRkMNeR.mjs',
    'career-nova-export/scripts/vendor/ZPozsjziW160kd1sSUerMsDZrpEY6KxMxxb2qADntD0.BxbnnuTl.mjs',
    'career-nova-export/scripts/vendor/Zu_uDnDlu.Bm7HjSLm.mjs'
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    for old_val, new_val in replacements:
        content = content.replace(old_val, new_val)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Updated values in: {file_path}")
