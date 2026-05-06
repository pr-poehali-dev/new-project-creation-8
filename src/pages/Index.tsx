import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TransformSection from "@/components/TransformSection";
import AudienceSection from "@/components/AudienceSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProgramSection from "@/components/ProgramSection";
import CasesSection from "@/components/CasesSection";
import TrustSection from "@/components/TrustSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FaqSection from "@/components/FaqSection";
import OfferSection from "@/components/OfferSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
    const map: Record<string, string> = {
      "Главная": "hero",
      "Программа": "program",
      "Кейсы": "cases",
      "FAQ": "faq",
      "Записаться": "offer",
    };
    const el = document.getElementById(map[section]);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-golos overflow-x-hidden">
      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />

      <HeroSection visible={true} scrollTo={scrollTo} />

      <ProblemSection />

      <TransformSection />

      <AudienceSection />

      <WhyUsSection />

      <ProgramSection />

      <CasesSection />

      <TrustSection />

      <HowItWorksSection />

      <FaqSection />

      <OfferSection />

      <FinalCtaSection />
    </div>
  );
}
