<h1 align="center">Malik Agencies</h1>

<p align="center">
  <strong>World-class software for ambitious businesses.</strong><br/>
  Web apps · Mobile applications · AI & Automation · Custom software
</p>

<p align="center">
  <a href="https://malikagencies.com">🌐 Live Site</a> ·
  <a href="#-getting-started">Quick Start</a> ·
  <a href="#-project-structure">Project Structure</a> ·
  <a href="#-deployment">Deployment</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-13-0055FF?logo=framer" alt="Framer Motion" />
</p>

---

## ✨ Overview

**Malik Agencies** is the official agency website for a full-stack software development studio. Built with a premium dark aesthetic, smooth animations, and a fully responsive layout, it showcases services, past work, the founding team, and a working contact form powered by [Resend](https://resend.com).

### Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Services overview, Process, Featured work, CTA |
| `/services` | Full services breakdown (Web, Mobile, AI, Custom) |
| `/work` | Portfolio / case studies |
| `/about` | Founder story & team |
| `/contact` | Contact form with email delivery via Resend API |

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 + custom CSS design tokens |
| **Animations** | Framer Motion 13 |
| **UI Primitives** | Radix UI (Dialog, Select, Slot) |
| **Icons** | Lucide React |
| **Email** | [Resend](https://resend.com) |
| **Font** | Inter (via `next/font/google`) |
| **Image Optimization** | Next.js Image (AVIF + WebP) |
| **Linting** | ESLint 9 with `eslint-config-next` |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>=18.17`
- **npm** `>=9` (or `yarn` / `pnpm` / `bun`)

### 1. Clone the repository

```bash
git clone https://github.com/malikagencies/malikagency.git
cd malikagency
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in your key:

```env
# Get a free API key at https://resend.com
RESEND_API_KEY=re_your_api_key_here
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
malikagency/
│
├── app/                          # Next.js App Router
│   ├── about/
│   │   └── page.tsx              # About / Team page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # POST /api/contact — email via Resend
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── services/
│   │   └── page.tsx              # Services page
│   ├── work/
│   │   ├── page.tsx              # Work page (server shell)
│   │   └── work-client.tsx       # Work page (client component)
│   ├── globals.css               # Global styles & design tokens
│   ├── layout.tsx                # Root layout (Navbar + Footer)
│   ├── page.tsx                  # Home page
│   ├── robots.ts                 # Robots.txt generation
│   └── sitemap.ts                # Dynamic sitemap
│
├── components/
│   ├── contact/
│   │   └── contact-form.tsx      # Contact form with validation
│   ├── home/
│   │   ├── hero.tsx              # Hero section
│   │   ├── services-overview.tsx # Services cards
│   │   ├── process-section.tsx   # How we work
│   │   ├── featured-work.tsx     # Portfolio highlights
│   │   ├── trusted-approach.tsx  # Why choose us
│   │   └── cta-section.tsx       # Call to action
│   ├── layout/
│   │   ├── navbar.tsx            # Fixed navigation bar
│   │   └── footer.tsx            # Site footer
│   └── ui/
│       ├── icons.tsx             # Custom SVG icons
│       └── scroll-reveal.tsx     # Scroll animation wrapper
│
├── lib/
│   ├── resend.ts                 # Resend client singleton
│   └── utils.ts                 # `cn()` class utility
│
├── public/
│   ├── favicon.ico
│   ├── nav_logo.png              # Navbar logo
│   ├── footer_logo.png           # Footer logo
│   └── photo_founder.png         # Founder photo (About page)
│
├── .env.local.example            # Environment variable template
├── .gitignore
├── AGENTS.md                     # AI agent configuration
├── eslint.config.mjs
├── next.config.ts                # Next.js configuration
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## ⚙️ Environment Variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | ✅ Yes | Resend API key for contact form emails. Get one free at [resend.com](https://resend.com) |

---

## 📜 Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The fastest way to deploy is with [Vercel](https://vercel.com), the platform built by the creators of Next.js.

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository
3. Add the `RESEND_API_KEY` environment variable in the Vercel dashboard
4. Click **Deploy**

Vercel automatically handles builds, CDN caching, and preview deployments on every pull request.

### Other Platforms

This is a standard Next.js app and can be deployed on any platform that supports Node.js:

- **Netlify** — Use the `@netlify/plugin-nextjs` adapter
- **Railway / Render** — Build with `npm run build`, start with `npm run start`
- **Self-hosted** — Run behind Nginx or Caddy as a reverse proxy

---

## 🔒 Performance & Security

- `poweredByHeader: false` — removes the `X-Powered-By` header
- `reactStrictMode: true` — catches potential issues in development
- `compress: true` — gzip/brotli response compression
- Images served in **AVIF** and **WebP** formats via `next/image`
- Full **SEO** setup: meta tags, Open Graph, Twitter cards, sitemap, and robots.txt

---

## 📬 Contact

Have a project in mind? Reach out:

- 🌐 [malikagencies.com/contact](https://malikagencies.com/contact)
- 🐦 [@malikagencies](https://twitter.com/malikagencies)
- 💼 [LinkedIn](https://linkedin.com/company/malikagencies)
- 🐙 [GitHub](https://github.com/malikagencies)

---

## 📄 License

This project is proprietary. All rights reserved © Malik Agencies.
