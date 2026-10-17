"use client";

import React, { useState } from "react";
import { StudentIcon, TeacherIcon, AdminIcon, CheckCircleIcon } from "../ui/Icons";

interface Role {
  id: string;
  name: string;
  roleTitle: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  mockStats: { label: string; value: string }[];
}

export default function RolesSection() {
  const [selectedRole, setSelectedRole] = useState<string>("student");

  const roles: Role[] = [
    {
      id: "student",
      name: "الطالب",
      roleTitle: "طالب / طالبة طب",
      description: "يتابع حفظه ومراجعته، يطلب مواعيد التسميع، ويرى تقدّمه وحضوره وشهاداته في واجهة مصممة لظروف دراسته.",
      icon: <StudentIcon className="w-10 h-10" />,
      features: [
        "طلب مواعيد تسميع مرنة حسب فترات الفراغ السريري",
        "تسجيل الحضور وتقديم تبريرات الغياب أثناء الامتحانات",
        "سجل تراكمي للأحكام التجويدية والملاحظات الشفوية",
        "تنبيهات مباشرة بمواعيد الحلقات وتكريمات النادي",
      ],
      mockStats: [
        { label: "معدل الإنجاز", value: "95%" },
        { label: "ساعات التسميع", value: "48 ساعة" },
        { label: "الشهادات المحصلة", value: "3 مستويات" },
      ],
    },
    {
      id: "teacher",
      name: "الأستاذ",
      roleTitle: "الشيخ / الأستاذ المشرف",
      description: "يدير حلقته، يقيّم الحفظ والتجويد، يرصد الحضور، ويوجّه طلابه بخطة أسبوعية متكاملة لضمان التثبيت والإتقان.",
      icon: <TeacherIcon className="w-10 h-10" />,
      features: [
        "قاعات تسميع صوتية ومرئية مدمجة بنقرة واحدة",
        "رصد الدرجات وملاحظات التجويد ومخارج الحروف",
        "إسناد واجبات الحفظ والمراجعة حسب مستوى كل طالب",
        "اعتماد شهادات إتمام الأجزاء والأحزاب رقمياً",
      ],
      mockStats: [
        { label: "الطلبة المشرف عليهم", value: "24 طالباً" },
        { label: "جلسات التسميع", value: "112 جلسة" },
        { label: "نسبة الرضا", value: "99%" },
      ],
    },
    {
      id: "admin",
      name: "المشرف والإدارة",
      roleTitle: "إدارة المشروع ونادي شفاء",
      description: "يعتمد التسجيلات، ينظّم الحلقات والأساتذة، ويتابع أداء المنصة الشامل عبر تقارير تحليلية دقيقة وإحصائيات فورية.",
      icon: <AdminIcon className="w-10 h-10" />,
      features: [
        "إدارة وتوزيع الحلقات حسب السنوات الدراسية للطب",
        "إحصائيات فورية ونسب الحضور على مستوى الجامعة",
        "إصدار الشهادات الرسمية بالشراكة مع مديرية الأنشطة",
        "تنسيق الفعاليات والمسابقات والمؤتمرات القرآنية",
      ],
      mockStats: [
        { label: "إجمالي الطلبة", value: "+500 طالب" },
        { label: "الحلقات النشطة", value: "32 حلقة" },
        { label: "نسبة الإتقان العامة", value: "94%" },
      ],
    },
  ];

  const currentRole = roles.find((r) => r.id === selectedRole) || roles[0];

  return (
    <section id="roles" className="section-wrapper bg-medical-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">منظومة واحدة لكل الأدوار</h2>
          <div className="decorative-bar" />
          <p className="section-subtitle">
            لكل مستخدم لوحته الخاصة وأدواته التي تناسب مهمّته في رحلة التحفيظ، وتضمن التناغم التام بين الإدارة والأساتذة والطلبة.
          </p>
        </div>

        {/* 3 Role Selection Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1.75rem",
            marginBottom: "3rem",
          }}
          className="roles-selection-grid"
        >
          {roles.map((r) => {
            const isSelected = selectedRole === r.id;
            return (
              <div
                key={r.id}
                onClick={() => setSelectedRole(r.id)}
                className={`role-card ${isSelected ? "active" : ""}`}
                style={{
                  backgroundColor: isSelected ? "var(--teal-50)" : "#ffffff",
                  borderColor: isSelected ? "var(--teal-600)" : "var(--slate-200)",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "1.25rem",
                    backgroundColor: isSelected ? "var(--teal-600)" : "var(--slate-100)",
                    color: isSelected ? "#ffffff" : "var(--teal-700)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem auto",
                    transition: "all 0.3s ease",
                  }}
                >
                  {r.icon}
                </div>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--teal-950)", marginBottom: "0.5rem" }}>
                  {r.name}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--slate-600)", lineHeight: 1.7 }}>
                  {r.description}
                </p>
                <div
                  style={{
                    marginTop: "1.25rem",
                    display: "inline-block",
                    padding: "0.35rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    backgroundColor: isSelected ? "var(--teal-700)" : "transparent",
                    color: isSelected ? "#ffffff" : "var(--teal-700)",
                  }}
                >
                  {isSelected ? "اللوحة المختارة ✓" : "استعراض الصلاحيات"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Role Dashboard Preview Box */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "1.75rem",
            border: "1.5px solid rgba(13, 148, 136, 0.2)",
            boxShadow: "var(--shadow-xl)",
            padding: "2.5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
              alignItems: "center",
            }}
            className="preview-grid"
          >
            {/* Features List */}
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "0.3rem 0.9rem",
                  borderRadius: "9999px",
                  backgroundColor: "var(--teal-50)",
                  color: "var(--teal-700)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  marginBottom: "0.875rem",
                }}
              >
                أبرز أدوات لوحة {currentRole.name}
              </div>
              <h4 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--teal-950)", marginBottom: "1.25rem" }}>
                تجربة مستخدم مُفصّلة لكل احتياج
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {currentRole.features.map((feat, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{ color: "var(--teal-600)", marginTop: "2px" }}>
                      <CheckCircleIcon className="w-5 h-5" />
                    </div>
                    <span style={{ fontSize: "1.05rem", color: "var(--slate-700)", fontWeight: 500 }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stats Grid */}
            <div
              style={{
                backgroundColor: "var(--slate-50)",
                borderRadius: "1.25rem",
                padding: "2rem",
                border: "1px solid var(--slate-200)",
                display: "grid",
                gridTemplateColumns: "repeat(1, 1fr)",
                gap: "1.5rem",
              }}
              className="stats-subgrid"
            >
              {currentRole.mockStats.map((st, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "1rem",
                    padding: "1.25rem",
                    textAlign: "center",
                    boxShadow: "var(--shadow-sm)",
                    border: "1px solid rgba(13, 148, 136, 0.1)",
                  }}
                >
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--teal-700)", marginBottom: "0.25rem" }}>
                    {st.value}
                  </div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--slate-600)" }}>
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 860px) {
          .roles-selection-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .preview-grid {
            grid-template-columns: 1.3fr 1fr !important;
          }
          .stats-subgrid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
