import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "الطبيب الحافظ | أقوى نظام سحابي لإدارة جمعيات ومدارس تحفيظ القرآن",
  description:
    "مشروع الطبيب الحافظ قسنطينة | نادي شفاء - جامعة قسنطينة 3. منصة سحابية متكاملة لربط طلبة العلوم الطبية بحلقات القرآن الكريم ومتابعة الحفظ والتسميع.",
  keywords: [
    "الطبيب الحافظ",
    "نادي شفاء",
    "جامعة قسنطينة 3",
    "تحفيظ القرآن",
    "طلبة الطب",
    "تسميع أونلاين",
    "حلقات قرآنية",
  ],
  authors: [{ name: "فريق الطبيب الحافظ" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
