import os
import re

cases_data = [
    {
        "old_title": "Helping Northbridge Improve Profitability Through Strategic Planning",
        "old_tag": "Strategy",
        "old_badge": "+28% Revenue Growth",
        "new_title": "How Aarav Got Into B.Tech Computer Science At Top Engineering Institute",
        "new_category": "Engineering",
        "new_service": "Admissions Counselling",
        "new_badge": "Admitted: B.Tech Computer Science",
        "old_file": "case-studies_northbridge.html",
        "new_slug": "case-studies_how-aarav-got-into-btech-cse-at-top-engineering-college.html",
        "student": "Aarav Sharma",
        "course": "B.Tech Computer Science & Engineering",
        "college": "Premier Engineering Institute, Pune / Maharashtra",
        "challenge": "High cutoff competition and navigating complex centralized seat allocation rounds (JoSAA & state CAP rounds).",
        "what_we_did": "Conducted in-depth percentile evaluation, simulated choice-filling algorithms, and prioritized branch vs institute combinations.",
        "outcome": "Secured first-round seat allotment into his top-priority Computer Science program with full fee clarity."
    },
    {
        "old_title": "How We Helped A Business Firm Scale Operations Across Three Regions",
        "old_tag": "Operations",
        "old_badge": "+45% Efficiency Gain",
        "new_title": "How Ananya Secured Admission Into Top Tier MBA Programme",
        "new_category": "Management",
        "new_service": "Interview & GD Support",
        "new_badge": "Admitted: MBA / PGP Programme",
        "old_file": "case-studies_apex-industrial.html",
        "new_slug": "case-studies_how-ananya-secured-admission-into-top-tier-mba-programme.html",
        "student": "Ananya Iyer",
        "course": "MBA / Post Graduate Programme in Management",
        "college": "Top Tier Business School, Bengaluru / Delhi NCR",
        "challenge": "Scored in the 98th percentile in management entrance exams but lacked structured preparation for GDs, WAT, and executive personal interviews.",
        "what_we_did": "Delivered 1-on-1 mock interviews, case analysis drills, statement of purpose refinement, and current business affairs coaching.",
        "outcome": "Cleared the final merit list and received admission letters from three premier Indian management institutions."
    },
    {
        "old_title": "Driving Sustainable Growth With Data-Led Direct & Institutional Guidance And Planning",
        "old_tag": "Market Expansion",
        "old_badge": "3.2x Valuation Uplift",
        "new_title": "How Rohit Navigated Branch Selection In Top Private Universities",
        "new_category": "Technology",
        "new_service": "Course & College Selection",
        "new_badge": "Admitted: Dual Degree Programme",
        "old_file": "case-studies_horizon-retail-co_.html",
        "new_slug": "case-studies_how-rohit-navigated-branch-selection-in-top-universities.html",
        "student": "Rohit Verma",
        "course": "B.Tech + M.Tech Dual Degree in Data Science",
        "college": "Premier Autonomous University, Rajasthan / Karnataka",
        "challenge": "Evaluating overlapping admission dates, varying fee structures, and deciding between branch specialization vs university reputation.",
        "what_we_did": "Mapped verified placement statistics, faculty research output, NIRF data, and alumni career paths across 6 shortlisted institutions.",
        "outcome": "Confidently enrolled into an industry-aligned dual degree program with maximum career placement ROI."
    },
    {
        "old_title": "Transforming Everwell Through Scholarships & Financial Aid And Leadership Alignment",
        "old_tag": "Leadership",
        "old_badge": "85% Retention Rate",
        "new_title": "How Sneha Secured A 100% Merit Scholarship For B.Com (Hons)",
        "new_category": "Commerce",
        "new_service": "Scholarship Guidance",
        "new_badge": "Scholarship Awarded: 100% Merit Waiver",
        "old_file": "case-studies_everwell-network.html",
        "new_slug": "case-studies_how-sneha-secured-100-percent-merit-scholarship.html",
        "student": "Sneha Patel",
        "course": "B.Com (Honours) / Economics",
        "college": "Premier Central University College, Delhi NCR",
        "challenge": "Securing a top undergraduate seat while minimizing educational financial strain for her family.",
        "what_we_did": "Identified institutional merit-cum-means scholarship criteria, prepared supporting documentation, and reviewed application essays.",
        "outcome": "Awarded a 100% tuition fee waiver along with admission into one of India's most prestigious commerce colleges."
    },
    {
        "old_title": "Accelerating Expansion With Executive Strategy And Market Positioning",
        "old_tag": "Transformation",
        "old_badge": "+60% Market Reach",
        "new_title": "How Priya Turned Her Creative Portfolio Into A Top Design Admission",
        "new_category": "Design",
        "new_service": "Portfolio & SOP Guidance",
        "new_badge": "Admitted: B.Des Industrial Design",
        "old_file": "case-studies_vertex-digital.html",
        "new_slug": "case-studies_how-priya-turned-creative-portfolio-into-top-design-admission.html",
        "student": "Priya Menon",
        "course": "Bachelor of Design (B.Des)",
        "college": "National Institute of Design / Premier Design College, Ahmedabad",
        "challenge": "Transitioning from high school into creative entrance exams (DAT/UCEED) without prior design portfolio experience.",
        "what_we_did": "Mentored her through 5 end-to-end design case studies, structured her visual thinking documentation, and coached studio simulation tests.",
        "outcome": "Ranked in the top national merit bracket and secured direct admission into her first-choice design stream."
    }
]

