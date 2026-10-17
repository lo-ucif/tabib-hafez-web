"use client";

import React, { useState, useEffect } from "react";
import { TabibLogo } from "../ui/Icons";

interface NavbarProps {
  onLoginClick?: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "features", "activities", "roles", "app", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "الرئيسية" },
    { id: "features", label: "المميزات" },
    { id: "activities", label: "الأنشطة" },
    { id: "roles", label: "الأدوار" },
    { id: "contact", label: "تواصل معنا" },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.92)" : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: isScrolled ? "1px solid rgba(13, 148, 136, 0.1)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "82px" }}>
        {/* Right: Brand Logo in RTL */}
        <button onClick={() => scrollTo("hero")} style={{ display: "flex", alignItems: "center", textAlign: "right" }}>
          <TabibLogo />
        </button>

        {/* Center: Desktop Navigation Links matching Figma */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  position: "relative",
                  fontSize: "1.05rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--teal-800)" : "var(--slate-600)",
                  padding: "0.5rem 0",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "var(--teal-600)",
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Left: Action CTA Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={onLoginClick || (() => scrollTo("contact"))}
            className="btn-teal"
            style={{ padding: "0.75rem 1.6rem", fontSize: "0.95rem" }}
          >
            <span>ابدأ الآن</span>
            <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: "18px", height: "18px" }}>
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="قائمة التنقل"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "0.75rem",
              backgroundColor: "var(--teal-50)",
              color: "var(--teal-800)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "24px", height: "24px" }}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderBottom: "1px solid var(--slate-200)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                textAlign: "right",
                padding: "0.75rem",
                borderRadius: "0.75rem",
                fontWeight: activeSection === link.id ? 700 : 500,
                color: activeSection === link.id ? "var(--teal-700)" : "var(--slate-700)",
                backgroundColor: activeSection === link.id ? "var(--teal-50)" : "transparent",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
