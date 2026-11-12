# Document 02: Technical Requirements Document (TRD)

> **Project Name**: Career Nova — Business Consulting & Advisory Agency  
> **Source Reference**: [https://careernova.framer.media/](https://careernova.framer.media/)  
> **Core Stack**: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React  
> **Status**: Completed Specification  

---

## 1. System Architecture & Tech Stack

```
┌─────────────────────────────────────────────────────────────┐
│                       Client Browser                        │
└──────────────────────────────┬──────────────────────────────┘
                               │
               Static Assets / HTML / CSS / Hydration
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                 Next.js 14+ App Router (SSG)                │
│  ┌───────────────────────┐       ┌────────────────────────┐ │
│  │ React Server Components│◄─────►│ Framer Motion (Client) │ │
│  └───────────┬───────────┘       └────────────────────────┘ │
│              │                                              │
│  ┌───────────▼───────────┐       ┌────────────────────────┐ │
│  │ Static JSON Data Layer │       │ Tailwind CSS Styling   │ │
│  │ (Services, Blogs, etc)│       │ (Design Tokens/Tokens) │ │
│  └───────────────────────┘       └────────────────────────┘ │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│             Hosting & CDN (Vercel Edge Network)             │
└─────────────────────────────────────────────────────────────┘
```

### 1.1 Technology Choices & Rationale

| Layer | Technology | Version | Purpose & Rationale |
| :--- | :--- | :--- | :--- |
| **Framework** | **Next.js (App Router)** | `^14.2.0` or `^15.0.0` | Provides Static Site Generation (`output: 'export'` or SSG via `generateStaticParams`), instant page transitions, automatic image optimization (`next/image`), and built-in font optimization (`next/font`). |
| **Language** | **TypeScript** | `^5.4.0` | Complete type safety across CMS data fixtures, component props, and form submission schemas. |
| **Styling** | **Tailwind CSS** | `^3.4.0` | Translates Framer’s stacks, auto-layouts, flexboxes, and absolute positions into atomic utility classes. Zero runtime CSS overhead. |
| **Animation** | **Framer Motion** | `^11.0.0` | Identical animation runtime used natively by Framer under the hood. Provides spring physics (`stiffness: 260, damping: 20`), scroll triggers (`whileInView`), and smooth layout morphing (`AnimatePresence`). |
| **Icons** | **Lucide React** | `^0.378.0` | Consistent 24x24 SVG line icons mirroring Framer's clean aesthetic (e.g. `ArrowUpRight`, `CheckCircle2`, `BarChart3`, `ChevronDown`, `Compass`, `ShieldCheck`, `TrendingUp`, `Menu`, `X`). |
| **Form Validation** | **Zod** | `^3.23.0` | Client-side and server-side schema validation for the contact and consultation forms. |

---

## 2. Directory & File Organization

The application follows standard Next.js App Router best practices, strictly isolating server and client components:

```
career_nova/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── team/
│   │   ├── case-studies/
│   │   └── logos/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # Global Root Layout (Fonts, Header, Footer)
│   │   ├── page.tsx                       # Homepage (/)
│   │   ├── not-found.tsx                  # 404 Custom Error Page
│   │   ├── sitemap.ts                     # Dynamic sitemap.xml generator
│   │   ├── about/
│   │   │   └── page.tsx                   # /about
│   │   ├── services/
│   │   │   ├── page.tsx                   # /services hub
│   │   │   └── [slug]/
│   │   │       └── page.tsx               # /services/[slug] (7 detail pages)
│   │   ├── case-studies/
│   │   │   ├── page.tsx                   # /case-studies hub
│   │   │   └── [slug]/
│   │   │       └── page.tsx               # /case-studies/[slug] (5 detail pages)
│   │   ├── pricing/
│   │   │   └── page.tsx                   # /pricing
│   │   ├── blogs/
│   │   │   ├── page.tsx                   # /blogs hub
│   │   │   └── [slug]/
│   │   │       └── page.tsx               # /blogs/[slug] (5 detail pages)
│   │   ├── contact/
│   │   │   └── page.tsx                   # /contact
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts               # Contact Form API endpoint
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx                 # Sticky navigation bar & mobile menu
│   │   │   ├── Footer.tsx                 # Comprehensive footer with all links
│   │   │   └── MobileNav.tsx              # Animated mobile slide-in drawer
│   │   ├── ui/
│   │   │   ├── Button.tsx                 # Button with Framer Motion hover/tap
│   │   │   ├── Card.tsx                   # Dark-themed glassmorphic card container
│   │   │   ├── Badge.tsx                  # Pill badge for categories and status
│   │   │   ├── Accordion.tsx              # Collapsible FAQ item with spring layout
│   │   │   └── SectionHeader.tsx          # Consistent section title & badge wrapper
│   │   ├── motion/
│   │   │   ├── FadeIn.tsx                 # Reusable viewport scroll reveal wrapper
│   │   │   ├── TextReveal.tsx             # Word-by-word stagger text reveal
│   │   │   ├── LogoMarquee.tsx            # Seamless infinite horizontal ticker
│   │   │   └── Counter.tsx                # Animated numerical counter on scroll
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── TrustMarquee.tsx
│   │       ├── ServicesGrid.tsx
│   │       ├── CaseStudyShowcase.tsx
│   │       ├── StatsCounterSection.tsx
│   │       ├── PrinciplesSection.tsx
│   │       ├── TestimonialSection.tsx
│   │       ├── PricingTable.tsx
│   │       ├── FAQSection.tsx
│   │       ├── CTABanner.tsx
│   │       └── ContactForm.tsx
│   ├── data/
│   │   ├── navigation.ts                  # Header and footer link configurations
│   │   ├── services.ts                    # 7 complete service records
│   │   ├── caseStudies.ts                 # 5 detailed case study records
│   │   ├── pricing.ts                     # 3 pricing tiers and feature breakdowns
│   │   ├── team.ts                        # 6 leadership team profiles
│   │   ├── blogs.ts                       # 5 complete blog post records
│   │   ├── testimonials.ts                # Client quotes, logos, and authors
│   │   └── faqs.ts                        # Categorized FAQ questions & answers
│   ├── types/
│   │   └── index.ts                       # Shared TypeScript interfaces & types
│   └── styles/
│       └── globals.css                    # Tailwind directives & CSS variable tokens
├── tailwind.config.ts                     # Extended colors, fonts, and animations
├── tsconfig.json
├── package.json
└── next.config.mjs
```

---

## 3. Component & State Architecture

### 3.1 Server Components vs Client Components
To maximize performance and achieve zero Layout Shifts, the majority of pages and layout wrappers are **React Server Components (RSC)**. `use client` directives are isolated strictly to interactive micro-components:
- `Header.tsx` & `MobileNav.tsx`: Manages mobile menu toggle state and scroll backdrop blur.
- `Accordion.tsx`: Manages active accordion item toggle state with Framer Motion `AnimatePresence`.
- `ContactForm.tsx`: Manages form inputs, validation errors, and submission status.
- `LogoMarquee.tsx`: Handles CSS/Framer horizontal loop translation.
- `FadeIn.tsx` / `TextReveal.tsx`: Handles `IntersectionObserver` via Framer Motion's `whileInView`.

### 3.2 Dynamic Route Pre-rendering (`generateStaticParams`)
All 7 services, 5 case studies, and 5 blog posts are statically pre-rendered at build time:
```typescript
// app/services/[slug]/page.tsx
import { getAllServiceSlugs, getServiceBySlug } from '@/data/services';

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}
```

---

## 4. Key Libraries & Dependencies

```json
{
  "name": "sterling-agency",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.11.9",
    "lucide-react": "^0.378.0",
    "next": "^14.2.16",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.5.4",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/node": "^20.17.6",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "typescript": "^5.6.3"
  }
}
```

---

## 5. Environment Variables & Deployment

| Variable Name | Purpose | Required / Optional |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (`https://careernova.com` or deployment URL) | Required |
| `RESEND_API_KEY` | Transactional email delivery for consultation submissions | Optional (fallback to console/webhook) |
| `CONTACT_RECIPIENT_EMAIL` | Destination inbox for incoming client leads | Optional |

### 5.1 Deployment Configuration
- **Platform**: Vercel
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Headers Configuration**: Caching headers for immutable static assets (`public/`, `_next/static/`) set to `max-age=31536000, immutable`.
