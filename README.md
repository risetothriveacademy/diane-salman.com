# Rise to Thrive / Diane Salman Ecosystem — Locked Architecture Summary

> **Source-of-truth note:** This summary is intentionally placed at the top of the `diane-salman.com` README so Diane, Ava, Claude, and future developers can refer back to the agreed website architecture before making changes.
>
> **Important:** The technical documentation below was cloned from the original Torah Mathews site and still contains legacy Torah references. Those references are being audited separately. Do not interpret them as the current ecosystem architecture.

## 1. Diane-Salman.com — Personal authority site

**Domain:** `diane-salman.com`

**Purpose:** The front door for **Diane Salman, MBA** as Founder, Trauma Recovery Educator, Speaker, Consultant, and Author.

Primary public paths:
- `/about`
- `/testimony`
- `/speaking`
- `/consulting`
- `/media`
- `/book`
- `/connect` — permanent QR / digital business-card destination

This site may link outward to Rise to Thrive Hub LLC, Rise to Thrive Academy, and Transforming Pain Into Power™.

### QR / Digital Business Card rule

The permanent business-card QR must point to:

`https://diane-salman.com/connect`

It introduces **Diane Salman personally**, not Rise to Thrive Hub.

## 2. RiseToThrive-Hub.com — Main organizational/public services site

**Domain:** `risetothrive-hub.com`

**Owner/brand:** **Rise to Thrive Hub LLC**

**Purpose:** Organizational, corporate, professional, partnership, retreat, speaking/workshop, and public-service pathways.

Primary public paths should include:
- `/organizations`
- `/retreats`
- `/professionals`
- `/partners`
- `/education`
- `/apply`

### CRITICAL SEPARATION RULE

**Rise to Thrive Hub is NOT the coaching-course portal.**

Do not place or duplicate the Academy's learner/course infrastructure inside `risetothrive-hub.com`.

The Hub may introduce or link to coaching/education programs, but actual course delivery should route to **Rise to Thrive Academy**.

## 3. RiseToThrive-Academy.com — Coaching / education / course delivery

**Domain:** `risetothrive-academy.com`

**Purpose:** Coaching programs, educational programs, courses, curriculum, learner resources, certificates, and login/portal experiences.

Examples:
- Foundation Program
- 18 Mini-Courses
- coaching programs
- advanced/mastery programs
- learner resources
- certificates
- course portals and logins

A subdomain is appropriate when it represents a technically separate learning portal, for example:

`foundation.portal.risetothrive-academy.com`

### CRITICAL SEPARATION RULE

**Do not confuse Rise to Thrive Academy with Rise to Thrive Hub.**

- **Hub = organizational/public/business services**
- **Academy = coaching, education, courses, and learner delivery**

Repository names can be misleading. Never classify a repository by name alone. Before changing anything, confirm:

`Repository → deployed domain/site → actual purpose → brand owner`

## 4. TransformingPainIntoPower.com — Recovery / ministry / nonprofit brand

**Domain:** `transformingpainintopower.com`

**Purpose:** Recovery resources, faith-informed/ministry work, nonprofit initiatives, community resources, and related intellectual property.

May include:
- Transforming Pain Into Power™
- Three Spheres Recovery™
- The Unseen Battle™
- The Inner Voice™
- book/resources
- community/nonprofit work
- devotional app

For a separate application/software product, use:

`app.transformingpainintopower.com`

## 5. TorahMathews.com — Protected legacy site

**Domain:** `torahmathews.com`

**Repository:** `risetothriveacademy/torah-mathews-website`

**Status:** **PROTECT — DO NOT ALTER**

The original Torah Mathews site remains unchanged during the migration because `diane-salman.com` is an independent clone.

Do not:
- rename it
- edit its public identity
- redirect it yet
- change its metadata
- alter its assets
- use it as a migration workspace

Future page-by-page redirects may be considered only after `diane-salman.com` is fully approved and live.

## Website architecture rule

Use this rule across the ecosystem:

- **Public service or department → use a `/path`**
- **Separate software/platform/portal → use a `subdomain`**
- **Separate major brand → use its own domain**

## Repository audit classification

Every repository/site should be classified before edits as one of:

