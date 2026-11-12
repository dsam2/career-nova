# Document 01: Product Requirements Document (PRD)

> **Project Name**: Career Nova — Business Consulting & Advisory Agency  
> **Source Reference**: [https://careernova.framer.media/](https://careernova.framer.media/)  
> **Target Tech Stack**: Next.js (React), Tailwind CSS, Framer Motion, Lucide React  
> **Status**: Completed Specification  

---

## 1. Executive Summary

Career Nova is a premier business consulting and advisory agency web platform originally designed in Framer. The website delivers high-authority strategic positioning for corporate enterprises, mid-market leaders, and scaling founders. It articulates consulting expertise across corporate strategy, operations, financial modeling, leadership advisory, and digital transformation.

The objective of this project is to recreate the complete website with 100% visual, architectural, and textual fidelity using **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**, compiling into blazing-fast Static Site Generation (SSG) with zero layout shifts and buttery-smooth spring physics.

---

## 2. Product Identity & Core Proposition

| Attribute | Specification |
| :--- | :--- |
| **App / Brand Name** | **Career Nova** (Business Consulting Agency) |
| **Tagline** | *Clear Thinking, Confident Action.* |
| **Sub-headline** | *From strategy to execution, we help ambitious companies see opportunities, make smart decisions & create meaningful progress.* |
| **Primary Value Pillars** | **Strategy**, **Leadership**, **Direction**, **Progress** |
| **Key Positioning Differentiators** | 1. **Clear Direction**: Cut through corporate fog and uncertainty to pinpoint what matters most.<br>2. **Practical Insight**: Real-world commercial perspective and execution instead of theoretical slide decks.<br>3. **Lasting Impact**: Sustainable structural performance engineered for multi-year resilience. |
| **Proof Points & Trust Signals** | • **210+** businesses advised<br>• **98%** client satisfaction rating<br>• **15+** years of executive consulting experience<br>• **$120M+** capital & operational spend optimized |

---

## 3. Target User Personas

### Persona A: Chief Executive Officer & Board Member (Enterprise)
* **Goal**: Needs institutional-grade advisors for digital transformation, organizational restructuring, or market expansion.
* **Pain Points**: Consulting firms that produce thick reports that sit on shelves without tangible bottom-line outcomes.
* **Journey**: Lands on Homepage or Case Studies, reviews verifiable metric improvements (e.g. Northbridge +28% profitability), checks Leadership profiles, and requests an executive consultation.

### Persona B: Founder / Scale-Up Operator (Growth Stage)
* **Goal**: Looking for seasoned advisory support to break past revenue plateaus, streamline operations, and prepare for institutional fundraising.
* **Pain Points**: High risk of making incorrect strategic capital allocation bets.
* **Journey**: Explores Pricing page ($2,500 Essentials or $5,500 Growth), reviews services like "Strategic Advisory" and "Market Expansion", and submits the inquiry form.

---

## 4. Full Page & Content Inventory (All 24 Routes)

The recreated website consists of **24 distinct pages**, grouped into core marketing pages and dynamic CMS collections:

```
├── / (Homepage)
├── /about (About Career Nova, Core Values, Leadership Team, Culture)
├── /services (Services Directory & Overview)
│   ├── /services/strategic-advisory
│   ├── /services/digital-transformation
│   ├── /services/leadership-advisory
│   ├── /services/market-expansion
│   ├── /services/brand-experience
│   ├── /services/operational-excellence
│   └── /services/business-strategy
├── /case-studies (Case Studies Directory & Sector Filter)
│   ├── /case-studies/northbridge
│   ├── /case-studies/apex-industrial
│   ├── /case-studies/horizon-retail-co.
│   ├── /case-studies/everwell-network
│   └── /case-studies/vertex-digital
├── /pricing (Pricing Plans & Advisory Engagements)
├── /blogs (Insights, Articles & Thought Leadership)
│   ├── /blogs/making-better-decisions-with-business-data
│   ├── /blogs/why-every-business-needs-strategic-planning
│   ├── /blogs/how-strong-leadership-creates-lasting-business-success
│   ├── /blogs/five-strategies-for-sustainable-business-growth
│   └── /blogs/improving-operational-efficiency-without-costs-increase
├── /contact (Consultation Booking & Office Reachout)
└── /404 (Custom Not Found Page)
```

---

## 5. Feature Requirements by Category

### 5.1 Must-Have (v1 Launch Scope)
1. **Pixel-Perfect Visual Reproduction**: Match typography, dark obsidian backdrops, electric blue accents, border glow subtleties, card elevations, and padding scales of `https://careernova.framer.media/`.
2. **Global Navigation Header**:
   - Sticky with background blur (`backdrop-blur-md bg-[#0c0e12]/80`).
   - Desktop nav links: `Services`, `Case Studies`, `Pricing`, `About`, `Blog`.
   - Right-side CTA: `Get in touch` button leading to `/contact`.
   - Responsive mobile sheet drawer menu with smooth open/close spring transitions.
2. **Hero Section with Dynamic Typography & Motion**:
   - Hero badge, high-contrast headline, explanatory body copy, dual action triggers ("Book Consultation" and "Learn More").
   - Floating client count badge ("Trusted by 210+ businesses").
3. **Infinite Marquee & Ticker**:
   - Infinite horizontal logo ticker of enterprise partners.
   - Industry badges marquee: *Finance*, *Healthcare*, *Real Estate*, *Technology*, *Pro Services*, *Retail Business*.
4. **Interactive Service Showcases**:
   - Grid of 7 core consulting services with dynamic hover cards, category icons, concise briefs, and direct deep-links to dedicated detail pages.
5. **Impact Metrics & Case Study Spotlights**:
   - High-impact data callouts (`+28%`, `+42%`, `+36%`, `+37%`, `+48%`).
   - Rich case study preview cards featuring category badges, publication dates, executive quotes, and detail routes.
6. **Detailed Case Study Pages**:
   - Structured three-part narrative: *The Challenge*, *The Approach*, and *The Outcome*.
   - Stat metric grid displaying key percentage gains.
7. **Transparent 3-Tier Pricing Model**:
   - **Essentials** ($2,500/mo): Targeted strategic guidance and review.
   - **Growth** ($5,500/mo): Comprehensive advisory, quarterly planning, competitor analysis.
   - **Partnership** (Custom): Full-scale embedded executive advisory.
8. **Interactive FAQ Accordions**:
   - Dynamic spring-animated accordion on Homepage, About, and Pricing pages.
9. **Executive Team Section (About Page)**:
   - Leadership profiles: Jordan Bothroyd (Managing Director), Lucien Moreau (Head of Financial Strategy), Elizabeth Chou (Performance Analyst), Joshua Hale (Client Success Lead), Elena Voss (Head of Operations), Helena Donko (Head of Sales).
10. **Lead Generation & Contact Engine**:
    - Form fields: Name, Email, Company, Phone, Message.
    - Responsive contact cards: Direct Phone Line, Email Dispatch, Support Hours (24/7).
11. **Comprehensive Global Footer**:
    - Career Nova mission statement, secondary links, all services listed, pages index, social channels, and copyright notice.

### 5.2 Out of Scope (Explicitly Excluded from v1)
- User login / client portal / authenticated dashboard (Career Nova is an agency marketing and lead-generation platform).
- Direct credit card payment checkout (Enterprise consulting uses signed engagement contracts and invoice wire transfers).
- Third-party live chat widget (Replaced by direct contact dispatch and calendar booking).

---

## 6. Success Metrics & Performance Targets

| Metric | Target | Verification Method |
| :--- | :--- | :--- |
| **Performance (Lighthouse)** | **≥ 98/100** | Chrome DevTools Lighthouse audit on SSG bundle |
| **Cumulative Layout Shift (CLS)** | **0.000** | Next.js image dimensions + font-display swap |
| **First Contentful Paint (FCP)** | **< 0.8s** | Edge CDN delivery (Vercel) |
| **Time to Interactive (TTI)** | **< 1.2s** | Zero bloat hydration with targeted client components |
| **SEO Score** | **100/100** | Complete OpenGraph tags, semantic tags, and sitemap.xml |
| **Accessibility (a11y)** | **≥ 96/100** | WCAG 2.2 AA compliant contrast and ARIA labels |
