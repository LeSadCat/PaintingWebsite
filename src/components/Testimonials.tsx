import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BadgeCheck, MapPin, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { AVATAR, IMG } from "../data/images";
import { Reveal, SectionHeading, SectionTag } from "./Reveal";
import { cn } from "../utils/cn";

const testimonials = [
  {
    name: "Bindu & Santhosh Nair",
    role: "House owners",
    place: "Aluva, Ernakulam",
    img: AVATAR.a,
    work: IMG.living4,
    quote:
      "Our 20-year-old house had black fungus marks after every monsoon. Ideal Painters cleaned it, did waterproofing and painted. Two rains later, walls are still perfect. Very neat people, no mess at all.",
    project: "Old house · Inside + outside · 8 days",
    rating: 5,
  },
  {
    name: "Shameer Ali",
    role: "NRI · works in Dubai",
    place: "Manjeri, Malappuram",
    img: AVATAR.b,
    work: IMG.villaDusk,
    quote:
      "I was in Dubai the whole time. They took the key from my brother, sent photos every evening on WhatsApp, and did a video call walkthrough at the end. My wife was shocked when she saw the house. Full trust.",
    project: "Villa · 3,200 sq.ft · Full painting",
    rating: 5,
  },
  {
    name: "Dr. Leena Thomas",
    role: "Flat owner",
    place: "Kakkanad, Kochi",
    img: AVATAR.c,
    work: IMG.bedroomTeal,
    quote:
      "We stayed in the flat while they painted. They covered everything, worked room by room, and cleaned daily. My kids had no dust problem. Price was exactly what they told me first — not one rupee extra.",
    project: "3BHK flat · 5 days",
    rating: 5,
  },
  {
    name: "Rejimon P.K.",
    role: "Builder · 32-flat project",
    place: "Thrissur",
    img: AVATAR.e,
    work: IMG.scaffold,
    quote:
      "I have worked with many painting contractors in Kerala. These people finish on the date they promise and give proper bills and QC reports. Now they do all my projects. Labour is well behaved on site also.",
    project: "32 flats · Bulk contract",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDir(next > index ? 1 : -1);
      setIndex((next + testimonials.length) % testimonials.length);
    },
    [index]
  );

  useEffect(() => {
    const t = setInterval(() => go(index + 1), 7000);
    return () => clearInterval(t);
  }, [index, go]);

  const t = testimonials[index];

  return (
    <section id="reviews" className="relative overflow-hidden bg-cream-50 py-16 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-gold-400/10 blur-[100px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <Reveal><SectionTag>What Malayali families say</SectionTag></Reveal>
          <SectionHeading
            title="Trusted in Kerala for"
            highlight="18 years"
            description="From village homes to Gulf-owned villas — 9,400+ families have handed us their keys."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Featured with project photo */}
          <Reveal>
            <div className="grid h-full overflow-hidden rounded-[2rem] bg-pine-950 text-white shadow-luxe sm:grid-cols-[0.8fr_1.2fr]">
              <div className="relative h-56 sm:h-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={t.work}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src={t.work}
                    alt={`Work done for ${t.name}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/70 to-transparent sm:bg-gradient-to-r" />
              </div>

              <div className="relative p-7 sm:p-9">
                <Quote className="h-9 w-9 text-gold-400" />
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={index}
                    custom={dir}
                    initial={{ opacity: 0, x: dir * 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dir * -30 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="mt-3 flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>
                    <blockquote className="font-display mt-3 text-[19px] font-normal leading-snug sm:text-[21px]">
                      “{t.quote}”
                    </blockquote>
                    <div className="mt-5 flex items-center gap-3">
                      <img src={t.img} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-gold-400" loading="lazy" />
                      <div>
                        <p className="flex items-center gap-1.5 text-[15px] font-bold">
                          {t.name} <BadgeCheck className="h-4 w-4 text-sky-400" />
                        </p>
                        <p className="flex items-center gap-1 text-[13px] text-white/60">
                          <MapPin className="h-3.5 w-3.5" /> {t.role} · {t.place}
                        </p>
                      </div>
                    </div>
                    <span className="mt-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-[12.5px] font-semibold text-gold-400 ring-1 ring-white/15">
                      {t.project}
                    </span>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => go(i)}
                        aria-label={`Show review ${i + 1}`}
                        className={cn("h-2 rounded-full transition-all duration-300", i === index ? "w-8 bg-gold-400" : "w-2 bg-white/25 hover:bg-white/50")}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => go(index - 1)} aria-label="Previous review" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 transition hover:bg-white hover:text-pine-950">
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button onClick={() => go(index + 1)} aria-label="Next review" className="grid h-11 w-11 place-items-center rounded-full bg-vermilion-500 transition hover:bg-vermilion-600">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "4.9/5", label: "Google rating", sub: "1,800+ reviews" },
              { stat: "9 in 10", label: "Come from word of mouth", sub: "neighbours & relatives" },
              { stat: "24 hrs", label: "Price given within", sub: "after the free visit" },
              { stat: "1 year", label: "Free touch-ups", sub: "written warranty card" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="flex h-full flex-col justify-center rounded-3xl bg-white p-5 text-center ring-1 ring-pine-900/10 sm:p-6">
                  <p className="font-display text-[30px] font-semibold leading-none text-pine-950 sm:text-[34px]">{s.stat}</p>
                  <p className="mt-2 text-[13.5px] font-bold leading-tight text-pine-900">{s.label}</p>
                  <p className="mt-0.5 text-[12.5px] leading-tight text-ink-600">{s.sub}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3} className="col-span-2">
              <div className="flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-r from-vermilion-500 via-vermilion-400 to-gold-400 p-6 text-center text-white shadow-lg">
                <div>
                  <p className="font-display text-[22px] font-semibold leading-tight">Your house can be the next one</p>
                  <p className="mt-1 text-[14px] text-white/90">Free visit · Fixed price · 1 year warranty</p>
                </div>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-full bg-pine-950 px-6 py-3 text-[14.5px] font-semibold text-white transition hover:bg-black"
                >
                  Get my free price <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
