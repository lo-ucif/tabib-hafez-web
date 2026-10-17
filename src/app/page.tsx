"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HadithBanner from "@/components/sections/HadithBanner";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import RolesSection from "@/components/sections/RolesSection";
import MobileAppSection from "@/components/sections/MobileAppSection";
import ContactSection from "@/components/sections/ContactSection";
import AuthModal from "@/components/ui/Modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navigation Bar */}
      <Navbar onLoginClick={() => setModalOpen(true)} />

      {/* Main Landing Page Sections */}
      <main style={{ flexGrow: 1 }}>
        {/* 1. Hero Section (Section 13 in Figma) */}
        <HeroSection />

        {/* 2. Features Grid: ماذا تجد في الطبيب الحافظ؟ (Section 2 in Figma) */}
        <FeaturesSection />

        {/* 3. Hadith Banner (Section 3 in Figma) */}
        <HadithBanner />

        {/* 4. Field Activities: نشاطاتنا الميدانية (Section 6 in Figma) */}
        <ActivitiesSection />

        {/* 5. User Roles: منظومة واحدة لكل الأدوار (Section 4 in Figma) */}
        <RolesSection />

        {/* 6. Mobile Application: ابدأ رحلتك بين العلم والقرآن (Section phne in Figma) */}
        <MobileAppSection />

        {/* 7. Contact Us: تواصل معنا (Section 11 in Figma) */}
        <ContactSection />
      </main>

      {/* Footer (Footer / 1 / in Figma) */}
      <Footer />

      {/* Interactive Registration / Login Modal */}
      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
