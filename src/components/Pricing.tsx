import { Check, Crown, Phone } from "lucide-react";
import { useState } from "react";
import { IMG } from "../data/images";
import { Reveal, SectionHeading, SectionTag, Stagger } from "./Reveal";
import { cn } from "../utils/cn";

const plans = [
  {
    name: "Simple",
    ml: "സാധാരണ",
    img: IMG.rollerWhite,
    tagline: "Good for rent houses & small budget",
    interior: 11,
    exterior: 15,
    example: "₹32,000 – ₹45,000",
    features: ["Tractor Emulsion / Bison paint", "1 primer + 2 coats paint", "Small crack filling", "Furniture covered & cleaned", "6 months free touch-up"],
    featured: false,
  },
  {
    name: "Premium",
    ml: "പ്രീമിയം",
    img: IMG.bedroom1,
    tagline: "Most families choose this one",
    interior: 19,
    exterior: 26,
    example: "₹58,000 – ₹78,000",
    features: ["Royale / Silk / Nerolac Impressions", "Full putty + crack repair", "Anti-fungus monsoon coating", "Dust-free machine sanding", "Free shade consultation", "1 year written warranty"],
    featured: true,
    badge: "Best value",
  },
  {
    name: "Designer",
    ml: "ഡിസൈനർ",
    img: IMG.dining,
    tagline: "Texture, designs & special finishes",
    interior: 42,
    exterior: 48,
    example: "₹1,20,000 +",
    features: ["Royale Play, texture & stencil", "Metallic & Italian finishes", "Wallpaper & wall panelling", "Designer visits your site", "2 year warranty + yearly check"],
    featured: false,
  },
];

export default function Pricing() {
  const [mode, setMode] = useState<"interior" | "exterior">("interior");

  return (
    <section id="pricing" className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <Reveal><SectionTag>Our rates</SectionTag></Reveal>
          <SectionHeading
            title="One clear price,"
            highlight="written down"
            description="The rate below includes paint, labour, putty, covering your furniture and cleaning afterwards. Nothing gets added later."
          />
          <Reveal delay={0.12}>
            <p lang="ml" className="text-center text-[16px] font-medium text-pine-800">
              പറഞ്ഞ വിലയിൽ കൂടുതൽ ഒരു രൂപ പോലും വാങ്ങില്ല
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-2 inline-flex rounded-full bg-cream-100 p-1.5 ring-1 ring-pine-900/10" role="tablist" aria-label="Pricing type">
              {([
                { k: "interior", l: "🛋️ Inside" },
                { k: "exterior", l: "🏠 Outside" },
              ] as const).map((m) => (
                <button
                  key={m.k}
                  role="tab"
                  aria-selected={mode === m.k}
                  onClick={() => setMode(m.k)}
                  className={cn(
                    "rounded-full px-7 py-2.5 text-[14.5px] font-semibold transition-all duration-300",
                    mode === m.k ? "bg-pine-950 text-white shadow-lg" : "text-ink-600 hover:text-pine-950"
                  )}
                >
                  {m.l}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
          {plans.map((p) => (
            <article
              key={p.name}
              className={cn(
                "relative flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-all duration-500 hover:-translate-y-2",
                p.featured
                  ? "z-10 bg-pine-950 text-white shadow-luxe ring-2 ring-gold-400/60"
                  : "bg-cream-50 text-pine-950 ring-1 ring-pine-900/10 hover:bg-white hover:shadow-card"
              )}
            >
              {/* photo header */}
              <div className="relative h-36 shrink-0 overflow-hidden">
                <img
                  src={p.img}
                  alt={`Example of ${p.name} painting work`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className={cn("absolute inset-0", p.featured ? "bg-pine-950/45" : "bg-pine-950/25")} />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-[25px] font-semibold leading-tight text-white drop-shadow">{p.name}</h3>
                  <p lang="ml" className="text-[14.5px] font-medium text-gold-400 drop-shadow">{p.ml}</p>
                </div>
                {p.featured && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-400 to-amber-300 px-4 py-1.5 text-[12px] font-bold text-pine-950 shadow">
                    <Crown className="h-3.5 w-3.5" /> {p.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className={cn("text-[13.5px]", p.featured ? "text-white/60" : "text-ink-600")}>{p.tagline}</p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className={cn("font-display text-[50px] font-semibold leading-none", p.featured ? "text-gold-400" : "text-pine-950")}>
                    ₹{mode === "interior" ? p.interior : p.exterior}
                  </span>
                  <span className={cn("text-[15px] font-semibold", p.featured ? "text-white/70" : "text-ink-600")}>/ sq.ft</span>
                </div>

                <p
                  className={cn(
                    "mt-3 rounded-xl px-3.5 py-2.5 text-[13px] font-semibold leading-snug",
                    p.featured ? "bg-white/10 text-white/80" : "bg-white text-ink-600 ring-1 ring-pine-900/10"
                  )}
                >
                  A normal 1,200 sq.ft house comes to about{" "}
                  <strong className={p.featured ? "text-gold-400" : "text-pine-950"}>{p.example}</strong>
                </p>

                <ul
                  className="mt-5 flex-1 space-y-2.5 border-t border-dashed pt-5"
                  style={{ borderColor: p.featured ? "rgba(255,255,255,0.15)" : "rgba(11,46,41,0.12)" }}
                >
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={cn("flex items-start gap-2.5 text-[14px] font-medium", p.featured ? "text-white/90" : "text-ink-900/80")}
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          p.featured ? "bg-gold-400 text-pine-950" : "bg-pine-950 text-white"
                        )}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#quote"
                  className={cn(
                    "mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all duration-300",
                    p.featured
                      ? "bg-gradient-to-r from-vermilion-500 to-gold-400 text-white shadow-glow hover:brightness-110"
                      : "bg-pine-950 text-white hover:bg-vermilion-600"
                  )}
                >
                  Get my exact price
                </a>
              </div>
            </article>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-3 rounded-3xl bg-cream-50 p-6 text-center ring-1 ring-pine-900/10 sm:flex-row sm:text-left">
            <p className="flex-1 text-[14.5px] leading-relaxed text-ink-600">
              <strong className="text-pine-950">Don't know how many square feet your house is?</strong> That's completely fine. Give us a call — we come to your place, measure it ourselves free of cost, and tell you the exact amount.
            </p>
            <a href="tel:+919048123456" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-pine-950 px-6 py-3 text-[14.5px] font-semibold text-white transition hover:bg-vermilion-600">
              <Phone className="h-4 w-4" /> 90481 23456
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
