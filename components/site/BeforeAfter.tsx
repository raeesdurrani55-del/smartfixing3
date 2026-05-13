import { motion } from "framer-motion";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";

export function BeforeAfter() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--cyan-glow)]">Transformations</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Before & <span className="text-gradient">After</span></h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[{ img: before, label: "Before", tag: "Cracked Display" }, { img: after, label: "After", tag: "Restored Perfection" }].map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
              className="relative glass rounded-3xl overflow-hidden group"
            >
              <img src={b.img} alt={b.label} loading="lazy" width={1024} height={1024} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-wider">{b.label}</div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="font-semibold text-lg">{b.tag}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
