import { CloudRain, Droplets, IndianRupee, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { IMG } from "../data/images";
import { Reveal, SectionHeading, SectionTag } from "./Reveal";

const reasons = [
  {
    icon: CloudRain,
    title: "Made for Kerala rain",
    ml: "മഴയെ പേടിക്കേണ്ട",
    desc: "Waterproof coating + anti-fungus paint so walls don't get black spots or peel after monsoon.",
    color: "from-sky-500 to-cyan-400",
  },
  {
    icon: Droplets,
    title: "No dust, no mess",
    ml: "പൊടിയില്ല",
    desc: "We cover all furniture, use dust-free sanding machines, and clean the house fully before we leave.",
    color: "from-emerald-500 to-lime-500",
  },
  {
    icon: IndianRupee,
    title: "One fixed price",
    ml: "ഉറപ്പുള്ള വില",
    desc: "We measure, give you the price in writing. That price never changes. No hidden charges later.",
    color: "from-vermilion-500 to-orange-400",
  },
  {
    icon: Smartphone,
    title: "Daily photos on WhatsApp",
    ml: "ദിവസവും ഫോട്ടോ",
    desc: "Abroad or busy at work? You get photos every evening. Gulf families trust us for exactly this.",
    color: "from-green-600 to-emerald-500",
  },
  {
    icon: ShieldCheck,
    title: "1 year free service",
    ml: "1 വർഷ വാറന്റി",
    desc: "Any peeling or patch within 1 year — we come and fix it free. Written warranty card given.",
    color: "from-pine-800 to-pine-600",
  },
  {
    icon: Sparkles,
    title: "Only original paint",
    ml: "ഒറിജിനൽ പെയിന്റ്",
    desc: "Asian Paints, Berger, Nerolac, Indigo. Sealed tins opened in front of you. Bill shown always.",
    color: "from-amber-500 to-gold-400",
  },
];

export default function Features() {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <Reveal><SectionTag>Why families choose us</SectionTag></Reveal>
          <SectionHeading
            title="Painting without the"
            highlight="tension"
            description="You don't have to stand and watch the workers. You don't have to clean up after them. And you don't have to worry about the price going up."
          />
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Picture column */}
          <Reveal className="order-2 lg:order-1 lg:sticky lg:top-32 lg:self-start">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <figure className="relative col-span-2 overflow-hidden rounded-[1.5rem] shadow-card">
                <img src={IMG.paintersTwo} alt="Two Ideal Painters workers painting an interior wall" className="h-52 w-full object-cover sm:h-64" loading="lazy" />
                <figcaption className="absolute bottom-0 w-full bg-gradient-to-t from-pine-950 to-transparent px-4 py-3 text-[13.5px] font-semibold text-white">
                  Uniformed, ID-carrying team — supervisor visits daily
                </figcaption>
              </figure>
              <figure className="relative overflow-hidden rounded-[1.5rem] shadow-card">
                <img src={IMG.brushHand} alt="Close-up of hand painting a wall with brush" className="h-40 w-full object-cover sm:h-48" loading="lazy" />
              </figure>
              <figure className="relative overflow-hidden rounded-[1.5rem] shadow-card">
                <img src={IMG.swatches} alt="Paint colour shade cards to choose from" className="h-40 w-full object-cover sm:h-48" loading="lazy" />
                <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-3 py-1 text-[11.5px] font-bold text-pine-950">Free shade help</span>
              </figure>
            </div>
          </Reveal>

          {/* Reason rows */}
          <div className="order-1 grid gap-3 sm:grid-cols-2 lg:order-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.07}>
                <article className="lift group h-full rounded-2xl bg-cream-50 p-5 ring-1 ring-pine-900/[0.08] hover:bg-white">
                  <div className={`inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${r.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display mt-4 text-[19px] font-semibold leading-snug text-pine-950">{r.title}</h3>
                  <p lang="ml" className="text-[14px] font-medium text-vermilion-600">{r.ml}</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{r.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
