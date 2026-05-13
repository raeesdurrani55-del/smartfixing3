import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, Wrench } from "lucide-react";
import { PageShell } from "./PageShell";

export type DeviceRepairProps = {
  device: string;
  tagline: string;
  issues: { title: string; price: string; time: string }[];
  faqs: { q: string; a: string }[];
  related: { label: string; to: string }[];
  image?: string;
};

export function DeviceRepairPage(p: DeviceRepairProps) {
  return (
    <PageShell
      eyebrow="Device Repair"
      title={<><span className="text-gradient">{p.device}</span> Repair Dubai</>}
      subtitle={p.tagline}
      crumbs={[{ label: "Services", to: "/services" }, { label: p.device }]}
    >
      <section className="mx-auto max-w-6xl px-6 grid lg:grid-cols-3 gap-6 pb-16">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass rounded-3xl p-7">
            <h2 className="text-2xl font-semibold mb-4">Common Issues & Pricing</h2>
            <div className="divide-y divide-white/5">
              {p.issues.map((i, idx) => (
                <motion.div
                  key={i.title}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex flex-wrap items-center justify-between gap-3 py-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-[var(--cyan-glow)]/10 grid place-items-center text-[var(--cyan-glow)]"><Wrench className="size-4" /></div>
                    <div>
                      <div className="font-medium">{i.title}</div>
                      <div className="text-xs text-muted-foreground">Avg. turnaround {i.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--cyan-glow)] font-semibold">{i.price}</span>
                    <Link to="/book-repair" className="btn-primary text-xs py-2 px-3">Book</Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-7">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked</h2>
            <div className="space-y-3">
              {p.faqs.map(f => (
                <details key={f.q} className="group rounded-2xl bg-white/5 p-4 border border-white/5">
                  <summary className="cursor-pointer font-medium list-none flex items-center justify-between">
                    {f.q}
                    <ArrowRight className="size-4 transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="glass rounded-3xl p-6 glow-ring">
            <div className="text-sm uppercase tracking-widest text-[var(--cyan-glow)]">Get a Quote</div>
            <h3 className="text-xl font-semibold mt-2">Same-day {p.device} fix</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Genuine OEM-grade parts","Warranty backed repair","Free pickup in Dubai","Expert certified techs"].map(x => (
                <li key={x} className="flex items-center gap-2"><Check className="size-4 text-[var(--cyan-glow)]" />{x}</li>
              ))}
            </ul>
            <Link to="/book-repair" className="btn-primary w-full mt-5 justify-center">Book Repair</Link>
            <a href="https://wa.me/971569406390" target="_blank" rel="noreferrer" className="mt-2 w-full inline-flex justify-center text-sm py-2 rounded-full bg-[#25D366] text-black font-medium">WhatsApp Us</a>
          </div>

          <div className="glass rounded-3xl p-6">
            <h4 className="font-semibold mb-3">Related Repairs</h4>
            <ul className="space-y-2 text-sm">
              {p.related.map(r => (
                <li key={r.to}>
                  <Link to={r.to} className="flex items-center justify-between hover:text-[var(--cyan-glow)] transition">
                    {r.label} <ArrowRight className="size-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
