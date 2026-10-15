# Simple project guide

## Files ka role

`app/page.tsx` home ke sections ko order mein lagata hai. Har section `components/home/` mein alag file hai. Text badalna ho to usi section ki file kholo. Pura project replace karna zaruri nahi.

`app/globals.css` mein colours, spacing, buttons aur mobile layout hain. Purana `.container-apple` naam rakha hai, par fixed max-width hata diya. Layout screen ki width use karta hai, sirf useful edge padding rakhta hai.

## Animation ka flow

1. Experience component brand loader chalata hai.
2. Lenis wheel scrolling ko smooth karta hai.
3. GSAP ticker Lenis ko time deta hai; ScrollTrigger ko scroll updates milte hain.
4. Service rows aur process steps viewport ke hisaab se change hote hain.
5. Motion route entries, menu, reveals aur filters animate karta hai.
6. Three.js software-system draw karta hai. Pointer par angle thoda change hota hai.

Reduced motion on ho to extra movement band hota hai. WebGL available na ho to fallback shape dikhti hai. Object offscreen ho ya browser tab hidden ho to rendering pause hoti hai.

## Projects

`lib/projects.ts` mein original six projects hain. Filters isi data ko use karte hain. Summary page bhi isi data se banta hai. Source mein actual case studies nahi thi, isliye fake result ya client numbers nahi banaye.

## Form

Browser required fields check karta hai. Submit par server email, field type, length aur options validate karta hai. Resend configured ho tab email jata hai. API key missing ho to form success ka jhootha message nahi dikhata.

Secrets `.env.local` mein rakho, GitHub par mat upload karo. `.env.example` mein sirf variable names hain.

## Run and test

`npm install`, phir `npm run dev`. Browser mein localhost:3000 kholo. Final check: `npm run lint` aur `npm run build`. Production preview: `npm run start`.

Public launch se pehle real legal policies, email setup, domain/social ownership aur shared rate limiter check karna. Yeh code build/tested hai, lekin real inbox delivery aur real iPhone Safari alag checks hain.

## Naya scroll-story revision
Home par ab original software-system model hai: data, API, build aur product-interface layers. Scroll karne par layers dheere dheere judti hain aur model left-right diagonal journey karta hai. Mobile par model ke alag slots hain, isliye text ke upar nahi aata. Koi downloaded laptop/bust asset nahi chahiye. Drag pill aur magnetic buttons nahi hain. Reduced motion mein model complete rehta hai; assembly aur pointer tilt band hain.

`components/experience/scroll-sculpture.tsx` model aur uska scroll flow control karta hai. `app/page.tsx` mein six story chapters hain. `app/globals.css` ke home-story rules unka desktop/mobile layout sambhalte hain.
