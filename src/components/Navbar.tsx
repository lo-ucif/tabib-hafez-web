import React, { useState, useEffect } from 'react'
import { assets } from '../assets-map'

interface NavbarProps {
  onOpenAuth: (type: 'login' | 'register') => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'features', label: 'المميزات' },
    { id: 'activities', label: 'الأنشطة' },
    { id: 'roles', label: 'الأدوار' },
    { id: 'contact', label: 'تواصل معنا' },
  ]

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)

      const scrollPosition = window.scrollY + 140
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id)
        if (el) {
          const top = el.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    setActiveSection(id)
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const isMobile = window.innerWidth < 768
      const headerHeight = isMobile ? 54 : 84
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-0.5 md:py-1'
            : 'bg-white shadow-sm border-b border-slate-100 py-0'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-[54px] md:h-[84px] flex items-center justify-between">
          
          {/* Right side in RTL: Brand Logo */}
          <div className="flex items-center gap-4">
            <a
              href="#home"
              onClick={(e) => scrollToSection('home', e)}
              className="h-[34px] w-[94px] md:h-[60px] md:w-[166px] relative flex items-center cursor-pointer"
            >
              <img
                src={assets.imgCover2RemovebgPreview2}
                alt="شعار الطبيب الحافظ"
                className="h-full w-auto object-contain hover:scale-105 transition-transform"
              />
            </a>
          </div>

          {/* Center: Navigation Links (Desktop PC mode) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(item.id, e)}
                  className={`flex flex-col items-center justify-center px-4 py-2 text-[18px] transition-all cursor-pointer group select-none ${
                    isActive
                      ? 'text-[#e2a72b] font-semibold'
                      : 'text-[#1a5a81] hover:text-[#48a6a7] font-medium'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Active indicator dot like in Figma */}
                  <span
                    className={`w-2 h-2 mt-1 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-[#e2a72b] opacity-100 scale-100'
                        : 'bg-transparent opacity-0 scale-50'
                    }`}
                  />
                </a>
              )
            })}
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

          {/* Mobile Hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden flex items-center justify-center p-1.5 rounded-lg text-[#1a5a81] hover:bg-slate-50 transition cursor-pointer"
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
          <div className="md:hidden w-full max-w-full bg-white border-b border-slate-200 px-4 py-4 flex flex-col gap-2.5 shadow-lg animate-in slide-in-from-top duration-200 max-h-[calc(100vh-60px)] overflow-y-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(item.id, e)}
                  className={`text-base py-2 border-b border-slate-100 flex items-center justify-between transition-colors ${
                    isActive
                      ? 'text-[#e2a72b] font-semibold'
                      : 'text-[#1a5a81] hover:text-[#48a6a7] font-medium'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#e2a72b]" />}
                </a>
              )
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenAuth('login')
              }}
              type="button"
              className="w-full bg-[#48a6a7] hover:bg-[#3c8e8f] text-white font-semibold text-base py-3 rounded-[6px] mt-2 shadow transition active:scale-98 cursor-pointer"
            >
              تسجيل الدخول
            </button>
          </div>
        )}
      </header>

      {/* Spacer so page content is never hidden behind the fixed navbar */}
      <div className="h-[54px] md:h-[84px] w-full shrink-0 pointer-events-none" aria-hidden="true" />
    </>
  )
}