- **DIANE** — Diane Salman personal authority
- **HUB** — Rise to Thrive Hub LLC organizational/public services
- **ACADEMY** — coaching, courses, education, learner delivery
- **TPIP** — Transforming Pain Into Power™
- **LEGACY / PROTECT** — Torah Mathews original site or historical property
- **UNKNOWN / DO NOT TOUCH** — not yet mapped to a live purpose/domain

---

# Torah Mathews Personal Website

A faith-based website providing support, resources, and inspiration for trauma recovery and mental health healing through Christian principles. The site features Torah Mathews' personal testimony, speaking services, her book "Transforming Pain into Power," and comprehensive trauma recovery resources.

## 🔗 Quick Links

- **Live Site:** [torahmathews.com](https://torahmathews.com)
- **GitHub Repository:** [risetothriveacademy/torah-mathews-website](https://github.com/risetothriveacademy/torah-mathews-website)
- **Contact:** admin@torahmathews.com
## 🔎 Quick Reference (for Torah)

### 📄 Main Pages
- **Homepage (hero, TV banner, book promo):**  
  `src/app/page.tsx`

- **About Page (childhood trauma story, legacy section, VIP Cast Member image):**  
  `src/app/about/page.tsx`

- **Book Page (Amazon link, sample chapter, CTA):**  
  `src/app/book/page.tsx` *(if present)*

- **Speaking / Speaker Pages:**  
  `src/app/speaking/page.tsx`  
  `src/app/speaker/page.tsx` *(if present)*

### 🧩 Shared Components
- **Header (MBA title, navigation):**  
  `src/components/site-header.tsx`

- **Footer:**  
  `src/components/site-footer.tsx`

- **Scrolling Legacy Banner:**  
  `src/components/scrolling-banner.tsx`

- **TV Show Banner + VIP Badge:**  
  `src/components/tv-show-banner.tsx`

### 🖼️ Images & Branding
- **All images (book cover, Torah photos, VIP Cast Member, Legacy Makers):**  
  `/public`

- **Brand Colors:**  
  Teal `#209bab` • Gold `#b18c57` • Charcoal accents

### 📚 Full Documentation
- **Deep page-by-page map:** `PROJECT-DOCUMENTATION.md`  
- **Current tasks & ope**

## 🛠 Tech Stack

- **Framework:** Next.js 15.3.2 (App Router with RSC)
- **Language:** TypeScript 5.8.3
- **Styling:** Tailwind CSS 3.4
- **UI Components:** shadcn/ui + Radix UI primitives
- **Package Manager:** Bun
- **Deployment:** Netlify
- **Form Integration:** HubSpot Forms
- **Icons:** Lucide React

## 🎨 Brand Colors

```css
/* Primary Colors */
--teal: #209bab;      /* Primary brand color - buttons, accents */
--gold: #b18c57;      /* Secondary brand color - headings, CTAs */

/* Supporting Colors */
--gray-900: #111827;  /* Dark text */
--gray-700: #374151;  /* Body text */
--gray-50: #f9fafb;   /* Light backgrounds */
--white: #ffffff;     /* Backgrounds */
```

## 📁 Project Structure

```
torah-mathews-website/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── about/                    # About Torah overview page
│   │   ├── author/                   # Author credentials & bio
│   │   ├── blogs/                    # Blog index page
│   │   ├── book/                     # Book landing page
│   │   ├── church/                   # Church resources
│   │   ├── corporate-sponsorships/   # Corporate sponsorship info
│   │   ├── family-members/           # Resources for family
│   │   ├── legacy-member/            # Legacy Makers program
│   │   ├── medication/               # Medication sphere info
│   │   ├── mental-health-conditions/ # Mental health education
│   │   ├── non-clinicians/           # Non-clinician resources
│   │   ├── recovery-methods/         # 3-Sphere Recovery Method
│   │   ├── social-groups/            # Social group resources
│   │   ├── speaker/                  # Speaker profile page
│   │   ├── speaking/                 # Speaking services
│   │   ├── spiritual-inner-healing/  # Spiritual healing sphere
│   │   ├── therapy/                  # Therapy sphere info
│   │   ├── trauma-and-mental-health/ # Trauma education hub
│   │   ├── ClientBody.tsx            # Client-side body wrapper
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Homepage
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components
│   │   │   └── button.tsx
│   │   ├── ScrollingBanner.tsx       # Animated scrolling text
│   │   ├── SectionBanner.tsx         # Reusable section banner
│   │   ├── TVShowBanner.tsx          # TV show feature banner
│   │   ├── hubspot-form.tsx          # HubSpot form integration
│   │   ├── site-footer.tsx           # Site-wide footer
│   │   └── site-header.tsx           # Navigation header
│   └── lib/
│       └── utils.ts                  # Utility functions (cn, etc.)
├── public/                           # Static assets
│   ├── book-cover.jpg                # Main book cover
│   ├── book-cover-alt-[1-4].jpg      # Alternative book covers
│   ├── torah-logo.jpg                # Site logo
│   ├── torah-mathews-author.jpg      # Author headshot (blue dress)
│   ├── torah-mathews-quote.jpg       # Sitting on ladder photo
│   ├── legacy-makers.jpg             # Legacy Makers image
│   ├── vip-cast-member.jpg           # VIP Cast Member badge
│   ├── jigsaw-puzzle.png             # Metaphor graphic
│   └── IMAGE-INVENTORY.md            # Complete image documentation
├── netlify.toml                      # Netlify configuration
├── package.json                      # Dependencies
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
├── README.md                         # This file
├── PROJECT-DOCUMENTATION.md          # Detailed page documentation
└── WEBSITE-TODOS.md                  # Pending tasks & updates

```

## 🌐 Pages & Routes

### Main Pages
- **`/`** - Homepage: Hero with book cover, CTAs, Torah's story, sections
- **`/book`** - Book landing page with purchase CTA and sample chapter
- **`/about`** - Overview of Torah Mathews
- **`/blogs`** - Blog articles index

### About Me Section
- **`/author`** - Torah as author, credentials, writing background
- **`/speaker`** - Speaker profile and topics
- **`/speaking`** - Book Torah for speaking engagements
- **`/legacy-member`** - Legacy Makers program information

### Trauma & Mental Health
- **`/trauma-and-mental-health`** - Main trauma education hub
- **`/mental-health-conditions`** - Mental health conditions overview

### 3-Sphere Recovery Method
- **`/recovery-methods`** - Overview of the 3-Sphere approach
- **`/medication`** - Medical/medication sphere
- **`/therapy`** - Therapy/counseling sphere
- **`/spiritual-inner-healing`** - Spiritual healing sphere

### Non-Clinician Resources
- **`/non-clinicians`** - Overview for supporters
- **`/family-members`** - Resources for family members
- **`/church`** - Church community support
- **`/social-groups`** - Social support groups

### Other
- **`/corporate-sponsorships`** - Corporate partnership opportunities

## 🧩 Key Components

### Navigation Components

#### `SiteHeader`
- Location: `src/components/site-header.tsx`
- Features:
  - Logo with "TORAH MATHEWS, MBA" branding
  - Desktop dropdown navigation
  - Mobile hamburger menu
  - Sticky header with blur backdrop
  - Active link states

#### `SiteFooter`
- Location: `src/components/site-footer.tsx`
- Content: Copyright, social links, contact info

### Banner Components

#### `ScrollingBanner`
- Location: `src/components/ScrollingBanner.tsx`
- Purpose: Animated scrolling text with brand message
- Text: "A Legacy in Honour of Jesus Christ — Together We Rise Against Pain, Grief, Depression, Anxiety, Abuse & Poverty."

#### `TVShowBanner`
- Location: `src/components/TVShowBanner.tsx`
- Purpose: Feature banner for TV show appearances
- Style: Teal background with VIP Cast Member badge

#### `SectionBanner`
- Location: `src/components/SectionBanner.tsx`
- Purpose: Reusable banner component for section breaks

### Form Components

#### `HubSpotForm`
- Location: `src/components/hubspot-form.tsx`
- Purpose: Embed HubSpot forms for lead capture
- Props: `portalId`, `formId`, `region`
- Used on: Book page (bulk order form)

## 📸 Image Inventory

See `public/IMAGE-INVENTORY.md` for complete image documentation.

### Primary Images
1. **Logo** - `torah-logo.jpg` (16 KB)
2. **Book Cover** - `book-cover.jpg` (133 KB)
3. **Author Photo** - `torah-mathews-author.jpg` (183 KB) - Blue dress headshot
4. **Ladder Photo** - `torah-mathews-quote.jpg` (172 KB) - Sitting on white ladder
5. **Legacy Makers** - `legacy-makers.jpg` (228 KB)
6. **VIP Cast Member** - `vip-cast-member.jpg` (233 KB) - Recently added

### Book Cover Variations
- `book-cover-alt-1.jpg` through `book-cover-alt-4.jpg`

## 🚀 Getting Started

### Prerequisites

- **Bun** (recommended) or Node.js 18+
- Git

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/risetothriveacademy/torah-mathews-website.git
cd torah-mathews-website
```

2. **Install dependencies:**
```bash
bun install
```

3. **Run the development server:**
```bash
bun dev
```

4. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

The app will run on `0.0.0.0` to allow network access (useful for mobile testing).

## 📦 Available Scripts

```bash
# Development
bun dev              # Start dev server with Turbopack

# Production
bun run build        # Build for production
bun start            # Start production server

# Code Quality
bun run lint         # Run TypeScript check and ESLint
bun run format       # Format code with Biome
```

## 🌍 Deployment

### Netlify (Current Setup)

The site is automatically deployed via Netlify connected to the GitHub repository.

**Build Settings:**
- Build command: `bun run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs`

**Configuration:** See `netlify.toml`

### Deploy to Netlify (New Site)

1. Push code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select GitHub and choose `risetothriveacademy/torah-mathews-website`
5. Netlify will auto-detect Next.js settings
6. Click "Deploy site"

**Custom Domain:** Configure in Netlify dashboard under Domain settings

## 🔧 Development Guide

### Adding a New Page

1. Create a folder in `src/app/[page-name]/`
2. Add `page.tsx` with your component:
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function PageName() {
  return (
    <main className="min-h-screen bg-white">
      {/* Your content */}
    </main>
  );
}
```
3. Update navigation in `src/components/site-header.tsx` if needed

### Adding a New Component

1. Create component file in `src/components/`
2. Use TypeScript and export default or named export
3. Use `"use client"` directive if client-side interactivity needed

### Using Brand Colors

```tsx
// Teal (Primary)
className="bg-[#209bab] text-white hover:bg-[#1a7a86]"

// Gold (Secondary)
className="bg-[#b18c57] text-white hover:bg-[#9a7549]"

// Or use Tailwind arbitrary values
className="text-teal-700"  // For built-in Tailwind teal
```

### Adding Images

1. Place images in `public/` directory
2. Reference as `/image-name.jpg` in code
3. Update `public/IMAGE-INVENTORY.md`
4. Use Next.js Image component for optimization:
```tsx
import Image from "next/image";

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

## 🔗 Integrations

### HubSpot Forms

Forms are embedded using the `HubSpotForm` component:

```tsx
<HubSpotForm
  portalId="46765588"
  formId="YOUR_FORM_ID"
  region="na1"
/>
```

**Current Forms:**
- Book bulk order form (on `/book` page)
- Sample chapter form (pending - see WEBSITE-TODOS.md)

## 📝 Content Management

### Placeholders

Some pages contain `[Placeholder: ...]` content markers. These indicate areas awaiting final content.

### TODO Items

See `WEBSITE-TODOS.md` for:
- Pending Amazon book link
- HubSpot form configurations
- Content updates needed

## 📚 Documentation

- **README.md** (this file) - Project overview & setup
- **PROJECT-DOCUMENTATION.md** - Detailed page-by-page breakdown
- **WEBSITE-TODOS.md** - Pending tasks and updates
- **public/IMAGE-INVENTORY.md** - Complete image catalog

## 🤝 Contributing

This is a private project for Torah Mathews. For questions or access:
- Email: admin@torahmathews.com

## 📄 License

© 2025 Torah Mathews. All rights reserved.

---

**Last Updated:** December 4, 2025
**Repository:** [github.com/risetothriveacademy/torah-mathews-website](https://github.com/risetothriveacademy/torah-mathews-website)
