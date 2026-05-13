import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import heroImg from "@/assets/hero-iphone-orange.png";

const WHATSAPP = "https://wa.me/971569406390";

function Particles() {
  const dots = Array.from({ length: 18 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const size = 2 + (i % 3);
        const delay = (i % 6) * 0.6;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-[var(--cyan-glow)] animate-sparkle"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export function Hero() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen pt-32 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {!isMobile && <Particles />}
      {/* Glow orbs - simplified on mobile */}
      <div className="absolute -top-20 left-1/4 size-[420px] rounded-full bg-[var(--blue-glow)] opacity-25 blur-[120px]" />
      {!isMobile && (
        <div className="absolute top-40 right-10 size-[380px] rounded-full bg-[var(--cyan-glow)] opacity-20 blur-[120px]" />
      )}

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles className="size-3.5 text-[var(--cyan-glow)]" />
            Dubai's #1 iPhone Repair Specialists
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Dubai's Trusted <span className="text-gradient">iPhone Repair</span> &amp; Device Experts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
          >
            Professional repair solutions for iPhones, laptops, tablets and mobile devices —
            same-day service, genuine parts, expert diagnostics and warranty-backed repairs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="#contact" className="btn-primary">
              Book Your Repair <ArrowRight className="size-4" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold bg-[#25D366] text-black shadow-[0_0_24px_rgba(37,211,102,0.45)] hover:shadow-[0_0_36px_rgba(37,211,102,0.7)] hover:scale-[1.02] transition">
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground justify-center lg:justify-start">
            {["Same-Day Repair", "Genuine Parts", "Warranty Backed", "5,000+ Repaired"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[var(--cyan-glow)] shadow-[0_0_10px_var(--cyan-glow)]" />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Floating orange iPhone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative aspect-square mx-auto w-full max-w-md lg:max-w-lg"
        >
          {/* Soft neon reflections */}
          <div className="absolute inset-0 rounded-full bg-[#ff7a1a] opacity-20 blur-[110px]" />
          <div className="absolute inset-6 rounded-full bg-[var(--cyan-glow)] opacity-25 blur-[90px]" />
          <div className={isMobile ? "relative h-full w-full" : "relative h-full w-full animate-float"}>
            <img
              src={heroImg}
              alt="Premium orange iPhone Pro repair Dubai"
              className="h-full w-full object-contain drop-shadow-[0_30px_50px_rgba(255,122,26,0.35)]"
              width={1024}
              height={1024}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          {!isMobile && (
            <div className="absolute inset-0 rounded-full border border-[var(--cyan-glow)]/15 animate-spin-slow" />
          )}
        </motion.div>
      </div>
    </section>
  );
}
