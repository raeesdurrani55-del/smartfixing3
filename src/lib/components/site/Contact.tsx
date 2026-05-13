import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--cyan-glow)]">Get In Touch</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Book Your <span className="text-gradient">Repair</span></h2>
          <p className="mt-4 text-muted-foreground">Send us a message or reach out directly — we respond within minutes.</p>

          <div className="mt-8 space-y-4">
            <a href="tel:+971569406390" className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-[var(--cyan-glow)]/40 transition">
              <div className="size-11 rounded-xl bg-[var(--cyan-glow)]/10 grid place-items-center text-[var(--cyan-glow)]"><Phone className="size-5" /></div>
              <div><div className="text-sm text-muted-foreground">Call us</div><div className="font-semibold">+971 56 940 6390</div></div>
            </a>
            <a href="https://wa.me/971569406390" target="_blank" rel="noreferrer" className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-[var(--cyan-glow)]/40 transition">
              <div className="size-11 rounded-xl bg-[var(--cyan-glow)]/10 grid place-items-center text-[var(--cyan-glow)]"><MessageCircle className="size-5" /></div>
              <div><div className="text-sm text-muted-foreground">WhatsApp</div><div className="font-semibold">Chat with us instantly</div></div>
            </a>
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="size-11 rounded-xl bg-[var(--cyan-glow)]/10 grid place-items-center text-[var(--cyan-glow)]"><MapPin className="size-5" /></div>
              <div><div className="text-sm text-muted-foreground">Location</div><div className="font-semibold">Dubai, UAE</div></div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          onSubmit={(e) => { e.preventDefault(); window.open("https://wa.me/971569406390", "_blank"); }}
          className="glass rounded-3xl p-8 space-y-4 glow-ring"
        >
          <h3 className="text-xl font-semibold">Schedule a Repair</h3>
          <input required placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)] transition" />
          <input required type="tel" placeholder="Phone / WhatsApp" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)] transition" />
          <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)] transition">
            <option className="bg-background">Device Type</option>
            {["iPhone","Android Mobile","iPad / Tablet","MacBook / Laptop","Other"].map(m => <option key={m} className="bg-background">{m}</option>)}
          </select>
          <textarea rows={4} placeholder="What needs to be fixed?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)] transition resize-none" />
          <button type="submit" className="btn-primary w-full"><Mail className="size-4" /> Send Booking Request</button>
        </motion.form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SmartFixing · Premium iPhone Repair Specialists · Dubai, UAE
      </div>
    </footer>
  );
}
