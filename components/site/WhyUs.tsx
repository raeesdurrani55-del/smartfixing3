import { motion } from "framer-motion";
import { ShieldCheck, Zap, Award, Users, Wallet, Microscope } from "lucide-react";
import techImg from "@/assets/tech-repair.jpg";
import boardImg from "@/assets/motherboard.jpg";

const FEATURES = [
  { icon: ShieldCheck, title: "Genuine Parts", desc: "Only OEM-grade components." },
  { icon: Zap, title: "Fast Turnaround", desc: "Most repairs done same day." },
  { icon: Award, title: "Warranty Support", desc: "Up to 6 months on every fix." },
  { icon: Users, title: "Expert Technicians", desc: "Apple-certified specialists." },
  { icon: Wallet, title: "Transparent Pricing", desc: "No hidden fees, ever." },
  { icon: Microscope, title: "Advanced Diagnostics", desc: "Microscope-level precision." },
];

export function WhyUs() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--cyan-glow)]">Why Choose Us</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Precision. <span className="text-gradient">Trust.</span> Speed.</h2>
          <p className="mt-4 text-muted-foreground">Twelve years of repair excellence in the heart of Dubai. Every device handled with surgical precision and Apple-grade care.</p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-4 flex gap-3"
              >
                <div className="size-10 shrink-0 rounded-lg grid place-items-center bg-[var(--cyan-glow)]/10 text-[var(--cyan-glow)]">
                  <f.icon className="size-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{f.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-4">
          <motion.img
            src={techImg} alt="Repair technician at work" loading="lazy" width={1280} height={896}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl object-cover h-72 w-full glow-ring"
          />
          <motion.img
            src={boardImg} alt="Motherboard repair" loading="lazy" width={1280} height={896}
            initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="rounded-2xl object-cover h-72 w-full glow-ring mt-10"
          />
        </div>
      </div>
    </section>
  );
}
