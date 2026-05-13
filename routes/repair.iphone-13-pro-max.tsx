import { createFileRoute } from "@tanstack/react-router";
import { DeviceRepairPage } from "@/components/site/DeviceRepairPage";

export const Route = createFileRoute("/repair/iphone-13-pro-max")({
  component: () => (
    <DeviceRepairPage
      device="iPhone 13 Pro Max"
      tagline="ProMotion 120Hz, OLED, ceramic shield — restored with precision in Dubai."
      issues={[
        { title: "Screen Replacement", price: "AED 849", time: "60 min" },
        { title: "Battery Replacement", price: "AED 229", time: "45 min" },
        { title: "Back Glass", price: "AED 399", time: "2 hr" },
        { title: "Camera Module", price: "AED 499", time: "90 min" },
        { title: "Face ID Repair", price: "AED 749", time: "2 hr" },
      ]}
      faqs={[
        { q: "ProMotion still 120Hz after repair?", a: "Yes, with original-grade panels we preserve full refresh rate." },
        { q: "Walk-in available?", a: "Yes — most repairs while you wait." },
        { q: "Warranty?", a: "6 months parts & labor." },
      ]}
      related={[
        { label: "iPhone 14 Pro Max Repair", to: "/repair/iphone-14-pro-max" },
        { label: "iPhone 15 Pro Max Repair", to: "/repair/iphone-15-pro-max" },
        { label: "All Services", to: "/services" },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "iPhone 13 Pro Max Repair Dubai — SmartFixing" },
      { name: "description", content: "Same-day iPhone 13 Pro Max repair in Dubai. Genuine-grade screens, batteries, cameras." },
      { property: "og:title", content: "iPhone 13 Pro Max Repair Dubai" },
      { property: "og:description", content: "Premium iPhone 13 Pro Max repairs with warranty." },
    ],
  }),
});
