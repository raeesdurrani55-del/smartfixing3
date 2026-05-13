import { createFileRoute } from "@tanstack/react-router";
import { DeviceRepairPage } from "@/components/site/DeviceRepairPage";

export const Route = createFileRoute("/repair/iphone-14-pro-max")({
  component: () => (
    <DeviceRepairPage
      device="iPhone 14 Pro Max"
      tagline="Dynamic Island intact, OLED restored — premium iPhone 14 Pro Max repair in Dubai."
      issues={[
        { title: "Screen Replacement", price: "AED 949", time: "60 min" },
        { title: "Battery Replacement", price: "AED 269", time: "45 min" },
        { title: "Back Glass", price: "AED 449", time: "2 hr" },
        { title: "Camera Module", price: "AED 599", time: "90 min" },
        { title: "Charging Port", price: "AED 199", time: "60 min" },
      ]}
      faqs={[
        { q: "Does Dynamic Island still work?", a: "Yes — our panels preserve the TrueDepth array fully." },
        { q: "How fast?", a: "Most repairs done same-day in Dubai." },
        { q: "Warranty?", a: "6 months on parts & labor." },
      ]}
      related={[
        { label: "iPhone 13 Pro Max Repair", to: "/repair/iphone-13-pro-max" },
        { label: "iPhone 15 Pro Max Repair", to: "/repair/iphone-15-pro-max" },
        { label: "All Services", to: "/services" },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "iPhone 14 Pro Max Repair Dubai — SmartFixing" },
      { name: "description", content: "Same-day iPhone 14 Pro Max screen, battery and camera repair in Dubai." },
      { property: "og:title", content: "iPhone 14 Pro Max Repair Dubai" },
      { property: "og:description", content: "Premium iPhone 14 Pro Max repairs with warranty." },
    ],
  }),
});
