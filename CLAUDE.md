# CP Home & Paint — Website Project

## Business Info
- **Legal Name:** CP Home Improvements & Paint LLC
- **Brand Name:** CP Home & Paint
- **Domain:** cphomeandpaint.com
- **Phone:** (336) 941-1955
- **Email:** cphomeandpaint@gmail.com
- **Service Area:** Washington DC, Virginia, and Maryland (DMV metro area)
- **Facebook:** https://www.facebook.com/people/Cp-home-improvements-paint-llc/100086803976083/
- **Instagram:** @cphomeimprovementspaint
- **Brand positioning:** Small, family-owned home improvement company. "We guarantee that we'll give your home the highest level of care, and treat it as our own with great attention to detail."
- **No claims to make:** licensed/insured, free estimates, years of experience

## Tech Stack
- **Framework:** Next.js 16 (App Router, TypeScript, Turbopack)
- **Styling:** Tailwind CSS 4 (with `@theme inline` tokens)
- **Fonts:** Inter Tight (headings, 500-800), Inter (body)
- **Email:** Resend (`resend`) via API route
- **Deployment target:** Vercel (recommended) or static export

## Design System

### Colors
| Token   | Hex     | Usage               |
|---------|---------|---------------------|
| ink     | #0B1220 | Primary text, dark bg |
| slate   | #1E293B | Secondary text       |
| stone   | #F6F7F9 | Section backgrounds  |
| cloud   | #E7EAEE | Borders, dividers    |
| accent  | #2B3A67 | CTAs, links, brand   |

### Radii
- Buttons: 10px (`--radius-btn`)
- Cards: 14px (`--radius-card`)

### Button Variants
- `.btn-primary` — solid accent background
- `.btn-secondary` — outline with accent border
- `.btn-ghost` — transparent, subtle hover

### Typography Classes
- Headings use `font-heading` (Inter Tight)
- Body uses `font-body` (Inter)
- Utility classes: `font-600`, `font-700`, `font-800`

### Icon System
- **All icons are inline SVG** (Heroicons style, 24x24, strokeWidth 1.5-2)
- **No emoji** anywhere on the site — formal, premium aesthetic
- Social icons (Instagram, Facebook) are brand SVGs with `fill="currentColor"`

### CSS Layer Architecture (Critical)
All global styles MUST be inside `@layer` blocks so Tailwind utilities can override them:
- `@layer base { }` — resets, html/body, heading defaults
- `@layer components { }` — section-padding, container-site, buttons
- `@layer utilities` — Tailwind's own utilities (highest priority)

**Never write CSS rules outside a `@layer`** — unlayered CSS beats all `@layer` rules in Tailwind CSS 4.

## Project Structure
```
site/
├── .env.local              (Resend API keys — NOT committed)
├── public/
│   └── images/
│       ├── bathrooms/      (24 images)
│       ├── carpentry/      (8 images)
│       ├── kitchens/       (1 image)
│       ├── flooring-hardwood/ (1 image)
│       ├── flooring-lvp/   (8 images)
│       ├── painting/       (5 images)
│       ├── outdoor/        (9 images)
│       ├── exterior/       (14 images)
│       └── general-repairs/ (empty, placeholder)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts  (Resend API — dual email: owner + customer confirmation)
│   │   ├── globals.css       (design tokens, @layer base/components, button classes)
│   │   ├── layout.tsx        (fonts, metadata, OG tags — DC/VA/MD SEO)
│   │   └── page.tsx          (main composition — 10 sections)
│   └── components/
│       ├── Header.tsx        (fixed nav, mobile hamburger, phone CTA)
│       ├── Hero.tsx          (full-bleed bg image, gradient overlay, family badge, trust indicators)
│       ├── TrustStrip.tsx    (4-stat bar on accent bg, SVG icons)
│       ├── Services.tsx      (12 image cards with gradient overlay, hover effects)
│       ├── Portfolio.tsx     (filterable gallery, 33 images, 8 categories)
│       ├── LeadForm.tsx      (Resend-powered form, success/error states, contact info + social links)
│       ├── Booking.tsx       (calendar placeholder, call CTA)
│       ├── Testimonials.tsx  (3 review cards, SVG stars, quote decoration)
│       ├── FAQ.tsx           (8 items, accordion)
│       └── Footer.tsx        (3-column: brand/social, services list, quick links)
```

