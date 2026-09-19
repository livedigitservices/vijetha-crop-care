# Vijetha Crop Care — Luxury Organic Agriculture Brand

A premium, award-winning static website built for **Vijetha Crop Care** — a high-end organic agricultural biotechnology brand operating across India.

The design embodies a sophisticated visual identity combining **Luxury + Nature + Agriculture + Trust + Sustainability**, utilizing deep emerald greens, warm ivory backgrounds, champagne-gold accents, editorial serif typography, and cinematic GSAP motion design.

---

## Brand Identity & Aesthetic Direction

- **Primary Color:** Dark Emerald & Deep Forest Green (`#062319` / `#0B2B1E`)
- **Secondary Surfaces:** Warm Ivory (`#FAF8F2`), Soft Beige (`#EBE6DD`), Rich Olive (`#2C3E2D`)
- **Luxury Accents:** Champagne Gold (`#C5A880` / `#D4AF37`)
- **Typography:**
  - Headings: `Cinzel` & `Cormorant Garamond` (High-contrast editorial serif)
  - Body & Navigation: `Plus Jakarta Sans` (Modern luxury sans-serif)

---

## Tech Stack

- **Vite** — High-performance frontend tooling
- **React 19** — Component architecture & state management
- **JavaScript (JSX)** — Clean, modern ECMAScript standard
- **Tailwind CSS v4** — High-performance utility styling with custom `@theme` variables
- **React Router v7** — Client-side routing with automatic scroll-to-top
- **GSAP & ScrollTrigger** — Cinematic editorial reveals, text reveals, and micro-interactions
- **Lucide React** — Lightweight, minimalist iconography

---

## Project Structure

```text
vijetha-crop-care/
├── public/
│   ├── favicon.svg              # Custom luxury brand emblem
│   ├── logo.svg                 # Vector brand crest & wordmark
│   └── images/
│       ├── hero/
│       ├── products/
│       ├── crops/
│       ├── farmers/
│       └── backgrounds/
│
├── src/
│   ├── assets/                  # Brand assets & media
│   ├── components/
│   │   ├── common/              # Button, SectionHeading, Container, Loader, ScrollToTop
│   │   ├── layout/              # Navbar, Footer, MobileMenu
│   │   ├── home/                # Hero, BrandIntro, ProductShowcase, CropCareStages,
│   │   │                        # WhyVijetha, FarmerStory, BrandPhilosophy, CTASection
│   │   ├── products/            # ProductCard, ProductGrid, ProductCategory, ProductDetails
│   │   ├── crops/               # CropSelector, CropCard, CropSolution
│   │   └── contact/             # ContactForm, ContactInfo
│   │
│   ├── pages/
│   │   ├── Home.jsx             # Cinematic landing page
│   │   ├── About.jsx            # Brand story, philosophy & scientific standards
│   │   ├── Products.jsx         # Full catalog with search & category filters
│   │   ├── ProductDetails.jsx   # Dynamic single-product detail page (/products/:id)
│   │   ├── CropCare.jsx         # 6-stage lifecycle & crop-specific protocols
│   │   └── Contact.jsx          # Field consultation enquiry & agronomy contacts
│   │
│   ├── data/
│   │   ├── products.js          # Curated organic formulations across 6 categories
│   │   ├── crops.js             # Crop challenges, growth stages & solutions
│   │   ├── navigation.js        # Site routing & footer configurations
│   │   └── company.js           # Company credentials, metrics, testimonials
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   └── useMediaQuery.js
│   │
│   ├── animations/
│   │   ├── heroAnimations.js    # GSAP timeline for hero entry
│   │   ├── scrollAnimations.js  # ScrollTrigger reveal utilities
│   │   └── pageTransitions.js   # Route change transitions
│   │
│   ├── styles/
│   │   ├── globals.css          # Tailwind v4 theme, fonts, custom scrollbars
│   │   └── animations.css       # Keyframes & subtle micro-interactions
│   │
│   ├── utils/
│   │   ├── constants.js         # Color tokens & brand strings
│   │   └── helpers.js           # Phone/email validators, image fallback
│   │
│   ├── App.jsx                  # Main application router
│   └── main.jsx                 # Vite application entry
│
├── .gitignore
├── index.html                   # Luxury typography & SEO metadata
├── package.json
└── vite.config.js               # Tailwind v4 Vite plugin integration
```

---

## Key Features

1. **Cinematic Hero**: Full-screen visual experience with high-contrast serif headlines, subtle scroll indicator, and GSAP text reveal.
2. **Editorial Product Showcase**: Tabbed filtering across 6 certified categories:
   - Organic Fertilizers
   - Bio Fertilizers
   - Organic Pest Control
   - Plant Growth Promoters
   - Soil Health Solutions
   - Organic Crop Protection
3. **Interactive Crop Care Lifecycle**: Chronological 6-stage agronomy stepper (Soil Prep → Seed Care → Growth → Flowering → Fruit Dev → Natural Protection).
4. **Targeted Crop Diagnostics**: Interactive crop selector covering Paddy, Cotton, Chilli, Tomato, Vegetables, Fruits, Pulses, and Commercial Crops.
5. **Dynamic Product Detail Engine**: Detailed views (`/products/:id`) displaying formulation analysis, active ingredients, dosage schedules, and suitable crops.
6. **Farmer Field Stories & Metrics**: Authentic regional testimonials and transparent empirical impact counters.
7. **Production-Ready Enquiry Architecture**: Comprehensive consultation form with frontend validation ready to connect to any backend API, CRM, or WhatsApp webhook.

---

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd vijetha-crop-care

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build

```bash
# Generate optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## Production & Scalability Notes

- **API / CMS Integration**: All product and crop data resides in cleanly typed, decoupled ES module arrays in `src/data/`, allowing effortless migration to headless CMS platforms (Strapi, Sanity, Contentful) or REST/GraphQL APIs.
- **Form Submission**: The `ContactForm.jsx` component has a mock asynchronous handler that can be pointed to a serverless function, Formspree, or custom webhook without modifying UI presentation.
- **SEO & Performance**: Pre-configured with semantic HTML5 tags, OpenGraph tags, responsive layout constraints, and optimized external Google Fonts.
