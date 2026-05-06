import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TransformSection from "@/components/TransformSection";
import AudienceSection from "@/components/AudienceSection";
import WhyUsSection from "@/components/WhyUsSection";
import CoursesSection from "@/components/CoursesSection";
import AboutContacts from "@/components/AboutContacts";

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
    const map: Record<string, string> = {
      "Главная": "hero",
      "Курсы": "courses",
      "Блог": "blog",
      "О платформе": "about",
      "Контакты": "contacts",
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

      <CoursesSection />

      <AboutContacts scrollTo={scrollTo} />
    </div>
  );
}