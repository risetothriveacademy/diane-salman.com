# Torah Mathews Website - Image Inventory

## 📁 Public Folder Images

All images are located in `/public/` and can be referenced in the app as `/image-name.jpg`

---

## 🖼️ **Primary Images**

### **1. Logo**
- **File:** `torah-logo.jpg` (16 KB)
- **Original:** `Toorah__Mathews__Logo.jpg`
- **Usage:** Header, Footer, Branding
- **Reference:** `/torah-logo.jpg`

### **2. Book Cover (Primary)**
- **File:** `book-cover.jpg` (133 KB)
- **Original:** `book-cover.jpg.jpg`
- **Usage:** Book Landing Page hero section
- **Reference:** `/book-cover.jpg`

### **3. Author Photo (Blue Dress Headshot)**
- **File:** `torah-mathews-author.jpg` (183 KB)
- **Original:** `torah-mathews-author.jpg.jpg`
- **Usage:** Homepage hero section background, About page, Author page, Speaker page
- **Reference:** `/torah-mathews-author.jpg`

### **4. Sitting on Ladder Photo (Yellow Pants, Navy Blazer)**
- **File:** `torah-mathews-quote.jpg` (172 KB)
- **Original:** `torah-mathews-quote..jpg`
- **Usage:** Homepage Core Values section, Book promotional graphics
- **Reference:** `/torah-mathews-quote.jpg`
- **Note:** This is the iconic sitting-on-white-ladder photo matching the original torahmathews.com design

### **5. Legacy Makers**
- **File:** `legacy-makers.jpg` (228 KB)
- **Original:** `legacy_makers_.jpg`
- **Usage:** Legacy Member page, About section
- **Reference:** `/legacy-makers.jpg`

---

## 📚 **Book Cover Variations (Rise & Thrive Series)**

### **Alternative Book Covers:**
- `book-cover-alt-1.jpg` (137 KB) - Rise_and_Thrive_Series_(1).jpg
- `book-cover-alt-2.jpg` (77 KB) - Rise_and_Thrive_Series_(2).jpg
- `book-cover-alt-3.jpg` (133 KB) - Rise_and_Thrive_Series_(4).jpg
- `book-cover-alt-4.jpg` (31 KB) - Rise_and_Thrive_Series_(6_x_9_in)_(3).jpg

**Usage:** Different book cover designs for testing or different pages

---

## 🎯 **Recommended Image Placement**

### **Homepage (`/`)**
- Hero background: `/torah-mathews-author.jpg` (blue dress headshot)
- Core Values section photo: `/torah-mathews-quote.jpg` (sitting on ladder)
- Logo (header/footer): `/torah-logo.jpg`

### **Book Landing Page (`/book`)**
- Book cover hero: `/book-cover.jpg`
- Alternative covers (if needed): `/book-cover-alt-1.jpg`, etc.

### **About Page (`/about`)**
- Hero/main photo: `/torah-mathews-author.jpg`

### **Author Page (`/author`)**
- Main photo: `/torah-mathews-author.jpg`

### **Speaker/Speaking Pages (`/speaker`, `/speaking`)**
- Speaker photo: `/torah-mathews-author.jpg`

### **Legacy Member Page (`/legacy-member`)**
- Main image: `/legacy-makers.jpg`

---

## 🔧 **How to Use These Images in Your Code**

### **Next.js Image Component (Recommended):**
```tsx
import Image from "next/image";

<Image
  src="/torah-logo.jpg"
  alt="Torah Mathews Logo"
  width={200}
  height={100}
/>
```

### **Standard HTML img tag:**
```tsx
<img src="/book-cover.jpg" alt="Transforming Pain into Power Book Cover" />
```

### **CSS Background Image:**
```css
background-image: url('/torah-mathews-quote.jpg');
```

---

## 📊 **Total Images:** 9 files, ~1.1 MB total

✅ All images copied from `/uploads/` folder
✅ Renamed for clarity and consistency
✅ Ready to use throughout the website
