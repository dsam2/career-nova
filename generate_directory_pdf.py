import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
from reportlab.pdfgen import canvas

BASE_URL = "https://career-nova-theta.vercel.app"

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748B"))
        
        # Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(36, 756, "CAREERNOVA EDUCATION SERVICES  |  Live Website Directory")
            self.drawRightString(576, 756, BASE_URL)
            self.setStrokeColor(colors.HexColor("#CBD5E1"))
            self.setLineWidth(0.5)
            self.line(36, 750, 576, 750)
            
        # Footer on all pages
        self.setStrokeColor(colors.HexColor("#E2E8F0"))
        self.setLineWidth(0.5)
        self.line(36, 42, 576, 42)
        
        self.drawString(36, 30, f"CareerNova Premier Admissions & Career Counselling  •  Domain: {BASE_URL}")
        self.drawRightString(576, 30, f"Page {self._pageNumber} of {page_count}")
        self.restoreState()

def build_pdf(filename="CareerNova_Website_Directory.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=46,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()
    
    # Custom Brand Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#081838')
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor('#D9A53A')
    )
    
    meta_style = ParagraphStyle(
        'DocMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor('#475569')
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor('#081838'),
        spaceBefore=10,
        spaceAfter=4
    )

    section_desc = ParagraphStyle(
        'SectionDesc',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor('#4A5878'),
        spaceAfter=6
    )

    th_style = ParagraphStyle(
        'TH',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.white
    )

    cell_title = ParagraphStyle(
        'CellTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#0F172A')
    )

    cell_url = ParagraphStyle(
        'CellUrl',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=10,
        textColor=colors.HexColor('#0C2250')
    )

    cell_desc = ParagraphStyle(
        'CellDesc',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=colors.HexColor('#334155')
    )

    def make_url_cell(url_path):
        full_url = f"{BASE_URL}{url_path}" if url_path != '/' else BASE_URL
        return Paragraph(f'<a href="{full_url}" color="#0C2250"><u><b>{full_url}</b></u></a>', cell_url)

    story = []

    # Title Block
    story.append(Paragraph("CAREERNOVA EDUCATION SERVICES", title_style))
    story.append(Paragraph("Official Website Directory & Comprehensive Live URL Index", subtitle_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        f"<b>Production Domain:</b> <a href='{BASE_URL}' color='#081838'><u>{BASE_URL}</u></a> &nbsp;|&nbsp; "
        "<b>Specialization:</b> Indian College Admissions, Entrance Exams, SOP Guidance & Student Counselling",
        meta_style
    ))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor("#081838"), spaceBefore=6, spaceAfter=8))

    # --- SECTION 1: CORE HUBS ---
    story.append(Paragraph("1. Primary Navigation & Core Section Hubs (8 Pages)", section_heading))
    story.append(Paragraph("Core public landing pages accessible directly from the primary navigation bar, hero CTAs, and site header.", section_desc))

    hubs_data = [
        ["Page Name", "Live Clickable URL (Domain: career-nova-theta.vercel.app)", "Page Scope & Key Content"],
        [
            Paragraph("Home Page", cell_title),
            make_url_cell("/"),
            Paragraph("Hero section, 7 core admissions service tracks carousel, step-by-step counselling roadmap, student testimonials, and instant WhatsApp consultation CTA.", cell_desc)
        ],
        [
            Paragraph("Admissions Services Hub", cell_title),
            make_url_cell("/services"),
            Paragraph("Comprehensive index of all 15 undergraduate & postgraduate Indian college counselling programs, entrance exam coaching, and quota verification.", cell_desc)
        ],
        [
            Paragraph("About CareerNova", cell_title),
            make_url_cell("/about"),
            Paragraph("Counselor credentials, 10+ years track record, 5,000+ mentored students across IITs, NITs, BITS, and IIMs, core ethics, and advisory philosophy.", cell_desc)
        ],
        [
            Paragraph("Contact & Consultation", cell_title),
            make_url_cell("/contact"),
            Paragraph("One-on-one diagnostic booking form, direct counselor WhatsApp helpline, New Delhi head office coordinates, and callback scheduling.", cell_desc)
        ],
        [
            Paragraph("How It Works", cell_title),
            make_url_cell("/how-it-works"),
            Paragraph("Step-by-step admissions journey: 1) Profile evaluation, 2) College shortlisting, 3) Entrance prep & SOP drafting, 4) Centralized counselling seat allotment.", cell_desc)
        ],
        [
            Paragraph("Pricing & Packages", cell_title),
            make_url_cell("/pricing"),
            Paragraph("Transparent counselling plans: Basic Diagnostic Session, Complete Admissions Mentorship, and End-to-End Premium Retainer with round-by-round support.", cell_desc)
        ],
        [
            Paragraph("Student Case Studies Hub", cell_title),
            make_url_cell("/case-studies"),
            Paragraph("Gallery of verified student admission triumphs covering Engineering (JEE), Medical (NEET), Management (CAT), Design (UCEED), and full scholarships.", cell_desc)
        ],
        [
            Paragraph("Admissions Blog & Guides Hub", cell_title),
            make_url_cell("/blogs"),
            Paragraph("Resource library covering SOP templates, entrance exam score analyses, counselling round choices, category quota documents, and scholarship deadlines.", cell_desc)
        ]
    ]

    t_hubs = Table(hubs_data, colWidths=[110, 210, 220])
    t_hubs.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#081838')),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#F8FAFC')])
    ]))
    story.append(t_hubs)
    story.append(Spacer(1, 10))

    # --- SECTION 2: SPECIALIZED SERVICES ---
    story.append(Paragraph("2. Specialized Admissions Counselling & Guidance Services (15 Pages)", section_heading))
    story.append(Paragraph("Dedicated deep-dive program pages detailing individual college guidance streams, application assistance, and financial planning.", section_desc))

    services_data = [
        ["Service Program", "Live Clickable URL (Domain: career-nova-theta.vercel.app)", "Specialization & Target Candidates"],
        [
            Paragraph("Admissions Counselling", cell_title),
            make_url_cell("/services/admissions-counselling"),
            Paragraph("Holistic guidance across engineering, medical, management, and liberal arts admissions for Class 11, 12, and graduate applicants.", cell_desc)
        ],
        [
            Paragraph("Admission Counselling Support", cell_title),
            make_url_cell("/services/admission-counselling-support"),
            Paragraph("Direct seat allocation strategy, multi-round choice filling, and float/freeze decision advisory for JoSAA, CSAB, NEET, and state portals.", cell_desc)
        ],
        [
            Paragraph("College & Course Selection", cell_title),
            make_url_cell("/services/college-course-selection"),
            Paragraph("Data-driven matching based on student aptitude, cutoff trends, NIRF rankings, campus placement histories, and career goals.", cell_desc)
        ],
        [
            Paragraph("Course & University Selection", cell_title),
            make_url_cell("/services/course-university-selection"),
            Paragraph("Alternative specialization track matching emerging disciplines (AI/ML, Data Science, Fintech, Product Design) across accredited institutes.", cell_desc)
        ],
        [
            Paragraph("Entrance Exam Guidance", cell_title),
            make_url_cell("/services/entrance-exam-guidance"),
            Paragraph("Strategic roadmap and timeline preparation for national exams: JEE Main/Advanced, NEET-UG, CUET-UG, CAT, BITSAT, and IPMAT.", cell_desc)
        ],
        [
            Paragraph("Test Preparation Guidance", cell_title),
            make_url_cell("/services/test-preparation-guidance"),
            Paragraph("Mock exam analysis, percentile improvement plans, test-taking time management strategies, and weak-area diagnostic drills.", cell_desc)
        ],
        [
            Paragraph("Application & Documentation", cell_title),
            make_url_cell("/services/application-documentation"),
            Paragraph("100% error-free centralized admissions portal submissions, quota eligibility audits, and document verification checklists.", cell_desc)
        ],
        [
            Paragraph("Application, SOP & LOR Support", cell_title),
            make_url_cell("/services/application-sop-lor-support"),
            Paragraph("Statement of Purpose (SOP) drafting, academic Letters of Recommendation (LORs), activity resume building, and faculty review.", cell_desc)
        ],
        [
            Paragraph("Counselling Documentation", cell_title),
            make_url_cell("/services/counselling-documentation"),
            Paragraph("Centralized dossier compilation, transfer certificates, gap affidavits, character references, and identity authentication support.", cell_desc)
        ],
        [
            Paragraph("Quota & Verification Support", cell_title),
            make_url_cell("/services/visa-documentation"),
            Paragraph("Category proofs, state domicile certificates, OBC-NCL / EWS / SC / ST / PwD reservation compliance, and defense quota verification.", cell_desc)
        ],
        [
            Paragraph("Scholarships & Financial Aid", cell_title),
            make_url_cell("/services/scholarships-financial-aid"),
            Paragraph("National scholarship portal applications, state merit awards, corporate fee subsidies, and university endowment grants.", cell_desc)
        ],
        [
            Paragraph("Scholarships & Education Loans", cell_title),
            make_url_cell("/services/scholarships-education-loans"),
            Paragraph("Government-subsidized education loan advisory (Vidya Lakshmi portal), collateral-free bank options, and interest subsidy planning.", cell_desc)
        ],
        [
            Paragraph("Career Assessment & Profiling", cell_title),
            make_url_cell("/services/career-assessment-profiling"),
            Paragraph("Psychometric aptitude evaluation, Holland RIASEC personality profiling, career interest mapping, and personalized skill discovery.", cell_desc)
        ],
        [
            Paragraph("Placement Readiness Support", cell_title),
            make_url_cell("/services/career-job-support"),
            Paragraph("Undergraduate internship strategy, technical portfolio development, corporate interview prep, and industry networking guidance.", cell_desc)
        ],
        [
            Paragraph("Direct Institutional Guidance", cell_title),
            make_url_cell("/services/direct-institutional-guidance"),
            Paragraph("Direct private university admissions guidance, institutional merit quota assessments, and management seat eligibility verification.", cell_desc)
        ]
    ]

    t_services = Table(services_data, colWidths=[110, 210, 220])
    t_services.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#081838')),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3.5),
        ('TOPPADDING', (0, 0), (-1, -1), 3.5),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#F8FAFC')])
    ]))
    story.append(t_services)
    story.append(Spacer(1, 10))

    # --- SECTION 3: CASE STUDIES ---
    story.append(Paragraph("3. Student Admissions Case Studies & Success Stories (5 Pages)", section_heading))
    story.append(Paragraph("Documented student transformation journeys showcasing how customized strategic planning unlocked top-choice admissions.", section_desc))

    cases_data = [
        ["Student Case Study", "Live Clickable URL (Domain: career-nova-theta.vercel.app)", "Admissions Outcome & Strategy"],
        [
            Paragraph("Aarav Sharma — B.Tech CSE", cell_title),
            make_url_cell("/case-studies/how-aarav-got-into-btech-cse-at-top-engineering-college"),
            Paragraph("Navigated JoSAA and CSAB counselling rounds to secure B.Tech Computer Science & Engineering at a premier engineering institute.", cell_desc)
        ],
        [
            Paragraph("Ananya Sen — Top Tier MBA", cell_title),
            make_url_cell("/case-studies/how-ananya-secured-admission-into-top-tier-mba-programme"),
            Paragraph("Converted CAT 98+ percentile into direct admission at a top business school through rigorous WAT-PI coaching and profile polishing.", cell_desc)
        ],
        [
            Paragraph("Priya Mehta — Premier Design School", cell_title),
            make_url_cell("/case-studies/how-priya-turned-creative-portfolio-into-top-design-admission"),
            Paragraph("Curated a distinction-winning creative portfolio and cleared studio test interview rounds for top-tier Bachelor of Design (B.Des) program.", cell_desc)
        ],
        [
            Paragraph("Rohit Nair — Multi-Offer Branch Selection", cell_title),
            make_url_cell("/case-studies/how-rohit-navigated-branch-selection-in-top-universities"),
            Paragraph("Balanced competitive offers across electronics vs. computing branches, aligning long-term placement data with personal strengths.", cell_desc)
        ],
        [
            Paragraph("Sneha Kulkarni — 100% Merit Scholarship", cell_title),
            make_url_cell("/case-studies/how-sneha-secured-100-percent-merit-scholarship"),
            Paragraph("Mapped corporate endowment & university merit grants, winning a 100% tuition waiver plus residential hostel allowance.", cell_desc)
        ]
    ]

    t_cases = Table(cases_data, colWidths=[110, 210, 220])
    t_cases.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#081838')),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#F8FAFC')])
    ]))
    story.append(t_cases)
    story.append(Spacer(1, 10))

    # --- SECTION 4: BLOGS & GUIDES ---
    story.append(Paragraph("4. Admissions Blog, Entrance Exam & Student Guides (5 Pages)", section_heading))
    story.append(Paragraph("Expert-authored informational articles addressing critical student questions, application strategies, and deadline management.", section_desc))

    blogs_data = [
        ["Blog Article", "Live Clickable URL (Domain: career-nova-theta.vercel.app)", "Educational Insights & Practical Guidance"],
        [
            Paragraph("Winning Statement of Purpose (SOP)", cell_title),
            make_url_cell("/blogs/how-to-write-a-strong-sop"),
            Paragraph("Step-by-step framework for personal essays, academic narratives, extracurricular framing, and common pitfalls to avoid.", cell_desc)
        ],
        [
            Paragraph("National Entrance Exams Decoded", cell_title),
            make_url_cell("/blogs/ielts-toefl-or-pte"),
            Paragraph("Comparing JEE, NEET, CUET, and CAT: exam patterns, scoring methodologies, cutoff percentiles, and preparation schedules.", cell_desc)
        ],
        [
            Paragraph("Admissions Intakes & Counselling Rounds", cell_title),
            make_url_cell("/blogs/study-abroad-intakes-explained"),
            Paragraph("Detailed breakdown of round-by-round seat allocation, mock allotments, sliding options, and mop-up counselling rounds.", cell_desc)
        ],
        [
            Paragraph("Top Scholarships for Indian Students", cell_title),
            make_url_cell("/blogs/scholarships-for-indian-students"),
            Paragraph("Complete inventory of government grants, state merit scholarships, private foundation awards, and application procedures.", cell_desc)
        ],
        [
            Paragraph("Documentation & Quota Verification", cell_title),
            make_url_cell("/blogs/student-visa-basics"),
            Paragraph("Mandatory certificate checklist: category verification, non-creamy layer certificates, income proofs, and anti-ragging affidavits.", cell_desc)
        ]
    ]

    t_blogs = Table(blogs_data, colWidths=[110, 210, 220])
    t_blogs.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#081838')),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#F8FAFC')])
    ]))
    story.append(t_blogs)
    story.append(Spacer(1, 10))

    # --- SECTION 5: DOMAIN SUMMARY & ACCESS INFORMATION ---
    story.append(Paragraph("5. Domain Architecture & Technical Summary", section_heading))
    story.append(Paragraph("Summary of production hosting, SSL certification, and routing configurations across the CareerNova web platform.", section_desc))

    summary_data = [
        ["Parameter", "Live Configuration Details"],
        [Paragraph("Production Domain", cell_title), make_url_cell("/")],
        [Paragraph("Hosting & CDN", cell_title), Paragraph("Vercel Edge Global CDN with SSL/TLS (HTTPS Encrypted, Clean URLs Enabled)", cell_desc)],
        [Paragraph("Total Active Pages", cell_title), Paragraph("<b>33 Canonical Pages</b> (8 Core Hubs + 15 Specialized Services + 5 Case Studies + 5 Admissions Guides) + 17 Redirect Aliases", cell_desc)],
        [Paragraph("Mobile & Desktop Optimization", cell_title), Paragraph("Fully responsive layout, touch-optimized button rollover states, and GPU-accelerated micro-interactions.", cell_desc)],
        [Paragraph("Live PDF Download URL", cell_title), make_url_cell("/CareerNova_Website_Directory.pdf")]
    ]

    t_summary = Table(summary_data, colWidths=[130, 410])
    t_summary.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#081838')),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
        ('TOPPADDING', (0, 0), (-1, -1), 4),
        ('LEFTPADDING', (0, 0), (-1, -1), 5),
        ('RIGHTPADDING', (0, 0), (-1, -1), 5),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#CBD5E1')),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#F8FAFC')])
    ]))
    story.append(t_summary)

    # Build document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated {filename} with all clickable links pointing to {BASE_URL}")

if __name__ == '__main__':
    build_pdf("CareerNova_Website_Directory.pdf")
