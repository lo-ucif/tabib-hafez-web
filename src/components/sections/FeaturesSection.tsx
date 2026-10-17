"use client";

import React, { useState } from "react";
import {
  StatsIcon,
  VideoRoomIcon,
  ScheduleIcon,
  MicAttendanceIcon,
  CertificateIcon,
  NewsIcon,
} from "../ui/Icons";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  badgeColor: string;
}

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features: FeatureItem[] = [
    {
      id: "stats",
      title: "متابعة التقدّم والإحصائيات",
      description: "مؤشرات واضحة لمقدار حفظك ومراجعته ونسبة حضورك، لتعرف أين وصلت دائمًا وترصد تطور حفظك بدقة.",
      icon: <StatsIcon className="w-8 h-8" />,
      tag: "مؤشرات ذكية",
      badgeColor: "#0d9488",
    },
    {
      id: "live",
      title: "تسميع ومراجعة عن بُعد",
      description: "قاعات مباشرة داخل المنصة للتسميع والمراجعة مع أستاذك، دون الحاجة إلى أي تطبيق خارجي أو روابط إضافية.",
      icon: <VideoRoomIcon className="w-8 h-8" />,
      tag: "قاعات تفاعلية",
      badgeColor: "#0284c7",
    },
    {
      id: "halaqat",
      title: "حلقات وجدول دراسي",
      description: "انضم إلى حلقة تناسب مستواك، وتابع جدول الحصص الأسبوعي وأوقات التسميع في مكان واحد منسق وفق فراغك الجامعي.",
      icon: <ScheduleIcon className="w-8 h-8" />,
      tag: "تنظيم مرن",
      badgeColor: "#d97706",
    },
    {
      id: "attendance",
      title: "الحضور وتبريرات الغياب",
      description: "سجّل حضورك، وقدّم تبريرات الغياب إلكترونياً، واطّلع على سجلّك في أي وقت بشفافية كاملة وتوثيق فوري.",
      icon: <MicAttendanceIcon className="w-8 h-8" />,
      tag: "انضباط وسلاسة",
      badgeColor: "#16a34a",
    },
    {
      id: "exams",
      title: "امتحانات وشهادات",
      description: "امتحانات دورية بتصحيح واضح، وشهادات تُصدر تلقائيًا عند إتمام المحطة بنجاح وموثقة برقم تحقق إلكتروني.",
      icon: <CertificateIcon className="w-8 h-8" />,
      tag: "شهادات معتمدة",
      badgeColor: "#9333ea",
    },
    {
      id: "news",
      title: "أخبار وفعاليات النادي",
      description: "تابع إعلانات النادي وفعالياته: ورشات طبية، ندوات، مسابقات قرآنية وتكريمات سنوية تنظمها جامعة قسنطينة 3.",
      icon: <NewsIcon className="w-8 h-8" />,
      tag: "مجتمع حيوي",
      badgeColor: "#e11d48",
    },
  ];

  return (
    <section id="features" className="section-wrapper bg-medical-pattern">
      <div className="container">
        {/* Section Header matching Figma Group 1000009118 */}
        <div className="section-header">
          <h2 className="section-title">ماذا تجد في الطبيب الحافظ؟</h2>
          <div className="decorative-bar" />
          <p className="section-subtitle">
            أدوات تنظّم رحلتك مع القرآن، وتوازن بينها وبين دراستك الطبية بأعلى معايير الإتقان والتيسير.
          </p>
        </div>

        {/* 6 Cards Grid (3x2 on desktop, matching Figma cards frame 933:1694) */}
        <div className="grid-cards-3">
          {features.map((item) => {
            const isHovered = activeFeature === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveFeature(item.id)}
                onMouseLeave={() => setActiveFeature(null)}
                className="feature-card"
                style={{
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  borderColor: isHovered ? "var(--teal-500)" : "rgba(13, 148, 136, 0.12)",
                }}
              >
                {/* Top Badge */}
                <div
                  style={{
                    alignSelf: "flex-end",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.65rem",
                    borderRadius: "9999px",
                    backgroundColor: "var(--teal-50)",
                    color: item.badgeColor,
                    border: "1px solid rgba(13, 148, 136, 0.15)",
                    marginBottom: "1rem",
                  }}
                >
                  {item.tag}
                </div>

                {/* Icon Wrapper with soft glow */}
                <div className="icon-wrapper">{item.icon}</div>

                {/* Card Title */}
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "var(--teal-950)",
                    marginBottom: "0.875rem",
                  }}
                >
                  {item.title}
                </h3>

                {/* Card Description */}
                <p
                  style={{
                    fontSize: "0.98rem",
                    color: "var(--slate-600)",
                    lineHeight: 1.75,
                    flexGrow: 1,
                  }}
                >
                  {item.description}
                </p>

                {/* Learn more / Action link */}
                <div
                  style={{
                    marginTop: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--teal-700)",
                  }}
                >
                  <span>اكتشف المزيد</span>
                  <span>←</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
