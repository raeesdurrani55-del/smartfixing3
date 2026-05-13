import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Smartphone, Battery, Droplets, Camera, Plug, Layers, ScanFace, Laptop, Tablet, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Repair Services Dubai | iPhone, MacBook, iPad & More — SmartFixing" },
      { name: "description", content: "Premium repair services in Dubai: screens, batteries, water damage, Face ID, cameras, MacBook & iPad — same-day, warranty-backed." },
      { property: "og:title", content: "Repair Services — SmartFixing" },
      { property: "og:description", content: "Every service we offer at Dubai's premium repair lab." },
    ],
  }),
});

const SERVICES = [
  { icon: Smartphone, t: "Screen Replacement", d: "Genuine-grade OLED & LCD with True Tone preserved.", price: "from AED 199" },
  { icon: Battery, t: "Battery Replacement", d: "Health restored to 100% with certified cells.", price: "from AED 149" },
  { icon: ScanFace, t: "Face ID Repair", d: "TrueDepth sensor diagnostics & calibration.", price: "from AED 299" },
  { icon: Droplets, t: "Water Damage", d: "Ultrasonic logic-board cleaning & component recovery.", price: "from AED 249" },
  { icon: Camera, t: "Camera Repair", d: "Front, rear, OIS & lens module replacements.", price: "from AED 179" },
  { icon: Plug, t: "Charging Port", d: "Slow charging? Loose port? Fixed in 45 minutes.", price: "from AED 129" },
  { icon: Layers, t: "Back Glass", d: "Laser-precise back glass removal & replacement.", price: "from AED 199" },
  { icon: Laptop, t: "Laptop Repair", d: "MacBook logic boards, batteries, screens & keyboards.", price: "from AED 299" },
  { icon: Tablet, t: "Tablet Repair", d: "iPad & Galaxy Tab screens, batteries and frames.", price: "from AED 249" },
];

function Services() {
  return (
    <PageShell
      eyebrow="Every Repair, Premium"
      title={<>Our <span className="text-gradient">Services</span></>}
      subtitle="From cracked screens to deep-board recovery — every fix runs through certified diagnostics."
      crumbs={[{ label: "Services" }]}
    >
      <section className="mx-auto max-w-6xl px-6 pb-20 space-y-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div key={s.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6 }} className="glass rounded-3xl p-6 group">
              <div className="size-12 rounded-2xl bg-[var(--cyan-glow)]/10 grid place-items-center text-[var(--cyan-glow)]"><s.icon className="size-6" /></div>
              <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[var(--cyan-glow)] text-sm font-semibold">{s.price}</span>
                <Link to="/book-repair" className="text-sm inline-flex items-center gap-1 group-hover:text-[var(--cyan-glow)] transition">Book <ArrowRight className="size-3" /></Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Repair by device</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { l: "iPhone 16 Pro Max", to: "/repair/iphone-16-pro-max" },
              { l: "iPhone 15 Pro Max", to: "/repair/iphone-15-pro-max" },
              { l: "iPhone 14 Pro Max", to: "/repair/iphone-14-pro-max" },
              { l: "iPhone 13 Pro Max", to: "/repair/iphone-13-pro-max" },
              { l: "MacBook Repair", to: "/repair/macbook" },
              { l: "iPad Repair", to: "/repair/ipad" },
              { l: "Samsung Repair", to: "/repair/samsung" },
            ].map(d => (
              <Link key={d.to} to={d.to} className="glass rounded-2xl p-4 flex items-center justify-between hover:border-[var(--cyan-glow)]/40 transition">
                <span className="text-sm font-medium">{d.l}</span>
                <ArrowRight className="size-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