## Page Sections (top to bottom)
1. **Header** — Fixed top, logo left, nav center, phone CTA right, mobile hamburger
2. **Hero** — Full-bleed bg image (75% opacity), gradient overlay (left-heavy for text), "Family-Owned & Operated" badge, headline, Facebook intro text, dual CTAs (Get a Free Quote + Call), trust indicators (DC/VA/MD, Residential & Commercial, Same-Day Response)
3. **TrustStrip** — 4 stats on accent (dark blue) bg: 70+ projects, 12 categories, 24hr response, family-owned
4. **Services** — 12 image cards (3-col grid), gradient-to-top overlay, hover: image scales 110%, "Get a Quote" arrow reveals, each card links to #contact
5. **Portfolio** — Category filter tabs + image grid with hover overlay captions
6. **LeadForm** — Dark bg (ink). Left: contact info with SVG icons (phone, email, response time) + Instagram/Facebook links. Right: form with service dropdown, sends via Resend API, success/error states
7. **Booking** — Calendar placeholder with SVG icon, "Call (336) 941-1955" CTA
8. **Testimonials** — 3 review cards with SVG stars, decorative quote mark SVG, border separator
9. **FAQ** — 8-item accordion with "+" toggle (rotates to x)
10. **Footer** — 3-column: brand description + social links, services list, quick links. LLC branding.

## Resend Integration

### Setup Required
1. Create a Resend account at https://resend.com
2. Create an API key from the dashboard
3. Add and verify your domain (cphomeandpaint.com) in Resend
4. Update `.env.local` with your keys:
```
RESEND_API_KEY=re_your_actual_api_key
RESEND_FROM_EMAIL=CP Home & Paint <noreply@cphomeandpaint.com>
CONTACT_EMAIL=cphomeandpaint@gmail.com
```

### How It Works
- Customer fills out the form on the site
- POST request hits `/api/contact` with `{ name, email, phone, service, message }`
- Two emails are sent via `resend.emails.send()`:
  1. **Owner notification** — formatted HTML table with all form data, reply-to set to customer
  2. **Customer confirmation** — thank you email with 24hr response promise and contact info
- Form shows success state with confirmation, or error state with retry option

### Environment Variables
| Variable | Purpose | Example |
|----------|---------|---------|
| `RESEND_API_KEY` | Resend API key | `re_xxxxxxxx` |
| `RESEND_FROM_EMAIL` | Verified sender (with display name) | `CP Home & Paint <noreply@cphomeandpaint.com>` |
| `CONTACT_EMAIL` | Owner inbox for leads | `cphomeandpaint@gmail.com` |

## Commands
```bash
cd site
npm run dev    # Start dev server (Turbopack)
npm run build  # Production build
npm run start  # Serve production build
```

## Image Naming Convention
`{category}-{description}-{number}.jpeg`
- Categories: bathroom, carpentry, kitchen, hardwood, lvp, painting, outdoor, exterior
- Descriptions use kebab-case
- Numbers are zero-padded (01, 02, etc.)

## Design Decisions & Notes
- Single-page layout (no routing needed beyond index)
- **Premium corporate aesthetic** — formal fonts, no emojis, SVG icons only
- **Family company messaging** woven throughout (hero badge, intro text, trust strip, footer)
- **Customer-first UX**: easy contact (phone/email/form), response time visible, services browsable, social proof
- Hero contrast: image at 75% opacity + left-heavy gradient + text drop shadows for readability
- Services: image cards with gradient overlays (not flat icon cards)
- Smooth scroll via CSS `scroll-behavior: smooth`
- Booking section is a placeholder — swap with Google Calendar iframe when ready
- Testimonials are placeholder content — replace with real reviews
- No dark mode (not needed for contractor site)
- All 70 original WhatsApp images renamed and categorized into 9 folders
- Portfolio component shows best 33 images from the collection
- Mobile-first responsive design throughout
- Resend handles transactional email (dual email: owner + customer)
- **CSS layers** are critical: all base/component styles MUST be inside `@layer` blocks for Tailwind CSS 4 compatibility

## Next Steps
- [ ] Replace `RESEND_API_KEY` in `.env.local` with real key
- [ ] Verify sender domain in Resend (cphomeandpaint.com)
- [ ] Add real Google Calendar iframe to Booking section
- [ ] Replace placeholder testimonials with real reviews
- [ ] Add favicon and OG image
- [ ] Configure domain (cphomeandpaint.com) on Vercel
- [ ] Optimize images (WebP conversion, blur placeholders)
- [ ] Add loading animations (Intersection Observer or Framer Motion)
- [ ] SEO refinement (structured data, sitemap.xml)
