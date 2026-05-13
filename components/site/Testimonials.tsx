import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  { name: "Ahmed Al Mansouri", role: "Business Bay, Dubai", text: "Cracked my iPhone 15 Pro screen on Friday — picked it up Saturday morning, flawless. Genuine display, perfect calibration. Truly premium service.", stars: 5 },
  { name: "Sarah Khan", role: "Marina, Dubai", text: "Battery on my iPhone 13 was dying by noon. They replaced it in 45 minutes with a genuine cell. Health is 100% again. Highly recommend.", stars: 5 },
  { name: "Rajesh Patel", role: "Downtown Dubai", text: "Water damaged iPhone 14 — I thought it was dead. Their technicians revived it completely. Honest pricing, expert work.", stars: 5 },
  { name: "Fatima Hassan", role: "JLT, Dubai", text: "Face ID stopped working after a fall. Fixed in under an hour with full warranty. Best repair experience I've had in Dubai.", stars: 5 },
  { name: "Omar Bin Zayed", role: "Deira, Dubai", text: "MacBook logic board repair done perfectly. Saved me thousands compared to Apple. Trustworthy and fast.", stars: 5 },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);
  const r = REVIEWS[i];
  return (
    <section id="reviews" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--blue-glow) 30%, transparent), transparent 60%)" }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--cyan-glow)]">Loved by Dubai</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Trusted by <span className="text-gradient">5,000+ Customers</span></h2>

        <div className="mt-12 relative h-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 glass rounded-3xl p-10 glow-ring"
            >
              <Quote className="size-8 text-[var(--cyan-glow)] mx-auto" />
              <p className="mt-6 text-lg md:text-xl text-foreground/90">"{r.text}"</p>
              <div className="mt-6 flex justify-center gap-1">
                {Array.from({ length: r.stars }).map((_, k) => (
                  <Star key={k} className="size-4 fill-[var(--cyan-glow)] text-[var(--cyan-glow)]" />
                ))}
              </div>
              <div className="mt-4 font-semibold">{r.name}</div>
              <div className="text-sm text-muted-foreground">{r.role}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex gap-2 justify-center">
          {REVIEWS.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Review ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-[var(--cyan-glow)]" : "w-1.5 bg-white/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
