import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Check, FileText, X } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/warranty")({
  component: Warranty,
  head: () => ({
    meta: [
      { title: "Repair Warranty | 6-12 Month Coverage — SmartFixing" },
      { name: "description", content: "Every SmartFixing repair includes a written warranty on parts and labor. Genuine-grade parts and transparent claim process." },
      { property: "og:title", content: "Repair Warranty — SmartFixing" },
      { property: "og:description", content: "Warranty coverage, claim process and terms." },
    ],
  }),
});

function Warranty() {
  return (
    <PageShell
      eyebrow="Promise"
      title={<>Warranty-backed <span className="text-gradient">repairs</span>, always.</>}
      subtitle="Every part we install is covered. Every repair, in writing."
      crumbs={[{ label: "Warranty" }]}
    >
      <section className="mx-auto max-w-5xl px-6 pb-20 space-y-10">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "6 Months", s: "Screens & Batteries" },
            { t: "12 Months", s: "Logic Board Repairs" },
            { t: "90 Days", s: "Accessories & Ports" },
          ].map((c, i) => (
            <motion.div key={c.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="glass rounded-3xl p-7 text-center">
              <ShieldCheck className="size-7 mx-auto text-[var(--cyan-glow)]" />
              <div className="mt-3 text-3xl font-bold text-gradient">{c.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{c.s}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-7">
            <h3 className="text-xl font-semibold flex items-center gap-2"><Check className="size-5 text-[var(--cyan-glow)]" /> What's covered</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Replaced parts under normal use","Workmanship defects","Display brightness/touch defects","Battery health degradation >20% in 6 months"].map(x => <li key={x} className="flex gap-2"><Check className="size-4 text-[var(--cyan-glow)] mt-0.5" />{x}</li>)}
            </ul>
          </div>
          <div className="glass rounded-3xl p-7">
            <h3 className="text-xl font-semibold flex items-center gap-2"><X className="size-5 text-red-400" /> What's not covered</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Physical damage after repair","Liquid damage post-service","Tampering by another technician","Missing warranty seal"].map(x => <li key={x} className="flex gap-2"><X className="size-4 text-red-400 mt-0.5" />{x}</li>)}
            </ul>
          </div>
        </div>

        <div className="glass rounded-3xl p-7">
          <h3 className="text-xl font-semibold flex items-center gap-2"><FileText className="size-5 text-[var(--cyan-glow)]" /> Claim process</h3>
          <ol className="mt-4 grid md:grid-cols-4 gap-4 text-sm">
            {["Contact us via WhatsApp","Share invoice & device","Free diagnostic","Repair / replace under warranty"].map((s, i) => (
              <li key={s} className="rounded-2xl bg-white/5 p-4">
                <div className="text-[var(--cyan-glow)] font-bold">Step {i + 1}</div>
                <div className="mt-1 text-muted-foreground">{s}</div>
              </li>
            ))}
          </ol>
        </div>

        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); window.open("https://wa.me/971569406390?text=Warranty%20claim", "_blank"); }}
          className="glass rounded-3xl p-7 space-y-3 glow-ring">
          <h3 className="text-xl font-semibold">File a warranty claim</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <input required placeholder="Your Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)]" />
            <input required placeholder="Invoice / Order #" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)]" />
            <input required type="tel" placeholder="WhatsApp Number" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)]" />
            <input required placeholder="Device Model" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)]" />
          </div>
          <textarea rows={4} required placeholder="Describe the issue..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)] resize-none" />
          <button type="submit" className="btn-primary w-full">Submit Claim</button>
        </motion.form>

        <div className="text-center"><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Need help? Contact support →</Link></div>
      </section>
    </PageShell>
  );
}
