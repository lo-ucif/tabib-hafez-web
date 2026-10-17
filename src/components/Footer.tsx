import React from 'react'
import { assets } from '../assets-map'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1a5a81] text-white pt-12 sm:pt-16 pb-8 px-4 sm:px-12 border-t border-white/10">
      <div className="max-w-[1300px] mx-auto space-y-10 sm:space-y-12">
        
        {/* Main Columns Grid (Matching Figma mobile node 942:5840) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 text-right">
          
          {/* Column 1: Organization & University Info (Newsletter / Shifaa Club) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={assets.imgShifaaClubImage}
                alt="نادي شفاء"
                className="h-12 sm:h-14 w-auto object-contain filter brightness-0 invert"
              />
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
                نادي شفاء
              </span>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-[1.9] font-normal">
              مشروع الطبيب الحافظ
              <br />
              مديرية الأنشطة الثقافية والعلمية والرياضية
              <br />
              جامعة قسنطينة 3
            </p>

            <div className="pt-1">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-slate-200">
                كلية الطب - جامعة صالح بوبنيدر
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (روابط سريعة) */}
          <div className="space-y-4">
            <h4 className="text-lg sm:text-xl font-bold text-white border-b border-white/20 pb-2 inline-block">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-slate-200 text-sm sm:text-base">
              <li>
                <a href="#home" className="hover:text-[#e2a72b] transition flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e2a72b]" />
                  عن المنصة
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#e2a72b] transition flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e2a72b]" />
                  ماذا نقدم
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-[#e2a72b] transition flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e2a72b]" />
                  نشاطاتنا الميدانية
                </a>
              </li>
              <li>
                <a href="#roles" className="hover:text-[#e2a72b] transition flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e2a72b]" />
                  أدوار المنظومة
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#e2a72b] transition flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e2a72b]" />
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links & Logo (تابعنا) */}
          <div className="space-y-5">
            <h4 className="text-lg sm:text-xl font-bold text-white border-b border-white/20 pb-2 inline-block">
              تابعنا
            </h4>

            <div className="flex flex-col gap-2.5 sm:gap-3 text-sm sm:text-base">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-200 hover:text-[#e2a72b] transition py-1 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition">
                  <img src={assets.imgFacebook} alt="فيسبوك" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                </div>
                <span>فيسبوك</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-200 hover:text-[#e2a72b] transition py-1 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition">
                  <img src={assets.imgInstagram} alt="إنستغرام" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                </div>
                <span>إنستغرام</span>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-200 hover:text-[#e2a72b] transition py-1 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition">
                  <img src={assets.imgX} alt="X" className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                </div>
                <span>منصة X</span>
              </a>
            </div>

            {/* Logo image badge */}
            <div className="pt-2">
              <img
                src={assets.imgCover2RemovebgPreview3}
                alt="شعار الطبيب الحافظ"
                className="h-10 sm:h-12 w-auto object-contain filter brightness-0 invert opacity-90"
              />
            </div>
          </div>

        </div>

        {/* Horizontal Divider (Matching Figma mobile node 942:5919) */}
        <div className="w-full h-px bg-white/20" />

        {/* Bottom Credits & Copyright (Matching Figma mobile node 942:5920) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <img
              src={assets.imgFrame1000009141}
              alt=""
              className="h-6 sm:h-7 w-auto object-contain"
            />
            <span className="font-semibold text-white">
              من إنجاز منصة حافظ
            </span>
          </div>

          <p className="text-center sm:text-right">
            © 2026 الطبيب الحافظ – نادي شفاء. جميع الحقوق محفوظة.
          </p>
        </div>

      </div>
    </footer>
  )
}
