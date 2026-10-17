import React from "react";

export default function HadithBanner() {
  return (
    <section className="section-wrapper bg-banner-hadith" style={{ padding: "4.5rem 0", color: "#ffffff" }}>
      {/* Subtle Islamic star background watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.05,
          pointerEvents: "none",
          width: "500px",
          height: "500px",
        }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,0 63,35 100,50 63,65 50,100 37,65 0,50 37,35" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        {/* Prophet Muhammad invocation badge */}
        <div
          style={{
            display: "inline-block",
            padding: "0.4rem 1.4rem",
            borderRadius: "9999px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "var(--amber-400)",
            fontWeight: 800,
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            letterSpacing: "0.02em",
          }}
        >
          قال رسول الله ﷺ
        </div>

        {/* Noble Hadith quote */}
        <blockquote
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.85rem)",
            fontWeight: 700,
            lineHeight: 1.8,
            maxWidth: "920px",
            margin: "0 auto 1.5rem auto",
            color: "#ffffff",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          « الماهر بالقرآن مع السفرة الكرام البررة، والذي يقرأ القرآن ويتعتع فيه وهو عليه شاق له أجران »
        </blockquote>

        {/* Hadith reference source */}
        <div
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "var(--teal-200)",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ width: "30px", height: "1px", backgroundColor: "var(--teal-300)" }} />
          <span>متفق عليه</span>
          <span style={{ width: "30px", height: "1px", backgroundColor: "var(--teal-300)" }} />
        </div>
      </div>
    </section>
  );
}
