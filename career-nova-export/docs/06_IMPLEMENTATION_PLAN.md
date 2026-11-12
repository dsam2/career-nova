# Document 06: Implementation Plan & Build Sequence

> **Project Name**: Career Nova — Business Consulting & Advisory Agency  
> **Source Reference**: [https://careernova.framer.media/](https://careernova.framer.media/)  
> **Stack**: Next.js (App Router), Tailwind CSS, Framer Motion, Lucide React  
> **Status**: Completed Specification  

---

## 1. Phased Build Sequence Overview

To ensure zero architectural rework and seamless execution, the project is structured into **9 distinct, sequential phases**. Each phase has strict entry prerequisites and explicit completion ("Done") criteria.

```
┌─────────────────────────────────────────────────────────────┐
│ Phase 1: Environment & Scaffolding                          │
└──────────────┬──────────────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────────────────────────┐
│ Phase 2: Design Tokens & Tailwind Configuration             │
└──────────────┬──────────────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────────────────────────┐
│ Phase 3: TypeScript CMS & Data Layer Fixtures               │
└──────────────┬──────────────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────────────────────────┐
│ Phase 4: Reusable UI & Motion Primitives                    │
└──────────────┬──────────────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────────────────────────┐
│ Phase 5: Main Hub & Static Marketing Pages                  │
└──────────────┬──────────────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────────────────────────┐
│ Phase 6: Dynamic Slugs & Pre-rendering (SSG)                │
└──────────────┬──────────────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────────────────────────┐
│ Phase 7: Motion Polish & Spring Physics Tuning              │
└──────────────┬──────────────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────────────────────────┐
│ Phase 8: Contact API & Form Validation                      │
└──────────────┬──────────────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────────────────────────┐
│ Phase 9: Auditing, Performance, SEO & Vercel Launch         │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Detailed Phase Breakdown

### Phase 1: Project Setup & Package Scaffolding
* **Objectives**: Initialize clean Next.js 14+ project with TypeScript, configure aliases, install production dependencies.
* **Tasks**:
  1. Initialize Next.js project with App Router: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir`.
  2. Install core packages:
     ```bash
     npm install framer-motion lucide-react clsx tailwind-merge zod
     ```
  3. Verify TypeScript configuration in `tsconfig.json` with `@/*` path mapping to `./src/*`.
  4. Set up standard folder structure (`src/components/`, `src/data/`, `src/types/`, `src/styles/`).
* **Done Criteria**: `npm run dev` boots cleanly with zero errors on `http://localhost:3000`.

---

### Phase 2: Design Tokens, Typography & Tailwind Configuration
* **Objectives**: Replicate the exact dark obsidian canvas, glassmorphic card borders, and typography of `https://careernova.framer.media/`.
* **Tasks**:
  1. Configure `tailwind.config.ts`:
     - Extend colors: `sterling.canvas (#0c0e12)`, `sterling.card (#12161f)`, `sterling.cobalt (#0d409b)`, `sterling.electric (#005eff)`.
     - Configure font families: Heading (`Golos Text`, `Mona Sans`), Body (`Inter`), Mono (`Fragment Mono`).
     - Define custom animation keyframes for infinite marquee loops.
  2. Configure `src/app/layout.tsx` with Google Fonts (`next/font/google`) for `Inter` and `Golos_Text`.
  3. Write `src/styles/globals.css` with dark theme defaults, selection colors, and custom scrollbar styles.
* **Done Criteria**: Base canvas background renders `#0c0e12` and typography loads correctly without FOUT.

---

### Phase 3: TypeScript Types & CMS Data Layer
* **Objectives**: Build complete, strongly typed data files in `src/data/` containing the scraped content from Career Nova.
* **Tasks**:
  1. Create `src/types/index.ts` declaring all interfaces (`ServiceItem`, `CaseStudyItem`, `BlogPostItem`, `TeamMemberItem`, `PricingTierItem`, `FAQItem`, `TestimonialItem`).
  2. Build `src/data/services.ts` (all 7 service offerings with descriptions, step breakdowns, and icon mappings).
  3. Build `src/data/caseStudies.ts` (all 5 detailed case studies with metric percentage callouts and quotes).
  4. Build `src/data/pricing.ts` (Essentials $2,500, Growth $5,500, Custom Partnership).
  5. Build `src/data/team.ts` (6 leadership profiles from About page).
  6. Build `src/data/blogs.ts` (5 business intelligence & strategy articles).
  7. Build `src/data/faqs.ts` and `src/data/testimonials.ts`.
* **Done Criteria**: All data structures pass `tsc --noEmit` with 100% type safety.

---

### Phase 4: Core Reusable UI & Motion Primitives
* **Objectives**: Create foundational components that provide visual consistency and motion physics.
* **Tasks**:
  1. `src/components/layout/Header.tsx`: Sticky glassmorphic navbar with active link states.
  2. `src/components/layout/MobileNav.tsx`: Animated mobile slide-in menu with backdrop blur.
  3. `src/components/layout/Footer.tsx`: Mega footer with all service links, sitemap, social links, and privacy notice.
  4. `src/components/ui/Button.tsx`: Framer Motion interactive button with hover/tap springs (`whileHover={{ scale: 1.02 }}`).
  5. `src/components/ui/Card.tsx`: Glassmorphic container with dark border stroke and ambient glow hover.
  6. `src/components/ui/Badge.tsx`: Pill tag for categories, metrics, and industries.
  7. `src/components/ui/Accordion.tsx`: Smooth collapsible item using `AnimatePresence` and spring height transitions.
  8. `src/components/motion/FadeIn.tsx` & `LogoMarquee.tsx`: Viewport scroll reveal and infinite partner ticker.
* **Done Criteria**: Header, Footer, and Buttons render in Storybook or demo test page with working responsive drawer.

---

### Phase 5: Primary Marketing Pages
* **Objectives**: Assemble the main landing and top-level directory pages.
* **Tasks**:
  1. **Homepage (`src/app/page.tsx`)**:
     - Hero Section ("Clear Thinking, Confident Action").
     - Word-by-word reveal headline ("We bring clarity to complex decisions...").
     - 4 Pillars: Strategy, Leadership, Direction, Progress.
     - Services preview grid with hover state cards.
     - Impact metrics section (+28% Northbridge callout).
     - Industry focus badges marquee.
     - Testimonial carousel / card row.
     - Interactive FAQ accordion.
     - Bottom CTA Banner ("Let's Build Better Business").
  2. **About Page (`src/app/about/page.tsx`)**:
     - Mission, core philosophy, company statistics (210+ businesses, 15+ years).
     - Leadership grid with photos, titles, and bios.
  3. **Services Hub (`src/app/services/page.tsx`)**:
     - Grid of all 7 capabilities with rich summary cards and deep-links.
  4. **Case Studies Hub (`src/app/case-studies/page.tsx`)**:
     - Highlighting client wins with filterable industry tags and quantitative data callouts.
  5. **Pricing Page (`src/app/pricing/page.tsx`)**:
     - 3-tier comparative pricing card grid + consultation CTA.
  6. **Blog Hub (`src/app/blogs/page.tsx`)**:
     - Article grid with category chips, author avatars, and reading times.
  7. **Contact Page (`src/app/contact/page.tsx`)**:
     - Consultation booking form + direct communication cards.
  8. **404 Not Found Page (`src/app/not-found.tsx`)**:
     - Polished custom error layout with return navigation.
* **Done Criteria**: All 8 primary pages load smoothly with complete content matching the Framer reference.

---

### Phase 6: Dynamic Route Implementation (SSG)
* **Objectives**: Implement dynamic sub-pages with static pre-rendering.
* **Tasks**:
  1. Build `src/app/services/[slug]/page.tsx`:
     - Implement `generateStaticParams()` to pre-render all 7 service slugs.
     - Render Overview, What We Do, Step-by-Step Approach, and Deliverables.
  2. Build `src/app/case-studies/[slug]/page.tsx`:
     - Implement `generateStaticParams()` for all 5 case studies.
     - Render Challenge, Approach, Outcome, and quantitative stat pills.
  3. Build `src/app/blogs/[slug]/page.tsx`:
     - Implement `generateStaticParams()` for all 5 blog articles.
     - Render formatted typography, headers, author bio, and related posts.
* **Done Criteria**: `npm run build` generates 24 static HTML files with zero dynamic server-render flags.

---

### Phase 7: Motion Polish & Spring Physics Tuning
* **Objectives**: Fine-tune Framer Motion animations to match Framer's native tactile feel.
* **Tasks**:
  1. Tune spring parameters (`stiffness: 260, damping: 20`) for button hovers and dropdowns.
  2. Ensure scroll triggers only fire once (`viewport: { once: true }`) to eliminate flicker.
  3. Verify infinite logo marquee has seamless loop without visual stutter.
* **Done Criteria**: 60fps frame rate confirmed during scroll tests in Chrome DevTools Performance panel.

---

### Phase 8: Contact Form & Server Action Integration
* **Objectives**: Enable working lead capture.
* **Tasks**:
  1. Implement `src/app/api/contact/route.ts` validating payload with Zod.
  2. Add loading spinner, disabled button state, and animated success pill upon submission.
  3. Add input error styling (red border glow and helper text) for invalid submissions.
* **Done Criteria**: Submitting test form returns valid 200 response and triggers visual success feedback.

---

### Phase 9: Quality Assurance, SEO & Deployment
* **Objectives**: Validate production readiness and deploy to Vercel.
* **Tasks**:
  1. Create `src/app/sitemap.ts` and `src/app/robots.ts` targeting all 24 URLs.
  2. Configure OpenGraph social preview tags and favicon.
  3. Run Lighthouse audit: confirm Performance ≥ 98, Accessibility ≥ 96, Best Practices 100, SEO 100.
  4. Push to Git repository and link to Vercel for automated deployment.
* **Done Criteria**: Production URL live on Vercel Edge with instant global CDN caching and 0 CLS.
