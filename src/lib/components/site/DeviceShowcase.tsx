import { motion } from "framer-motion";
import { Laptop, Tablet, Cpu, Battery, Wrench, Zap, ShieldCheck } from "lucide-react";
import laptopImg from "@/assets/laptop-repair.jpg";
import tabletImg from "@/assets/tablet-repair.jpg";
import toolsImg from "@/assets/repair-tools.jpg";

const laptopServices = [
  { icon: Cpu, label: "Logic Board" },
  { icon: Battery, label: "Battery Swap" },
  { icon: Zap, label: "Liquid Damage" },
  { icon: Wrench, label: "Keyboard / Trackpad" },
];
const tabletServices = [
  { icon: Zap, label: "Screen Replacement" },
  { icon: Battery, label: "Battery" },
  { icon: Cpu, label: "Charging Port" },
  { icon: ShieldCheck, label: "Diagnostics" },
];

function Card({ side, image, icon: Icon, title, subtitle, items, delay = 0 }: any) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
      className="relative glass rounded-3xl overflow-hidden group"
    >
      <div className={`grid md:grid-cols-2 ${side === "right" ? "md:[direction:rtl]" : ""}`}>
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden [direction:ltr]">
          <motion.img
            src={image}
            alt={title}
            loading="lazy"
            width={1280}
            height={896}
            className="absolute inset-0 h-full w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(34,211,238,0.18)_50%,transparent_70%)] bg-[length:200%_100%] animate-shimmer" />
        </div>

        <div className="p-8 md:p-10 [direction:ltr]">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-[var(--cyan-glow)]">
            <Icon className="size-3.5" /> {subtitle}
          </div>
          <h3 className="mt-4 text-3xl md:text-4xl font-bold">{title}</h3>
          <p className="mt-3 text-muted-foreground">
            Certified technicians, OEM-grade parts and meticulous diagnostics — restored to factory feel with a warranty.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {items.map((it: any, i: number) => (
              <motion.li
                key={it.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex items-center gap-2 text-sm"
              >
                <span className="size-8 rounded-lg grid place-items-center bg-[var(--gradient-primary)] text-background">
                  <it.icon className="size-4" />
                </span>
                {it.label}
              </motion.li>
            ))}
          </ul>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--cyan-glow)] story-link">
            Book a {title.split(" ")[0]} repair →
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function DeviceShowcase() {
  return (
    <section id="laptop-tablet" className="section-pad relative">
      <div className="absolute inset-0 -z-0 opacity-30 pointer-events-none">
        <img src={toolsImg} alt="" className="w-full h-full object-cover opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--cyan-glow)]">Beyond iPhone</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Laptop & Tablet <span className="text-gradient">Repair Lab</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From cracked iPad screens to liquid-damaged MacBooks — our Dubai lab handles every fix with surgical precision.
          </p>
        </div>

        <div className="mt-14 grid gap-8">
          <Card
            side="left"
            image={laptopImg}
            icon={Laptop}
            subtitle="Laptop & MacBook Repair"
            title="Laptop Repair"
            items={laptopServices}
          />
          <Card
            side="right"
            image={tabletImg}
            icon={Tablet}
            subtitle="iPad & Tablet Repair"
            title="Tablet Repair"
            items={tabletServices}
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}
