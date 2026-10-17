import React, { useState } from 'react'
import { assets } from '../assets-map'

interface NavbarProps {
  onOpenAuth: (type: 'login' | 'register') => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-[54px] md:h-[84px] flex items-center justify-between">
        
        {/* Right side in RTL: Brand Logo */}
        <div className="flex items-center gap-4">
          <a href="#" className="h-[34px] w-[94px] md:h-[60px] md:w-[166px] relative flex items-center">
            <img
              src={assets.imgCover2RemovebgPreview2}
              alt="شعار الطبيب الحافظ"
              className="h-full w-auto object-contain hover:scale-105 transition-transform"
            />
          </a>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {/* Home Link (Active) */}
          <a
            href="#home"
            className="flex flex-col items-center justify-center px-4 py-2 text-[#e2a72b] font-semibold text-[18px] transition hover:text-[#d3951f]"
          >
            <span>الرئيسية</span>
            <span className="w-2 h-2 mt-1 rounded-full bg-[#e2a72b]" />
          </a>

          {/* Features */}
          <a
            href="#features"
            className="px-4 py-2 text-[#1a5a81] hover:text-[#48a6a7] font-medium text-[18px] transition"
          >
            المميزات
          </a>

          {/* Activities */}
          <a
            href="#activities"
            className="px-4 py-2 text-[#1a5a81] hover:text-[#48a6a7] font-medium text-[18px] transition"
          >
            الأنشطة
          </a>

          {/* Roles */}
          <a
            href="#roles"
            className="px-4 py-2 text-[#1a5a81] hover:text-[#48a6a7] font-medium text-[18px] transition"
          >
            الأدوار
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="px-4 py-2 text-[#1a5a81] hover:text-[#48a6a7] font-medium text-[18px] transition"
          >
            تواصل معنا
          </a>
        </nav>

        {/* Left side in RTL: Login Action (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenAuth('login')}
            type="button"
            className="bg-[#48a6a7] hover:bg-[#3d9192] text-white font-semibold text-[20px] px-7 py-2.5 rounded-[6px] shadow-sm hover:shadow-md transition active:scale-95 cursor-pointer"
          >
            تسجيل الدخول
          </button>
        </div>

        {/* Mobile Hamburger toggle (exact 30x21px icon matching Figma node 942:6079) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="md:hidden flex items-center justify-center p-1.5 rounded-lg text-[#1a5a81] hover:bg-slate-50 transition"
          aria-label="القائمة"
        >
          {mobileMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-[30px] h-[21px]" fill="none" stroke="currentColor" viewBox="0 0 30 21">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2 2.5h26M2 10.5h26M2 18.5h26" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 flex flex-col gap-3 shadow-lg animate-in slide-in-from-top duration-200">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#e2a72b] font-semibold text-lg py-2 border-b border-slate-100 flex items-center justify-between"
          >
            <span>الرئيسية</span>
            <span className="w-2 h-2 rounded-full bg-[#e2a72b]" />
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1a5a81] font-medium text-lg py-2 border-b border-slate-100"
          >
            المميزات
          </a>
          <a
            href="#activities"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1a5a81] font-medium text-lg py-2 border-b border-slate-100"
          >
            الأنشطة
          </a>
          <a
            href="#roles"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1a5a81] font-medium text-lg py-2 border-b border-slate-100"
          >
            الأدوار
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#1a5a81] font-medium text-lg py-2 border-b border-slate-100"
          >
            تواصل معنا
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              onOpenAuth('login')
            }}
            type="button"
            className="w-full bg-[#48a6a7] hover:bg-[#3c8e8f] text-white font-semibold text-lg py-3 rounded-[6px] mt-2 shadow transition active:scale-98"
          >
            تسجيل الدخول
          </button>
        </div>
      )}
    </header>
  )
}
