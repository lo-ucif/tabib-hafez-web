import React from "react";

interface IconBaseProps {
  size?: number;
  className?: string;
}

export function TabibLogo({ size = 44, textVisible = true, className = "" }: { size?: number; textVisible?: boolean; className?: string }) {
  return (
    <div className={className} style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", verticalAlign: "middle" }}>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "14px",
          background: "linear-gradient(135deg, #0d9488 0%, #042f2e 100%)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(13, 148, 136, 0.3)",
          flexShrink: 0,
        }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: `${Math.round(size * 0.65)}px`, height: `${Math.round(size * 0.65)}px` }}
        >
          {/* Stethoscope */}
          <path
            d="M8 24C8 16 14 10 24 10C34 10 40 16 40 24V28C40 31.3137 37.3137 34 34 34C30.6863 34 28 31.3137 28 28V24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M12 28C12 34 17 39 24 39C31 39 36 34 36 28"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Open Quran pages symbol */}
          <path
            d="M24 18V32M24 32C21 30 16 30 13 32V20C16 18 21 18 24 20M24 32C27 30 32 30 35 32V20C32 18 27 18 24 20"
            stroke="#5EEAD4"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="40" r="3" fill="#FDE047" />
        </svg>
      </div>
      {textVisible && (
        <div style={{ display: "flex", flexDirection: "column", textAlign: "right", lineHeight: 1.2 }}>
          <span style={{ fontWeight: 900, fontSize: "1.25rem", color: "var(--teal-950)" }}>
            الطبيب الحافظ
          </span>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--teal-700)" }}>
            نظام تحفيظ القرآن للعلوم الطبية
          </span>
        </div>
      )}
    </div>
  );
}

export function ShifaaLogo({ className = "" }: { className?: string }) {
  return (
    <div className={className} style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem" }}>
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "#ccfbf1",
          color: "#0f766e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: "0.85rem",
          flexShrink: 0,
        }}
      >
        شفاء
      </div>
      <div style={{ display: "flex", flexDirection: "column", textAlign: "right", lineHeight: 1.2 }}>
        <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "inherit" }}>نادي شفاء</span>
        <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>جامعة قسنطينة 3</span>
      </div>
    </div>
  );
}

export function StatsIcon({ className = "", size = 32 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: `${size}px`, height: `${size}px`, display: "block" }}>
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
      <circle cx="19" cy="9" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function VideoRoomIcon({ className = "", size = 32 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: `${size}px`, height: `${size}px`, display: "block" }}>
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11" />
      <rect x="2" y="6" width="14" height="12" rx="3" />
      <circle cx="9" cy="12" r="2" />
    </svg>
  );
}

export function ScheduleIcon({ className = "", size = 32 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: `${size}px`, height: `${size}px`, display: "block" }}>
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

export function MicAttendanceIcon({ className = "", size = 32 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: `${size}px`, height: `${size}px`, display: "block" }}>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  );
}

export function CertificateIcon({ className = "", size = 32 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: `${size}px`, height: `${size}px`, display: "block" }}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <circle cx="12" cy="15" r="2.5" />
      <path d="m14 17 2 3-2-1-2 1 1-3" />
    </svg>
  );
}

export function NewsIcon({ className = "", size = 32 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: `${size}px`, height: `${size}px`, display: "block" }}>
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
}

export function StudentIcon({ className = "", size = 36 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: `${size}px`, height: `${size}px`, display: "block" }}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export function TeacherIcon({ className = "", size = 36 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: `${size}px`, height: `${size}px`, display: "block" }}>
      <circle cx="12" cy="7" r="4" />
      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M18 8l3-2-3-2" />
      <line x1="21" y1="6" x2="16" y2="6" />
    </svg>
  );
}

export function AdminIcon({ className = "", size = 36 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: `${size}px`, height: `${size}px`, display: "block" }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function QuranBookIcon({ className = "", size = 24 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: `${size}px`, height: `${size}px`, display: "block" }}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6 6h10" />
      <path d="M6 10h10" />
      <path d="M6 14h6" />
    </svg>
  );
}

export function CheckCircleIcon({ className = "", size = 20 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ width: `${size}px`, height: `${size}px`, flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function FacebookIcon({ className = "", size = 20 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ width: `${size}px`, height: `${size}px`, display: "block" }}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function InstagramIcon({ className = "", size = 20 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ width: `${size}px`, height: `${size}px`, display: "block" }}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function XTwitterIcon({ className = "", size = 20 }: IconBaseProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ width: `${size}px`, height: `${size}px`, display: "block" }}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
