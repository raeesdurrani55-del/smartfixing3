import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail, Clock, Navigation } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact SmartFixing | Visit, Call or WhatsApp Our Repair Lab" },
      { name: "description", content: "Visit SmartFixing, call +971 56 940 6390 or WhatsApp our team. Open 7 days a week. Find directions, hours and instant support." },
      { property: "og:title", content: "Contact SmartFixing" },
      { property: "og:description", content: "Get in touch with Dubai's premium iPhone repair lab." },
    ],
  }),
});

function ContactPage() {
  return (
    <PageShell
      eyebrow="Get in Touch"
      title={<>We're <span className="text-gradient">here to help</span></>}
      subtitle="Visit our Dubai lab, call, or chat with us on WhatsApp — we respond in minutes."
      crumbs={[{ label: "Contact" }]}
    >
      <section className="mx-auto max-w-6xl px-6 pb-20 space-y-10">
        {/* Quick support cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Phone, label: "Call us", value: "+971 56 940 6390", href: "tel:+971569406390" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: "https://wa.me/971569406390" },
            { icon: Mail, label: "Email", value: "hello@smartfixingdubai.ae", href: "mailto:hello@smartfixingdubai.ae" },
          ].map((c, i) => (
            <motion.a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }} className="glass rounded-2xl p-6 hover:border-[var(--cyan-glow)]/40 transition">
              <c.icon className="size-6 text-[var(--cyan-glow)]" />
              <div className="mt-3 text-xs text-muted-foreground uppercase tracking-widest">{c.label}</div>
              <div className="mt-1 font-semibold">{c.value}</div>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Map */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden h-[420px]">
            <iframe
              title="SmartFixing Map"
              src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
              className="w-full h-full border-0 grayscale-[20%] contrast-110"
              loading="lazy"
            />
          </motion.div>

          {/* Form */}
          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); window.open("https://wa.me/971569406390", "_blank"); }}
            className="glass rounded-3xl p-7 space-y-3 glow-ring">
            <h3 className="text-xl font-semibold">Send a message</h3>
            <input required placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)]" />
            <input required type="tel" placeholder="WhatsApp Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)]" />
            <input placeholder="Subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)]" />
            <textarea rows={4} placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[var(--cyan-glow)] resize-none" />
            <button type="submit" className="btn-primary w-full"><Mail className="size-4" /> Send Message</button>
          </motion.form>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass rounded-2xl p-5">
            <Clock className="size-5 text-[var(--cyan-glow)]" />
            <h4 className="mt-2 font-semibold">Hours</h4>
            <p className="mt-1 text-sm text-muted-foreground">Mon – Sat · 10:00 – 22:00<br />Sun · 12:00 – 20:00</p>
          </div>
          <div className="glass rounded-2xl p-5">
            <MapPin className="size-5 text-[var(--cyan-glow)]" />
            <h4 className="mt-2 font-semibold">Location</h4>
            <p className="mt-1 text-sm text-muted-foreground">Dubai, United Arab Emirates<br /><a className="text-[var(--cyan-glow)] inline-flex items-center gap-1" href="https://maps.google.com?q=Dubai" target="_blank" rel="noreferrer"><Navigation className="size-3" /> Get directions</a></p>
          </div>
          <div className="glass rounded-2xl p-5">
            <MessageCircle className="size-5 text-[var(--cyan-glow)]" />
            <h4 className="mt-2 font-semibold">Free pickup</h4>
            <p className="mt-1 text-sm text-muted-foreground">Free device pickup across Dubai.<br /><Link to="/book-repair" className="text-[var(--cyan-glow)]">Book now →</Link></p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
