import { ArrowRight } from "lucide-react";
import { IMG } from "../data/images";
import { Reveal, SectionHeading, SectionTag, Stagger } from "./Reveal";

const items = [
  {
    img: IMG.bedroom1,
    title: "Inside the house",
    ml: "വീടിന്റെ ഉൾഭാഗം",
    emoji: "🛏️",
    note: "Bedrooms, hall, kitchen, ceiling",
  },
  {
    img: IMG.keralaRiverHouse,
    title: "Outside the house",
    ml: "വീടിന്റെ പുറംഭാഗം",
    emoji: "🏠",
    note: "Outer walls, compound, gate",
  },
  {
    img: IMG.villaDusk,
    title: "Villas & big homes",
    ml: "വില്ലകൾ",
    emoji: "🏡",
    note: "Full villa, inside and outside",
  },
  {
    img: IMG.living3,
    title: "Flats & apartments",
    ml: "ഫ്ലാറ്റുകൾ",
    emoji: "🏢",
    note: "1BHK to 4BHK, stay at home",
  },
  {
    img: IMG.office,
    title: "Shops & offices",
    ml: "കടകളും ഓഫീസുകളും",
    emoji: "🏬",
    note: "Night and Sunday work too",
  },
  {
    img: IMG.roofWorkers,
    title: "Leak & damp repair",
    ml: "ചോർച്ച പരിഹാരം",
    emoji: "💧",
    note: "Waterproofing before the rain",
  },
];

export default function WhatWePaint() {
  return (
    <section id="services" className="relative bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <Reveal><SectionTag>What we paint</SectionTag></Reveal>
          <SectionHeading
            title="We paint"
            highlight="everything"
            description="Old house or brand new, one room or a full villa — just show us the place and our team will handle the rest."
          />
          <Reveal delay={0.15}>
            <p lang="ml" className="text-center text-[16px] font-medium text-pine-800">
              വീട്, വില്ല, ഫ്ലാറ്റ്, കട, ഓഫീസ് — എല്ലാം ഞങ്ങൾ പെയിന്റ് ചെയ്യും
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
          {items.map((it) => (
            <a
              key={it.title}
              href="#quote"
              className="group relative block h-[280px] overflow-hidden rounded-[1.75rem] shadow-card ring-1 ring-pine-900/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe sm:h-[320px]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/35 to-transparent" />
                <span className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/90 text-2xl shadow-lg backdrop-blur transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {it.emoji}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <h3 className="font-display text-[24px] font-semibold leading-tight">{it.title}</h3>
                <p lang="ml" className="mt-0.5 text-[15px] font-medium text-gold-400">{it.ml}</p>
                <p className="mt-1.5 text-[14px] text-white/75">{it.note}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-bold text-pine-950 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Get price <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
