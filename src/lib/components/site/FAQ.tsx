import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  { q: "How long does an iPhone screen replacement take?", a: "Most iPhone screen replacements are completed in 30-60 minutes with same-day pickup." },
  { q: "Do you use genuine Apple parts?", a: "Yes — we use genuine OEM-grade parts for all repairs and offer warranty on every component." },
  { q: "Do you offer warranty on repairs?", a: "All repairs include up to 6 months warranty covering the replaced part and workmanship." },
  { q: "Can you repair water-damaged iPhones?", a: "Absolutely. Our certified technicians perform ultrasonic cleaning and full board diagnostics." },
  { q: "Where are you located in Dubai?", a: "We are centrally located in Dubai with pickup & delivery available across the city." },
  { q: "How can I book a repair?", a: "Tap Book Your Repair, message us on WhatsApp at +971 56 940 6390, or visit our store." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--cyan-glow)]">FAQ</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Questions, <span className="text-gradient">Answered</span></h2>
        </div>
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="font-semibold">{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-[var(--cyan-glow)]">
                  <Plus className="size-5" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted-foreground text-sm">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
