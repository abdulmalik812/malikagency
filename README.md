# Malik Agencies

Complete Next.js source for the dark, full-width redesign. Existing agency copy, services, project names, contact information and team details are kept. Supplied logos and founder image remain in `public/`.

## Windows: open and run in VS Code

1. In File Explorer, turn on View > Show > File name extensions.
2. Rename `malik-agency-round3-final.txt` to `malik-agency-round3-final.zip`.
3. Right-click the ZIP > Extract All. Open the extracted folder in VS Code.
4. Install Node.js 22 LTS or newer if needed, then restart VS Code.
5. Open Terminal > New Terminal, and run:

```powershell
npm install
npm run dev
```

6. Open `http://localhost:3000`. Stop the server with Ctrl+C.

Check the production version:

```powershell
npm run lint
npm run build
npm run start
```

Use `npm ci` for an exact lockfile install. Do not run `dev` and `start` on port 3000 together.

## Stack and motion

Next.js App Router, React, TypeScript, Tailwind CSS 4, GSAP + ScrollTrigger, Lenis, Motion for React (`framer-motion`), Three.js, Lucide and Resend. Inter is bundled locally, with no runtime Google Fonts request.

- Original chrome/glass software-system model and subtle pointer response
- Six-chapter diagonal scroll journey with progressive layer assembly
- Smooth wheel/anchor scrolling, custom scrollbar and progress line
- Route entries, project filters and mobile menu animation
- Responsive layouts from 320px phones to wide screens
- Reduced-motion support, visible focus rings, skip link and mobile menu focus loop
- WebGL fallback and render pause when hidden/offscreen
- No star/sparkle icons; different buttons use purpose-matched icons

## Pages and content boundaries

Home, Services, Work, About and Contact are rebuilt. Seven `/work/[slug]` routes now show the project names/descriptions, including LOLPDF with a real product screenshot and live-site link; the original source had linked to these pages but supplied no detailed case studies. No client outcomes, metrics or testimonials have been invented. The project artwork is abstract identity treatment, not actual product screenshots.

The source had Privacy Policy and Terms of Service labels but no legal documents. These remain non-interactive labels rather than broken links or invented legal text. Supply approved policies before linking them at public launch.

Original social links, email recipient and canonical domain are preserved. Confirm they belong to the agency before public launch.

## Contact email setup

The form no longer pretends an email was sent when configuration is missing.

```powershell
Copy-Item .env.example .env.local
```

Edit `.env.local` with your own `RESEND_API_KEY` and `CONTACT_FROM_EMAIL`. Use a sender on a domain verified in your Resend account. Restart the server. Never commit secrets.

The recipient remains `hello@malikagencies.com` in `lib/resend.ts`. Confirm the address with the owner. Real email delivery has not been tested or performed during development.

The endpoint checks JSON types, field limits, email format, option allowlists and same-host origin. A honeypot and local throttle are included. Emails are plain text, preventing HTML injection through user fields. Provider errors and missing credentials return honest errors.

For public serverless/multi-instance hosting, add shared rate limiting or WAF rules. The local email-keyed throttle resets on restart and is not complete abuse protection.

## Folder map

```text
app/
  globals.css             Responsive design system
  layout.tsx              Shared shell, metadata, local font
  template.tsx            Route entry animation
  page.tsx                Home composition
  services/page.tsx       Detailed original service information
  about/page.tsx          Original story and team
  contact/page.tsx        Contact page
  work/work-client.tsx    Project filters
  work/[slug]/page.tsx    Existing project summary routes
  api/contact/route.ts    Validated server-side email
components/
  experience/             GSAP, smooth scroll, loader, 3D sculpture
  home/                   Separate home section files
  layout/                 Navbar and footer
  contact/                Form
  ui/                     Reveals, artwork and social icons
lib/
  projects.ts             Original project data
  resend.ts               Mail recipient and client
public/
  fonts/                  Local Inter font
  nav_logo.png            Original logo
  footer_logo.png         Original footer logo
  photo_founder.png       Original founder image
```

## Deployment

Use a Next.js-capable host. On Vercel, select Next.js, use the root directory and `npm run build`. Set private contact variables in the host environment. Static-only hosting will not run the contact API.

The canonical domain is the original `https://malikagencies.com`. Update `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts` if deploying elsewhere.

The archive excludes node_modules, .next, Git history, credentials and preview recordings. `TEST-NOTES.md` records checks and launch needs. `GUIDE-HINGLISH.md` explains the project simply.

## Current revision: software system scroll journey

- Original Three.js model built from machined trays, glass panels, chip pins, API nodes and a product interface. No downloaded 3D model or external model request is needed.
- The same canvas travels through all six home chapters, alternating left/right while the separated layers assemble into a complete system.
- Mobile uses dedicated visual slots above the copy, avoiding text overlap. The model is clipped to those slots as the page scrolls.
- Adaptive pixel resolution protects slower devices without changing the scroll path. Geometry is batched by material/layer; shadow updates are limited to assembly changes. Rendering pauses in hidden tabs and outside the home story.
- Reduced-motion mode shows the completed model without assembly or pointer rotation. It still follows the page layout.
- No drag/reset UI or magnetic buttons. Normal focus, color and shine feedback remains.
- Inner pages have section-rule reveals, heading clips, project depth and refined form focus treatment.
- The cumulative changed-files archive can replace files at the same paths in the first delivery or either earlier revision. Restart the development server afterward. Unused older model files can be removed, but do not affect the site if left in place.
