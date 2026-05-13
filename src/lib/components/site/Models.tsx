import { motion } from "framer-motion";
import { Smartphone, Tablet, Laptop, Apple, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-iphone.jpg";

const OTHERS = [
  { icon: Smartphone, title: "Mobile Repair", desc: "Android & all smartphone brands restored to perfection." },
  { icon: Tablet, title: "Tablet Repair", desc: "iPad and Android tablets — screens, batteries, logic boards." },
  { icon: Laptop, title: "Laptop Repair", desc: "MacBook & PC diagnostics, upgrades and component repair." },
];

export function Models() {
  return (
    <section id="devices" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--cyan-glow)]">Our Expertise</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            iPhone Specialists. <span className="text-gradient">All Devices Welcome.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            iPhone repair is our craft — but our master technicians fix mobiles, tablets and laptops with the same precision.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-5">
          {/* Featured iPhone card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3 relative glass rounded-3xl overflow-hidden group min-h-[380px]"
          >
            <img
              src={heroImg}
              alt="iPhone repair Dubai specialists"
              className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/60 to-transparent" />
            <div className="relative p-8 md:p-10 h-full flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 self-start glass rounded-full px-3 py-1 text-xs text-[var(--cyan-glow)]">
                <Apple className="size-3.5" /> Core Expertise
              </div>
              <h3 className="mt-4 text-3xl md:text-4xl font-bold">iPhone Repair</h3>
              <p className="mt-2 text-muted-foreground max-w-md">
                Screen, battery, camera, Face ID, water damage and motherboard repair — handled by certified iPhone technicians with genuine parts.
              </p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--cyan-glow)] font-medium">
                Book iPhone repair <ArrowRight className="size-4" />
              </a>
            </div>
          </motion.div>

          {/* Other devices */}
          <div className="lg:col-span-2 grid gap-5">
            {OTHERS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative glass rounded-2xl p-6 overflow-hidden flex items-center gap-5"
              >
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-[var(--cyan-glow)] opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />
                <div className="relative size-14 rounded-xl grid place-items-center bg-[var(--gradient-primary)] text-[var(--background)] shadow-[var(--shadow-glow)] shrink-0">
                  <d.icon className="size-6" />
                </div>
                <div className="relative">
                  <h3 className="font-semibold text-lg">{d.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
