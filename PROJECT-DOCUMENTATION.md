# Torah Mathews Website - Project Documentation

**Complete Technical Documentation & Content Map**

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Page-by-Page Documentation](#page-by-page-documentation)
3. [Component Reference](#component-reference)
4. [Image Usage Map](#image-usage-map)
5. [Navigation Structure](#navigation-structure)
6. [Styling & Design System](#styling--design-system)
7. [Forms & Integrations](#forms--integrations)
8. [Pending TODOs](#pending-todos)

---

## 📖 Project Overview

### Purpose
Faith-based website for Torah Mathews, MBA - author, speaker, and trauma recovery advocate. The site promotes her book "Transforming Pain into Power" and provides trauma/mental health resources through a Christian lens.

### Repository
- **GitHub:** `risetothriveacademy/torah-mathews-website`
- **Branch:** `main`
- **Deployment:** Netlify (auto-deploy on push)
- **Live URL:** [torahmathews.com](https://torahmathews.com)

### Technology Stack
- **Framework:** Next.js 15.3.2 (App Router, React Server Components)
- **Language:** TypeScript 5.8.3
- **Styling:** Tailwind CSS 3.4.17
- **UI Library:** shadcn/ui (Radix UI primitives)
- **Package Manager:** Bun
- **Icons:** Lucide React 0.475.0
- **Forms:** HubSpot embedded forms

---

## 📄 Page-by-Page Documentation

### **Homepage** (`/`)
**File:** `src/app/page.tsx`

**Sections:**
1. **Hero Section** (50/50 Split Layout)
   - Left: Book cover image (`/book-cover.jpg`)
   - Right: Hero text + 3 CTA buttons
     - "Read the Book" → `/book` (Teal button)
     - "Book Torah to Speak" → `/speaking` (Gold button)
     - "Explore Trauma Resources" → `/trauma-mental-health` (Dark gray button)

2. **TV Show Banner**
   - Component: `<TVShowBanner />`
   - Features VIP Cast Member badge image
   - Teal background with white text

3. **Scrolling Banner**
   - Component: `<ScrollingBanner />`
   - Text: "A Legacy in Honour of Jesus Christ — Together We Rise Against Pain, Grief, Depression, Anxiety, Abuse & Poverty."
   - Continuous scroll animation

4. **Meet Torah Mathews**
   - Background: White
   - Gold heading
   - Teal-highlighted quote box
   - Biography text

5. **Transforming Pain into Power (Book Section)**
   - Background: Gray-50
   - Gold heading
   - Book description
   - CTA: "Read the Book" → `/book`

6. **Speaking & Keynotes**
   - Background: White
   - Gold heading
   - CTA: "Speaking Info" → `/speaking`

7. **Trauma & Mental Health Education**
   - Background: Gray-50
   - Gold heading
   - CTA: "Explore Trauma Resources" → `/trauma-mental-health`

8. **3-Sphere Recovery Method**
   - Background: White
   - 3 cards with icons (Pill, Heart, Cross)
   - Links to: `/medication`, `/therapy`, `/spiritual-inner-healing`

9. **Legacy Section**
   - Background: Gold (#b18c57)
   - Image: `/legacy-makers.jpg` or `/vip-cast-member.jpg`
   - Highlighted quote
   - CTA: "Join the Legacy" → `/legacy-member`

**Images Used:**
- `/book-cover.jpg` (Hero)
- `/vip-cast-member.jpg` (TV Banner)
- `/legacy-makers.jpg` or `/vip-cast-member.jpg` (Legacy section)

**Components Used:**
- `<ScrollingBanner />`
- `<TVShowBanner />`
- `<Button />` (shadcn/ui)

---

### **Book Landing Page** (`/book`)
**File:** `src/app/book/page.tsx`

**SEO:**
- Title: "Transforming Pain into Power – The Book"
- Description: Faith-based testimony and roadmap for trauma recovery

**Sections:**
1. **Hero Section** (Grid Layout)
   - Left: Book description + 2 CTAs
     - **"Buy on Amazon"** - ⚠️ **TODO:** Link not connected (currently `href="#"`)
     - **"Download a Sample Chapter"** - Scrolls to form
   - Right: Book cover image

2. **Scrolling Banner**
   - Same as homepage

3. **What's Inside the Book**
   - List of topics covered
   - White background

4. **Why This Book Is Different**
   - Teal background section
   - Key differentiators

5. **Who This Book Is For**
   - White background
   - Target audience list

6. **Author Bio**
   - Brief Torah Mathews bio
   - Image: `/torah-mathews-quote.jpg` (sitting on ladder)

7. **Testimonials**
   - Gray-50 background
   - Reader testimonials (placeholder content)

8. **Bulk Order Section**
   - Gold background
   - HubSpot form embedded
   - **Form Details:**
     - Portal ID: `46765588`
     - Form ID: `3c31c4dd-6cf4-4e48-972e-d0bc354e73dd`
     - Region: `na1`

9. **Sample Chapter Download** (ID: `sample-chapter`)
   - White background
   - ⚠️ **TODO:** HubSpot form not yet integrated (placeholder text only)
   - Lines 219-226 need replacement with actual `<HubSpotForm />` component

**Images Used:**
- `/book-cover.jpg` (Hero)
- `/torah-mathews-quote.jpg` (Author section)

**Components Used:**
- `<ScrollingBanner />`
- `<HubSpotForm />` (bulk order section)
- `<Button />`

**Pending Items:**
- Amazon purchase link (line 40)
- Sample chapter HubSpot form (lines 219-226)

---

### **About Page** (`/about`)
**File:** `src/app/about/page.tsx`

**Content:**
- Overview of Torah Mathews
- Links to sub-pages: `/author`, `/speaker`, `/legacy-member`
- Likely uses `/torah-mathews-author.jpg` (blue dress headshot)

---

### **Author Page** (`/author`)
**File:** `src/app/author/page.tsx`

**Content:**
- Torah's credentials and writing background
- Author bio
- Published works
- Likely uses `/torah-mathews-author.jpg`

---

### **Speaker Page** (`/speaker`)
**File:** `src/app/speaker/page.tsx`

**Content:**
- Speaker profile
- Speaking topics
- Past engagements
- Testimonials from event organizers

---

### **Speaking Page** (`/speaking`)
**File:** `src/app/speaking/page.tsx`

**Content:**
- How to book Torah for speaking
- Speaking topics offered
- Event types (churches, conferences, corporate)
- Contact form or CTA

---

### **Legacy Member Page** (`/legacy-member`)
**File:** `src/app/legacy-member/page.tsx`

**Content:**
- Legacy Makers program information
- How to join
- Benefits and mission
- Image: `/legacy-makers.jpg` or `/vip-cast-member.jpg`

---

### **Trauma & Mental Health Hub** (`/trauma-and-mental-health`)
**File:** `src/app/trauma-and-mental-health/page.tsx`

**Content:**
- Main hub for trauma education
- Understanding trauma
- How trauma affects identity, emotions, spirituality
- Links to related pages

---

### **Mental Health Conditions** (`/mental-health-conditions`)
**File:** `src/app/mental-health-conditions/page.tsx`

**Content:**
- Overview of mental health conditions
- Depression, anxiety, PTSD, etc.
- Faith-based perspective

---

### **Recovery Methods Hub** (`/recovery-methods`)
**File:** `src/app/recovery-methods/page.tsx`

**Content:**
- Overview of 3-Sphere Recovery Method
- Introduction to: Medication, Therapy, Spiritual Inner Healing
- Links to individual sphere pages

---

### **Medication Sphere** (`/medication`)
**File:** `src/app/medication/page.tsx`

**Content:**
- Role of medication in mental health recovery
- Biblical perspective on medication
- Working with doctors

---

### **Therapy Sphere** (`/therapy`)
**File:** `src/app/therapy/page.tsx`

**Content:**
- Importance of professional counseling
- Types of therapy
- Finding a faith-based therapist

---

### **Spiritual Inner Healing Sphere** (`/spiritual-inner-healing`)
**File:** `src/app/spiritual-inner-healing/page.tsx`

**Content:**
- Role of spiritual healing in recovery
- Prayer, Scripture, spiritual disciplines
- Healing from spiritual trauma

---

### **Non-Clinicians Hub** (`/non-clinicians`)
**File:** `src/app/non-clinicians/page.tsx`

**Content:**
- Resources for people supporting those with trauma
- How to help without being a clinician
- Links to: Family Members, Church, Social Groups

---

### **Family Members** (`/family-members`)
**File:** `src/app/family-members/page.tsx`

**Content:**
- How to support family members with trauma/mental health issues
- Do's and don'ts
- Compassionate listening

---

### **Church Resources** (`/church`)
**File:** `src/app/church/page.tsx`

**Content:**
- How churches can support trauma survivors
- Creating trauma-informed ministries
- Training for church leaders

---

### **Social Groups** (`/social-groups`)
**File:** `src/app/social-groups/page.tsx`

**Content:**
- Role of community in healing
- How to create supportive social environments

---

### **Corporate Sponsorships** (`/corporate-sponsorships`)
**File:** `src/app/corporate-sponsorships/page.tsx`

**Content:**
- Partnership opportunities for corporations
- Sponsorship packages
- Impact and benefits

---

### **Blogs** (`/blogs`)
**File:** `src/app/blogs/page.tsx`

**Content:**
- Blog article index
- Likely grid of blog posts
- Categories/tags

---

## 🧩 Component Reference

### Layout Components

#### **Root Layout**
**File:** `src/app/layout.tsx`

**Features:**
- Wraps entire application
- Includes `<SiteHeader />` and `<SiteFooter />`
- Uses `<ClientBody />` for client-side body wrapper
- Global CSS imports
- Metadata configuration

**Metadata:**
```tsx
title: "Torah Mathews - Transforming Pain into Power"
description: "Faith-based trauma recovery resources, author, speaker"
```

---

### Navigation Components

#### **SiteHeader**
**File:** `src/components/site-header.tsx`

**Features:**
- Logo: "TORAH MATHEWS, MBA" (MBA in smaller font)
- Sticky header with backdrop blur
- Desktop navigation with dropdowns
- Mobile hamburger menu
- Hover states on desktop
- Click/tap states on mobile

**Navigation Structure:**
```
HOME
ABOUT ME ▾
  - Author
  - Speaker
  - Legacy Maker
TRAUMA AND MENTAL HEALTH ▾
  - Mental Health Conditions
3 SPHERE RECOVERY METHOD ▾
  - Medication
  - Therapy
  - Spiritual Inner Healing
NON-CLINICIANS ▾
  - Family Members
  - Church
  - Social Groups
BLOGS
```

**Styling:**
- Background: `bg-white/90` with `backdrop-blur-sm`
- Border: `border-b border-gray-200`
- Position: `sticky top-0 z-50`

---

#### **SiteFooter**
**File:** `src/components/site-footer.tsx`

**Content:**
- Copyright notice: "© 2025 Torah Mathews. All rights reserved."
- Social media links (if applicable)
- Contact info

---

### Banner Components

#### **ScrollingBanner**
**File:** `src/components/ScrollingBanner.tsx`

**Props:**
- `text: string` - Text to scroll

**Usage:**
```tsx
<ScrollingBanner text="A Legacy in Honour of Jesus Christ..." />
```

**Styling:**
- Background: Teal or Gold
- Continuous scroll animation (CSS animation)
- White text
- Full width

---

#### **TVShowBanner**
**File:** `src/components/TVShowBanner.tsx`

**Features:**
- Promotes TV show appearance
- VIP Cast Member badge image
- Teal background
- CTA button or text

**Image Used:**
- `/vip-cast-member.jpg`

---

#### **SectionBanner**
**File:** `src/components/SectionBanner.tsx`

**Purpose:**
- Reusable banner for section breaks
- Can be customized with props

---

### Form Components

#### **HubSpotForm**
**File:** `src/components/hubspot-form.tsx`

**Props:**
```tsx
interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region: string;
}
```

**Usage:**
```tsx
<HubSpotForm
  portalId="46765588"
  formId="3c31c4dd-6cf4-4e48-972e-d0bc354e73dd"
  region="na1"
/>
```

**Implementation:**
- Loads HubSpot embed script dynamically
- Uses `useEffect` hook for client-side mounting
- Renders form in a div with unique ID

**Current Forms:**
1. **Bulk Order Form** (Book page)
   - Portal: `46765588`
   - Form: `3c31c4dd-6cf4-4e48-972e-d0bc354e73dd`
   - Region: `na1`

2. **Sample Chapter Form** (Pending)
   - Portal: TBD (likely same: `46765588`)
   - Form: TBD
   - Region: TBD (likely `na1`)

---

### UI Components (shadcn/ui)

#### **Button**
**File:** `src/components/ui/button.tsx`

**Variants:**
- `default` - Default styling
- `destructive` - Red/error
- `outline` - Outlined
- `secondary` - Secondary color
- `ghost` - Transparent
- `link` - Link styling

**Sizes:**
- `default`
- `sm`
- `lg`
- `icon`

**Common Usage:**
```tsx
<Button
  size="lg"
  className="bg-[#209bab] text-white hover:bg-[#1a7a86]"
>
  Button Text
</Button>
```

---

## 🖼️ Image Usage Map

### **Homepage (`/`)**
- `/book-cover.jpg` - Hero section (left half)
- `/vip-cast-member.jpg` - TV Show Banner
- `/legacy-makers.jpg` or `/vip-cast-member.jpg` - Legacy section background

### **Book Page (`/book`)**
- `/book-cover.jpg` - Hero section
- `/torah-mathews-quote.jpg` - Author bio section (sitting on ladder)

### **About/Author Pages**
- `/torah-mathews-author.jpg` - Author headshot (blue dress)
- `/torah-mathews-quote.jpg` - Alternative photo

### **Legacy Member Page (`/legacy-member`)**
- `/legacy-makers.jpg` - Main image
- `/vip-cast-member.jpg` - Alternative

### **Unused Images (Available)**
- `/book-cover-alt-1.jpg` through `/book-cover-alt-4.jpg` - Alternative book covers
- `/jigsaw-puzzle.png` - Metaphor graphic (could be used for recovery methods)
- Screenshots in `/public/` - Development reference images

### **Logo (Global)**
- `/torah-logo.jpg` - Used in header/footer across all pages

---

## 🗺️ Navigation Structure

### Desktop Navigation
- **Header:** Logo centered at top
- **Nav Bar:** Below logo, horizontal menu with dropdowns
- **Dropdowns:** Appear on hover, smooth transition
- **Active States:** Underline or color change on current page

### Mobile Navigation
- **Hamburger Icon:** Top right
- **Slide-out Menu:** Full-screen overlay
- **Dropdowns:** Accordion-style expand/collapse
- **Close Button:** X icon to close menu

### Footer Navigation
- Minimal footer links
- Social media icons
- Copyright info

---

## 🎨 Styling & Design System

### Color Palette

**Primary Colors:**
```css
--teal: #209bab;
--teal-hover: #1a7a86;
--gold: #b18c57;
--gold-hover: #9a7549;
```

**Neutral Colors:**
```css
--gray-900: #111827;  /* Headings */
--gray-700: #374151;  /* Body text */
--gray-200: #e5e7eb;  /* Borders */
--gray-50: #f9fafb;   /* Backgrounds */
--white: #ffffff;
```

**Teal Usage:**
- Primary buttons
- Links
- Accents
- Highlighted sections

**Gold Usage:**
- Section headings
- Secondary buttons
- Special CTAs
- Legacy branding

### Typography

**Font Family:**
- System font stack (Next.js default)
- Sans-serif

**Heading Scales:**
```css
h1: text-4xl md:text-5xl (36px → 48px)
h2: text-3xl md:text-4xl (30px → 36px)
h3: text-2xl (24px)
h4: text-xl (20px)
```

**Body Text:**
```css
Base: text-base (16px)
Large: text-lg (18px)
Small: text-sm (14px)
```

**Font Weights:**
- Regular: `font-normal` (400)
- Medium: `font-medium` (500)
- Semibold: `font-semibold` (600)
- Bold: `font-bold` (700)

### Spacing

**Container:**
- Max width: `max-w-6xl` (1152px)
- Padding: `px-4` → `px-8` → `px-12` (responsive)

**Sections:**
- Padding: `py-16` or `py-20` (64px or 80px vertical)

**Gaps:**
- Small: `gap-2` or `gap-3` (8px or 12px)
- Medium: `gap-4` or `gap-6` (16px or 24px)
- Large: `gap-8` or `gap-10` (32px or 40px)

### Responsive Breakpoints

```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

### Common Patterns

**CTA Button (Teal):**
```tsx
<Button className="bg-[#209bab] text-white hover:bg-[#1a7a86] font-semibold px-8 py-6">
  Call to Action
</Button>
```

**CTA Button (Gold):**
```tsx
<Button className="bg-[#b18c57] text-white hover:bg-[#9a7549] font-semibold px-8 py-6">
  Call to Action
</Button>
```

**Section Heading (Gold):**
```tsx
<h2 className="text-4xl font-bold text-[#b18c57] mb-6 text-center">
  Section Title
</h2>
```

**Quote Box (Teal):**
```tsx
<div className="bg-[#209bab]/10 p-6 rounded-lg border-l-4 border-[#209bab]">
  <p className="font-semibold text-xl text-gray-900">Quote text</p>
</div>
```

---

## 📝 Forms & Integrations

### HubSpot Integration

**Portal ID:** `46765588`
**Region:** `na1`

**Active Forms:**

1. **Bulk Order Form**
   - **Location:** `/book` page
   - **Form ID:** `3c31c4dd-6cf4-4e48-972e-d0bc354e73dd`
   - **Purpose:** Bulk book orders (churches, organizations)

2. **Sample Chapter Form** (Pending)
   - **Location:** `/book` page (anchor: `#sample-chapter`)
   - **Form ID:** TBD
   - **Purpose:** Download sample chapter, lead capture
   - **Status:** ⚠️ TODO - Need form ID from HubSpot

### Form Implementation

**Component:** `src/components/hubspot-form.tsx`

**How it works:**
1. Component accepts `portalId`, `formId`, `region` props
2. Uses `useEffect` to load HubSpot script on client side
3. Creates unique div ID for form container
4. HubSpot script injects form into div

**Script Loading:**
```tsx
useEffect(() => {
  const script = document.createElement('script');
  script.src = '//js.hsforms.net/forms/embed/v2.js';
  script.async = true;
  script.onload = () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId,
        formId,
        region,
        target: `#hubspot-form-${formId}`,
      });
    }
  };
  document.body.appendChild(script);
}, [portalId, formId, region]);
```

---

## ⚠️ Pending TODOs

### High Priority

#### 1. Amazon Book Link
- **File:** `src/app/book/page.tsx`
- **Line:** 40
- **Current:** `href="#"`
- **Needed:** Direct Amazon purchase URL
- **Format:** `https://www.amazon.com/dp/[ASIN]`

**What to do when ready:**
```tsx
// Replace this:
<a href="#" className="...">Buy on Amazon</a>

// With this:
<a href="https://www.amazon.com/dp/[ACTUAL_ASIN]" className="...">Buy on Amazon</a>
```

---

#### 2. Sample Chapter HubSpot Form
- **File:** `src/app/book/page.tsx`
- **Lines:** 219-226
- **Current:** Placeholder text
- **Needed:**
  - HubSpot Form ID for sample chapter download
  - Portal ID (likely same: `46765588`)
  - Region (likely same: `na1`)

**What to do when ready:**
```tsx
// Replace placeholder section with:
<div className="max-w-2xl mx-auto">
  <HubSpotForm
    portalId="46765588"
    formId="[SAMPLE_CHAPTER_FORM_ID]"
    region="na1"
  />
</div>
```

---

### Medium Priority

#### 3. Content Placeholders
- Various pages contain `[Placeholder: ...]` text
- Replace with final content as it becomes available
- Search codebase for `[Placeholder` to find all instances

---

### Low Priority

#### 4. Blog System
- `/blogs` page exists but likely needs CMS integration
- Consider: Contentful, Sanity, or Markdown files
- Add blog post templates

#### 5. SEO Optimization
- Add Open Graph meta tags
- Add Twitter Card meta tags
- Add structured data (JSON-LD)
- Optimize images (use Next.js Image component)

#### 6. Analytics
- Add Google Analytics or similar
- Track button clicks, form submissions
- Monitor page performance

---

## 📚 Related Documentation

- **README.md** - Setup and overview
- **WEBSITE-TODOS.md** - Current task list
- **public/IMAGE-INVENTORY.md** - Complete image catalog

---

## 🔄 Deployment Process

### Automatic Deployment (Current)
1. Push to `main` branch on GitHub
2. Netlify detects change
3. Runs `bun run build`
4. Deploys to production
5. Site live in ~2-3 minutes

### Manual Testing Before Push
```bash
# Build locally
bun run build

# Test production build
bun start

# Check for errors
bun run lint
```

---

## 📞 Contact & Support

**Project Owner:** Torah Mathews
**Email:** admin@torahmathews.com
**Repository:** [github.com/risetothriveacademy/torah-mathews-website](https://github.com/risetothriveacademy/torah-mathews-website)

---

**Last Updated:** December 4, 2025
**Version:** 1.0
**Maintained By:** Development Team
