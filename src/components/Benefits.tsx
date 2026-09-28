import { CalendarCheck, IndianRupee, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
import { IMG } from "../data/images";
import { Reveal, SectionHeading, SectionTag, Stagger } from "./Reveal";

const steps = [
  {
    n: "1",
    img: IMG.painterMask,
    emoji: "📞",
    title: "You give us a call",
    ml: "നിങ്ങൾ വിളിക്കുന്നു",
    desc: "Call or WhatsApp us and tell us what you want painted. We fix a visit time — same day or the next day.",
  },
  {
    n: "2",
    img: IMG.swatchFan,
    emoji: "📏",
    title: "We visit and give the price",
    ml: "സൗജന്യ സന്ദർശനം",
    desc: "We measure the walls, show you shade cards, and hand you one final written price. This visit is free.",
  },
  {
    n: "3",
    img: IMG.painterBack,
    emoji: "🎨",
    title: "Our team paints it",
    ml: "ഞങ്ങൾ പെയിന്റ് ചെയ്യുന്നു",
    desc: "Furniture covered, cracks filled, putty, primer and two coats of paint. You get photos every evening.",
  },
  {
    n: "4",
    img: IMG.living5,
    emoji: "✨",
    title: "We clean and hand over",
    ml: "വൃത്തിയാക്കി തിരികെ",
    desc: "We clean the house, put the furniture back, and give your warranty card. Pay the balance only after you're happy.",
  },
];

const guarantees = [
  { icon: IndianRupee, title: "The price never goes up", desc: "What we write is what you pay." },
  { icon: CalendarCheck, title: "Finished on the promised day", desc: "If we're late, we pay you ₹1,000 a day." },
  { icon: Sparkles, title: "House cleaned before we go", desc: "Not happy? We come back and redo it." },
  { icon: ShieldCheck, title: "Only 10% advance to book", desc: "The rest only as the work moves." },
];

export default function Benefits() {
  return (
    <section id="process" className="relative overflow-hidden bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <Reveal><SectionTag>How it works</SectionTag></Reveal>
          <SectionHeading
            title="Just 4 simple"
            highlight="steps"
            description="No paperwork, no running around, no confusion. Making one phone call is the only work you have to do."
          />
          <Reveal delay={0.15}>
            <p lang="ml" className="text-center text-[16px] font-medium text-pine-800">
              നാല് എളുപ്പ ഘട്ടങ്ങൾ മാത്രം
            </p>
          </Reveal>
        </div>

        {/* Visual steps */}
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
          {steps.map((s) => (
            <article key={s.n} className="lift group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-pine-900/10">
              <div className="relative h-48 shrink-0 overflow-hidden">
                <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/60 to-transparent" />
                <span className="font-display absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl bg-vermilion-500 text-2xl font-bold text-white shadow-lg">
                  {s.n}
                </span>
                <span className="absolute bottom-3 right-3 grid h-11 w-11 place-items-center rounded-xl bg-white/90 text-xl shadow backdrop-blur">
                  {s.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[20px] font-semibold leading-tight text-pine-950">{s.title}</h3>
                <p lang="ml" className="text-[14px] font-medium text-vermilion-600">{s.ml}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{s.desc}</p>
              </div>
            </article>
          ))}
        </Stagger>

        {/* Promises */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.07}>
              <div className="flex h-full items-start gap-3 rounded-2xl bg-pine-950 p-5 text-white">
                <g.icon className="mt-0.5 h-6 w-6 shrink-0 text-gold-400" />
                <div>
                  <p className="text-[14.5px] font-bold leading-tight">{g.title}</p>
                  <p className="mt-1 text-[13px] text-white/65">{g.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#quote" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-vermilion-500 px-8 py-4 text-[16px] font-semibold text-white shadow-[0_16px_40px_-12px_rgba(255,77,46,0.6)] transition hover:-translate-y-0.5 hover:bg-vermilion-600 sm:w-auto">
              Book my free visit
            </a>
            <a href="tel:+919048123456" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[16px] font-bold text-pine-950 ring-1 ring-pine-900/15 transition hover:bg-pine-950 hover:text-white sm:w-auto">
              <PhoneCall className="h-5 w-5" /> 90481 23456
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
