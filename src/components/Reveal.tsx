import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "../utils/cn";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={cn("h-full", className)}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.1,
}: {
  children: ReactNode[];
  className?: string;
  delay?: number;
  gap?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          className="h-full"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + i * gap, ease: [0.22, 1, 0.36, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export function SectionTag({ icon, children, dark = false }: { icon?: ReactNode; children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em]",
        dark ? "bg-white/10 text-amber-200 ring-1 ring-white/20" : "bg-pine-900/[0.06] text-pine-900 ring-1 ring-pine-900/10"
      )}
    >
      {icon}
      {children}
    </span>
  );
}

export function SectionHeading({
  title,
  highlight,
  description,
  dark = false,
  align = "center",
}: {
  title: string;
  highlight?: string;
  description?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <Reveal>
        <h2
          className={cn(
            "font-display text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05]",
            dark ? "text-white" : "text-ink-900"
          )}
        >
          {title}{" "}
          {highlight && (
            <span className="relative inline-block">
              <span className="text-gradient italic">{highlight}</span>
              <svg viewBox="0 0 220 24" fill="none" className="absolute -bottom-2 left-0 h-[0.4em] w-full" aria-hidden="true">
                <path d="M3 18C50 8 140 4 217 12" stroke="#FF4D2E" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
              </svg>
            </span>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className={cn("mt-6 text-[17px] leading-relaxed", dark ? "text-white/70" : "text-ink-600")}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
