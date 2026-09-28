import { Award, Building2, Home, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const districts = [
  "Ernakulam / Kochi", "Thrissur", "Kozhikode", "Thiruvananthapuram", "Kottayam", "Alappuzha",
  "Kollam", "Palakkad", "Malappuram", "Kannur", "Pathanamthitta", "Idukki", "Wayanad", "Kasaragod",
];

const stats = [
  { value: "9,400+", label: "Kerala homes painted", icon: Home },
  { value: "620+", label: "Villas & flat projects", icon: Building2 },
  { value: "4.9★", label: "Rated by 1,800+ customers", icon: Star },
  { value: "18 yrs", label: "Painting across Kerala", icon: Award },
];

export default function SocialProof() {
  return (
    <section aria-label="Where we work" className="relative bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.2em] text-ink-400">
            We come to your place — all 14 districts of Kerala, town or village
          </p>
          <p lang="ml" className="mt-1 text-center text-[15px] font-medium text-pine-800">
            കേരളത്തിലെ എല്ലാ ജില്ലകളിലും സേവനം ലഭ്യമാണ്
          </p>
        </Reveal>

        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee-track flex w-max animate-marquee gap-3">
            {[...districts, ...districts].map((b, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-pine-900/10 bg-cream-50 px-6 py-2.5 text-[14px] font-semibold text-pine-900/75"
              >
                📍 {b}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl bg-pine-950 p-5 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe sm:p-6">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-vermilion-500/20 blur-2xl transition-all duration-500 group-hover:bg-vermilion-500/40" />
                <s.icon className="h-6 w-6 text-gold-400" />
                <p className="font-display mt-3 text-3xl font-semibold sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-[13.5px] text-white/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
