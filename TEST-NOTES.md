# Verification and launch notes

Completed:
- Production build and TypeScript pass.
- ESLint passes.
- Chromium: home, services, work, about, contact and a project overview return 200 at 1440, 768, 390 and 320px. No horizontal overflow, page errors or broken supplied images.
- Portfolio counts: Web 2, Mobile 2, AI 1, Custom 1, All 6.
- Mobile navigation and Escape close pass.
- Unconfigured contact form shows an honest error. Invalid field types return 400; cross-origin submissions return 403. No real email sent.
- Desktop and mobile screenshots inspected. Founder crop and desktop hero overlap corrected after review.
- Actual walkthrough sampled frames inspected; a first recording with a scroll-camera issue was replaced.
- Supplied logos/founder PNGs unchanged. No sparkle/star icons rendered.
- Production npm audit: zero findings after compatible dependency updates.

Remaining launch needs:
- Configure a Resend key and verified sender, and verify the original recipient. Live delivery not tested.
- Supply approved legal policies and detailed case studies/product screenshots.
- Verify original canonical domain and social URLs.
- Use shared rate limiting/WAF for public multi-instance hosting.
- Complete real iOS Safari/Android hardware and assistive-technology checks.
- Full npm audit reports five high development-only findings in the Next lint plugin's glob chain. Its automatic fix requests a major downgrade; that was not forced. Runtime audit is clean. Check upstream lint dependency fixes before enforcing a zero-finding build policy.

Current round-4 mobile/tablet revision (adds framed stages, continuous glide, <=1023px stacked layout, LOLPDF card, faster model chunk start):
- Production build and lint pass.
- Repeated 24 route/viewport checks at 1440, 768, 390 and 320px: all 200, no overflow, broken images or browser page errors.
- Portfolio counts (Web 3, Mobile 2, AI 1, Custom 1, All 7), mobile menu Escape close and reduced-motion canvas pass.
- Original software-system scene renders in a single home canvas; observed 23 draw calls during the hero check (varies by visibility/shadow work).
- No drag/reset UI, magnetic button listeners or stock model requests.
- Desktop/mobile screenshots and scroll recordings reviewed before delivery.
- These checks use local Chromium software WebGL. Smoothness and GPU/thermal behavior on real devices still need hardware checks; no device-performance claim is made.
