import { motion } from "framer-motion";
import { Search, Wrench, CheckCircle2, PackageCheck } from "lucide-react";

const STEPS = [
  { icon: Search, title: "Device Diagnosis", desc: "Free in-depth diagnostic of your device." },
  { icon: Wrench, title: "Expert Repair", desc: "Performed by certified technicians." },
  { icon: CheckCircle2, title: "Quality Testing", desc: "Multi-stage testing & QA checks." },
  { icon: PackageCheck, title: "Ready for Pickup", desc: "Delivered same day with warranty." },
];

export function Process() {
  return (
    <section id="process" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--cyan-glow)]">Repair Process</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Four Steps. <span className="text-gradient">Zero Hassle.</span></h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-10 hidden md:block h-px bg-gradient-to-r from-transparent via-[var(--cyan-glow)]/40 to-transparent" />
          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="relative mx-auto size-20 rounded-full glass grid place-items-center animate-pulse-glow">
                  <s.icon className="size-8 text-[var(--cyan-glow)]" />
                  <span className="absolute -top-2 -right-2 size-7 rounded-full bg-[var(--gradient-primary)] text-[var(--background)] text-xs font-bold grid place-items-center">{i + 1}</span>
                </div>
                <h3 className="mt-5 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
