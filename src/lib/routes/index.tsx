import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/Counter";
import { Models } from "@/components/site/Models";
import { DeviceShowcase } from "@/components/site/DeviceShowcase";
import { IphoneGallery } from "@/components/site/IphoneGallery";
import { Services } from "@/components/site/Services";
import { Sparkles as SparklesFx } from "@/components/site/Sparkles";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { FAQ } from "@/components/site/FAQ";
import { Contact, Footer } from "@/components/site/Contact";
import { FloatingCTA } from "@/components/site/FloatingCTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "iPhone Repair Dubai | Premium Same-Day iPhone Repair Experts" },
      { name: "description", content: "Dubai's trusted iPhone repair experts. Same-day screen, battery, camera & water damage repair for iPhone 11 to iPhone 16 with genuine parts and warranty." },
      { property: "og:title", content: "iPhone Repair Dubai | Premium Same-Day Service" },
      { property: "og:description", content: "Premium iPhone repair specialists in Dubai. Genuine parts, expert technicians, same-day service for iPhone 11–16 series." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <SparklesFx count={20} />
      <Nav />
      <Hero />
      <StatsBar />
      <Models />
      <IphoneGallery />
      <DeviceShowcase />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <BeforeAfter />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
