import { motion } from "framer-motion";
import img1 from "@/assets/iphone-1.jpg";
import img2 from "@/assets/iphone-2.jpg";
import img3 from "@/assets/iphone-3.jpg";
import img4 from "@/assets/iphone-4.jpg";
import hero from "@/assets/hero-iphone.jpg";
import samsung from "@/assets/phone-samsung.jpg";
import androidRepair from "@/assets/phone-android-repair.jpg";
import phonesMixed from "@/assets/phones-mixed.jpg";
import foldable from "@/assets/phone-foldable.jpg";

const SHOTS = [
  { src: img3, label: "Every iPhone Model", span: "md:col-span-2 md:row-span-2" },
  { src: img2, label: "iPhone Precision Repair", span: "" },
  { src: samsung, label: "Samsung Galaxy", span: "" },
  { src: phonesMixed, label: "All Brands Welcome", span: "md:col-span-2" },
  { src: androidRepair, label: "Android Board Repair", span: "" },
  { src: foldable, label: "Foldable Phones", span: "" },
  { src: img1, label: "Screen Restoration", span: "" },
  { src: img4, label: "Camera Module", span: "" },
  { src: hero, label: "Genuine Parts", span: "" },
];

export function IphoneGallery() {
  return (
    <section id="gallery" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--cyan-glow)]">Inside Our Lab</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Phone <span className="text-gradient">Repair Showcase</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            iPhone, Samsung, Google Pixel, Huawei, OnePlus and more — every brand, every model, expertly repaired.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {SHOTS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: Math.min(i * 0.05, 0.3), duration: 0.5 }}
              className={`group relative glass rounded-2xl overflow-hidden ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.label}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p className="text-sm font-semibold text-foreground/90">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
