# Torah Mathews Website - TODO List

> **📚 For complete project documentation, see:**
> - [README.md](./README.md) - Project overview & setup guide
> - [PROJECT-DOCUMENTATION.md](./PROJECT-DOCUMENTATION.md) - Detailed page-by-page breakdown
> - [public/IMAGE-INVENTORY.md](./public/IMAGE-INVENTORY.md) - Complete image catalog

---

## 🔴 **URGENT - Book Page Links (Waiting on Info)**

### 1. Amazon "Buy on Amazon" Button
**Location:** `src/app/book/page.tsx` - Line 40
**Current Status:** Not linked (`href="#"`)
**What I Need:**
- Direct Amazon purchase URL for "Transforming Pain into Power" book
- Format: `https://www.amazon.com/dp/[ASIN]` or full product URL

**Action When Ready:**
Update line 40 from:
```tsx
href="#"
```
To:
```tsx
href="[ACTUAL AMAZON URL]"
```

---

### 2. Download Sample Chapter Form
**Location:** `src/app/book/page.tsx` - Lines 219-226
**Current Status:** Placeholder text only (no actual form)
**What I Need:**
- HubSpot Form ID for sample chapter signup
- HubSpot Portal ID (if different from bulk order: 46765588)
- HubSpot Region (if different from bulk order: na1)

**Action When Ready:**
Replace placeholder (lines 219-226) with actual HubSpotForm component:
```tsx
<HubSpotForm
  portalId="[PORTAL_ID]"
  formId="[FORM_ID]"
  region="na1"
/>
```

---

## ✅ **COMPLETED - Homepage Updates (Saved but Not Deployed)**

### Changes Made (Ready to Deploy When Approved):
1. **50/50 Hero Layout**
   - Left 50%: Book cover image (full, no cropping)
   - Right 50%: Text content aligned towards right border

2. **MBA Credential Added to Header**
   - "TORAH MATHEWS, MBA" (MBA in smaller font)
   - Appears on all pages

3. **Book Cover Image Fix**
   - Full image visible (no bleeding/cropping)
   - Using `<img>` tag instead of background image

**Status:** Saved locally, needs to be pushed to GitHub for deployment

---

## 📋 **DEPLOYMENT BLOCKERS**

1. Cannot push to GitHub (authentication issue in Same environment)
2. Netlify builds from GitHub, so changes aren't live yet

**Solution Options:**
- Manual file update via GitHub web interface
- OR wait until we have all Book page links, then do one complete update

---

## 📝 **NOTES**

**GitHub Repo Info:**
- Repo: risetothriveacademy/transforming-pain-into-power-testimonial-book
- Kindle Account: A297WJLLD2ERAU
- Payment: 2691813 ontario inc.

**What to Get Before Next Update:**
1. ✅ Amazon book purchase URL (customer-facing link)
2. ✅ HubSpot sample chapter form credentials
3. (Optional) Any other Book page content updates

---

**Last Updated:** December 4, 2025
**Updated By:** Claude (Same AI Assistant)
