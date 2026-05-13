import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { Clock, Share2, ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

const ARTICLES: Record<string, { title: string; category: string; read: string; intro: string; sections: { h: string; p: string }[] }> = {
  "best-iphone-repair-dubai": {
    title: "Best iPhone Repair in Dubai (2026 Guide)",
    category: "Guides", read: "6 min",
    intro: "Choosing where to repair your iPhone in Dubai matters more than the price. Here's how to evaluate a repair lab like a pro.",
    sections: [
      { h: "Look for genuine-grade parts", p: "True OEM panels deliver correct color, True Tone and touch response. Cheap LCD copies fail within months." },
      { h: "Same-day, in-house repairs", p: "Premium labs fix on-site with calibrated tools, not by mailing your device away." },
      { h: "Real warranty, in writing", p: "A trustworthy lab offers 3–12 months of warranty on screens and batteries — printed, not promised." },
      { h: "Reviews & transparency", p: "Check Google reviews, before/after work and live diagnostics walk-throughs." },
    ],
  },
  "iphone-battery-draining-fast": {
    title: "iPhone Battery Draining Fast? 9 Fixes That Actually Work",
    category: "Battery", read: "5 min",
    intro: "Battery health under 80% is the #1 cause. Here's what really helps.",
    sections: [
      { h: "Check Battery Health", p: "Settings → Battery → Battery Health. Below 80% = replacement time." },
      { h: "Disable Background App Refresh", p: "Stop apps draining when not in use." },
      { h: "Reduce 5G & Always-On", p: "5G Auto and Always-On display burn idle power fast." },
      { h: "Genuine battery replacement", p: "Use a certified lab to maintain Apple's battery health metrics." },
    ],
  },
  "fix-water-damaged-iphone": {
    title: "How to Fix a Water-Damaged iPhone (Step-by-Step)",
    category: "Water Damage", read: "7 min",
    intro: "The first 60 minutes decide everything. Don't power it on.",
    sections: [
      { h: "Power off immediately", p: "Don't try to charge it. Liquid + voltage = corrosion." },
      { h: "Skip the rice myth", p: "Rice cannot reach the logic board. It buys you time only." },
      { h: "Get to a pro lab fast", p: "Ultrasonic logic-board cleaning saves the device — DIY usually doesn't." },
    ],
  },
  "original-vs-fake-iphone-screens": {
    title: "Original vs Fake iPhone Screens — How to Tell",
    category: "Screens", read: "4 min",
    intro: "Cheap screens look identical at first glance, but performance gives them away.",
    sections: [
      { h: "True Tone disabled?", p: "Non-OEM screens lose True Tone after install." },
      { h: "Touch latency", p: "Original panels respond in <50ms. Knock-offs lag noticeably." },
      { h: "Color & viewing angles", p: "Off-axis shifts to green or pink mean it's a copy panel." },
    ],
  },
  "iphone-overheating-fixes": {
    title: "iPhone Overheating? Causes & Permanent Fixes",
    category: "Performance", read: "5 min",
    intro: "Heat throttles your iPhone and damages the battery long-term.",
    sections: [
      { h: "Background processes", p: "Force-close runaway apps and reset settings." },
      { h: "Battery degradation", p: "An aged battery generates heat under load — replace it." },
      { h: "Charging port debris", p: "Dirty USB-C / Lightning ports cause heat and slow charging." },
    ],
  },
  "face-id-not-working": {
    title: "Why Face ID Stops Working (And How To Repair It)",
    category: "Face ID", read: "6 min",
    intro: "Face ID failures are usually TrueDepth sensor or flex damage.",
    sections: [
      { h: "Reset Face ID", p: "Settings → Face ID & Passcode → Reset Face ID." },
      { h: "Software vs hardware", p: "If reset fails, the dot projector or IR camera likely needs repair." },
      { h: "Pro repair only", p: "Face ID requires a paired sensor module — DIY breaks it permanently." },
    ],
  },
  "macbook-liquid-damage-guide": {
    title: "MacBook Liquid Damage: The Complete Rescue Guide",
    category: "MacBook", read: "8 min",
    intro: "MacBooks die from corrosion, not from the spill itself.",
    sections: [
      { h: "Power off & invert", p: "Hold the power button and invert the device to drain liquid." },
      { h: "Logic board cleaning", p: "Professional ultrasonic baths remove corrosion safely." },
      { h: "Component replacement", p: "Damaged ICs and connectors are micro-soldered back to life." },
    ],
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES[params.slug];
    if (!article) throw notFound();
    return { article, slug: params.slug };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.article.title} | SmartFixing Blog` },
      { name: "description", content: loaderData.article.intro },
      { property: "og:title", content: loaderData.article.title },
      { property: "og:description", content: loaderData.article.intro },
      { property: "og:type", content: "article" },
    ] : [],
  }),
  component: ArticlePage,
  notFoundComponent: () => (
    <PageShell title="Article not found" crumbs={[{ label: "Blog", to: "/blog" }, { label: "Not found" }]}>
      <div className="mx-auto max-w-3xl px-6 pb-20"><Link to="/blog" className="btn-primary">Back to Blog</Link></div>
    </PageShell>
  ),
});

function ArticlePage() {
  const { article, slug } = Route.useLoaderData();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const related = Object.entries(ARTICLES).filter(([s]) => s !== slug).slice(0, 3);

  return (
    <PageShell
      eyebrow={article.category}
      title={article.title}
      subtitle={<span className="flex items-center gap-3 text-sm"><Clock className="size-4" />{article.read} read · SmartFixing Editorial</span>}
      crumbs={[{ label: "Blog", to: "/blog" }, { label: article.category }]}
    >
      <motion.div style={{ scaleX: progress }} className="fixed top-0 left-0 right-0 h-1 origin-left bg-[var(--gradient-primary)] z-[60]" />
      <article className="mx-auto max-w-3xl px-6 pb-20">
        <p className="text-lg text-muted-foreground">{article.intro}</p>
        <div className="mt-10 space-y-8">
          {article.sections.map((s: { h: string; p: string }, i: number) => (
            <motion.section key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold">{s.h}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.p}</p>
            </motion.section>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-6 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex items-center gap-3 text-sm text-muted-foreground"><Share2 className="size-4 text-[var(--cyan-glow)]" /> Share this guide</div>
          <div className="flex gap-2">
            {["WhatsApp","X","Facebook","Copy"].map(p => (
              <button key={p} onClick={() => navigator.clipboard?.writeText(window.location.href)}
                className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 hover:border-[var(--cyan-glow)]/40">{p}</button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Related reads</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map(([s, r]) => (
              <Link key={s} to="/blog/$slug" params={{ slug: s }} className="glass rounded-2xl p-4 hover:border-[var(--cyan-glow)]/40 transition">
                <div className="text-xs text-[var(--cyan-glow)]">{r.category}</div>
                <div className="mt-2 font-medium text-sm">{r.title}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10"><Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> Back to Blog</Link></div>
      </article>
    </PageShell>
  );
}
