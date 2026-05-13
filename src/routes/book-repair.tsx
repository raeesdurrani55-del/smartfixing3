import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, ChevronRight, Smartphone, Laptop, Tablet, Calendar, Clock, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/book-repair")({
  component: BookRepair,
  head: () => ({
    meta: [
      { title: "Book a Repair in Dubai | Same-Day iPhone & Device Repair — SmartFixing" },
      { name: "description", content: "Book your iPhone, MacBook, iPad or Samsung repair in Dubai. Same-day service, certified parts, free pickup. Schedule online in 60 seconds." },
      { property: "og:title", content: "Book a Repair — SmartFixing" },
      { property: "og:description", content: "Premium same-day device repair booking with WhatsApp confirmation." },
    ],
  }),
});

const DEVICES = [
  { id: "iphone", label: "iPhone", icon: Smartphone },
  { id: "android", label: "Android Phone", icon: Smartphone },
  { id: "ipad", label: "iPad / Tablet", icon: Tablet },
  { id: "macbook", label: "MacBook / Laptop", icon: Laptop },
];
const ISSUES = ["Screen / Display","Battery","Water Damage","Camera","Face ID","Charging Port","Back Glass","Speaker / Mic","Other"];
const TIMES = ["10:00 AM","12:00 PM","2:00 PM","4:00 PM","6:00 PM","8:00 PM"];

function BookRepair() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ device: "", issue: "", date: "", time: "", name: "", phone: "" });
  const [done, setDone] = useState(false);

  const next = () => setStep(s => Math.min(4, s + 1));
  const prev = () => setStep(s => Math.max(0, s - 1));

  const submit = () => {
    setDone(true);
    const msg = encodeURIComponent(`Hi SmartFixing! I want to book a repair:\nDevice: ${data.device}\nIssue: ${data.issue}\nDate: ${data.date} ${data.time}\nName: ${data.name}\nPhone: ${data.phone}`);
    setTimeout(() => window.open(`https://wa.me/971569406390?text=${msg}`, "_blank"), 1500);
  };

  return (
    <PageShell
      eyebrow="Booking"
      title={<>Book Your <span className="text-gradient">Repair</span></>}
      subtitle="Tell us about your device and we'll confirm via WhatsApp in minutes."
      crumbs={[{ label: "Book Repair" }]}
    >
      <section className="mx-auto max-w-3xl px-6 pb-24">
        {/* Steps */}
        <div className="flex items-center gap-2 mb-8">
          {["Device","Issue","Schedule","Details","Confirm"].map((l, i) => (
            <div key={l} className="flex items-center gap-2 flex-1">
              <div className={`size-8 rounded-full grid place-items-center text-xs font-semibold border transition ${i <= step ? "bg-[var(--cyan-glow)]/15 border-[var(--cyan-glow)] text-[var(--cyan-glow)]" : "border-white/10 text-muted-foreground"}`}>{i + 1}</div>
              {i < 4 && <div className={`flex-1 h-px transition ${i < step ? "bg-[var(--cyan-glow)]" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        <motion.div layout className="glass rounded-3xl p-7 md:p-10 glow-ring relative overflow-hidden">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
                  className="mx-auto size-20 rounded-full bg-[var(--cyan-glow)]/15 grid place-items-center text-[var(--cyan-glow)]">
                  <Check className="size-10" />
                </motion.div>
                <h3 className="mt-6 text-2xl font-bold">Booking Received!</h3>
                <p className="mt-2 text-muted-foreground">Opening WhatsApp to confirm your slot...</p>
              </motion.div>
            ) : step === 0 ? (
              <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-xl font-semibold mb-5">Select your device</h3>
                <div className="grid grid-cols-2 gap-3">
                  {DEVICES.map(d => {
                    const Icon = d.icon;
                    return (
                      <button key={d.id} onClick={() => { setData({ ...data, device: d.label }); next(); }}
                        className={`p-5 rounded-2xl border text-left transition ${data.device === d.label ? "border-[var(--cyan-glow)] bg-[var(--cyan-glow)]/10" : "border-white/10 hover:border-white/30"}`}>
                        <Icon className="size-6 text-[var(--cyan-glow)]" />
                        <div className="mt-3 font-medium">{d.label}</div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ) : step === 1 ? (
              <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-xl font-semibold mb-5">What needs fixing?</h3>
                <div className="flex flex-wrap gap-2">
                  {ISSUES.map(i => (
                    <button key={i} onClick={() => { setData({ ...data, issue: i }); next(); }}
                      className={`px-4 py-2 rounded-full text-sm border transition ${data.issue === i ? "border-[var(--cyan-glow)] bg-[var(--cyan-glow)]/10" : "border-white/10 hover:border-white/30"}`}>
                      {i}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : step === 2 ? (
              <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-xl font-semibold mb-5">Pick a date & time</h3>
                <label className="block text-sm text-muted-foreground mb-2">Date</label>
                <div className="relative mb-5">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input type="date" value={data.date} min={new Date().toISOString().slice(0,10)}
                    onChange={e => setData({ ...data, date: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-[var(--cyan-glow)]" />
                </div>
                <label className="block text-sm text-muted-foreground mb-2"><Clock className="size-3 inline mr-1" /> Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {TIMES.map(t => (
                    <button key={t} onClick={() => setData({ ...data, time: t })}
                      className={`py-2 rounded-xl text-sm border transition ${data.time === t ? "border-[var(--cyan-glow)] bg-[var(--cyan-glow)]/10" : "border-white/10 hover:border-white/30"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : step === 3 ? (
              <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-xl font-semibold mb-5">Your details</h3>
                <input value={data.name} onChange={e => setData({ ...data, name: e.target.value })} placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)] mb-3" />
                <input value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })} placeholder="WhatsApp Number" type="tel"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)]" />
              </motion.div>
            ) : (
              <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-xl font-semibold mb-5">Confirm your booking</h3>
                <div className="space-y-3 text-sm">
                  {[["Device", data.device], ["Issue", data.issue], ["When", `${data.date || "—"} · ${data.time || "—"}`], ["Name", data.name], ["Phone", data.phone]].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-white/5 pb-2"><span className="text-muted-foreground">{k}</span><span className="font-medium">{v || "—"}</span></div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!done && (
            <div className="mt-8 flex justify-between">
              <button onClick={prev} disabled={step === 0} className="text-sm text-muted-foreground disabled:opacity-30 hover:text-foreground">Back</button>
              {step < 4 ? (
                <button onClick={next} className="btn-primary">Continue <ChevronRight className="size-4" /></button>
              ) : (
                <button onClick={submit} className="btn-primary">Confirm via WhatsApp</button>
              )}
            </div>
          )}
        </motion.div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Prefer chat? <a href="https://wa.me/971569406390" target="_blank" rel="noreferrer" className="text-[var(--cyan-glow)] inline-flex items-center gap-1"><MessageCircle className="size-3" /> WhatsApp us directly</a>
          {" · "}
          <Link to="/contact" className="hover:text-foreground">Visit store</Link>
        </div>
      </section>
    </PageShell>
  );
}
