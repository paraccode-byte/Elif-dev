import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ContactFooter from "@/components/ContactFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-zinc-100 flex flex-col">
      {/* Sticky Header with Glassmorphism */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <Faq />
      </main>

      {/* Footer & Contact Section */}
      <ContactFooter />

      {/* Subtle Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
