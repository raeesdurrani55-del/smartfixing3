import { createFileRoute } from "@tanstack/react-router";
import { DeviceRepairPage } from "@/components/site/DeviceRepairPage";

export const Route = createFileRoute("/repair/macbook")({
  component: () => (
    <DeviceRepairPage
      device="MacBook"
      tagline="MacBook Air & Pro repair in Dubai — logic boards, batteries, screens, keyboards. Micro-soldering experts."
      issues={[
        { title: "Screen / Display", price: "from AED 1,499", time: "1–2 days" },
        { title: "Battery Replacement", price: "from AED 549", time: "2 hr" },
        { title: "Liquid Damage Recovery", price: "from AED 699", time: "2–3 days" },
        { title: "Logic Board Repair", price: "from AED 999", time: "2–3 days" },
        { title: "Keyboard / Trackpad", price: "from AED 749", time: "1 day" },
      ]}
      faqs={[
        { q: "M1/M2/M3 supported?", a: "Yes — all Apple Silicon and Intel MacBooks supported." },
        { q: "Data safe?", a: "Your SSD is preserved; we do not wipe data." },
        { q: "Warranty?", a: "12 months on logic-board repairs, 6 months on parts." },
      ]}
      related={[
        { label: "iPad Repair", to: "/repair/ipad" },
        { label: "All Services", to: "/services" },
        { label: "Warranty", to: "/warranty" },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "MacBook Repair Dubai | Logic Board, Battery, Screen — SmartFixing" },
      { name: "description", content: "Premium MacBook Air & Pro repair in Dubai — logic board, screens, batteries, keyboards. Micro-soldering experts." },
      { property: "og:title", content: "MacBook Repair Dubai" },
      { property: "og:description", content: "MacBook repair experts in Dubai." },
    ],
  }),
});
