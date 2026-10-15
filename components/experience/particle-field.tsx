"use client";
import { useEffect, useRef } from "react";

/** A continuous wave surface, rendered locally. No network, textures or tracking. */
export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !ctx) return;
    const parent = canvas.closest(".agency-hero") as HTMLElement;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 1, height = 1, visible = true, frame = 0, time = 0, last = 0;
    let mx = -.5, my = -.5, tx = -.5, ty = -.5;
    const ripples: { x: number; y: number; born: number }[] = [];
    const resize = () => {
      width = parent.clientWidth; height = parent.clientHeight;
      const dpr = Math.min(devicePixelRatio, 1.5);
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) draw(0);
    };
    function draw(stamp: number) {
      ctx!.clearRect(0, 0, width, height);
      const mobile = width < 768, rows = mobile ? 24 : 35, cols = mobile ? 42 : 78;
      const centerY = mobile ? height * .68 : height * .75;
      const point = (col: number, row: number) => {
        const u = col / (cols - 1), v = row / (rows - 1);
        let x = u * (width + 240) - 120;
        let y = centerY + (v - .5) * height * .47;
        y += Math.sin(u * 7.3 + v * 4.3 + stamp * .55) * (42 + v * 27);
        y += Math.cos(u * 4.7 - v * 6 + stamp * .34) * 36;
        const dx = x - mx * width, dy = y - my * height;
        const distance = Math.sqrt(dx * dx + dy * dy), influence = Math.exp(-distance * distance / 38000);
        if (!reduced) { y += Math.sin(distance * .027 - stamp * 2.5) * influence * 42; x += dx * influence * .24; }
        for (const ripple of ripples) {
          const d = Math.hypot(x - ripple.x, y - ripple.y), age = stamp - ripple.born;
          y += Math.cos((d - age * 230) * .035) * Math.exp(-Math.pow((d - age * 230) / 85, 2)) * Math.max(0, 1 - age / 2.5) * 25;
        }
        return { x, y, alpha: .24 + v * .3 + influence * .6 };
      };
      for (let row = 0; row < rows; row++) {
        if (row % 2 === 0) {
          ctx!.beginPath();
          for (let col = 0; col < cols; col++) { const p = point(col, row); if (!col) ctx!.moveTo(p.x, p.y); else ctx!.lineTo(p.x, p.y); }
          ctx!.strokeStyle = row % 6 === 0 ? "rgba(202,162,98,.22)" : "rgba(73,139,214,.24)";
          ctx!.lineWidth = .8; ctx!.stroke();
        }
        for (let col = 0; col < cols; col++) {
          const p = point(col, row); ctx!.beginPath(); ctx!.arc(p.x, p.y, row % 3 === 0 ? 1.6 : 1, 0, Math.PI * 2);
          ctx!.fillStyle = row % 8 === 0 ? `rgba(216,179,118,${p.alpha})` : `rgba(87,166,239,${p.alpha})`; ctx!.fill();
        }
      }
    }
    const tick = (stamp: number) => {
      frame = requestAnimationFrame(tick);
      if (!visible || document.hidden || stamp - last < 30) return;
      const delta = Math.min((stamp - last) / 1000, .06); last = stamp; time += delta;
      mx += (tx - mx) * .08; my += (ty - my) * .08;
      while (ripples.length && time - ripples[0].born > 2.5) ripples.shift();
      draw(time);
    };
    const move = (e: PointerEvent) => { const r = parent.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return; tx = (e.clientX - r.left) / width; ty = (e.clientY - r.top) / height; };
    const leave = () => { tx = -.5; ty = -.5; };
    const pulse = (e: PointerEvent) => { if (reduced) return; const r = parent.getBoundingClientRect(); if (ripples.length > 5) ripples.shift(); ripples.push({ x: e.clientX - r.left, y: e.clientY - r.top, born: time }); };
    const ro = new ResizeObserver(resize); ro.observe(parent);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(parent);
    addEventListener("pointermove", move, { passive: true }); parent.addEventListener("pointerleave", leave); parent.addEventListener("pointerdown", pulse, { passive: true });
    resize(); if (!reduced) frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); ro.disconnect(); io.disconnect(); removeEventListener("pointermove", move); parent.removeEventListener("pointerleave", leave); parent.removeEventListener("pointerdown", pulse); };
  }, []);
  return <canvas ref={ref} className="particle-field" aria-hidden="true"/>;
}
