"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-strong border-b border-white/[0.06]"
            : "bg-transparent"
        )}
        role="banner"
      >
        <nav
          className="max-w-[1080px] mx-auto px-6 md:px-10 h-[52px] flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Malik Agencies — Home"
          >
            {/* Apple-style logotype */}
            <div className="w-7 h-7 rounded-[8px] flex items-center justify-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0a84ff 0%, #5e5ce6 100%)",
              }}
            >
              {/* Minimal M icon */}
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
                <path d="M1 11V1L7 8L13 1V11" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-semibold text-[15px] tracking-[-0.02em] text-white/90">
              Malik
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5" role="list">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "relative px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200",
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white/90"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-white/[0.08]"
                        transition={{ type: "spring", damping: 30, stiffness: 350 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="btn-apple !py-2 !px-5 !text-[13px]"
              aria-label="Start a project"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="w-[18px] h-[18px]" aria-hidden="true" />
            ) : (
              <Menu className="w-[18px] h-[18px]" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu panel */}
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              className="fixed top-3 left-3 right-3 z-50 rounded-2xl glass-strong md:hidden overflow-hidden"
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-[8px] flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #0a84ff 0%, #5e5ce6 100%)" }}
                  >
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
                      <path d="M1 11V1L7 8L13 1V11" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[15px] tracking-[-0.02em] text-white/90">Malik</span>
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.06] text-white/60 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="p-3" aria-label="Mobile navigation">
                <ul className="space-y-0.5" role="list">
                  {navLinks.map(({ href, label }, i) => {
                    const isActive = pathname === href;
                    return (
                      <motion.li
                        key={href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          href={href}
                          className={cn(
                            "flex items-center px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200",
                            isActive
                              ? "text-white bg-white/[0.08]"
                              : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {label}
                          {isActive && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#0a84ff]" />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <div className="p-4 border-t border-white/[0.06]">
                <Link
                  href="/contact"
                  className="btn-apple w-full !justify-center"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
