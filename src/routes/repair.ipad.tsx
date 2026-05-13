import { createFileRoute } from "@tanstack/react-router";
import { DeviceRepairPage } from "@/components/site/DeviceRepairPage";

export const Route = createFileRoute("/repair/ipad")({
  component: () => (
    <DeviceRepairPage
      device="iPad"
      tagline="iPad Pro, Air & mini repair in Dubai — display, glass, battery and frame restoration."
      issues={[
        { title: "Glass / Digitizer", price: "from AED 449", time: "1–2 days" },
        { title: "OLED / LCD Display", price: "from AED 999", time: "1–2 days" },
        { title: "Battery Replacement", price: "from AED 349", time: "1 day" },
        { title: "Charging Port", price: "from AED 249", time: "1 day" },
        { title: "Bent Frame Restore", price: "from AED 549", time: "1–2 days" },
      ]}
      faqs={[
        { q: "Apple Pencil still works?", a: "Yes — our digitizers fully support Apple Pencil 1 & 2." },
        { q: "iPad Pro M4 supported?", a: "Yes, including tandem-OLED displays." },
        { q: "Warranty?", a: "6 months on parts & labor." },
      ]}
      related={[
        { label: "MacBook Repair", to: "/repair/macbook" },
        { label: "All Services", to: "/services" },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "iPad Repair Dubai | Screen, Battery & Glass — SmartFixing" },
      { name: "description", content: "Premium iPad Pro, Air & mini repair in Dubai. Screens, batteries, glass and frame restoration with warranty." },
      { property: "og:title", content: "iPad Repair Dubai" },
      { property: "og:description", content: "iPad repair experts in Dubai." },
    ],
  }),
});
