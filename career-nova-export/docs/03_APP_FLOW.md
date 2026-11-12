# Document 03: App Flow & User Journey Map

> **Project Name**: Career Nova — Business Consulting & Advisory Agency  
> **Source Reference**: [https://careernova.framer.media/](https://careernova.framer.media/)  
> **Status**: Completed Specification  

---

## 1. Complete Site Architecture & URL Hierarchy

The diagram below outlines the full navigation structure and URL path hierarchy across all 24 routes:

```
                                  [ / (Home) ]
                                        │
        ┌──────────────┬────────────────┼──────────────┬──────────────┬──────────────┐
        │              │                │              │              │              │
    [/about]     [/services]    [/case-studies]   [/pricing]      [/blogs]      [/contact]
                       │                │                             │
               ┌───────┴───────┐   ┌────┴────┐                  ┌─────┴─────┐
               │ 7 Service     │   │ 5 Case  │                  │ 5 Blog    │
               │ Sub-pages     │   │ Studies │                  │ Articles  │
               └───────────────┘   └─────────┘                  └───────────┘
```

### Complete Route Table

| Path | Page Name | Primary Objective & Content |
| :--- | :--- | :--- |
| `/` | **Home** | Brand introduction, core pillars, stats, top services, featured case studies, testimonials, FAQs, and main CTA. |
| `/about` | **About Career Nova** | Agency history, operating philosophy, core values, leadership team profiles, company statistics, and culture. |
| `/services` | **Services Hub** | Directory grid of all 7 strategic advisory and execution offerings with deep-dive link triggers. |
| `/services/strategic-advisory` | **Strategic Advisory** | Decision architecture, prioritization frameworks, and market opportunity analysis. |
| `/services/digital-transformation` | **Digital Transformation** | Technology modernization, enterprise workflow automation, and digital customer journeys. |
| `/services/leadership-advisory` | **Leadership Advisory** | Executive coaching, leadership alignment, succession planning, and organizational design. |
| `/services/market-expansion` | **Market Expansion** | Geographic rollout, new vertical entry, regulatory navigation, and partner channel development. |
| `/services/brand-experience` | **Brand & Experience** | Value proposition refinement, customer sentiment alignment, and premium market positioning. |
| `/services/operational-excellence` | **Operational Excellence** | Supply chain optimization, lean cost structures, process engineering, and margin protection. |
| `/services/business-strategy` | **Business Strategy** | Long-term strategic roadmaps, competitive moat building, and capital resource allocation. |
| `/case-studies` | **Case Studies Hub** | Filterable portfolio of client success stories with quantitative metric callouts. |
| `/case-studies/northbridge` | **Northbridge Financial** | Financial planning & profitability overhaul (+28% Profitability, +24% Operating Margin). |
| `/case-studies/apex-industrial` | **Apex Industrial** | Multi-regional operations scaling across three territories (+42% Regional Revenue). |
| `/case-studies/horizon-retail-co.` | **Horizon Retail Co.** | Data-led retail strategy and omnichannel inventory management (+36% Margin Expansion). |
| `/case-studies/everwell-network` | **Everwell Network** | Healthcare operations overhaul and clinic leadership alignment (+37% Efficiency Gain). |
| `/case-studies/vertex-digital` | **Vertex Digital** | SaaS enterprise expansion, executive strategy, and valuation boost (+48% Market Valuation). |
| `/pricing` | **Simple Pricing** | Three distinct engagement tiers: Essentials ($2,500/mo), Growth ($5,500/mo), and Custom Partnership. |
| `/blogs` | **News & Insights** | Knowledge hub featuring analysis, trend forecasts, and actionable advisory frameworks. |
| `/blogs/making-better-decisions-with-business-data` | **Data Decisions Article** | How modern leadership teams utilize business intelligence for competitive agility. |
| `/blogs/why-every-business-needs-strategic-planning` | **Strategic Planning Article** | Overcoming short-term bias and executing high-conviction 3-5 year roadmaps. |
| `/blogs/how-strong-leadership-creates-lasting-business-success` | **Leadership Article** | Cultivating executive alignment, decentralized accountability, and high-performance culture. |
| `/blogs/five-strategies-for-sustainable-business-growth` | **Growth Strategies Article** | Compounding organic expansion without burning balance-sheet cash reserves. |
| `/blogs/improving-operational-efficiency-without-costs-increase` | **Efficiency Article** | Streamlining enterprise operations without sacrificing employee morale or client delivery quality. |
| `/contact` | **Contact Career Nova** | High-conversion consultation request form, direct telephone dispatch, email, and FAQ link. |
| `/404` | **Page Not Found** | Custom styled error screen with direct return path to Home and Services. |

---

## 2. Navigation Architecture

### 2.1 Sticky Glassmorphism Header
* **Position**: Sticky at top (`top-0 z-50`), full width with inner container constrained to `max-w-7xl mx-auto px-6`.
* **Visual Styling**:
  - Default: Transparent or subtle glass background.
  - On Scroll (`scrollY > 20`): `backdrop-blur-md bg-[#0c0e12]/80 border-b border-white/10`.
* **Elements (Left to Right)**:
  1. **Brand Mark**: Text logo "Career Nova" in crisp Golos Text bold with an elegant sub-dot. Links to `/`.
  2. **Desktop Navigation Links**:
     - `Services` (`/services`)
     - `Case Studies` (`/case-studies`)
     - `Pricing` (`/pricing`)
     - `About` (`/about`)
     - `Blog` (`/blogs`)
     - *Active State*: White text with a subtle indicator; inactive is muted slate (`text-slate-400 hover:text-white`).
  3. **Right Action**:
     - `Get in touch` button styled with dark slate container, white text, rounded pill border (`border border-white/15 hover:border-white/40`). Links to `/contact`.
  4. **Mobile Hamburger Button**:
     - Visible only on screens `< 768px` (`md:hidden`).
     - Toggles an animated mobile slide-down or slide-in drawer.

### 2.2 Global Footer
* **Position**: Static bottom of all pages.
* **Sections**:
  1. **Brand & Mission Column**: Career Nova logo, tagline *"Helping businesses grow with clarity, confidence, and measurable results."*, data privacy badge *"Your data is handled with discretion"*.
  2. **Services Column**: Direct links to all 7 individual service detail pages.
  3. **Pages Column**: Links to Home, About, Services, Case Studies, Pricing, Contact, Blogs.
  4. **Socials Column**: External links to Facebook, LinkedIn, Instagram, Twitter (X).
  5. **Sub-Footer**: Copyright notice `© 2026 Career Nova. All rights reserved.` and credits.

---

## 3. Core User Journeys

### Journey 1: The Executive Consultation Booking (Primary Conversion Flow)
1. **Entry**: User lands on `/` via organic search, referral, or campaign.
2. **Above-the-Fold Engagement**:
   - Reads: *"Clear Thinking, Confident Action — From strategy to execution, we help ambitious companies see opportunities, make smart decisions & create meaningful progress."*
   - Clicks primary CTA: **"Book Consultation"**.
3. **Transition**: Smooth Next.js client transition to `/contact`.
4. **Form Interaction**:
   - User inputs: *Full Name*, *Work Email*, *Company Name*, *Phone Number*, and *Challenge / Message*.
   - Client validation verifies email syntax and non-empty inputs via Zod.
5. **Submission**:
   - Framer Motion spinner displays on button.
   - On success: Button transitions to a green checkmark pill: *"Thank you! Our advisory team will contact you within 24 hours."*

### Journey 2: The Proof & Case Study Discovery Flow
1. **Entry**: Prospect seeks validation of Career Nova's ROI and sector experience.
2. **Navigation**: Clicks **"Case Studies"** in header navigation (`/case-studies`).
3. **Browsing**: User reviews featured enterprise projects with bold quantitative metrics:
   - Northbridge: **+28%** Profitability
   - Apex Industrial: **+42%** Regional Scaling
   - Horizon Retail Co.: **+36%** Margin Expansion
4. **Deep Dive**: Clicks on **Northbridge** (`/case-studies/northbridge`).
5. **Consumption**:
   - Inspects *The Challenge* (rising overhead and disjointed regional offices).
   - Inspects *The Approach* (centralized financial governance and operational re-alignment).
   - Inspects *The Outcome* (+28% net margin, -22% operating variance).
6. **Closing CTA**: Reads bottom banner *"Let's Build Better Business"* and clicks **"Get Started"** to reach `/contact`.

### Journey 3: The Service Evaluation Flow
1. **Navigation**: User visits `/services` and reviews the 7 capability cards.
2. **Selection**: Clicks **"Strategic Advisory"** (`/services/strategic-advisory`).
3. **Structured Reading**:
   - Section 1: Overview & Market Context
   - Section 2: What We Do (bulleted core actions)
   - Section 3: Our Approach (multi-stage delivery framework)
   - Section 4: What You Can Expect (deliverables & tangible milestones)
4. **Cross-Service Navigation**: Bottom carousel highlights sibling services (*Digital Transformation*, *Leadership Advisory*).

---

## 4. Edge Cases & States

| State / Condition | Expected Behavior |
| :--- | :--- |
| **Invalid Route (404)** | Displays custom `/not-found.tsx` matching dark theme with headline "Page Not Found", descriptive copy, and dual buttons: "Back to Home" and "Explore Services". |
| **Form Network Failure** | Displays inline error banner inside the contact card: *"Unable to send message. Please reach out directly to contact@careernova.com."* Inputs remain preserved so the user does not lose typed content. |
| **Mobile Screen Rotation** | Tailwind fluid layout (`max-w-screen`, `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) adjusts dynamically without content clipping or horizontal overflow. |
| **No JavaScript / Bot Crawling** | Next.js SSG outputs 100% semantic static HTML, allowing search engine crawlers (Googlebot, Bing) to index all text, headers, and metadata effortlessly without JS execution. |
