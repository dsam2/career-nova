import os
import re

# Update How We Support You in how-it-works.html and pricing.html
files = ['career-nova-export/subpages/how-it-works.html', 'career-nova-export/subpages/pricing.html']

card1_bullets = [
    "Profile evaluation",
    "Career and goal discussion",
    "Course and college shortlist in India",
    "Test and timeline planning",
    "Scholarship and budget guidance",
    "Written action plan"
]

card2_bullets = [
    "University applications",
    "SOP and LOR guidance",
    "Resume and CV preparation",
    "Document checklist and review",
    "Application tracking",
    "Offer comparison"
]

card3_bullets = [
    "Admission & documentation",
    "Interview preparation",
    "Education loan guidance",
    "Campus onboarding & transition guidance",
    "Resume and LinkedIn for job search",
    "Interview preparation for jobs"
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Heading and Subtext
    content = content.replace("Scale your business with expert guidance", "How We Support You")
    content = content.replace("Flexible pricing options designed to match your needs", "Every student's journey is different. Here is how we help at each stage.")
    content = content.replace("Every student's journey is different. Here is how we help at each stage in India.", "Every student's journey is different. Here is how we help at each stage.")

    # 2. Card 1 Bullets replacement
    # Replace old corporate/template items
    content = content.replace("Strategic advisory sessions", "Course and college shortlist in India")
    content = content.replace("Business performance review", "Test and timeline planning")
    content = content.replace("Priority-setting framework", "Scholarship and budget guidance")
    content = content.replace("Progress review and recommendations", "Written action plan")
    content = content.replace("Course and country shortlist", "Course and college shortlist in India")

    # 3. Card 2 Bullets replacement
    content = content.replace("Everything in Counselling & Planning", "University applications")
    content = content.replace("Leadership strategy sessions", "Resume and CV preparation")

    # 4. Card 3 Bullets replacement
    content = content.replace("Everything in Applications", "Admission & documentation")
    content = content.replace("Comprehensive strategic planning", "Education loan guidance")
    content = content.replace("Document verification checklist", "Interview preparation")
    content = content.replace("Counselling & quota documentation", "Campus onboarding & transition guidance")
    content = content.replace("CAP rounds & seat allotment guidance", "Resume and LinkedIn for job search")
    content = content.replace("Cross-functional advisory support", "Interview preparation for jobs")
    content = content.replace("Quarterly strategy workshops", "Guidance on career paths")
    content = content.replace("Visa documentation", "Admission & documentation")
    content = content.replace("Pre-departure briefing", "Campus onboarding & transition guidance")
    content = content.replace("Talk to sales", "Book Counselling")

    # 5. Closing line
    content = content.replace("Need a custom enterprise solution? Talk to our advisory team.", "Not sure which stage you are at? Book a session and we will recommend the right support.")
    content = content.replace("Ready to start your journey in India? Contact our counsellors today.", "Not sure which stage you are at? Book a session and we will recommend the right support.")

    # 6. Ensure Title is "How We Support You — CareerNova"
    content = re.sub(r'<title>.*?</title>', '<title>How We Support You — CareerNova</title>', content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Updated {file_path}")

# Also update the mjs bundle for pricing/how-it-works
mjs_path = 'career-nova-export/scripts/vendor/QdNhm72-NhCOrUoS-DOEExKNyRocEFRynvoAF3tBV2s.C0EKnwVi.mjs'
if os.path.exists(mjs_path):
    with open(mjs_path, 'r', encoding='utf-8') as f:
        mjs_content = f.read()

    mjs_content = mjs_content.replace("Scale your business with expert guidance", "How We Support You")
    mjs_content = mjs_content.replace("Strategic advisory sessions", "Course and college shortlist in India")
    mjs_content = mjs_content.replace("Business performance review", "Test and timeline planning")
    mjs_content = mjs_content.replace("Priority-setting framework", "Scholarship and budget guidance")
    mjs_content = mjs_content.replace("Progress review and recommendations", "Written action plan")
    mjs_content = mjs_content.replace("Leadership strategy sessions", "Resume and CV preparation")
    mjs_content = mjs_content.replace("Comprehensive strategic planning", "Education loan guidance")
    mjs_content = mjs_content.replace("Document verification checklist", "Interview preparation")
    mjs_content = mjs_content.replace("Counselling & quota documentation", "Campus onboarding & transition guidance")
    mjs_content = mjs_content.replace("CAP rounds & seat allotment guidance", "Resume and LinkedIn for job search")
    mjs_content = mjs_content.replace("Cross-functional advisory support", "Interview preparation for jobs")
    mjs_content = mjs_content.replace("Talk to sales", "Book Counselling")
    mjs_content = mjs_content.replace("Visa documentation", "Admission & documentation")
    mjs_content = mjs_content.replace("Pre-departure briefing", "Campus onboarding & transition guidance")

    with open(mjs_path, 'w', encoding='utf-8') as f:
        f.write(mjs_content)
    print("Updated pricing mjs bundle!")
