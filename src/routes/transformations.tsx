import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";

export const Route = createFileRoute("/transformations")({
  component: Transform,
  head: () => ({
    meta: [
      { title: "Repair Transformations | Before & After Gallery — SmartFixing" },
      { name: "description", content: "Drag the slider and see real iPhone, MacBook and iPad transformations from Dubai's premier repair lab." },
      { property: "og:title", content: "Before & After Repairs — SmartFixing" },
      { property: "og:description", content: "Interactive transformations from real Dubai customers." },
    ],
  }),
});

function Slider({ b, a, label }: { b: string; a: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const onMove = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect(); if (!r) return;
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };
  return (
    <div className="space-y-3">
      <div ref={ref}
        onMouseMove={e => e.buttons === 1 && onMove(e.clientX)}
        onTouchMove={e => onMove(e.touches[0].clientX)}
        onClick={e => onMove(e.clientX)}
        className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 select-none cursor-ew-resize">
        <img src={a} alt={`${label} after`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={b} alt={`${label} before`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000/pos}%`, maxWidth: "none" }} />
        </div>
        <div className="absolute top-0 bottom-0 w-px bg-[var(--cyan-glow)] shadow-[0_0_20px_var(--cyan-glow)]" style={{ left: `${pos}%` }} />
        <div className="absolute size-10 rounded-full bg-[var(--cyan-glow)] grid place-items-center text-[var(--background)] font-bold border-4 border-background top-1/2 -translate-y-1/2 -translate-x-1/2"
          style={{ left: `${pos}%` }}>⇄</div>
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded-full">Before</span>
        <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest bg-[var(--cyan-glow)]/30 px-2 py-0.5 rounded-full">After</span>
      </div>
      <div className="font-semibold">{label}</div>
    </div>
  );
}

const CASES = [
  { label: "iPhone 14 Pro Max — Cracked OLED", b: before, a: after },
  { label: "iPhone 13 — Back Glass Restoration", b: before, a: after },
  { label: "MacBook Pro — Liquid Damage Recovery", b: before, a: after },
  { label: "iPad Pro — Display & Frame", b: before, a: after },
];

function Transform() {
  return (
    <PageShell
      eyebrow="Showcase"
      title={<>Real Dubai <span className="text-gradient">transformations</span></>}
      subtitle="Drag the slider to see the difference our certified repair lab delivers."
      crumbs={[{ label: "Transformations" }]}
    >
      <section className="mx-auto max-w-6xl px-6 pb-20 space-y-10">
        <div className="grid md:grid-cols-2 gap-8">
          {CASES.map((c, i) => (
            <motion.div key={c.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Slider {...c} />
            </motion.div>
          ))}
        </div>

        <div className="glass rounded-3xl p-8 text-center glow-ring">
          <h3 className="text-2xl font-bold">Ready for your transformation?</h3>
          <p className="mt-2 text-muted-foreground">Same-day repairs across Dubai with a 6-12 month warranty.</p>
          <Link to="/book-repair" className="btn-primary mt-5">Book Your Repair</Link>
        </div>
      </section>
    </PageShell>
  );
}
