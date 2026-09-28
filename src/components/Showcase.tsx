import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftRight, ArrowRight, Building2, Check, Home, Landmark, Store } from "lucide-react";
import { useRef, useState } from "react";
import { IMG } from "../data/images";
import { Reveal, SectionHeading, SectionTag } from "./Reveal";
import { cn } from "../utils/cn";

const tabs = [
  {
    id: "home",
    label: "Kerala homes",
    icon: Home,
    image: IMG.keralaRiverHouse,
    title: "Full house painting — inside & outside",
    ml: "വീട് മുഴുവൻ പെയിന്റിംഗ്",
    desc: "Old house or new house. We clean the walls, fill the cracks, remove fungus, then paint with 2 coats.",
    points: ["Crack filling & putty work", "Fungus & moss removal", "Compound wall + gate painting"],
    stat: "6,800+ houses in Kerala",
  },
  {
    id: "villa",
    label: "Villas & NRI homes",
    icon: Landmark,
    image: IMG.villaDusk,
    title: "Villa painting, even when you're in the Gulf",
    ml: "ഗൾഫിലിരുന്നും വീട് പെയിന്റ് ചെയ്യാം",
    desc: "We handle the keys, the work and the cleaning. You get daily photos and a video walkthrough at the end.",
    points: ["Key handling & full supervision", "Video call site visit available", "Payment after you approve"],
    stat: "620+ villas & NRI homes",
  },
  {
    id: "flat",
    label: "Flats & apartments",
    icon: Building2,
    image: IMG.living3,
    title: "Flat repainting in 4–6 days",
    ml: "ഫ്ലാറ്റ് പെയിന്റിംഗ്",
    desc: "Society rules, lift timings, no-noise hours — we manage all of it. Room-by-room so you can stay at home.",
    points: ["Association permission support", "Furniture fully covered", "Work room by room"],
    stat: "2,100+ flats done",
  },
  {
    id: "shop",
    label: "Shops & offices",
    icon: Store,
    image: IMG.office,
    title: "Shops painted at night — zero business loss",
    ml: "കടകളും ഓഫീസുകളും",
    desc: "We work after closing time or on Sundays. Open your shutter next morning to a fresh new shop.",
    points: ["Night & Sunday work", "Low-smell paints", "Board & shutter painting"],
    stat: "380+ shops & offices",
  },
];

function BeforeAfter() {
  const [pos, setPos] = useState(48);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  };

  return (
    <div
      ref={ref}
      className="relative h-[320px] cursor-ew-resize select-none overflow-hidden rounded-3xl shadow-luxe ring-1 ring-white/40 sm:h-[440px]"
      onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
      onMouseDown={(e) => onMove(e.clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      role="slider"
      aria-label="Before and after painting comparison"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4));
      }}
    >
      <img src={IMG.colourfulHouse} alt="House after painting — bright and fresh" className="absolute inset-0 h-full w-full object-cover" draggable={false} />

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={IMG.colourfulHouse}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover grayscale-[0.8] sepia-[0.3] brightness-[0.65] contrast-[0.9]"
          draggable={false}
        />
        <div className="absolute inset-0 bg-[#54493c]/40" />
        <div className="absolute left-[18%] top-[24%] h-24 w-36 rounded-full bg-[#33291f]/30 blur-2xl" />
        <div className="absolute bottom-[26%] left-[42%] h-16 w-28 rounded-full bg-[#33291f]/25 blur-xl" />
      </div>

      <div className="absolute inset-y-0 z-10 w-[3px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)]" style={{ left: `calc(${pos}% - 1.5px)` }}>
        <div className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-pine-950 shadow-xl ring-4 ring-pine-950/10">
          <ArrowLeftRight className="h-6 w-6" />
        </div>
      </div>
      <span className="absolute left-4 top-4 z-10 rounded-full bg-black/65 px-4 py-2 text-[13px] font-bold uppercase tracking-widest text-white backdrop-blur">
        Before 😕
      </span>
      <span className="absolute right-4 top-4 z-10 rounded-full bg-vermilion-500 px-4 py-2 text-[13px] font-bold uppercase tracking-widest text-white shadow-lg">
        After 😍
      </span>
      <div className="absolute inset-x-4 bottom-4 z-10 flex items-center justify-between rounded-2xl bg-black/60 px-4 py-3 text-white backdrop-blur-md">
        <p className="text-[13.5px] font-semibold">👈 Slide to see the change</p>
        <p className="hidden text-[13px] font-semibold text-gold-400 sm:block">House in Thrissur · 7 days</p>
      </div>
    </div>
  );
}

export default function Showcase() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="showcase" className="mesh-dark grain relative overflow-hidden py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <Reveal><SectionTag dark>See the difference</SectionTag></Reveal>
          <SectionHeading
            dark
            title="Old, tired walls become"
            highlight="beautiful"
            description="Drag the white line across the photo below and see exactly what one week of our work does to a house."
          />
        </div>

        <Reveal delay={0.1} className="mt-10">
          <BeforeAfter />
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1} className="mt-10">
          <div role="tablist" aria-label="Project types" className="no-scrollbar flex gap-2 overflow-x-auto rounded-2xl bg-white/[0.07] p-2 ring-1 ring-white/15 backdrop-blur sm:justify-center">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active.id === t.id}
                onClick={() => setActive(t)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 text-[14.5px] font-semibold transition-all duration-300",
                  active.id === t.id ? "bg-white text-pine-950 shadow-lg" : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <t.icon className="h-4.5 w-4.5" />
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="mt-6 grid overflow-hidden rounded-[2rem] bg-white/[0.07] ring-1 ring-white/15 backdrop-blur lg:grid-cols-2"
          >
            <div className="relative h-[280px] overflow-hidden lg:h-full lg:min-h-[400px]">
              <motion.img
                key={active.image}
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.9 }}
                src={active.image}
                alt={active.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/70 to-transparent lg:bg-gradient-to-r" />
              <span className="absolute bottom-4 left-5 rounded-full bg-gold-400 px-4 py-2 text-[13px] font-bold text-pine-950 shadow-lg">
                {active.stat}
              </span>
            </div>
            <div className="p-6 sm:p-9">
              <h3 className="font-display text-[25px] font-semibold leading-tight text-white sm:text-[30px]">{active.title}</h3>
              <p lang="ml" className="mt-1.5 text-[16px] font-medium text-gold-400">{active.ml}</p>
              <p className="mt-3 text-[15.5px] leading-relaxed text-white/70">{active.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {active.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-[15px] font-medium text-white/90">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-400/20 text-emerald-300 ring-1 ring-emerald-300/30">
                      <Check className="h-4 w-4" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#quote" className="group mt-7 inline-flex items-center gap-2 rounded-full bg-vermilion-500 px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white hover:text-pine-950">
                Get price for this
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
