import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/transformations", label: "Before / After" },
  { to: "/reviews", label: "Reviews" },
  { to: "/locations", label: "Locations" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,92%)]"
    >
      <div className="glass rounded-full px-5 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="size-7 rounded-lg bg-[var(--gradient-primary)] grid place-items-center text-[var(--background)]">i</span>
          <span className="text-gradient text-lg">SmartFixing</span>
        </Link>
        <nav className="hidden lg:flex gap-6 text-sm text-muted-foreground">
          {LINKS.map(l => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/book-repair" className="hidden sm:inline-flex btn-primary text-sm py-2 px-4">Book Repair</Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden size-10 grid place-items-center rounded-full bg-white/5 border border-white/10" aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-2 glass rounded-3xl p-4 flex flex-col gap-1"
          >
            {LINKS.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl hover:bg-white/5 text-sm">{l.label}</Link>
            ))}
            <Link to="/book-repair" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">Book Repair</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
