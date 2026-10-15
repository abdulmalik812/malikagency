"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
gsap.registerPlugin(ScrollTrigger);
// Keep smooth-scroll time in sync after a slow frame or tab pause.
gsap.ticker.lagSmoothing(0);

export function Experience() {
  const pathname = usePathname();
  const loader = useRef<HTMLDivElement>(null), bar = useRef<HTMLDivElement>(null), cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let gone = false;
    const shots = loader.current ? gsap.utils.toArray<HTMLElement>(loader.current.querySelectorAll(".loader-shot")) : [];
    const countEl = loader.current?.querySelector<HTMLElement>(".loader-count") ?? null;
    const tl = gsap.timeline();
    if (!reduced && shots.length) {
      const step = .17, reveal = .3;
      shots.forEach((shot, i) => {
        if (!i) return;
        tl.fromTo(shot, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: reveal, ease: "power2.out" }, i * step);
      });
      shots.forEach((shot, i) => tl.fromTo(shot.querySelector("img"), { scale: 1.22 }, { scale: 1.04, duration: reveal + .5, ease: "power2.out" }, i * step));
      const cycleEnd = (shots.length - 1) * step + reveal;
      const counter = { v: 0 };
      tl.to(counter, { v: 100, duration: cycleEnd, ease: "power1.inOut", onUpdate: () => { if (countEl) countEl.textContent = String(Math.round(counter.v)); } }, 0);
    } else if (countEl) countEl.textContent = "100";
    tl.to(".loader-line span", { scaleX: 1, duration: reduced ? 0 : 1.6, ease: "power2.inOut" }, reduced ? 0 : .2);
    // Hold the loader until the page beneath has actually loaded (with a cap),
    // plus a minimum dwell so the image cycle reads, then slide away.
    const pageLoaded = new Promise<void>(resolve => { if (document.readyState === "complete") resolve(); else addEventListener("load", () => resolve(), { once: true }); });
    const minDwell = new Promise<void>(resolve => setTimeout(resolve, reduced ? 0 : 3100));
    const cap = new Promise<void>(resolve => setTimeout(resolve, 5600));
    if (!(window as unknown as { __holdLoader?: boolean }).__holdLoader) Promise.all([minDwell, Promise.race([pageLoaded, cap])]).then(() => { if (!gone) gsap.to(loader.current, { yPercent: -100, duration: reduced ? 0 : .55, ease: "power4.inOut" }); });
    const lenis = reduced ? null : new Lenis({ duration: 1.1, smoothWheel: true, anchors: { offset: -100 } });
    lenis?.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis?.raf(t * 1000); gsap.ticker.add(tick);
    const update = () => { const max = document.documentElement.scrollHeight - innerHeight; if (bar.current) bar.current.style.transform = `scaleX(${max ? scrollY / max : 0})`; };
    addEventListener("scroll", update, { passive: true });
    // Custom cursor: white difference-blend ball, grows over interactive targets.
    let cursorCleanup = () => {};
    if (!reduced && matchMedia("(hover: hover) and (pointer: fine)").matches && cursor.current) {
      const ball = cursor.current; let cx = -100, cy = -100, tx2 = -100, ty2 = -100, scale = 1, tScale = 1, raf = 0, shown = false;
      const follow = () => { raf = requestAnimationFrame(follow); cx += (tx2 - cx) * .16; cy += (ty2 - cy) * .16; scale += (tScale - scale) * .14; ball.style.transform = `translate(${cx - 7}px, ${cy - 7}px) scale(${scale})`; };
      const cmove = (e: PointerEvent) => { tx2 = e.clientX; ty2 = e.clientY; if (!shown) { shown = true; ball.style.opacity = "1"; } };
      const cover = (e: PointerEvent) => { tScale = (e.target as HTMLElement).closest("a,button,[role=button],input,select,textarea,label,[data-cursor]") ? 2.6 : 1; };
      const cout = () => { shown = false; ball.style.opacity = "0"; };
      addEventListener("pointermove", cmove, { passive: true }); addEventListener("pointerover", cover, { passive: true }); document.documentElement.addEventListener("pointerleave", cout);
      raf = requestAnimationFrame(follow);
      cursorCleanup = () => { cancelAnimationFrame(raf); removeEventListener("pointermove", cmove); removeEventListener("pointerover", cover); document.documentElement.removeEventListener("pointerleave", cout); };
    }
    return () => { gone = true; cursorCleanup(); tl.kill(); lenis?.destroy(); gsap.ticker.remove(tick); removeEventListener("scroll", update); };
  }, []);
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];
    const ctx = gsap.context(() => {
      if (reduced) return;
      const desktop = matchMedia("(min-width: 768px)").matches;
      // Reversible scroll choreography, kept short so it never blocks reading.
      gsap.utils.toArray<HTMLElement>(".section-heading h2, .process-heading h2").forEach(heading => {
        gsap.fromTo(heading, { clipPath: "inset(0 0 100% 0)", y: 55, opacity: .25 }, { clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1, duration: .85, ease: "power3.out", scrollTrigger: { trigger: heading, start: "top 94%", toggleActions: "play none none none" } });
      });
      gsap.utils.toArray<HTMLElement>(".service-row").forEach((row, i) => {
        gsap.fromTo(row, { x: desktop ? (i % 2 ? 65 : -65) : 20, opacity: .3 }, { x: 0, opacity: 1, ease: "none", scrollTrigger: { trigger: row, start: "top 92%", end: "top 60%", scrub: .6 } });
      });
      if (document.querySelector(".hero-art")) {
        gsap.to(".hero-art", { y: desktop ? 150 : 55, rotation: 16, scale: .84, ease: "none", scrollTrigger: { trigger: ".agency-hero", start: "top top", end: "bottom top", scrub: 1 } });
        gsap.to(".particle-field", { y: 100, opacity: .25, ease: "none", scrollTrigger: { trigger: ".agency-hero", start: "top top", end: "bottom top", scrub: .7 } });
      }
      gsap.utils.toArray<HTMLElement>(".featured-section .project-visual").forEach((card, i) => {
        gsap.fromTo(card, { y: desktop ? 80 + i * 45 : 60, rotateX: desktop ? 12 : 0, scale: .9, clipPath: "inset(14% 0 0 0 round 14px)" }, { y: 0, rotateX: 0, scale: 1, clipPath: "inset(0% 0 0 0 round 14px)", ease: "none", scrollTrigger: { trigger: card.closest("article"), start: "top 95%", end: "top 45%", scrub: .8 } });
      });
      gsap.utils.toArray<HTMLElement>(".process-row").forEach(row => {
        ScrollTrigger.create({ trigger: row, start: "top 65%", end: "bottom 35%", toggleClass: "is-current" });
        gsap.fromTo(row, { x: 45, opacity: .4 }, { x: 0, opacity: 1, scrollTrigger: { trigger: row, start: "top 92%", end: "top 57%", scrub: .6 } });
      });
      if (document.querySelector(".process-diagram")) gsap.to(".process-diagram", { rotateZ: 75, y: -25, scrollTrigger: { trigger: ".process-section", start: "top bottom", end: "bottom top", scrub: 1 } });
      gsap.utils.toArray<HTMLElement>(".approach-grid>.glass-card").forEach((card, i) => gsap.fromTo(card, { y: 55 + i * 15, opacity: .2 }, { y: 0, opacity: 1, scrollTrigger: { trigger: card, start: "top 95%", end: "top 65%", scrub: .7 } }));
      if (document.querySelector(".cta-orbit")) gsap.to(".cta-orbit", { rotate: 50, scale: 1.25, scrollTrigger: { trigger: ".agency-cta", start: "top bottom", end: "bottom top", scrub: 1 } });
      // Inner routes: reveal rules, image parallax and card depth, without
      // re-applying animations to home elements already choreographed above.
      if (!document.querySelector(".home-story")) {
        gsap.utils.toArray<HTMLElement>("main section").forEach(section => {
          gsap.fromTo(section, { "--section-rule": "0%" }, { "--section-rule": "100%", ease:"none", scrollTrigger:{trigger:section,start:"top 85%",end:"top 40%",scrub:.6} });
        });
        gsap.utils.toArray<HTMLElement>(".project-visual").forEach(art => gsap.fromTo(art,{y:35,rotateX:5,scale:.96},{y:0,rotateX:0,scale:1,scrollTrigger:{trigger:art,start:"top 95%",end:"top 55%",scrub:.6}}));
        gsap.utils.toArray<HTMLElement>("main h2").forEach(h=>gsap.fromTo(h,{clipPath:"inset(0 0 70% 0)"},{clipPath:"inset(0 0 0% 0)",duration:.8,ease:"power3.out",scrollTrigger:{trigger:h,start:"top 94%",toggleActions:"play none none none"}}));
      }
      if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
        // Immediate pointer feedback is independent of scrolling.
        document.querySelectorAll<HTMLElement>(".project-visual, .agency-cta, .glass-card").forEach(card => {
          const move = (e: PointerEvent) => { const r = card.getBoundingClientRect(); card.style.setProperty("--pointer-x", `${(e.clientX - r.left) / r.width * 100}%`); card.style.setProperty("--pointer-y", `${(e.clientY - r.top) / r.height * 100}%`); card.style.setProperty("--tilt-x", `${-((e.clientY - r.top) / r.height - .5) * 6}deg`); card.style.setProperty("--tilt-y", `${((e.clientX - r.left) / r.width - .5) * 6}deg`); };
          const leave = () => { card.style.setProperty("--tilt-x", "0deg"); card.style.setProperty("--tilt-y", "0deg"); };
          card.addEventListener("pointermove", move); card.addEventListener("pointerleave", leave);
          cleanups.push(() => { card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", leave); });
        });
      }
    });
    const timer = setTimeout(() => ScrollTrigger.refresh(), 800);
    return () => { clearTimeout(timer); cleanups.forEach(cleanup => cleanup()); ctx.revert(); };
  }, [pathname]);
  const shots = [4, 12, 1, 9, 15, 3, 7, 16, 2, 11, 6, 14, 5, 13, 8, 10].map(n => `/loader/cycle-${n}.jpg`);
  return <><div ref={cursor} className="cursor-ball" aria-hidden="true"/><div className="page-progress" ref={bar} aria-hidden="true"/><div className="site-loader" ref={loader} aria-hidden="true"><div className="loader-head"><span className="loader-name">Malik <em>Agencies</em></span><span className="loader-count">0</span></div><div className="loader-frame">{shots.map((src, i) => <div key={src} className="loader-shot" style={{ zIndex: i + 1 }}><img src={src} alt="" /></div>)}</div><div className="loader-line"><span/></div><span className="loader-caption">Software agency</span></div></>;
}
