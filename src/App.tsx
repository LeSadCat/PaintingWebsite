import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import WhatWePaint from "./components/WhatWePaint";
import Showcase from "./components/Showcase";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile sticky action bar — call is biggest */}
      <div className="fixed inset-x-2.5 bottom-2.5 z-40 flex gap-2 sm:hidden">
        <a
          href="tel:+919048123456"
          className="flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-pine-950 text-[15.5px] font-bold text-white shadow-2xl"
        >
          <Phone className="h-5 w-5 text-gold-400" /> Call now
        </a>
        <a
          href="https://wa.me/919048123456?text=I%20want%20a%20free%20painting%20quote"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#1FA855] text-white shadow-2xl"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href="#quote"
          className="flex h-14 flex-1 items-center justify-center rounded-2xl bg-vermilion-500 text-[15.5px] font-bold text-white shadow-2xl"
        >
          Free price
        </a>
      </div>

      {/* Desktop floating */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 sm:flex">
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="grid h-12 w-12 place-items-center rounded-full bg-white text-pine-950 shadow-xl ring-1 ring-pine-900/10 transition hover:bg-pine-950 hover:text-white"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
        <a
          href="https://wa.me/919048123456?text=I%20want%20a%20free%20painting%20quote"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#1FA855] text-white shadow-[0_12px_32px_-8px_rgba(31,168,85,0.7)] transition hover:scale-110"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#1FA855] opacity-25" />
          <MessageCircle className="relative h-6 w-6" />
          <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-pine-950 px-4 py-2 text-[13px] font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100">
            WhatsApp — we reply fast
          </span>
        </a>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans text-ink-900 antialiased">
      <a href="#quote" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-pine-950 focus:px-5 focus:py-2.5 focus:text-white">
        Skip to free quote
      </a>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <WhatWePaint />
        <Showcase />
        <Features />
        <Gallery />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
      <div className="h-20 sm:hidden" aria-hidden="true" />
    </div>
  );
}
