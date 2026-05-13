import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Nav } from "./Nav";
import { Sparkles as SparklesFx } from "./Sparkles";
import { FloatingCTA } from "./FloatingCTA";
import { Footer } from "./Contact";

type Crumb = { label: string; to?: string };

export function PageShell({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  crumbs?: Crumb[];
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen">
      <SparklesFx count={45} />
      <Nav />
      <section className="relative pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-muted-foreground mb-5">
            <Link to="/" className="hover:text-foreground">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="size-3" />
                {c.to ? <Link to={c.to} className="hover:text-foreground">{c.label}</Link> : <span className="text-foreground">{c.label}</span>}
              </span>
            ))}
          </nav>
          {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-[var(--cyan-glow)]">{eyebrow}</p>}
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mt-3 text-4xl md:text-6xl font-bold tracking-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 max-w-2xl text-muted-foreground text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>
      <div className="relative">{children}</div>
      <Footer />
      <FloatingCTA />
    </main>
  );
}
