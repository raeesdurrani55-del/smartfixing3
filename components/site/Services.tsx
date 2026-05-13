import { motion } from "framer-motion";
import { Smartphone, Battery, Plug, Droplets, Camera, ScanFace, Layers, Laptop, Tablet } from "lucide-react";

const SERVICES = [
  { icon: Smartphone, title: "Screen Replacement", desc: "OEM-grade displays restored same day." },
  { icon: Battery, title: "Battery Replacement", desc: "Genuine cells, full health restore." },
  { icon: Plug, title: "Charging Port Repair", desc: "Fix slow or no charging issues." },
  { icon: Droplets, title: "Water Damage Repair", desc: "Ultrasonic cleaning & full diagnostics." },
  { icon: Camera, title: "Camera Repair", desc: "Lens, sensor and stabilizer fixes." },
  { icon: ScanFace, title: "Face ID Repair", desc: "Restore biometric unlock fully." },
  { icon: Layers, title: "Back Glass Replacement", desc: "Laser-precise back glass swap." },
  { icon: Laptop, title: "Laptop Repair", desc: "MacBook & PC repair specialists." },
  { icon: Tablet, title: "Tablet Repair", desc: "iPad & Android tablet service." },
];

export function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--cyan-glow)]">Our Services</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Complete Repair <span className="text-gradient">Ecosystem</span></h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06 }}
              className="group relative glass rounded-2xl p-7 hover:border-[var(--cyan-glow)]/40 transition-all overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[var(--cyan-glow)] opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />
              <div className="relative">
                <div className="size-12 rounded-xl grid place-items-center bg-[var(--gradient-primary)] text-[var(--background)] shadow-[var(--shadow-glow)]">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm text-[var(--cyan-glow)] opacity-0 group-hover:opacity-100 transition">
                  Book now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
