import { createFileRoute } from "@tanstack/react-router";
import { DeviceRepairPage } from "@/components/site/DeviceRepairPage";

export const Route = createFileRoute("/repair/iphone-16-pro-max")({
  component: () => (
    <DeviceRepairPage
      device="iPhone 16 Pro Max"
      tagline="Cracked Super Retina XDR? Battery dropping? Genuine-grade iPhone 16 Pro Max repairs delivered same-day in Dubai."
      issues={[
        { title: "Screen Replacement (OLED)", price: "AED 1,299", time: "60 min" },
        { title: "Battery Replacement", price: "AED 349", time: "45 min" },
        { title: "Back Glass Repair", price: "AED 599", time: "2 hr" },
        { title: "Camera Module", price: "AED 749", time: "90 min" },
        { title: "Face ID / TrueDepth", price: "AED 899", time: "2 hr" },
        { title: "Charging Port", price: "AED 249", time: "60 min" },
      ]}
      faqs={[
        { q: "Do you use genuine Apple parts?", a: "We use Apple OEM-grade parts that preserve True Tone, brightness and touch performance." },
        { q: "How long does the repair take?", a: "Most iPhone 16 Pro Max repairs are completed same-day, often within 1–2 hours." },
        { q: "What warranty do I get?", a: "6 months on screens & batteries, 12 months on logic-board work." },
      ]}
      related={[
        { label: "iPhone 15 Pro Max Repair", to: "/repair/iphone-15-pro-max" },
        { label: "iPhone 14 Pro Max Repair", to: "/repair/iphone-14-pro-max" },
        { label: "All Services", to: "/services" },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "iPhone 16 Pro Max Repair Dubai | Same-Day Service — SmartFixing" },
      { name: "description", content: "Premium iPhone 16 Pro Max repair in Dubai. Genuine-grade screens, batteries, cameras and Face ID. Warranty included." },
      { property: "og:title", content: "iPhone 16 Pro Max Repair Dubai" },
      { property: "og:description", content: "Same-day iPhone 16 Pro Max repair with warranty in Dubai." },
    ],
  }),
});
