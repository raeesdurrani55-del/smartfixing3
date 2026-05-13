import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Users, Wrench, ShieldCheck, Target, Eye } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import lab from "@/assets/repair-tools.jpg";
import board from "@/assets/motherboard.jpg";
import tech from "@/assets/tech-repair.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About SmartFixing | Premium iPhone Repair Lab Since 2012" },
      { name: "description", content: "12+ years repairing iPhones, MacBooks and devices in Dubai. Certified technicians, micro-soldering experts, and a warranty-backed promise." },
      { property: "og:title", content: "About SmartFixing" },
      { property: "og:description", content: "Dubai's most trusted premium device repair lab." },
    ],
  }),
});

const STATS = [
  { v: "5,000+", l: "Devices Repaired" },
  { v: "12+", l: "Years Experience" },
  { v: "4.9★", l: "Customer Rating" },
  { v: "24h", l: "Same-Day Service" },
];

const TEAM = [
  { name: "Hassan A.", role: "Lead Micro-Solder Technician" },
  { name: "Nadia K.", role: "Apple Certified Diagnostician" },
  { name: "Omar S.", role: "MacBook Logic-Board Specialist" },
];

function About() {
  return (
    <PageShell
      eyebrow="Our Story"
      title={<>Dubai's premier <span className="text-gradient">device repair lab</span></>}
      subtitle="From a small bench in 2012 to a precision repair lab trusted by thousands across the UAE."
      crumbs={[{ label: "About" }]}
    >
      <section className="mx-auto max-w-6xl px-6 pb-20 space-y-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold">Built by enthusiasts. Trusted by Dubai.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              SmartFixing began as a passion project — fixing iPhones for friends after work. Twelve years and 5,000+ devices later, we run one of the city's most respected micro-soldering labs, with a single obsession: returning your device to factory feel.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Every repair runs through calibrated diagnostics, OEM-grade parts and a multi-step QA. We don't just fix screens — we restore confidence.
            </p>
          </motion.div>
          <motion.img src={lab} alt="SmartFixing repair lab" loading="lazy"
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="rounded-3xl border border-white/10 shadow-2xl" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-widest">{s.l}</div>
            </motion.div>
          ))}
        </div>

        {/* Lab showcase */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.img src={board} alt="Logic board repair" loading="lazy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl border border-white/10 h-72 w-full object-cover" />
          <motion.img src={tech} alt="Certified technician at work" loading="lazy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="rounded-3xl border border-white/10 h-72 w-full object-cover" />
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          {[{ icon: Target, h: "Our Mission", p: "Make premium, transparent device repair accessible to every Dubai resident." },
            { icon: Eye, h: "Our Vision", p: "Be the most trusted Apple-grade repair brand in the GCC by 2027." }].map(b => (
            <div key={b.h} className="glass rounded-3xl p-7">
              <b.icon className="size-6 text-[var(--cyan-glow)]" />
              <h3 className="mt-4 text-xl font-semibold">{b.h}</h3>
              <p className="mt-2 text-muted-foreground">{b.p}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Users className="size-6 text-[var(--cyan-glow)]" /> Meet the team</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {TEAM.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 text-center">
                <div className="mx-auto size-16 rounded-full bg-[var(--gradient-primary)] grid place-items-center text-[var(--background)] text-xl font-bold">{t.name[0]}</div>
                <div className="mt-3 font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certs */}
        <div className="glass rounded-3xl p-7">
          <h3 className="text-xl font-semibold flex items-center gap-2"><Award className="size-5 text-[var(--cyan-glow)]" /> Certifications</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Apple-grade Tools","ISO Quality QA","Micro-Solder Certified","Battery Safety EU","UAE Trade License","Warranty Insured"].map(c => (
              <span key={c} className="px-3 py-2 rounded-full text-xs border border-white/10 bg-white/5 flex items-center gap-1"><ShieldCheck className="size-3 text-[var(--cyan-glow)]" />{c}</span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/book-repair" className="btn-primary"><Wrench className="size-4" /> Book a Repair</Link>
        </div>
      </section>
    </PageShell>
  );
}
