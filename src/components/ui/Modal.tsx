"use client";

import React, { useState } from "react";
import { TabibLogo } from "./Icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: ModalProps) {
  const [mode, setMode] = useState<"login" | "register">("register");
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        backgroundColor: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "2rem",
          maxWidth: "480px",
          width: "100%",
          padding: "2.5rem",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(13, 148, 136, 0.2)",
          position: "relative",
          textAlign: "right",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.25rem",
            left: "1.25rem",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "var(--slate-100)",
            color: "var(--slate-600)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
          }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
          <div style={{ display: "inline-block", marginBottom: "0.75rem" }}>
            <TabibLogo />
          </div>
          <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--teal-950)" }}>
            {mode === "register" ? "انضم إلى مشروع الطبيب الحافظ" : "تسجيل الدخول إلى المنصة"}
          </h3>
          <p style={{ fontSize: "0.9rem", color: "var(--slate-500)", marginTop: "0.25rem" }}>
            جامعة قسنطينة 3 • كلية الطب
          </p>
        </div>

        {/* Toggle Mode */}
        <div
          style={{
            display: "flex",
            backgroundColor: "var(--slate-100)",
            borderRadius: "0.75rem",
            padding: "0.25rem",
            marginBottom: "1.5rem",
          }}
        >
          <button
            onClick={() => setMode("register")}
            style={{
              flex: 1,
              padding: "0.6rem",
              borderRadius: "0.6rem",
              fontWeight: 700,
              fontSize: "0.9rem",
              backgroundColor: mode === "register" ? "#ffffff" : "transparent",
              color: mode === "register" ? "var(--teal-800)" : "var(--slate-600)",
              boxShadow: mode === "register" ? "var(--shadow-sm)" : "none",
            }}
          >
            حساب جديد
          </button>
          <button
            onClick={() => setMode("login")}
            style={{
              flex: 1,
              padding: "0.6rem",
              borderRadius: "0.6rem",
              fontWeight: 700,
              fontSize: "0.9rem",
              backgroundColor: mode === "login" ? "#ffffff" : "transparent",
              color: mode === "login" ? "var(--teal-800)" : "var(--slate-600)",
              boxShadow: mode === "login" ? "var(--shadow-sm)" : "none",
            }}
          >
            تسجيل الدخول
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🎉</div>
            <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--teal-900)", marginBottom: "0.5rem" }}>
              تم استلام طلبك بنجاح!
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--slate-600)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              سيتم التواصل معك عبر البريد الإلكتروني لتأكيد موعد اختبار تحديد المستوى وتوزيع الحلقة المناسبة.
            </p>
            <button onClick={onClose} className="btn-teal" style={{ width: "100%", padding: "0.85rem" }}>
              إغلاق
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {mode === "register" && (
              <>
                {/* Role Selector */}
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                    أنا أسجل بصفتي:
                  </label>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      type="button"
                      onClick={() => setRole("student")}
                      style={{
                        flex: 1,
                        padding: "0.6rem",
                        borderRadius: "0.75rem",
                        border: "1.5px solid",
                        borderColor: role === "student" ? "var(--teal-600)" : "var(--slate-200)",
                        backgroundColor: role === "student" ? "var(--teal-50)" : "#ffffff",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: role === "student" ? "var(--teal-800)" : "var(--slate-700)",
                      }}
                    >
                      طالب / طالبة طب
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole("teacher")}
                      style={{
                        flex: 1,
                        padding: "0.6rem",
                        borderRadius: "0.75rem",
                        border: "1.5px solid",
                        borderColor: role === "teacher" ? "var(--teal-600)" : "var(--slate-200)",
                        backgroundColor: role === "teacher" ? "var(--teal-50)" : "#ffffff",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: role === "teacher" ? "var(--teal-800)" : "var(--slate-700)",
                      }}
                    >
                      أستاذ مُسمّع
                    </button>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                    الاسم الكامل
                  </label>
                  <input required type="text" placeholder="أحمد لوسيف" className="form-input" />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                    السنة الدراسية بكلية الطب
                  </label>
                  <select className="form-input" style={{ width: "100%" }}>
                    <option>سنة أولى طب بشري</option>
                    <option>سنة ثانية طب بشري</option>
                    <option>سنة ثالثة طب بشري</option>
                    <option>سنة رابعة طب بشري</option>
                    <option>سنة خامسة طب بشري</option>
                    <option>سنة سادسة / تدريب داخلي</option>
                    <option>صيدلة / طب أسنان</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                البريد الإلكتروني الجامعي أو الشخصي
              </label>
              <input required type="email" placeholder="student@univ-constantine3.dz" className="form-input" dir="ltr" style={{ textAlign: "right" }} />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                كلمة المرور
              </label>
              <input required type="password" placeholder="••••••••" className="form-input" dir="ltr" />
            </div>

            <button type="submit" className="btn-teal" style={{ width: "100%", padding: "0.9rem", marginTop: "0.5rem" }}>
              {mode === "register" ? "تأكيد التسجيل في الحلقة" : "دخول المنصة"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
