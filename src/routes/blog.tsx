import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, Clock, ArrowRight, Flame } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "iPhone Repair Blog Dubai | Tips, Guides & News — SmartFixing" },
      { name: "description", content: "Expert iPhone, MacBook & device repair guides from Dubai's trusted technicians. Battery tips, water damage rescue, screen advice and more." },
      { property: "og:title", content: "iPhone Repair Blog Dubai — SmartFixing" },
      { property: "og:description", content: "Premium repair guides, troubleshooting and Dubai's best repair tips." },
    ],
  }),
});

const POSTS = [
  { slug: "best-iphone-repair-dubai", title: "Best iPhone Repair in Dubai (2026 Guide)", category: "Guides", read: "6 min", trending: true, excerpt: "How to choose a trusted iPhone repair lab in Dubai — what to look for, what to avoid, and pricing benchmarks." },
  { slug: "iphone-battery-draining-fast", title: "iPhone Battery Draining Fast? 9 Fixes That Actually Work", category: "Battery", read: "5 min", trending: true, excerpt: "From background refresh tweaks to genuine battery swaps — extend your iPhone life today." },
  { slug: "fix-water-damaged-iphone", title: "How to Fix a Water-Damaged iPhone (Step-by-Step)", category: "Water Damage", read: "7 min", excerpt: "What to do in the first 60 minutes — and why rice doesn't work." },
  { slug: "original-vs-fake-iphone-screens", title: "Original vs Fake iPhone Screens — How to Tell", category: "Screens", read: "4 min", trending: true, excerpt: "Touch latency, True Tone, color shift — telltale signs of low-grade displays." },
  { slug: "iphone-overheating-fixes", title: "iPhone Overheating? Causes & Permanent Fixes", category: "Performance", read: "5 min", excerpt: "Hardware vs software overheating — diagnose like a pro." },
  { slug: "face-id-not-working", title: "Why Face ID Stops Working (And How To Repair It)", category: "Face ID", read: "6 min", excerpt: "TrueDepth sensor faults, software resets and pro-level repairs explained." },
  { slug: "macbook-liquid-damage-guide", title: "MacBook Liquid Damage: The Complete Rescue Guide", category: "MacBook", read: "8 min", excerpt: "Logic board recovery, corrosion cleaning and what to do in the first 10 minutes." },
];

const CATEGORIES = ["All", "Guides", "Battery", "Water Damage", "Screens", "Performance", "Face ID", "MacBook"];

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = useMemo(() => POSTS.filter(p =>
    (cat === "All" || p.category === cat) &&
    (p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase()))
  ), [q, cat]);
  const featured = POSTS[0];
  const trending = POSTS.filter(p => p.trending);

  return (
    <PageShell
      eyebrow="The Repair Journal"
      title={<>Premium Repair <span className="text-gradient">Insights</span></>}
      subtitle="Hands-on guides, diagnostics and repair walkthroughs straight from Dubai's leading device lab."
      crumbs={[{ label: "Blog" }]}
    >
      <section className="mx-auto max-w-6xl px-6 pb-20 space-y-10">
        {/* Featured */}
        <Link to="/blog/$slug" params={{ slug: featured.slug }} className="block group">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 glow-ring relative overflow-hidden">
            <div className="absolute -inset-1 bg-[var(--gradient-primary)] opacity-10 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[var(--cyan-glow)]"><Flame className="size-3" /> Featured</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold group-hover:text-[var(--cyan-glow)] transition">{featured.title}</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{featured.category}</span><span>·</span><span className="flex items-center gap-1"><Clock className="size-3" />{featured.read}</span>
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Search + categories */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative max-w-sm w-full">
            <Search className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search articles..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-3 text-sm outline-none focus:border-[var(--cyan-glow)] transition" />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-3 py-1.5 rounded-full text-xs border transition ${cat === c ? "bg-[var(--cyan-glow)]/15 border-[var(--cyan-glow)]/50 text-foreground" : "border-white/10 text-muted-foreground hover:text-foreground"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {filtered.map((p, i) => (
              <motion.div key={p.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="glass rounded-2xl p-6 block h-full hover:border-[var(--cyan-glow)]/40 transition group">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="px-2 py-0.5 rounded-full bg-white/5">{p.category}</span>
                    <span className="flex items-center gap-1"><Clock className="size-3" />{p.read}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold group-hover:text-[var(--cyan-glow)] transition">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--cyan-glow)]">Read more <ArrowRight className="size-3" /></div>
                </Link>
              </motion.div>
            ))}
            {filtered.length === 0 && <p className="text-muted-foreground col-span-2">No articles match your search.</p>}
          </div>

          <aside className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h4 className="font-semibold flex items-center gap-2"><Flame className="size-4 text-[var(--cyan-glow)]" /> Trending</h4>
              <ul className="mt-4 space-y-3">
                {trending.map(t => (
                  <li key={t.slug}>
                    <Link to="/blog/$slug" params={{ slug: t.slug }} className="text-sm hover:text-[var(--cyan-glow)] transition">
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-6 glow-ring">
              <h4 className="font-semibold">Need a fix today?</h4>
              <p className="text-sm text-muted-foreground mt-2">Same-day device repair across Dubai.</p>
              <Link to="/book-repair" className="btn-primary w-full mt-4 justify-center">Book Repair</Link>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
