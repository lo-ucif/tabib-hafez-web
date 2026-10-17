"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agreed: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("يرجى ملء جميع الحقول المطلوبة.");
      setStatus("error");
      return;
    }

    if (!formData.agreed) {
      setErrorMessage("يرجى الموافقة على الشروط وسياسة الخصوصية للمتابعة.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        agreed: false,
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-wrapper bg-medical-pattern" style={{ padding: "5.5rem 0" }}>
      <div className="container">
        {/* Section Header matching Figma Group 1000009122 */}
        <div className="section-header">
          <h2 className="section-title">تواصل معنا</h2>
          <div className="decorative-bar" />
          <p className="section-subtitle">
            لأي استفسار أو اقتراح، يسعدنا أن نسمع منك وسيردّ عليك فريق المشروع ونادي شفاء في أقرب وقت.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "flex-start",
          }}
          className="contact-grid"
        >
          {/* Right Column (in RTL): Project Details & Contact Info */}
          <div style={{ textAlign: "right" }}>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: 900,
                color: "var(--teal-950)",
                marginBottom: "1rem",
                lineHeight: 1.4,
              }}
            >
              هل لديك سؤال عن التسجيل أو الحلقات أو التطبيق؟
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--slate-600)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              اكتب لنا وسيردّ عليك فريق المشروع في أقرب وقت. نحن هنا لمرافقتك في رحلتك القرآنية طيلة مسارك الجامعي بكلية
              الطب.
            </p>

            {/* Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.25rem",
                  borderRadius: "1.25rem",
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--slate-200)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "1rem",
                    backgroundColor: "var(--teal-50)",
                    color: "var(--teal-700)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                  }}
                >
                  📍
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: "var(--slate-900)" }}>الموقع الأكاديمي</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--slate-500)" }}>
                    كلية الطب - جامعة قسنطينة 3، الجزائر
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.25rem",
                  borderRadius: "1.25rem",
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--slate-200)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "1rem",
                    backgroundColor: "var(--teal-50)",
                    color: "var(--teal-700)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                  }}
                >
                  ✉️
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: "var(--slate-900)" }}>البريد الرسمي للمشروع</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--slate-500)", direction: "ltr", textAlign: "right" }}>
                    contact@tabib-hafez.dz
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.25rem",
                  borderRadius: "1.25rem",
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--slate-200)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "1rem",
                    backgroundColor: "var(--teal-50)",
                    color: "var(--teal-700)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                  }}
                >
                  🏛️
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: "var(--slate-900)" }}>الجهة المشرفة</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--slate-500)" }}>
                    مديرية الأنشطة الثقافية والعلمية والرياضية • نادي شفاء
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column: Form Card matching Figma Frame 933:2124 Form */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "2.5rem",
              borderRadius: "1.75rem",
              border: "1.5px solid rgba(13, 148, 136, 0.18)",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Full Name */}
              <div>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "0.5rem", color: "var(--slate-800)" }}>
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  placeholder="مثال: أحمد لوسيف"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "0.5rem", color: "var(--slate-800)" }}>
                  البريد الإلكتروني *
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  dir="ltr"
                  style={{ textAlign: "right" }}
                />
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "0.5rem", color: "var(--slate-800)" }}>
                  الموضوع
                </label>
                <input
                  type="text"
                  placeholder="استفسار عن حلقات التسميع / التسجيل"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="form-input"
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "0.5rem", color: "var(--slate-800)" }}>
                  الرسالة *
                </label>
                <textarea
                  rows={4}
                  placeholder="اكتب رسالتك أو استفسارك هنا..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input"
                  style={{ resize: "vertical" }}
                />
              </div>

              {/* Checkbox: Terms & Privacy matching Figma Group 1135 */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  color: "var(--slate-700)",
                }}
              >
                <input
                  type="checkbox"
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  style={{ width: "18px", height: "18px", accentColor: "var(--teal-600)" }}
                />
                <span>أوافق على الشروط وسياسة الخصوصية الخاصة بمشروع الطبيب الحافظ</span>
              </label>

              {/* Status alerts */}
              {status === "error" && (
                <div
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "#fee2e2",
                    color: "#b91c1c",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  ⚠️ {errorMessage}
                </div>
              )}

              {status === "success" && (
                <div
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "#d1fae5",
                    color: "#047857",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                  }}
                >
                  ✓ شكراً لتواصلك! تم إرسال رسالتك بنجاح وسيتواصل معك مشرف المشروع قريباً.
                </div>
              )}

              {/* Submit Button matching Frame 4 */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-teal"
                style={{ width: "100%", padding: "1rem", marginTop: "0.5rem" }}
              >
                {status === "submitting" ? "جارِ الإرسال..." : "أرسل الآن"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
}
