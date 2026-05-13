import { createFileRoute } from "@tanstack/react-router";
import { DeviceRepairPage } from "@/components/site/DeviceRepairPage";

export const Route = createFileRoute("/repair/samsung")({
  component: () => (
    <DeviceRepairPage
      device="Samsung Galaxy"
      tagline="Galaxy S, Note, Z Fold & Flip repair in Dubai — AMOLED, hinge, battery and board."
      issues={[
        { title: "AMOLED Screen", price: "from AED 549", time: "60 min" },
        { title: "Battery Replacement", price: "from AED 199", time: "45 min" },
        { title: "Back Glass", price: "from AED 299", time: "1–2 hr" },
        { title: "Foldable Hinge / Inner Display", price: "from AED 1,199", time: "1–2 days" },
        { title: "Charging Port", price: "from AED 179", time: "60 min" },
      ]}
      faqs={[
        { q: "Z Fold / Flip supported?", a: "Yes — including inner foldable display & hinge work." },
        { q: "Original Samsung parts?", a: "We offer both Service Pack original and high-grade aftermarket options." },
        { q: "Warranty?", a: "6 months on parts & labor." },
      ]}
      related={[
        { label: "iPhone 15 Pro Max Repair", to: "/repair/iphone-15-pro-max" },
        { label: "All Services", to: "/services" },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "Samsung Repair Dubai | Galaxy S, Note, Fold, Flip — SmartFixing" },
      { name: "description", content: "Premium Samsung Galaxy repair in Dubai. AMOLED screens, foldable hinges, batteries and boards. Warranty included." },
      { property: "og:title", content: "Samsung Repair Dubai" },
      { property: "og:description", content: "Samsung Galaxy repair experts in Dubai." },
    ],
  }),
});
