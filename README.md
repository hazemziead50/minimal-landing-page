# Nexcent - Minimal Landing Page

A pixel-perfect responsive landing page built from a Figma design specification using React, Vite, and Tailwind CSS.

---

## 📖 Overview

**Nexcent** is a modern, clean, and high-performance landing page designed for community and membership organizations. The project converts a comprehensive Figma design specification into modular, reusable, and accessible React components styled exclusively with Tailwind CSS utility classes.

---

## 🚀 Tech Stack

- **React (Vite)** – Modern frontend library with blazing-fast Vite build tooling and Hot Module Replacement (HMR).
- **Tailwind CSS** – Utility-first CSS framework configured with custom Figma color palettes in `tailwind.config.js`.
- **JavaScript (ES6+)** – Clean, modern, component-driven ECMAScript standards.

---

## ✨ Key Features

- **Component-Driven Architecture**: Fully modular sections and features:
  - `Navbar` – Sticky navigation with desktop links and mobile responsive menu.
  - `Hero` – Engaging introduction banner with illustrations and call-to-actions.
  - `Clients` – Trust badges and client showcase logos.
  - `Community` – Multi-card grid highlighting membership, association, and club tools.
  - `Unlock` – Detailed feature spotlight section with illustration.
  - `Achievements` – Interactive statistical counter showcase.
  - `Calender` – Design showcase and deep dive section.
  - `Customers` – Detailed customer testimonial, metrics, and partnership showcase.
  - `CommunityUpdates` – Responsive blog article cards with floating content overlays.
  - `Cta` – Conversion-focused call-to-action banner.
  - `Footer` – Comprehensive multi-column footer with newsletter input and social links.
- **Reusable UI Components**:
  - `Button` – Customizable button supporting multiple variants, styling extensions, and dynamic SVG arrows.
  - `ReadMore` – Interactive link element with hover transitions and inline SVG arrow icons.
- **Fully Responsive Design**: Fluid adaptation across Mobile (<768px), Tablet, and Desktop screen widths with smooth scroll navigation (`#home`, `#features`, `#community`, `#blog`, `#pricing`).
- **Zero Custom CSS Files**: 100% styled using Tailwind utility classes and theme extensions without bespoke stylesheet files.

---

## 📁 Project Structure

```text
minimal-landing-page/
├── public/                  # Static assets and favicon
├── src/
│   ├── assets/              # SVG illustrations, brand icons, and client logos
│   │   ├── images/          # Blog and article imagery
│   │   └── social icons/    # Social media icons
│   ├── components/          # Page sections & feature components
│   │   ├── ui/              # Reusable atomic UI elements
│   │   │   ├── Button.jsx   # Button with optional arrow icon & prop forwarding
│   │   │   └── ReadMore.jsx # Read more CTA with arrow icon
│   │   ├── Achievements.jsx # Key metrics and numbers
│   │   ├── Calender.jsx     # Product design & footer showcase
│   │   ├── Clients.jsx      # Client logos section
│   │   ├── Community.jsx    # Community management cards
│   │   ├── CommunityUpdates.jsx # Latest news & blog cards
│   │   ├── Cta.jsx          # Final call to action banner
│   │   ├── Customers.jsx    # Customer case study & testimonial
│   │   ├── Footer.jsx       # Footer with navigation and newsletter subscription
│   │   ├── Hero.jsx         # Hero banner with insights headline
│   │   ├── Navbar.jsx       # Navigation bar with responsive mobile menu
│   │   └── Unlock.jsx       # Pixelgrade features section
│   ├── constants/           # Global app constants
│   ├── App.jsx              # Main page composition
│   ├── index.css            # Tailwind directives and smooth scroll setup
│   └── main.jsx             # React application entry point
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Project dependencies and npm scripts
├── tailwind.config.js       # Custom design system colors & extensions
└── vite.config.js           # Vite build configuration
```

---

## 🎨 Theme & Design System

Custom colors defined in `tailwind.config.js` to match the Figma design:
- **Brand Colors**: `primary` (`#4CAF4F`), `secondary` (`#263238`), `info` (`#2194F3`)
- **Neutrals**: `neutral-black` (`#263238`), `neutral-d_grey` (`#4D4D4D`), `neutral-grey` (`#717171`), `neutral-l_grey` (`#89939E`), `neutral-grey_blue` (`#ABBED1`), `neutral-silver` (`#F5F7FA`), `neutral-white` (`#FFFFFF`)
- **Shades & Tints**: Tailored color scales (`shade-1` to `shade-5`, `tint-1` to `tint-5`)
- **Action Colors**: `action-warning` (`#FBC02D`), `action-error` (`#E53835`), `action-success` (`#2E7D31`)

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
Clone the repository and install dependencies:
```bash
npm install
```

### Development
Start the local development server:
```bash
npm run dev
```

### Production Build
Build optimized production assets:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```
