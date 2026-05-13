import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";

export const Route = createFileRoute("/reviews")({
  component: Reviews,
  head: () => ({
    meta: [
      { title: "Reviews | 4.9★ Trusted iPhone Repair Dubai — SmartFixing" },
      { name: "description", content: "Read 5-star Google reviews and watch video testimonials from happy SmartFixing customers. Real before/after repairs." },
      { property: "og:title", content: "SmartFixing Reviews" },
      { property: "og:description", content: "What Dubai customers say about our iPhone repair service." },
    ],
  }),
});

const REVIEWS = [
  { name: "Sara M.", text: "Restored my iPhone 14 Pro screen in under an hour. True Tone still works!", stars: 5 },
  { name: "Ahmed R.", text: "Saved my MacBook from coffee damage. Honest pricing and incredible service.", stars: 5 },
  { name: "Layla K.", text: "Battery swap on my iPhone 12, day and night. Lasts all day again.", stars: 5 },
  { name: "Khalid B.", text: "Best repair lab in Dubai. Genuine parts + 6 month warranty.", stars: 5 },
  { name: "Maya F.", text: "Face ID was dead. Hassan revived it like magic. Highly recommend.", stars: 5 },
  { name: "Yousef A.", text: "iPad mini 6 screen and battery in one visit. Looks brand new.", stars: 5 },
];

function Reviews() {
  const [active, setActive] = useState(0);
  return (
    <PageShell
      eyebrow="Customer Love"
      title={<>4.9 <span className="text-gradient">★</span> from real Dubai customers</>}
      subtitle="Join thousands who chose SmartFixing for premium device repair."
      crumbs={[{ label: "Reviews" }]}
    >
      <section className="mx-auto max-w-6xl px-6 pb-20 space-y-12">
        {/* Premium slider */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass rounded-3xl p-10 glow-ring text-center max-w-3xl mx-auto">
          <Quote className="size-8 text-[var(--cyan-glow)] mx-auto" />
          <motion.p key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 text-xl md:text-2xl leading-relaxed">
            "{REVIEWS[active].text}"
          </motion.p>
          <div className="mt-6 flex justify-center gap-1">
            {Array.from({ length: REVIEWS[active].stars }).map((_, i) => (
              <motion.span key={i} initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: i * 0.06 }}>
                <Star className="size-5 fill-[var(--cyan-glow)] text-[var(--cyan-glow)]" />
              </motion.span>
            ))}
          </div>
          <div className="mt-3 font-semibold">{REVIEWS[active].name}</div>
          <div className="mt-6 flex justify-center gap-2">
            {REVIEWS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`size-2 rounded-full transition ${i === active ? "bg-[var(--cyan-glow)] w-6" : "bg-white/20"}`} />
            ))}
          </div>
        </motion.div>

        {/* Google review cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {REVIEWS.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }} className="glass rounded-2xl p-5">
              <div className="flex gap-1">{Array.from({ length: r.stars }).map((_, k) => <Star key={k} className="size-3.5 fill-[var(--cyan-glow)] text-[var(--cyan-glow)]" />)}</div>
              <p className="mt-3 text-sm text-muted-foreground">"{r.text}"</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="size-8 rounded-full bg-[var(--gradient-primary)] grid place-items-center text-[var(--background)] text-xs font-bold">{r.name[0]}</div>
                <div className="text-sm font-medium">{r.name}</div>
                <span className="ml-auto text-[10px] text-muted-foreground">via Google</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video testimonials */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Video stories</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[1,2,3].map(i => (
              <motion.button key={i} whileHover={{ scale: 1.02 }} className="relative glass rounded-2xl aspect-video overflow-hidden group">
                <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-20" />
                <Play className="absolute inset-0 m-auto size-12 text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] group-hover:scale-110 transition" />
                <span className="absolute bottom-3 left-3 text-xs font-medium">Customer #{i}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Before / after */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Real repairs · Before & After</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[1,2].map(i => (
              <div key={i} className="grid grid-cols-2 gap-2">
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <img src={before} alt="Before repair" loading="lazy" className="w-full h-48 object-cover" />
                  <span className="absolute top-2 left-2 text-[10px] uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded-full">Before</span>
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-[var(--cyan-glow)]/30">
                  <img src={after} alt="After repair" loading="lazy" className="w-full h-48 object-cover" />
                  <span className="absolute top-2 left-2 text-[10px] uppercase tracking-widest bg-[var(--cyan-glow)]/30 px-2 py-0.5 rounded-full">After</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center"><Link to="/transformations" className="btn-primary">See all transformations</Link></div>
        </div>
      </section>
    </PageShell>
  );
}
