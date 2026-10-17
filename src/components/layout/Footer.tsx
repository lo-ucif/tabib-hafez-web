"use client";

import React from "react";
import { TabibLogo, ShifaaLogo, FacebookIcon, InstagramIcon, XTwitterIcon } from "../ui/Icons";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#042f2e",
        color: "#ffffff",
        paddingTop: "5rem",
        paddingBottom: "2.5rem",
        borderTop: "1px solid rgba(20, 184, 166, 0.2)",
      }}
    >
      <div className="container">
        {/* Main Footer Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
          className="footer-grid"
        >
          {/* Column 1: About & Institutional Affiliation */}
          <div style={{ textAlign: "right" }}>
            <div style={{ marginBottom: "1.25rem" }}>
              <TabibLogo />
            </div>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--teal-100)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
                maxWidth: "360px",
              }}
            >
              مشروع الطبيب الحافظ
              <br />
              مديرية الأنشطة الثقافية والعلمية والرياضية
              <br />
              كلية الطب • جامعة قسنطينة 3
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <ShifaaLogo />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ textAlign: "right" }}>
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "1.5rem",
                position: "relative",
                display: "inline-block",
              }}
            >
              روابط سريعة
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
              }}
            >
              <li>
                <button
                  onClick={() => scrollTo("hero")}
                  style={{ color: "var(--teal-200)", fontSize: "0.95rem", transition: "color 0.2s" }}
                >
                  عن المنصة
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("features")}
                  style={{ color: "var(--teal-200)", fontSize: "0.95rem", transition: "color 0.2s" }}
                >
                  ماذا نقدم
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("activities")}
                  style={{ color: "var(--teal-200)", fontSize: "0.95rem", transition: "color 0.2s" }}
                >
                  نشاطاتنا الميدانية
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("app")}
                  style={{ color: "var(--teal-200)", fontSize: "0.95rem", transition: "color 0.2s" }}
                >
                  تطبيق الهاتف
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("contact")}
                  style={{ color: "var(--teal-200)", fontSize: "0.95rem", transition: "color 0.2s" }}
                >
                  تواصل معنا
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Follow */}
          <div style={{ textAlign: "right" }}>
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "1.5rem",
                position: "relative",
                display: "inline-block",
              }}
            >
              تابعنا
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "var(--teal-200)",
                  fontSize: "0.95rem",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "0.75rem",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FacebookIcon className="w-4 h-4" />
                </div>
                <span>فيسبوك</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "var(--teal-200)",
                  fontSize: "0.95rem",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "0.75rem",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <span>إنستغرام</span>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "var(--teal-200)",
                  fontSize: "0.95rem",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "0.75rem",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <XTwitterIcon className="w-4 h-4" />
                </div>
                <span>منصة X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider matching Figma line 933:2226 Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(255, 255, 255, 0.12)", marginBottom: "2rem" }} />

        {/* Credits Row matching Figma Frame 933:2227 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.875rem",
            color: "var(--teal-300)",
          }}
          className="credits-row"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "6px",
                backgroundColor: "var(--teal-800)",
                color: "var(--amber-400)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "0.75rem",
              }}
            >
              ح
            </span>
            <span>من إنجاز منصة حافظ بالتعاون مع نادي شفاء</span>
          </div>

          <div>
            © 2026 الطبيب الحافظ – نادي شفاء. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 860px) {
          .footer-grid {
            grid-template-columns: 1.8fr 1fr 1fr !important;
          }
          .credits-row {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
}
