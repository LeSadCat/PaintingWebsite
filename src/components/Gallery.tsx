import { motion } from "framer-motion";
import { Camera, MapPin } from "lucide-react";
import { IMG } from "../data/images";
import { Reveal, SectionHeading, SectionTag } from "./Reveal";

const shots = [
  { img: IMG.living4, place: "Kakkanad, Kochi", work: "3BHK flat · full inside painting", wide: true },
  { img: IMG.keralaCanalHouse, place: "Kuttanad, Alappuzha", work: "35-year-old house · outside", wide: false },
  { img: IMG.bedroomTeal, place: "Kozhikode", work: "Bedroom · colour change", wide: false },
  { img: IMG.villaPool, place: "Thrissur", work: "Villa · inside + outside", wide: false },
  { img: IMG.scaffold, place: "Trivandrum", work: "3-floor building · exterior", wide: false },
  { img: IMG.dining, place: "Kottayam", work: "Dining hall · texture wall", wide: true },
  { img: IMG.painterMan, place: "Kannur", work: "Putty & primer work", wide: false },
  { img: IMG.living2, place: "Palakkad", work: "Living room · Royale finish", wide: false },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <Reveal>
            <SectionTag icon={<Camera className="h-3.5 w-3.5" />}>Our real work</SectionTag>
          </Reveal>
          <SectionHeading
            title="Recent houses we"
            highlight="painted"
            description="Real homes, real families, across Kerala. Every job is photographed from start to finish and shared with the owner."
          />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {shots.map((s, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative h-[180px] overflow-hidden rounded-2xl shadow-card ring-1 ring-pine-900/10 sm:h-[230px] ${
                s.wide ? "col-span-2" : ""
              }`}
            >
              <img
                src={s.img}
                alt={`${s.work} at ${s.place}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/90 via-pine-950/15 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <p className="flex items-center gap-1 text-[11.5px] font-bold text-gold-400">
                  <MapPin className="h-3.5 w-3.5 shrink-0" /> {s.place}
                </p>
                <p className="text-[13px] font-semibold leading-snug text-white sm:text-[14.5px]">{s.work}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center gap-3 rounded-3xl bg-cream-50 p-6 text-center ring-1 ring-pine-900/10 sm:flex-row sm:justify-between sm:text-left">
            <p className="text-[15.5px] font-semibold text-pine-950">
              Want to see homes we painted near you?{" "}
              <span className="font-normal text-ink-600">We'll send photos on WhatsApp.</span>
            </p>
            <a
              href="https://wa.me/919048123456?text=Please%20send%20photos%20of%20houses%20you%20painted%20near%20me"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1FA855] px-6 py-3 text-[14.5px] font-semibold text-white transition hover:brightness-110"
            >
              📷 Send me photos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
