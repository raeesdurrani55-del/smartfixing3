import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      setV(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>;
}

export function StatsBar() {
  const stats = [
    { v: 5000, s: "+", label: "Devices Repaired" },
    { v: 49, s: "★", label: "Customer Rating", divisor: 10 },
    { v: 24, s: "h", label: "Same-Day Service" },
    { v: 12, s: "+", label: "Years Experience" },
  ];
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="glass rounded-2xl p-6 text-center hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-shadow"
          >
            <div className="text-4xl md:text-5xl font-bold text-gradient">
              {s.divisor ? (
                <>
                  {(s.v / s.divisor).toFixed(1)}{s.s}
                </>
              ) : (
                <Counter to={s.v} suffix={s.s} />
              )}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
