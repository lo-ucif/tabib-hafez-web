"use client";

import React, { useState } from "react";
import { CheckCircleIcon } from "../ui/Icons";

export default function MobileAppSection() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (store: string) => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="app" className="section-wrapper bg-app-banner" style={{ color: "#ffffff", padding: "5.5rem 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="app-grid"
        >
          {/* Right Column: App Information & Download Links in RTL */}
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1.1rem",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "var(--amber-400)",
                fontSize: "0.875rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              <span>📱</span>
              <span>تطبيق الهاتف المحمول</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                fontWeight: 900,
                lineHeight: 1.3,
                marginBottom: "1.25rem",
                color: "#ffffff",
              }}
            >
              ابدأ رحلتك بين العلم والقرآن
            </h2>

            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--teal-100)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                maxWidth: "520px",
              }}
            >
              حمّل تطبيق الطبيب الحافظ، وتابع حلقتك وتسميعك وتقدّمك أينما كنت. مصمم خصيصًا ليعمل بدون إنترنت أثناء حفظ
              الأوراد مع خاصية التزامن التلقائي.
            </p>

            {/* App Features List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <CheckCircleIcon className="w-5 h-5 text-amber-400" />
                <span style={{ fontSize: "1rem", color: "#ffffff", fontWeight: 600 }}>
                  تنبيهات بأوقات التسميع والورد اليومي
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <CheckCircleIcon className="w-5 h-5 text-amber-400" />
                <span style={{ fontSize: "1rem", color: "#ffffff", fontWeight: 600 }}>
                  مصحف إلكتروني مدمج مع إمكانية تدوين ملاحظات الشيخ
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <CheckCircleIcon className="w-5 h-5 text-amber-400" />
                <span style={{ fontSize: "1rem", color: "#ffffff", fontWeight: 600 }}>
                  تسجيل المقاطع الصوتية وإرسالها للمراجعة السريعة
                </span>
              </div>
            </div>

            {/* Store Buttons matching Frame 1000003337 */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {/* Google Play */}
              <button
                onClick={() => handleDownload("Google Play")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "1rem",
                  backgroundColor: "#ffffff",
                  color: "var(--teal-950)",
                  fontWeight: 800,
                  boxShadow: "var(--shadow-lg)",
                  transition: "all 0.2s ease",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "24px", height: "24px", color: "var(--teal-700)" }}>
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.986 1.986 0 0 1-.61-.926V2.74c.15-.363.366-.684.609-.926zm11.597 11.598l2.54 2.54-12.72 7.24 10.18-9.78zm0-2.824L5.026.808 17.746 8.05l-2.54 2.538zm1.414 1.412l3.418-1.944a1.99 1.99 0 0 0 0-3.472l-3.418-1.944-1.414 1.414 2.828 2.828-2.828 2.828 1.414 1.414z" />
                </svg>
                <div style={{ textAlign: "right", lineHeight: 1.2 }}>
                  <div style={{ fontSize: "0.7rem", color: "var(--slate-500)", fontWeight: 600 }}>متاح على</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800 }}>Google Play</div>
                </div>
              </button>

              {/* App Store */}
              <button
                onClick={() => handleDownload("App Store")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "1rem",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  fontWeight: 800,
                  border: "1.5px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "var(--shadow-md)",
                  transition: "all 0.2s ease",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "24px", height: "24px" }}>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.34-.56.63-1.06 1.7-0.93 2.73 1.02.08 2.05-.47 2.66-1.22z" />
                </svg>
                <div style={{ textAlign: "right", lineHeight: 1.2 }}>
                  <div style={{ fontSize: "0.7rem", color: "var(--teal-200)", fontWeight: 600 }}>متاح على</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800 }}>App Store</div>
                </div>
              </button>
            </div>

            {downloadSuccess && (
              <div
                style={{
                  marginTop: "1.25rem",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "0.75rem",
                  backgroundColor: "rgba(16, 185, 129, 0.25)",
                  border: "1px solid #10b981",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#d1fae5",
                }}
              >
                ✓ تم توجيه طلب التحميل بنجاح! سيتم إطلاق النسخة التجريبية فوراً.
              </div>
            )}
          </div>

          {/* Left Column: Dual Phone Mockups matching Figma Frame 1000009177 */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            {/* Phone 1 (Back / Right) */}
            <div
              style={{
                width: "220px",
                height: "430px",
                backgroundColor: "#0f172a",
                borderRadius: "36px",
                border: "4px solid #334155",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                overflow: "hidden",
                position: "relative",
                transform: "rotate(6deg) translateY(-20px)",
                zIndex: 1,
              }}
            >
              {/* Notch */}
              <div style={{ width: "80px", height: "16px", backgroundColor: "#000000", borderRadius: "0 0 10px 10px", margin: "0 auto" }} />
              {/* Screen Content */}
              <div style={{ padding: "1.25rem", color: "#ffffff", textAlign: "right" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--teal-400)", fontWeight: 700, marginBottom: "0.25rem" }}>
                  الورد اليومي
                </div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "1rem" }}>
                  سورة آل عمران
                </div>
                <div style={{ backgroundColor: "rgba(255,255,255,0.08)", padding: "1rem", borderRadius: "1rem", fontSize: "0.85rem", lineHeight: 1.8 }}>
                  قراءة 4 أوجه للحفظ الجديد مع الاستماع لتلاوة الشيخ الحصري برواية ورش.
                </div>
              </div>
            </div>

            {/* Phone 2 (Front / Left) */}
            <div
              style={{
                width: "230px",
                height: "450px",
                backgroundColor: "#ffffff",
                borderRadius: "38px",
                border: "5px solid #042f2e",
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.6)",
                overflow: "hidden",
                position: "relative",
                transform: "rotate(-4deg) translateX(30px)",
                zIndex: 2,
              }}
            >
              {/* Dynamic Island */}
              <div style={{ width: "70px", height: "18px", backgroundColor: "#0f172a", borderRadius: "12px", margin: "8px auto 12px auto" }} />

              {/* App UI */}
              <div style={{ padding: "1rem", textAlign: "right", color: "var(--slate-900)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--teal-700)" }}>الطبيب الحافظ</span>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10b981" }} />
                </div>

                <div style={{ backgroundColor: "var(--teal-50)", padding: "1rem", borderRadius: "1rem", border: "1px solid var(--teal-200)", marginBottom: "0.875rem" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--slate-500)", fontWeight: 600 }}>جلسة التسميع القادمة</div>
                  <div style={{ fontSize: "1rem", fontWeight: 900, color: "var(--teal-900)" }}>اليوم 18:00</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--teal-700)", marginTop: "4px" }}>مع الشيخ د. يونس</div>
                </div>

                <div style={{ backgroundColor: "var(--slate-50)", padding: "1rem", borderRadius: "1rem", border: "1px solid var(--slate-200)" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 800, marginBottom: "0.5rem" }}>الإحصائيات</div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem" }}>
                    <span>الأوجه المنجزة</span>
                    <span style={{ fontWeight: 800, color: "var(--teal-700)" }}>96 وجهاً</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 860px) {
          .app-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
