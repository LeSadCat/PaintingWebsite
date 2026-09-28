import { ArrowUpRight, Clock, Mail, MapPin, PaintRoller, Phone, ShieldCheck, Star } from "lucide-react";

const serviceLinks = [
  "Inside house painting",
  "Outside house painting",
  "Villa painting",
  "Flat & apartment painting",
  "Shop & office painting",
  "Waterproofing & leak repair",
  "Anti-fungus treatment",
  "Texture & wallpaper work",
];

const companyLinks = ["About Ideal Painters", "How we work", "Customer reviews", "Our rates", "Painters — join us", "Builder tie-ups", "Colour ideas", "Contact us"];

const districts = [
  "Kochi", "Thrissur", "Kozhikode", "Trivandrum", "Kollam", "Kottayam", "Alappuzha",
  "Palakkad", "Malappuram", "Kannur", "Pathanamthitta", "Idukki", "Wayanad", "Kasaragod",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-pine-950 text-white">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[800px] -translate-x-1/2 rounded-full bg-vermilion-500/15 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10 sm:p-8 lg:flex-row lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.18em] text-gold-400">
              <Star className="h-4 w-4 fill-gold-400" /> 4.9 rating · 9,400+ Kerala homes
            </p>
            <p className="font-display mt-2 text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight">
              Shall we paint your house next?
            </p>
            <p lang="ml" className="mt-1 text-[15px] text-gold-400">ഇന്ന് തന്നെ വിളിക്കൂ</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#quote" className="inline-flex items-center justify-center gap-2 rounded-full bg-vermilion-500 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-vermilion-600">
              Free visit <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="tel:+919048123456" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-pine-950 transition hover:bg-gold-400">
              <Phone className="h-4 w-4" /> 90481 23456
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-pine-950">
                <PaintRoller className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-[20px] font-semibold">Ideal Painters</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400">Kerala's trusted painters</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/65">
              Painting homes, villas, flats, shops and builder projects across Kerala since 2008. Honest price, neat work, and a written 1-year warranty on every job.
            </p>
            <div className="mt-5 space-y-2.5 text-[14px] text-white/80">
              <p className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-gold-400" /> 90481 23456 · 90481 23457</p>
              <p className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-gold-400" /> hello@idealpainters.in</p>
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                2nd Floor, Ideal Arcade, Palarivattom, Kochi, Ernakulam – 682025
              </p>
              <p className="flex items-center gap-2.5"><Clock className="h-4 w-4 text-gold-400" /> Open 7 am – 9 pm, all days</p>
            </div>
            <div className="mt-5 flex gap-2.5">
              {[
                { label: "Instagram", path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" },
                { label: "Facebook", path: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.7-1.6h1.6V4.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.9H8.2V14h2.7v8h2.6Z" },
                { label: "YouTube", path: "M22 8.2s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-.9C16.4 5 12 5 12 5s-4.4 0-7.2.3c-.4.1-1.3.1-2 .9-.6.6-.8 2-.8 2S2 9.9 2 9.9v1.5s0 1.6.2 2.4c.1.4.5 1.1 1.2 1.2.9.3 4.4.4 8.6.4s5.1 0 7.2-.3c.4-.1 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-2.4V9.9S22 8.2 22 8.2ZM9.8 14.3V9.7l5.4 2.3-5.4 2.3Z" },
                { label: "WhatsApp", path: "M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8Zm-3.3 4c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.7 4.2 3.7 2 .8 2.5.7 2.9.6.5 0 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2l-.6-.3-1.5-.7c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.5-.6.2-.5v-.4l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.4Z" },
              ].map((s) => (
                <a key={s.label} href="#top" aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-vermilion-500 hover:ring-vermilion-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden="true"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Services">
            <p className="text-[12.5px] font-bold uppercase tracking-[0.18em] text-white/50">What we do</p>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l}><a href="#services" className="text-[14px] text-white/75 transition hover:text-gold-400">{l}</a></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="text-[12.5px] font-bold uppercase tracking-[0.18em] text-white/50">Company</p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l}><a href="#top" className="text-[14px] text-white/75 transition hover:text-gold-400">{l}</a></li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[12.5px] font-bold uppercase tracking-[0.18em] text-white/50">We work in</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {districts.map((a) => (
                <span key={a} className="rounded-full bg-white/[0.08] px-3.5 py-1.5 text-[12.5px] font-medium text-white/75 ring-1 ring-white/10">{a}</span>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-emerald-400/10 p-4 ring-1 ring-emerald-300/20">
              <p className="flex items-center gap-2 text-[13.5px] font-bold text-emerald-300"><ShieldCheck className="h-4 w-4" /> Full satisfaction promise</p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-white/65">Not happy with the finish? We repaint it free. No arguments, no extra charge.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[12.5px] text-white/50 sm:flex-row">
          <p>© 2026 Ideal Painters, Kochi. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#top" className="hover:text-white">Privacy</a>
            <a href="#top" className="hover:text-white">Terms</a>
            <a href="#top" className="hover:text-white">Warranty policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
