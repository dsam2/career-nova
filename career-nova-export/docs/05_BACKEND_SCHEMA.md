# Document 05: Backend Schema & CMS Architecture

> **Project Name**: Career Nova — Business Consulting & Advisory Agency  
> **Source Reference**: [https://careernova.framer.media/](https://careernova.framer.media/)  
> **Data Layer**: TypeScript Fixture Models + Optional Headless CMS / API Route  
> **Status**: Completed Specification  

---

## 1. Data Architecture Strategy

The Career Nova agency website functions with high operational efficiency by utilizing a **Static CMS Data Layer** stored directly within `src/data/` as strongly typed TypeScript models. 

### Why this architecture?
1. **Zero Database Latency & 100% SSG**: Eliminates database cold starts; every service, case study, and blog is pre-rendered at build time.
2. **Type Safety & Intellisense**: Every data attribute has strict TypeScript typing, preventing runtime missing property errors.
3. **Seamless Future Migration**: The models are decoupled into clean interfaces (`src/types/index.ts`). If a headless CMS (Sanity, Strapi, or Supabase) is connected later, only the fetching functions in `src/data/` need updating.

---

## 2. Core Entities & TypeScript Interfaces

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│   ServiceItem   │       │  CaseStudyItem  │       │  BlogPostItem   │
├─────────────────┤       ├─────────────────┤       ├─────────────────┤
│ • id            │       │ • id            │       │ • id            │
│ • slug          │       │ • slug          │       │ • slug          │
│ • title         │       │ • client        │       │ • title         │
│ • shortDesc     │       │ • industry      │       │ • category      │
│ • overview      │       │ • metrics[]     │       │ • date          │
│ • approach[]    │       │ • challenge     │       │ • author        │
│ • deliverables[]│       │ • approach      │       │ • content[]     │
└─────────────────┘       │ • outcome       │       └─────────────────┘
                          └─────────────────┘
```

### 2.1 Service Model (`ServiceItem`)
```typescript
export interface ServiceApproachStep {
  stepNumber: string; // e.g. "01"
  title: string;      // e.g. "Immersion & Diagnostic"
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;              // e.g. "Strategic Advisory"
  shortDescription: string;   // e.g. "Turn complex business priorities into focused decisions..."
  category: string;
  iconName: string;           // Lucide icon name (e.g. "Compass", "Cpu", "Users", "Globe")
  overview: string;           // Long-form executive overview
  whatWeDo: string[];         // Bullet points of actions
  ourApproach: ServiceApproachStep[];
  whyItMatters: string;
  whatYouCanExpect: string[]; // Deliverable outcomes
  relatedServices?: string[]; // Slugs of 2 related services
}
```

### 2.2 Case Study Model (`CaseStudyItem`)
```typescript
export interface CaseStudyMetric {
  value: string; // e.g. "+28%", "+42%", "-22%"
  label: string; // e.g. "Profitability Increase", "Margin Expansion"
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  client: string;          // e.g. "Northbridge", "Apex Industrial"
  title: string;           // e.g. "Helping Northbridge Improve Profitability..."
  industry: 'Finance' | 'Healthcare' | 'Real Estate' | 'Technology' | 'Pro Services' | 'Retail Business';
  date: string;            // e.g. "Nov 16, 2025"
  coverImage: string;      // Path to image asset
  metrics: CaseStudyMetric[]; // High-impact data highlights
  overview: string;
  challenge: string;       // In-depth challenge statement
  approach: string;        // Strategic execution methodology
  outcome: string;         // Quantitative and qualitative results
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}
```

### 2.3 Blog Article Model (`BlogPostItem`)
```typescript
export interface BlogContentSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;        // e.g. "Business Intelligence", "Strategy", "Leadership"
  publishDate: string;     // e.g. "Sep 7, 2026"
  readTime: string;        // e.g. "5 min read"
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  sections: BlogContentSection[];
}
```

### 2.4 Team Member Model (`TeamMemberItem`)
```typescript
export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;            // e.g. "Managing Director", "Head of Financial Strategy"
  department: 'Leadership' | 'Finance' | 'Operations' | 'Strategy' | 'Sales';
  bio: string;
  image: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
}
```

### 2.5 Pricing Tier Model (`PricingTierItem`)
```typescript
export interface PricingTierItem {
  id: string;
  name: string;            // "Essentials" | "Growth" | "Partnership"
  tagline: string;         // e.g. "For focused business challenges and strategic guidance"
  priceMonthly: string;    // "$2,500" or "$5,500" or "Custom pricing"
  pricePeriod: string;     // "/ per month"
  isFeatured?: boolean;    // Highlights "Growth" tier
  features: string[];      // List of included advisory capabilities
  ctaText: string;         // "Get a Consultation"
  ctaLink: string;         // "/contact"
}
```

### 2.6 FAQ Item Model (`FAQItem`)
```typescript
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Engagements' | 'Pricing';
}
```

---

## 3. Contact Lead Submission Schema (API / Server Action)

```typescript
import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid business email address' }),
  company: z.string().min(2, { message: 'Company name is required' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  serviceInterest: z.string().optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
```

### Server-Side Storage / Notification Target
For incoming consultation requests, the payload can be piped directly into:
1. **Resend / Postmark**: Instant email alert dispatched to `advisors@careernova.com`.
2. **Supabase / PostgreSQL Table (`contact_leads`)**:
   ```sql
   CREATE TABLE contact_leads (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     company TEXT NOT NULL,
     phone TEXT,
     message TEXT NOT NULL,
     status TEXT DEFAULT 'pending'
   );
   ```
3. **Webhook to Slack / CRM**: Posts incoming enterprise inquiries directly to `#leads-channel`.
