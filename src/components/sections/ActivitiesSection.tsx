"use client";

import React, { useState } from "react";

interface Activity {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagColor: string;
  stat: string;
  icon: string;
  gradient: string;
}

export default function ActivitiesSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const activities: Activity[] = [
    {
      id: "quran-sessions",
      title: "حلقات الحفظ والمراجعة",
      subtitle: "جلسات أسبوعية لتثبيت المحفوظ بين الطلبة، بإشراف مشايخ وأساتذة معتمدين في كلية الطب.",
      category: "قرآن وإتقان",
      tagColor: "var(--teal-700)",
      stat: "12 حلقة أسبوعية",
      icon: "📖",
      gradient: "linear-gradient(135deg, #064e3b 0%, #0d9488 100%)",
    },
    {
      id: "medical-workshops",
      title: "ورشات طبية تطبيقية",
      subtitle: "مهارات سريرية وإسعافات ومحاكاة يقدمها أطباء مقيمون وأساتذة من الميدان لربط العلم بالعمل.",
      category: "تدريب سريري",
      tagColor: "#0284c7",
      stat: "24 ورشة سنوياً",
      icon: "🩺",
      gradient: "linear-gradient(135deg, #0369a1 0%, #0891b2 100%)",
    },
    {
      id: "celebrations",
      title: "لقاءات وتكريمات",
      subtitle: "احتفاء بالحافظين والمتميزين في ختام كل محطة قرآنية، مع تكريم الخريجين وأصحاب الإجازات.",
      category: "تحفيز وإنجاز",
      tagColor: "var(--amber-600)",
      stat: "+150 مُكرّم",
      icon: "🏆",
      gradient: "linear-gradient(135deg, #78350f 0%, #d97706 100%)",
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? activities.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === activities.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="activities" className="section-wrapper bg-medical-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">نشاطاتنا الميدانية</h2>
          <div className="decorative-bar" />
          <p className="section-subtitle">
            من الحلقات إلى الورشات، نعيش القرآن والطب معًا خارج الشاشة في رحاب كليتنا ومستشفياتنا.
          </p>
        </div>

        {/* 3 Activities Display Cards matching Frame 1000003333 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "2rem",
            marginBottom: "3rem",
          }}
          className="activities-grid"
        >
          {activities.map((act, index) => (
            <div
              key={act.id}
              style={{
                borderRadius: "1.75rem",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                backgroundColor: "#ffffff",
                border: "1px solid rgba(13, 148, 136, 0.15)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
              }}
              className="activity-card"
            >
              {/* Top Banner Graphic with Icon & Category */}
              <div
                style={{
                  height: "210px",
                  background: act.gradient,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.5rem",
                  color: "#ffffff",
                }}
              >
                <div style={{ fontSize: "4.5rem", filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" }}>
                  {act.icon}
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(6px)",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "9999px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  {act.category}
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1rem",
                    backgroundColor: "rgba(0, 0, 0, 0.35)",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "9999px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  {act.stat}
                </div>
              </div>

              {/* Activity Info */}
              <div style={{ padding: "1.75rem", textAlign: "right", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--teal-950)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {act.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--slate-600)",
                    lineHeight: 1.75,
                    marginBottom: "1.5rem",
                    flexGrow: 1,
                  }}
                >
                  {act.subtitle}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--slate-100)",
                  }}
                >
                  <span style={{ fontSize: "0.85rem", color: "var(--teal-700)", fontWeight: 700 }}>
                    نادي شفاء • جامعة قسنطينة 3
                  </span>
                  <span style={{ color: "var(--teal-600)", fontWeight: 800 }}>←</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Pill Badge & Controls matching Figma Frame 1000003350 & Chevrons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <button
            onClick={handlePrev}
            aria-label="السابق"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "1.5px solid var(--teal-200)",
              color: "var(--teal-800)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "var(--shadow-sm)",
              transition: "all 0.2s ease",
            }}
          >
            →
          </button>

          <div
            style={{
              backgroundColor: "var(--teal-700)",
              color: "#ffffff",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              fontWeight: 800,
              fontSize: "1.05rem",
              boxShadow: "var(--shadow-teal)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span>⭐️</span>
            <span>+7 سنوات من العطاء القرآني والطبي المستمر</span>
          </div>

          <button
            onClick={handleNext}
            aria-label="التالي"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "1.5px solid var(--teal-200)",
              color: "var(--teal-800)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "var(--shadow-sm)",
              transition: "all 0.2s ease",
            }}
          >
            ←
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 860px) {
          .activities-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        .activity-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px -5px rgba(15, 118, 110, 0.15);
        }
      `}</style>
    </section>
  );
}
