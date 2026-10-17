"use client";

import React, { useState } from "react";
import { CheckCircleIcon, QuranBookIcon, VideoRoomIcon, StatsIcon } from "../ui/Icons";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"progress" | "session">("progress");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <section id="hero" className="section-wrapper bg-hero-gradient" style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
      {/* Decorative blurred background circles */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(94, 234, 212, 0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(13, 148, 136, 0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Right Column: Hero Typography & Actions in RTL */}
          <div style={{ textAlign: "right" }}>
            {/* Pill Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.45rem 1.1rem",
                borderRadius: "9999px",
                backgroundColor: "rgba(13, 148, 136, 0.1)",
                border: "1px solid rgba(13, 148, 136, 0.25)",
                color: "var(--teal-900)",
                fontSize: "0.875rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "var(--teal-600)",
                  boxShadow: "0 0 10px var(--teal-500)",
                }}
              />
              <span>مشروع الطبيب الحافظ قسنطينة | نادي شفاء</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: 900,
                color: "var(--teal-950)",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              أقوى نظام سحابي لإدارة{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--teal-700), var(--teal-500))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                جمعيات ومدارس
              </span>{" "}
              تحفيظ القرآن
            </h1>

            {/* Subtitle Description */}
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--slate-600)",
                lineHeight: 1.8,
                maxWidth: "580px",
                marginBottom: "2.5rem",
              }}
            >
              نظام أهل القرآن هو نظام سحابي متكامل .. يمكن بواسطته إدارة جميع عمليات التحفيظ والمتابعة والتسميع بكل سهولة
              واحترافية، صُمم خصيصًا ليوازن بين شرف القرآن ومسيرة دراسة العلوم الطبية.
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <a href="#contact" className="btn-teal">
                <span>ابدأ الآن مجاناً</span>
                <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: "18px", height: "18px" }}>
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a href="#features" className="btn-teal-outline">
                <VideoRoomIcon size={20} />
                <span>استكشف المنصة</span>
              </a>
            </div>

            {/* Trust points */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                marginTop: "2.75rem",
                paddingTop: "1.75rem",
                borderTop: "1px solid rgba(13, 148, 136, 0.15)",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--teal-600)" }}>
                <CheckCircleIcon size={20} />
                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--slate-700)" }}>
                  +500 طالب وطبيبة
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--teal-600)" }}>
                <CheckCircleIcon size={20} />
                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--slate-700)" }}>
                  تسميع مرئي وصوتي مباشر
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--teal-600)" }}>
                <CheckCircleIcon size={20} />
                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--slate-700)" }}>
                  شهادات وإجازات معتمدة
                </span>
              </div>
            </div>
          </div>

          {/* Left Column: Interactive Student Dashboard Mockup */}
          <div style={{ position: "relative" }}>
            {/* Floating Badge 1 (Frame 1000003305 2) */}
            <div
              style={{
                position: "absolute",
                top: "-25px",
                right: "-20px",
                zIndex: 20,
                backgroundColor: "#ffffff",
                padding: "1rem 1.25rem",
                borderRadius: "1.25rem",
                boxShadow: "var(--shadow-xl)",
                border: "1px solid rgba(13, 148, 136, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: "0.875rem",
                animation: "floatSlow 4s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "1rem",
                  backgroundColor: "var(--teal-50)",
                  color: "var(--teal-700)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <StatsIcon className="w-6 h-6" />
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--slate-500)", fontWeight: 600 }}>نسبة الإنجاز الأسبوعي</div>
                <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--teal-800)" }}>95% تثبيت متقن</div>
              </div>
            </div>

            {/* Main Interactive Student Dashboard Frame (داشبورد الطالب التفاعلي) */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "1.75rem",
                boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.15)",
                border: "1px solid rgba(13, 148, 136, 0.18)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Dashboard Window Header Bar */}
              <div
                style={{
                  backgroundColor: "var(--teal-950)",
                  padding: "1rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#ffffff",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10b981" }} />
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--teal-200)" }}>
                  منصة الطبيب الحافظ • لوحة الطالب
                </div>
                <div style={{ fontSize: "0.75rem", backgroundColor: "rgba(255, 255, 255, 0.12)", padding: "0.25rem 0.6rem", borderRadius: "9999px" }}>
                  مباشر 🟢
                </div>
              </div>

              {/* Dashboard Content */}
              <div style={{ padding: "1.75rem" }}>
                {/* User Info Bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "1.25rem",
                    borderBottom: "1px solid var(--slate-100)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "1rem",
                        background: "linear-gradient(135deg, var(--teal-600), var(--teal-800))",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "1.1rem",
                      }}
                    >
                      ط
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--slate-900)", fontSize: "1.05rem" }}>
                        الطالب: عبد الرحمن بن علي
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--teal-700)", fontWeight: 600 }}>
                        سنة 4 طب بشري • حلقة الإمام نافع
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      backgroundColor: "var(--teal-50)",
                      color: "var(--teal-700)",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      padding: "0.35rem 0.75rem",
                      borderRadius: "0.5rem",
                      border: "1px solid var(--teal-200)",
                    }}
                  >
                    حضور: 98%
                  </span>
                </div>

                {/* Dashboard Tabs */}
                <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <button
                    onClick={() => setActiveTab("progress")}
                    style={{
                      flex: 1,
                      padding: "0.6rem",
                      borderRadius: "0.75rem",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      backgroundColor: activeTab === "progress" ? "var(--teal-600)" : "var(--slate-100)",
                      color: activeTab === "progress" ? "#ffffff" : "var(--slate-600)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    مقرر الحفظ الحالي
                  </button>
                  <button
                    onClick={() => setActiveTab("session")}
                    style={{
                      flex: 1,
                      padding: "0.6rem",
                      borderRadius: "0.75rem",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      backgroundColor: activeTab === "session" ? "var(--teal-600)" : "var(--slate-100)",
                      color: activeTab === "session" ? "#ffffff" : "var(--slate-600)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    غرفة التسميع المباشرة
                  </button>
                </div>

                {/* Tab 1: Progress */}
                {activeTab === "progress" && (
                  <div>
                    {/* Active Surah Card */}
                    <div
                      style={{
                        backgroundColor: "var(--slate-50)",
                        borderRadius: "1rem",
                        padding: "1.25rem",
                        border: "1px solid var(--slate-200)",
                        marginBottom: "1.25rem",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <QuranBookIcon className="w-5 h-5 text-teal-700" />
                          <span style={{ fontWeight: 800, color: "var(--slate-900)" }}>سورة البقرة • الحزب الثالث</span>
                        </div>
                        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--teal-700)" }}>45 من 48 وجهاً</span>
                      </div>

                      {/* Progress Bar */}
                      <div style={{ height: "8px", backgroundColor: "var(--slate-200)", borderRadius: "9999px", overflow: "hidden" }}>
                        <div style={{ width: "93%", height: "100%", backgroundColor: "var(--teal-600)", borderRadius: "9999px" }} />
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "0.75rem",
                          fontSize: "0.8rem",
                          color: "var(--slate-500)",
                        }}
                      >
                        <span>التقييم الأخير: ممتاز (متقن للأحكام)</span>
                        <span>الشيخ المشرف: د. يونس</span>
                      </div>
                    </div>

                    {/* Interactive Recitation Player simulation */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.875rem 1rem",
                        borderRadius: "0.75rem",
                        backgroundColor: "var(--teal-50)",
                        border: "1px solid var(--teal-200)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <button
                          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            backgroundColor: "var(--teal-700)",
                            color: "#ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {isPlayingAudio ? "⏸" : "▶"}
                        </button>
                        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--teal-950)" }}>
                          {isPlayingAudio ? "جارِ الاستماع لتسميع الطالب..." : "استمع لآخر مقطع تسميع (2:45 د)"}
                        </div>
                      </div>
                      <span style={{ fontSize: "0.75rem", color: "var(--teal-700)", fontWeight: 600 }}>رواية ورش</span>
                    </div>
                  </div>
                )}

                {/* Tab 2: Live Session */}
                {activeTab === "session" && (
                  <div
                    style={{
                      backgroundColor: "var(--slate-900)",
                      borderRadius: "1rem",
                      padding: "1.5rem",
                      color: "#ffffff",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "rgba(13, 148, 136, 0.2)", color: "var(--teal-400)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem auto" }}>
                      <VideoRoomIcon className="w-8 h-8" />
                    </div>
                    <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                      حلقة التسميع المباشرة قيد الانعقاد
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--slate-400)", marginBottom: "1.25rem" }}>
                      الأستاذ بانتظارك في القاعة الافتراضية مع 4 من زملائك في كلية الطب
                    </p>
                    <button className="btn-teal" style={{ width: "100%", padding: "0.75rem" }}>
                      دخول القاعة الآن
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Floating Badge 2 (Frame 1000009130 2) */}
            <div
              style={{
                position: "absolute",
                bottom: "-25px",
                left: "-20px",
                zIndex: 20,
                backgroundColor: "#ffffff",
                padding: "0.875rem 1.25rem",
                borderRadius: "1.25rem",
                boxShadow: "var(--shadow-xl)",
                border: "1px solid rgba(13, 148, 136, 0.2)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                animation: "floatSlow 4s ease-in-out infinite 2s",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                }}
              />
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--slate-500)", fontWeight: 600 }}>الموعد القادم</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--slate-800)" }}>
                  اليوم، 18:00 (تسميع نصف حزب)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
}
