# Document 04: UI/UX Design Brief & Visual Design System

> **Project Name**: Career Nova — Business Consulting & Advisory Agency  
> **Source Reference**: [https://careernova.framer.media/](https://careernova.framer.media/)  
> **Styling Framework**: Tailwind CSS + Framer Motion  
> **Status**: Completed Specification  

---

## 1. Aesthetic Direction & Visual Identity

Career Nova's visual language embodies **executive authority, technical precision, and modern architectural elegance**. It moves away from generic corporate stock photos, favoring dark obsidian glass surfaces, crisp typography, electric cobalt accents, subtle ambient glows, and fluid spring animations.

* **Core Mood**: Strategic, Confident, Prestigious, Crisp, High-Impact.
* **Design Precedents**: Linear, Vercel, Stripe Press, and premier Wall Street / Mayfair boutique consultancies.
* **Theme Preference**: Dark Mode First (pure `#0c0e12` obsidian backdrop with high-contrast text and luminous cards).

---

## 2. Color Palette & Design Tokens

The palette below is extracted directly from the Framer runtime tokens on `https://careernova.framer.media/`:

```
┌────────────────────────────────────────────────────────────────────────┐
│                               Color Palette                            │
├──────────────────┬──────────────────┬──────────────────┬───────────────┤
│ Canvas / Base    │ Surface / Card   │ Brand Cobalt     │ Electric Accent│
│ #0c0e12          │ #12161f          │ #0d409b          │ #005eff       │
├──────────────────┼──────────────────┼──────────────────┼───────────────┤
│ Text Primary     │ Text Secondary   │ Border Subtle    │ Light Highlight│
│ #ffffff          │ #94a3b8          │ rgba(255,255,255,│ #ecf0f0       │
│                  │                  │ 0.08)            │               │
└──────────────────┴──────────────────┴──────────────────┴───────────────┘
```

### 2.1 Complete Token Definitions

```typescript
// tailwind.config.ts color extensions
module.exports = {
  theme: {
    extend: {
      colors: {
        sterling: {
          canvas: '#0c0e12',       // Main page background
          card: '#12161f',         // Card container background
          cardHover: '#161d2b',    // Card hover state
          subtle: '#181e2b',       // Elevated elements & tags
          cobalt: {
            DEFAULT: '#0d409b',    // Career Nova signature royal navy blue
            light: '#1455c7',
            dark: '#0e285d',
          },
          electric: {
            DEFAULT: '#005eff',    // Bright electric blue for buttons/glows
            hover: '#0752ff',
          },
          lightGray: '#ecf0f0',    // Off-white surface highlights
          muted: '#94a3b8',        // Secondary text (Slate 400)
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.20)',
        }
      }
    }
  }
}
```

---

## 3. Typography Scale & Font Pairing

```
┌──────────────────────────────────────────────────────────────┐
│ Primary Headings: Golos Text / Mona Sans (Editorial Authority) │
│ Body & Controls:  Inter / Sans-serif (Optimum Legibility)    │
│ Numerical / Data: Fragment Mono / Geist Mono (Precision)     │
└──────────────────────────────────────────────────────────────┘
```

| Element | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | Golos Text / Mona Sans | 56px–72px (`text-5xl lg:text-7xl`) | Bold (700/800) | 1.05 | -0.03em (`tracking-tight`) |
| **Section Title (H2)** | Golos Text | 36px–48px (`text-3xl lg:text-5xl`) | SemiBold (600) | 1.15 | -0.02em |
| **Card Header (H3)** | Golos Text / Inter | 22px–28px (`text-xl lg:text-2xl`) | Medium (500) | 1.25 | -0.01em |
| **Stat Numbers** | Fragment Mono / Golos | 40px–56px (`text-4xl lg:text-5xl`) | Bold (700) | 1.00 | -0.02em |
| **Body Large** | Inter | 18px–20px (`text-lg lg:text-xl`) | Regular (400) | 1.60 | Normal |
| **Body Regular** | Inter | 15px–16px (`text-sm lg:text-base`) | Regular (400) | 1.55 | Normal |
| **Pill / Eyebrow Badge** | Inter / Fragment Mono | 12px–13px (`text-xs`) | Medium (500) | 1.00 | +0.05em (`tracking-wider uppercase`) |

---

## 4. Component Styles & Surface Geometry

### 4.1 Border Radii & Elevation
- **Pill Badges & Primary Buttons**: `rounded-full` (48px pill). Clean border stroke `border border-white/15`.
- **Content Cards & Grid Containers**: `rounded-2xl` (16px) or `rounded-3xl` (24px).
- **Nested Tags & Status Badges**: `rounded-lg` (8px).

### 4.2 Glassmorphism & Borders
- Cards utilize a subtle gradient and transparent border to achieve physical depth without heavy shadows:
  ```css
  bg-[#12161f]/70 backdrop-blur-md border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300
  ```
- Ambient glow effect under highlighted cards:
  ```css
  shadow-[0_0_50px_-15px_rgba(13,64,155,0.3)]
  ```

---

## 5. Framer Motion Animation Specification

Framer Motion is configured to recreate the native physics and smooth reveals present in the original Framer site:

### 5.1 Standard Spring Physics
```typescript
export const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
  mass: 0.8
};
```

### 5.2 Scroll Reveal (Viewport Fade & Upward Drift)
```typescript
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};
```

### 5.3 Word-by-Word Stagger (About Career Nova Statement)
On `/` and `/about`, the famous headline *"We bring clarity to complex decisions and turn ambitious plans into meaningful business progress"* illuminates word by word as the user scrolls:
```typescript
export const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

export const textWordVariants = {
  hidden: { opacity: 0.2, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};
```

### 5.4 Infinite Horizontal Marquee (Logos & Industries)
```typescript
export const marqueeVariants = {
  animate: {
    x: [0, -1200],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 35,
        ease: "linear",
      },
    },
  },
};
```

### 5.5 FAQ Accordion Spring Layout
```typescript
<motion.div
  layout
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: "auto" }}
  exit={{ opacity: 0, height: 0 }}
  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
>
  {answerContent}
</motion.div>
```

---

## 6. Responsive Breakpoint Matrix

| Viewport | Width Range | Header Layout | Grid Layout | Container Padding |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile** | `< 768px` | Brand + Hamburger Drawer | `grid-cols-1` | `px-4 sm:px-6` |
| **Tablet** | `768px – 1024px` | Brand + Compact Nav + CTA | `grid-cols-2` | `px-6 md:px-8` |
| **Desktop** | `> 1024px` | Full Floating Glass Header | `grid-cols-3` (Services/Case Studies) | `max-w-7xl mx-auto px-8` |
