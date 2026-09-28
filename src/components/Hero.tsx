import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BadgeCheck, CloudRain, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import { useRef } from "react";
import { IMG, AVATAR } from "../data/images";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 110]);

  return (
    <section id="top" ref={ref} className="mesh-hero grain relative overflow-hidden pb-14 pt-[140px] sm:pb-20 sm:pt-[165px]">
      <motion.div style={{ y: yBg }} aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-[420px] w-[420px] animate-float-slow rounded-full bg-vermilion-500/15 blur-[90px]" />
        <div className="absolute -right-24 top-[380px] h-[380px] w-[380px] animate-float rounded-full bg-gold-400/20 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(rgba(11,46,41,0.14) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(70% 60% at 50% 20%, black, transparent)",
            WebkitMaskImage: "radial-gradient(70% 60% at 50% 20%, black, transparent)",
          }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/85 py-1.5 pl-1.5 pr-4 text-[13px] font-semibold text-pine-900 shadow-card ring-1 ring-pine-900/10 backdrop-blur"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-pine-950 px-3 py-1 text-[12px] text-white">
                <MapPin className="h-3.5 w-3.5 text-gold-400" /> Kerala
              </span>
              All 14 districts • Kochi · Thrissur · Kozhikode · Trivandrum
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="font-display mt-5 text-balance text-[clamp(2.7rem,7vw,4.7rem)] font-medium leading-[0.98] tracking-tight text-pine-950"
            >
              We paint your house{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="text-gradient italic">like new</span>
                <svg viewBox="0 0 300 28" className="absolute -bottom-3 left-0 w-full" fill="none" aria-hidden="true">
                  <path d="M4 20C80 8 200 4 296 14" stroke="#FF4D2E" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              lang="ml"
              className="font-display mt-6 text-[clamp(1.15rem,3vw,1.6rem)] font-medium text-pine-800"
            >
              നിങ്ങളുടെ വീട് പുതിയതുപോലെ ആക്കാം
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mx-auto mt-4 max-w-lg text-pretty text-[17px] leading-relaxed text-ink-600 lg:mx-0"
            >
              Inside and outside painting for homes, villas, flats, shops and offices.
              We cover your furniture, fix the cracks, and clean everything before we leave.{" "}
              <strong className="text-pine-950">You just open the door and enjoy the new look.</strong>
            </motion.p>

            {/* 3 simple promises with icons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mt-6 grid max-w-lg grid-cols-3 gap-2 lg:mx-0"
            >
              {[
                { icon: CloudRain, t: "Rain-proof", s: "Survives monsoon" },
                { icon: ShieldCheck, t: "1 year", s: "Free touch-ups" },
                { icon: BadgeCheck, t: "Fixed price", s: "Not one rupee more" },
              ].map((b) => (
                <div key={b.t} className="rounded-2xl bg-white/80 p-3 text-center shadow-card ring-1 ring-pine-900/10 backdrop-blur">
                  <b.icon className="mx-auto h-6 w-6 text-vermilion-500" />
                  <p className="mt-1.5 text-[13.5px] font-bold leading-tight text-pine-950">{b.t}</p>
                  <p className="text-[11.5px] text-ink-600">{b.s}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href="#quote"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-pine-950 px-8 py-4 text-[16px] font-semibold text-white shadow-luxe transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-vermilion-500 via-vermilion-400 to-gold-400 transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative">Get Free Price Estimate</span>
                <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+919048123456"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-[16px] font-bold text-pine-950 shadow-card ring-1 ring-pine-900/10 transition hover:bg-pine-950 hover:text-white sm:w-auto"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-vermilion-500 text-white transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-4 w-4" />
                </span>
                90481 23456
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <div className="flex -space-x-2.5">
                {[AVATAR.a, AVATAR.b, AVATAR.c, AVATAR.d].map((src, i) => (
                  <img key={i} src={src} alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" loading="lazy" />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5" aria-label="4.9 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-[13px] font-semibold text-pine-900">9,400+ Kerala homes painted · 4.9★</p>
              </div>
            </motion.div>
          </div>

          {/* Big picture collage — instantly says "painting service" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-vermilion-500/20 via-gold-400/15 to-pine-900/10 blur-2xl" aria-hidden="true" />

            <div className="relative grid h-[400px] grid-cols-5 gap-3 sm:h-[520px] sm:gap-4">
              {/* Main: painter with roller */}
              <motion.figure
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="relative col-span-3 h-full overflow-hidden rounded-[1.75rem] shadow-luxe ring-1 ring-white/50"
              >
                <img
                  src={IMG.painterRoller}
                  alt="Ideal Painters worker painting a house wall with a roller"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-pine-950/10 to-transparent" />
                <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur">
                  <p className="text-[11.5px] font-bold uppercase tracking-widest text-vermilion-600">Our own painters</p>
                  <p className="font-display text-[16px] font-semibold leading-tight text-pine-950">
                    In uniform, with ID card
                  </p>
                </figcaption>
              </motion.figure>

              {/* Right stack */}
              <div className="col-span-2 grid h-full grid-rows-2 gap-3 sm:gap-4">
                <motion.figure
                  whileHover={{ scale: 1.03 }}
                  className="relative h-full overflow-hidden rounded-[1.5rem] shadow-xl ring-1 ring-white/50"
                >
                  <img
                    src={IMG.bedroom1}
                    alt="Freshly painted bedroom after our work"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                  />
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow">
                    Inside
                  </span>
                </motion.figure>

                <motion.figure
                  whileHover={{ scale: 1.03 }}
                  className="relative h-full overflow-hidden rounded-[1.5rem] shadow-xl ring-1 ring-white/50"
                >
                  <img
                    src={IMG.ladderWall}
                    alt="Worker painting the outside wall of a house from a ladder"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-pine-950 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow">
                    Outside
                  </span>
                </motion.figure>
              </div>
            </div>

            {/* floating proof cards — kept outside the image edges */}
            <motion.div
              animate={reduce ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card absolute -bottom-7 -left-1 hidden items-center gap-2.5 rounded-2xl p-2.5 pr-4 shadow-xl sm:-left-6 sm:flex"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-vermilion-500 to-gold-400 text-white">
                <CloudRain className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[13px] font-bold leading-tight text-pine-950">Monsoon-proof finish</p>
                <p className="text-[11.5px] text-ink-600">No fungus, no peeling</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="absolute -right-1 -top-6 flex items-center gap-3 rounded-2xl bg-pine-950 px-4 py-3 text-white shadow-2xl sm:-right-5"
            >
              <p className="font-display text-[28px] font-semibold leading-none">
                18<span className="text-gold-400">+</span>
              </p>
              <p className="text-[12px] leading-tight text-white/80">
                years painting
                <br />
                <strong className="text-white">homes in Kerala</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
