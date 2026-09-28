import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Minus, Phone, Plus } from "lucide-react";
import { useState } from "react";
import { IMG } from "../data/images";
import { Reveal, SectionHeading, SectionTag } from "./Reveal";
import { cn } from "../utils/cn";

const faqs = [
  {
    q: "How much will it cost to paint my house?",
    a: "For a normal 1,200 sq.ft house in Kerala, inside painting costs about ₹32,000 to ₹78,000 depending on the paint quality you choose. Outside painting is a little more because of putty, waterproofing and scaffolding. Call us — we visit your house free, measure everything, and give you one final price in writing.",
  },
  {
    q: "My walls get black fungus and damp every monsoon. Can you fix it?",
    a: "Yes, this is the most common problem in Kerala and we solve it daily. We first remove the fungus with chemical wash, treat the damp portion, apply waterproof coating (Dr. Fixit / Asian Paints Damp Proof) and then paint with anti-fungal exterior paint. This comes with up to 7 years brand warranty for the waterproofing.",
  },
  {
    q: "Can you do the work when the rain is going on?",
    a: "Inside painting can be done any time, even in heavy rain. Outside painting needs 2–3 dry days, so during monsoon we plan it in dry gaps or advise you to book for December–April. Best time to paint outside in Kerala is October to May.",
  },
  {
    q: "I am working abroad. Can you paint my house here?",
    a: "Absolutely — many of our customers are in Gulf countries. We collect the key from your family or neighbour, send you photos every evening on WhatsApp, do a video call site visit whenever you want, and give a full video walkthrough at the end. You pay only after you approve.",
  },
  {
    q: "Do we have to leave the house during painting?",
    a: "No need. We paint room by room, cover all your furniture with plastic sheets, and use low-smell paints. Most families stay at home during the whole work. We clean up every evening before leaving.",
  },
  {
    q: "How many days will it take?",
    a: "Inside painting of a 2BHK takes 4–5 days, 3BHK takes 5–7 days. Full house with outside painting takes 8–12 days. A big villa takes 12–18 days. We tell you the finish date in advance and if we are late, we pay you ₹1,000 for each extra day.",
  },
  {
    q: "Which paint do you use? Is it original?",
    a: "We use Asian Paints, Berger, Nerolac and Indigo only. The tins are sealed and we open them in front of you. Original bills are shared on WhatsApp. We never mix water extra or use duplicate paint.",
  },
  {
    q: "How do I pay? How much advance?",
    a: "Only 10% advance to book your date. 40% when the paint and materials reach your house, 40% in the middle of the work, and the last 10% only after you check the finished work and are happy. Google Pay, UPI, bank transfer or cash — all accepted.",
  },
  {
    q: "Which places in Kerala do you work in?",
    a: "All 14 districts — Kochi/Ernakulam, Thrissur, Kozhikode, Thiruvananthapuram, Kollam, Kottayam, Alappuzha, Palakkad, Malappuram, Kannur, Pathanamthitta, Idukki, Wayanad and Kasaragod. Village or town, we come to you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative bg-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal><SectionTag>Common doubts</SectionTag></Reveal>
            <SectionHeading
              align="left"
              title="Your questions,"
              highlight="answered"
              description="Anything else on your mind? Just WhatsApp us. A real person from our team replies in a few minutes."
            />
            <Reveal delay={0.15}>
              <figure className="mt-7 overflow-hidden rounded-3xl shadow-card">
                <img src={IMG.painterTeam} alt="Ideal Painters team ready to help" className="h-52 w-full object-cover sm:h-60" loading="lazy" />
              </figure>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/919048123456"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#1FA855] px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  <MessageCircle className="h-5 w-5" /> WhatsApp us
                </a>
                <a href="tel:+919048123456" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-bold text-pine-950 ring-1 ring-pine-900/15 transition hover:bg-pine-950 hover:text-white">
                  <Phone className="h-4.5 w-4.5" /> 90481 23456
                </a>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={Math.min(i, 5) * 0.05}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl transition-all duration-300",
                      isOpen ? "bg-white shadow-card ring-2 ring-pine-950/10" : "bg-white/70 ring-1 ring-pine-900/10 hover:bg-white"
                    )}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <span className="text-[15.5px] font-bold text-pine-950 sm:text-[16.5px]">{f.q}</span>
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300",
                          isOpen ? "rotate-180 bg-vermilion-500 text-white" : "bg-pine-900/[0.07] text-pine-950"
                        )}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="px-5 pb-6 text-[14.5px] leading-relaxed text-ink-600 sm:px-6">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
