import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/locations")({
  component: LocationsPage,
  head: () => ({
    meta: [
      { title: "Service Locations Across Dubai | SmartFixing Repair" },
      { name: "description", content: "SmartFixing serves all major Dubai areas — Downtown, Marina, JBR, Palm Jumeirah, Business Bay, Dubai Hills and more. Free pickup & delivery." },
      { property: "og:title", content: "SmartFixing — Service Locations" },
      { property: "og:description", content: "Premium iPhone & device repair across all major Dubai neighborhoods." },
    ],
  }),
});

const LOCATIONS = [
  "Downtown Dubai", "Dubai Marina", "Jumeirah", "Jumeirah Beach Residence (JBR)",
  "Jumeirah Lake Towers (JLT)", "Palm Jumeirah", "Al Barsha", "Business Bay",
  "Dubai Silicon Oasis", "Al Quoz", "Mirdif", "Al Safa", "Al Wasl",
  "The Greens", "The Views", "Motor City", "Sports City", "Arabian Ranches",
  "The Springs", "The Meadows", "The Lakes", "Emirates Hills",
  "Jumeirah Village Circle (JVC)", "Jumeirah Village Triangle (JVT)",
  "Al Furjan", "Discovery Gardens", "Jebel Ali", "Dubai Investment Park (DIP)",
  "Al Barari", "Meydan", "Mudon", "Town Square", "Dubai Hills Estate",
];

function LocationsPage() {
  return (
    <PageShell
      eyebrow="Major Areas"
      title={<>We cover <span className="text-gradient">all of Dubai</span></>}
      subtitle="Free device pickup and delivery across every major neighborhood — same-day service, expert repair, warranty included."
      crumbs={[{ label: "Locations" }]}
    >
      <section className="mx-auto max-w-6xl px-6 pb-20 space-y-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {LOCATIONS.map((loc, i) => (
            <motion.a
              key={loc}
              href={`https://maps.google.com?q=${encodeURIComponent(loc + ", Dubai")}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.02, 0.4) }}
              whileHover={{ y: -3 }}
              className="glass rounded-2xl p-4 flex items-center gap-3 hover:border-[var(--cyan-glow)]/40 transition group"
            >
              <span className="size-9 rounded-xl grid place-items-center bg-[var(--cyan-glow)]/10 text-[var(--cyan-glow)] shrink-0">
                <MapPin className="size-4" />
              </span>
              <div className="min-w-0">
                <div className="font-semibold text-sm truncate">{loc}</div>
                <div className="text-[11px] text-muted-foreground inline-flex items-center gap-1">
                  <Navigation className="size-3" /> Free pickup
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="glass rounded-3xl p-8 text-center glow-ring">
          <h3 className="text-2xl font-semibold">Don't see your area?</h3>
          <p className="mt-2 text-muted-foreground">We cover all of Dubai — message us and we'll arrange free pickup.</p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <Link to="/book-repair" className="btn-primary">Book Free Pickup</Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold glass hover:border-[var(--cyan-glow)]/40 transition">Contact Us</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
