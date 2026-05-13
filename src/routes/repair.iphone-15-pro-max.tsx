import { createFileRoute } from "@tanstack/react-router";
import { DeviceRepairPage } from "@/components/site/DeviceRepairPage";

export const Route = createFileRoute("/repair/iphone-15-pro-max")({
  component: () => (
    <DeviceRepairPage
      device="iPhone 15 Pro Max"
      tagline="Premium iPhone 15 Pro Max repair in Dubai — titanium frame, OLED, USB-C and battery work."
      issues={[
        { title: "Screen Replacement", price: "AED 1,099", time: "60 min" },
        { title: "Battery Replacement", price: "AED 299", time: "45 min" },
        { title: "Back Glass / Frame", price: "AED 549", time: "2 hr" },
        { title: "USB-C Port", price: "AED 249", time: "60 min" },
        { title: "Camera Module", price: "AED 649", time: "90 min" },
      ]}
      faqs={[
        { q: "Will Face ID still work?", a: "Yes — we transfer original sensors and recalibrate." },
        { q: "Is True Tone preserved?", a: "Yes, with our genuine-grade panels and programmer." },
        { q: "Pickup available?", a: "Free pickup across Dubai." },
      ]}
      related={[
        { label: "iPhone 16 Pro Max Repair", to: "/repair/iphone-16-pro-max" },
        { label: "iPhone 14 Pro Max Repair", to: "/repair/iphone-14-pro-max" },
        { label: "All Services", to: "/services" },
      ]}
    />
  ),
  head: () => ({
    meta: [
      { title: "iPhone 15 Pro Max Repair Dubai — SmartFixing" },
      { name: "description", content: "Same-day iPhone 15 Pro Max screen, battery, camera and USB-C repair in Dubai with warranty." },
      { property: "og:title", content: "iPhone 15 Pro Max Repair Dubai" },
      { property: "og:description", content: "Premium iPhone 15 Pro Max repairs with warranty." },
    ],
  }),
});
