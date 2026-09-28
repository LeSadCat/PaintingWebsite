import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, PaintRoller, Phone, X } from "lucide-react";
import { cn } from "../utils/cn";

const links = [
  { label: "What we paint", href: "#services" },
  { label: "Before / After", href: "#showcase" },
  { label: "Our work", href: "#gallery" },
  { label: "How it works", href: "#process" },
  { label: "Rates", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top ribbon */}
      <div className="fixed inset-x-0 top-0 z-[60] bg-pine-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-[12.5px] font-medium tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
          </span>
          <span className="hidden sm:inline">Before-monsoon offer — up to 20% off + free waterproof check across Kerala.</span>
          <span className="sm:hidden">20% off + free waterproof check</span>
          <a href="#quote" className="ml-1 inline-flex items-center gap-1 font-semibold text-gold-400 underline-offset-4 hover:underline">
            Get it <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-[36px] z-50 transition-all duration-500",
          scrolled ? "px-3 sm:px-6" : "px-0"
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 transition-all duration-500",
            scrolled
              ? "glass rounded-2xl px-4 py-3 shadow-[0_12px_40px_-12px_rgba(11,46,41,0.3)] ring-1 ring-white/60 sm:px-6"
              : "bg-transparent px-4 py-4 sm:px-8"
          )}
        >
          <a href="#top" className="group flex items-center gap-3" aria-label="Ideal Painters home">
            <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-pine-900 text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
              <PaintRoller className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-vermilion-500" />
            </span>
            <span className="leading-tight">
              <span className="font-display block text-[19px] font-semibold tracking-tight text-pine-950">
                Ideal Painters
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-vermilion-500">
                House Painting • Kerala
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-[14.5px] font-medium text-ink-900/75 transition hover:bg-pine-900/[0.06] hover:text-pine-950"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919048123456"
              className="flex items-center gap-2 text-[14px] font-semibold text-pine-900 transition hover:text-vermilion-600"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-pine-900/[0.07] ring-1 ring-pine-900/10">
                <Phone className="h-4 w-4" />
              </span>
              90481 23456
            </a>
            <a
              href="#quote"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-pine-950 px-5 py-2.5 text-[14px] font-semibold text-white shadow-luxe transition hover:shadow-glow"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-vermilion-500 to-gold-400 transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">Free Visit & Price</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-full bg-pine-950 text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="glass mx-3 mt-2 overflow-hidden rounded-2xl p-3 shadow-2xl ring-1 ring-white/60 lg:hidden"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium text-pine-950 hover:bg-pine-900/5"
                >
                  {l.label}
                  <ArrowRight className="h-4 w-4 text-ink-400" />
                </motion.a>
              ))}
              <div className="mt-2 grid gap-2 border-t border-pine-900/10 pt-3">
                <a
                  href="#quote"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-pine-950 px-4 py-3.5 text-[15px] font-semibold text-white"
                >
                  Get Free Visit & Price <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+919048123456"
                  className="flex items-center justify-center gap-2 rounded-xl bg-vermilion-500/10 px-4 py-3 text-[15px] font-semibold text-vermilion-600"
                >
                  <Phone className="h-4 w-4" /> 90481 23456
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
