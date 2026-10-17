import React from 'react'
import { assets } from '../assets-map'

interface AppDownloadProps {
  onLoginClick: () => void
}

export const AppDownload: React.FC<AppDownloadProps> = ({ onLoginClick }) => {
  return (
    <section className="relative w-full bg-[#fdfdfd] py-12 lg:py-24 px-4 sm:px-12 overflow-hidden">
      
      {/* Background Decorative SVGs */}
      <img
        src={assets.imgDoctorSvgrepoCom5}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-4 sm:right-12 top-6 w-28 sm:w-36 h-28 sm:h-36 opacity-15 rotate-12"
      />

      <div className="max-w-[1240px] mx-auto">
        {/* Main Banner Container (Matching Figma mobile node 942:5789) */}
        <div className="relative bg-[#48a6a7] rounded-[20px] sm:rounded-[24px] overflow-hidden px-6 sm:px-12 py-10 lg:py-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          
          {/* In Figma Mobile Mode: Content & Call to Actions are on TOP */}
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-right space-y-5 text-white z-10">
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold leading-tight">
              ابدأ رحلتك بين العلم والقرآن
            </h2>

            <p className="text-sm sm:text-lg lg:text-[20px] text-[#f0f9f8] font-normal leading-relaxed max-w-[540px]">
              حمّل تطبيق الطبيب الحافظ، وتابع حلقتك وتسميعك وتقدّمك أينما كنت دون انقطاع.
            </p>

            {/* In Figma mobile mode (node 942:5957): 2 buttons stacked vertically on mobile */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#download"
                className="w-full sm:w-auto bg-[#e2a72b] hover:bg-[#d09520] text-white font-semibold text-lg sm:text-2xl px-8 py-3.5 rounded-[6px] shadow-lg shadow-black/10 hover:shadow-xl active:scale-95 transition-all flex items-center justify-center min-w-[196px]"
              >
                حمله الان
              </a>

              <button
                onClick={onLoginClick}
                type="button"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#48a6a7] font-semibold text-lg sm:text-2xl px-8 py-3.5 rounded-[6px] border border-white shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer flex items-center justify-center min-w-[196px]"
              >
                تسجيل الدخول
              </button>
            </div>
          </div>

          {/* In Figma Mobile Mode: Dual iPhone Mockup is on BOTTOM (node 942:5953, w: 355px, h: 537px) */}
          <div className="w-full lg:w-[45%] flex items-center justify-center relative min-h-[360px] sm:min-h-[440px] pt-4 lg:pt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] h-[360px] sm:h-[460px]">
              
              {/* Phone 1 (Back/Left, matching node 942:5954) */}
              <div className="absolute left-0 top-0 w-[175px] sm:w-[200px] drop-shadow-2xl z-10 transition-transform duration-500 hover:scale-105">
                <img
                  src={assets.imgFreeTransparentIPhone17MockupMockuuupsStudio}
                  alt="تطبيق الطبيب الحافظ في هاتف آيفون"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Phone 2 (Front/Right, matching node 942:5955) */}
              <div className="absolute right-2 sm:right-0 bottom-0 w-[175px] sm:w-[200px] drop-shadow-2xl z-20 transition-transform duration-500 hover:scale-105">
                <img
                  src={assets.imgFreeTransparentIPhone17MockupMockuuupsStudio1}
                  alt="شاشة تطبيق الطبيب الحافظ"
                  className="w-full h-auto object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