# Update case-studies.html
cs_index_path = 'career-nova-export/subpages/case-studies.html'
if os.path.exists(cs_index_path):
    with open(cs_index_path, 'r', encoding='utf-8') as f:
        cs_html = f.read()

    # Update Heading and Subtext
    cs_html = cs_html.replace("Proven Results That Speak for Themselves", "Student Success Stories")
    cs_html = cs_html.replace("Explore how we’ve helped organizations transform and thrive.", "Real journeys of students across India who secured admissions in top colleges.")
    cs_html = re.sub(r'<title>.*?</title>', '<title>Success Stories — CareerNova</title>', cs_html)

    for case in cases_data:
        cs_html = cs_html.replace(case["old_title"], case["new_title"])
        cs_html = cs_html.replace(case["old_badge"], case["new_badge"])
        cs_html = cs_html.replace(case["old_tag"], case["new_category"])
        cs_html = cs_html.replace(case["old_file"], case["new_slug"])

    with open(cs_index_path, 'w', encoding='utf-8') as f:
        f.write(cs_html)
    print("Updated case-studies.html successfully!")

# Update index.html case studies preview section
home_path = 'career-nova-export/index.html'
if os.path.exists(home_path):
    with open(home_path, 'r', encoding='utf-8') as f:
        home_html = f.read()

    for case in cases_data:
        home_html = home_html.replace(case["old_title"], case["new_title"])
        home_html = home_html.replace(case["old_badge"], case["new_badge"])
        home_html = home_html.replace(case["old_tag"], case["new_category"])
        home_html = home_html.replace(f'subpages/{case["old_file"]}', f'subpages/{case["new_slug"]}')

    with open(home_path, 'w', encoding='utf-8') as f:
        f.write(home_html)
    print("Updated index.html case studies preview!")

# Update each case study detail page and save both as old filename and new slug filename
subpages_dir = 'career-nova-export/subpages'
consent_disclaimer = '<p style="font-size:12px;opacity:0.6;font-style:italic;margin-top:20px;">* Written consent is required and obtained before publishing a student name, profile details, or admission result.</p>'

for case in cases_data:
    old_file_path = os.path.join(subpages_dir, case["old_file"])
    new_file_path = os.path.join(subpages_dir, case["new_slug"])

    if os.path.exists(old_file_path):
        with open(old_file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Replace Title and Meta
        content = re.sub(r'<title>.*?</title>', f'<title>{case["new_title"]} | CareerNova</title>', content)
        content = content.replace(case["old_title"], case["new_title"])
        content = content.replace(case["old_badge"], case["new_badge"])
        content = content.replace(case["old_tag"], case["new_category"])

        # Replace business body text with student success story body
        body_replacement = f"""
        <div class="student-case-study" style="line-height:1.7;font-size:16px;">
            <p><strong>Student:</strong> {case["student"]} | <strong>Target Program:</strong> {case["course"]}</p>
            <p><strong>Service Used:</strong> {case["new_service"]} | <strong>Outcome:</strong> <span style="color:#F0BE55;font-weight:600;">{case["new_badge"]}</span></p>
            <hr style="opacity:0.15;margin:24px 0;" />
            <h3 style="color:#FFFFFF;margin-bottom:12px;">Background & Profile</h3>
            <p>{case["student"]} approached CareerNova aiming to secure admission into premier institutions in India.</p>
            <h3 style="color:#FFFFFF;margin:24px 0 12px;">The Challenge</h3>
            <p>{case["challenge"]}</p>
            <h3 style="color:#FFFFFF;margin:24px 0 12px;">What CareerNova Did</h3>
            <p>{case["what_we_did"]}</p>
            <h3 style="color:#FFFFFF;margin:24px 0 12px;">The Outcome</h3>
            <p>{case["outcome"]}</p>
            {consent_disclaimer}
        </div>
        """

        # Replace old corporate narrative in detail page
        # In the template, the rich text body is contained in <div class="framer-... rich-text-wrapper
        # Let's replace the corporate paragraphs
        content = content.replace("Northbridge Financial Group sought to improve profitability while adapting to increasing competition and evolving client expectations. Existing strategies no longer supported sustainable growth.",
                                f"{case['student']} approached CareerNova aiming for admission into {case['course']}. {case['challenge']}")
        content = content.replace("Consilio developed a practical business roadmap focused on operational improvements and market alignment.",
                                f"CareerNova provided step-by-step guidance: {case['what_we_did']}")
        content = content.replace("Within 12 months, Northbridge achieved a 28% increase in profitability, reduced client acquisition costs, and strengthened its market position.",
                                f"{case['outcome']}")

        # General replacements across other templates
        content = content.replace("Apex Industrial", case["student"])
        content = content.replace("Horizon Retail Co.", case["student"])
        content = content.replace("Everwell Network", case["student"])
        content = content.replace("Vertex Digital", case["student"])

        # Write to both new slug and old slug (for backward compatibility)
        with open(new_file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        with open(old_file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"Created/Updated {new_file_path} and {old_file_path}")

print("All Success Stories / Case Studies CMS items successfully configured!")
