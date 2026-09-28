import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Home, IndianRupee, MessageCircle, Phone, Ruler, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { IMG } from "../data/images";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

const propertyTypes = ["Small house", "2BHK", "3BHK", "Villa / big house", "Flat", "Shop / Office"];
const districts = [
  "Ernakulam", "Thrissur", "Kozhikode", "Thiruvananthapuram", "Kollam", "Kottayam", "Alappuzha",
  "Palakkad", "Malappuram", "Kannur", "Pathanamthitta", "Idukki", "Wayanad", "Kasaragod",
];
const finishes = [
  { id: "simple", label: "Simple", rate: 12, emoji: "🪣" },
  { id: "premium", label: "Premium", rate: 21, emoji: "✨" },
  { id: "designer", label: "Designer", rate: 44, emoji: "🎨" },
];

export default function CTA() {
  const [sqft, setSqft] = useState(1200);
  const [finish, setFinish] = useState(finishes[1]);
  const [ptype, setPtype] = useState(propertyTypes[2]);
  const [form, setForm] = useState({ name: "", phone: "", district: "Ernakulam" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const estimate = useMemo(() => {
    const paintable = sqft * 3.1;
    const cost = paintable * finish.rate;
    return { low: Math.round((cost * 0.9) / 500) * 500, high: Math.round((cost * 1.1) / 500) * 500 };
  }, [sqft, finish]);

  const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return setError("Please type your name.");
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) return setError("Please type a correct 10-digit mobile number.");
    setError("");
    setSent(true);
  };

  return (
    <section id="quote" className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mesh-dark grain relative overflow-hidden rounded-[2rem] shadow-luxe sm:rounded-[2.5rem]">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-vermilion-500/25 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold-400/20 blur-[80px]" />

          <div className="relative grid lg:grid-cols-2">
            {/* Estimator */}
            <div className="p-6 sm:p-10 lg:p-12">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-4 py-1.5 text-[12.5px] font-bold uppercase tracking-[0.12em] text-pine-950">
                  <IndianRupee className="h-4 w-4" /> Free price check
                </span>
                <h2 className="font-display mt-5 text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.05] text-white">
                  See your price in <span className="italic text-gold-400">30 seconds</span>
                </h2>
                <p lang="ml" className="mt-2 text-[16px] font-medium text-gold-400">
                  വില ഇപ്പോൾ തന്നെ അറിയാം
                </p>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/70">
                  Move the slider to your house size and pick the quality you want. We'll confirm the exact amount at the free visit.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                {/* visual reference image */}
                <figure className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/15">
                  <img src={IMG.bambooLadder} alt="Our painters working on a house wall" className="h-32 w-full object-cover sm:h-40" loading="lazy" />
                </figure>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-5 rounded-3xl bg-white/[0.08] p-5 ring-1 ring-white/15 backdrop-blur sm:p-6">
                  <div className="flex items-center justify-between">
                    <label htmlFor="sqft" className="flex items-center gap-2 text-[14px] font-semibold text-white/85">
                      <Ruler className="h-4 w-4 text-gold-400" /> House size
                    </label>
                    <span className="rounded-full bg-white px-4 py-1 text-[14px] font-bold text-pine-950">{sqft.toLocaleString()} sq.ft</span>
                  </div>
                  <input
                    id="sqft"
                    type="range"
                    min={400}
                    max={5000}
                    step={50}
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="estimator mt-4 w-full"
                    style={{ ["--fill" as string]: `${((sqft - 400) / 4600) * 100}%` }}
                    aria-label="House size in square feet"
                  />
                  <div className="mt-1.5 flex justify-between text-[11.5px] font-medium text-white/50">
                    <span>Small house</span>
                    <span>Big villa</span>
                  </div>

                  <p className="mt-5 text-[14px] font-semibold text-white/85">Which quality?</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {finishes.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFinish(f)}
                        aria-pressed={finish.id === f.id}
                        className={cn(
                          "rounded-2xl px-2 py-3 text-center transition-all duration-300",
                          finish.id === f.id ? "scale-[1.03] bg-white text-pine-950 shadow-lg" : "bg-white/[0.07] text-white/70 ring-1 ring-white/15 hover:bg-white/[0.14]"
                        )}
                      >
                        <span className="block text-xl">{f.emoji}</span>
                        <span className="block text-[13.5px] font-bold">{f.label}</span>
                        <span className={cn("text-[11.5px]", finish.id === f.id ? "font-bold text-vermilion-600" : "text-white/50")}>₹{f.rate}/sq.ft</span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl bg-gradient-to-r from-gold-400 to-amber-300 p-5 text-pine-950">
                    <p className="text-[12px] font-bold uppercase tracking-widest opacity-70">Roughly what it will cost</p>
                    <motion.p
                      key={estimate.low + finish.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-display text-[28px] font-bold leading-tight sm:text-[34px]"
                    >
                      {inr(estimate.low)} – {inr(estimate.high)}
                    </motion.p>
                    <p className="text-[12.5px] font-semibold opacity-75">Paint, labour and cleaning — all included</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="relative bg-cream-50 p-6 sm:p-10 lg:p-12">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-vermilion-500 via-gold-400 to-pine-900" />
              {!sent ? (
                <>
                  <Reveal>
                    <h3 className="font-display text-[26px] font-semibold text-pine-950">Book your free visit</h3>
                    <p lang="ml" className="text-[15px] font-medium text-vermilion-600">സൗജന്യ സന്ദർശനം ബുക്ക് ചെയ്യൂ</p>
                    <p className="mt-2 flex items-center gap-2 text-[14px] text-ink-600">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </span>
                      Only 4 free visit slots left this week
                    </p>
                  </Reveal>

                  <form onSubmit={submit} className="mt-6 space-y-4" noValidate>
                    <div>
                      <span className="mb-2 flex items-center gap-1.5 text-[13.5px] font-bold text-pine-950">
                        <Home className="h-4 w-4" /> What do you want to paint?
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {propertyTypes.map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setPtype(p)}
                            aria-pressed={ptype === p}
                            className={cn(
                              "rounded-full px-4 py-2 text-[13.5px] font-semibold transition-all",
                              ptype === p ? "bg-pine-950 text-white shadow" : "bg-white text-ink-600 ring-1 ring-pine-900/15 hover:ring-pine-900/40"
                            )}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-[13.5px] font-bold text-pine-950">Your name</label>
                        <input
                          id="name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g., Anu Joseph"
                          autoComplete="name"
                          className="w-full rounded-2xl bg-white px-4 py-3.5 text-[15px] text-pine-950 ring-1 ring-pine-900/15 transition placeholder:text-ink-400 focus:ring-2 focus:ring-vermilion-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block text-[13.5px] font-bold text-pine-950">Mobile number</label>
                        <input
                          id="phone"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="90481 23456"
                          inputMode="numeric"
                          autoComplete="tel"
                          className="w-full rounded-2xl bg-white px-4 py-3.5 text-[15px] text-pine-950 ring-1 ring-pine-900/15 transition placeholder:text-ink-400 focus:ring-2 focus:ring-vermilion-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="district" className="mb-1.5 block text-[13.5px] font-bold text-pine-950">Your district</label>
                      <select
                        id="district"
                        value={form.district}
                        onChange={(e) => setForm({ ...form, district: e.target.value })}
                        className="w-full appearance-none rounded-2xl bg-white px-4 py-3.5 text-[15px] font-medium text-pine-950 ring-1 ring-pine-900/15 transition focus:ring-2 focus:ring-vermilion-500"
                      >
                        {districts.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    {error && (
                      <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-[13.5px] font-semibold text-red-600 ring-1 ring-red-200">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-pine-950 px-6 py-4 text-[16px] font-semibold text-white shadow-luxe transition hover:bg-vermilion-600"
                    >
                      Book free visit
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <div className="flex items-center justify-center gap-4 text-[13px] font-semibold text-ink-600">
                      <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-600" /> No advance now</span>
                      <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-600" /> No spam calls</span>
                    </div>
                  </form>

                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-dashed border-pine-900/15 pt-5">
                    <a href="tel:+919048123456" className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-[14.5px] font-bold text-pine-950 ring-1 ring-pine-900/15 transition hover:bg-pine-950 hover:text-white">
                      <Phone className="h-4 w-4 text-vermilion-500" /> Call now
                    </a>
                    <a
                      href="https://wa.me/919048123456?text=I%20want%20a%20painting%20quote"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-2xl bg-[#1FA855] px-4 py-3 text-[14.5px] font-bold text-white transition hover:brightness-110"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>
                </>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex h-full min-h-[440px] flex-col items-center justify-center text-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-emerald-500 text-white shadow-xl">
                    <CheckCircle2 className="h-10 w-10" />
                  </span>
                  <h3 className="font-display mt-6 text-[28px] font-semibold text-pine-950">Thank you, {form.name.split(" ")[0]}! 🎉</h3>
                  <p className="mt-2 max-w-sm text-[15px] text-ink-600">
                    Our Kerala team will call <strong>{form.phone}</strong> within 2 hours to fix your free visit for your <strong>{ptype}</strong> in <strong>{form.district}</strong>.
                  </p>
                  <div className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-pine-900/10">
                    <p className="text-[13px] font-semibold text-ink-600">Your estimate ({finish.label} · {sqft} sq.ft)</p>
                    <p className="font-display text-3xl font-bold text-pine-950">{inr(estimate.low)} – {inr(estimate.high)}</p>
                  </div>
                  <button onClick={() => setSent(false)} className="mt-6 text-[13.5px] font-semibold text-vermilion-600 underline-offset-4 hover:underline">
                    Book for another place
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
