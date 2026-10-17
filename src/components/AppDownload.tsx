import React from 'react'
import { assets } from '../assets-map'

interface AppDownloadProps {
  onLoginClick: () => void
}

export const AppDownload: React.FC<AppDownloadProps> = ({ onLoginClick }) => {
  return (
    <section className="relative w-full bg-[#fdfdfd] py-16 lg:py-24 px-6 sm:px-12 overflow-hidden">
      
      {/* Background Decorative SVGs */}
      <img
        src={assets.imgDoctorSvgrepoCom5}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-12 top-6 w-36 h-36 opacity-15 rotate-12"
      />

      <div className="max-w-[1240px] mx-auto">
        <div className="relative bg-[#48a6a7] rounded-[24px] overflow-hidden px-8 sm:px-12 py-12 lg:py-16 shadow-xl flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          
          {/* Left Side (in RTL): 2 Overlapping iPhone Mockups */}
          <div className="w-full lg:w-[45%] flex items-center justify-center relative min-h-[360px] sm:min-h-[440px]">
            <div className="relative w-full max-w-[360px] h-[380px] sm:h-[460px]">
              
              {/* Phone 1 (Back/Left) */}
              <div className="absolute left-0 top-0 w-[190px] sm:w-[220px] drop-shadow-2xl z-10 transition-transform duration-500 hover:scale-105">
                <img
                  src={assets.imgFreeTransparentIPhone17MockupMockuuupsStudio}
                  alt="تطبيق الطبيب الحافظ في هاتف آيفون"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Phone 2 (Front/Right) */}
              <div className="absolute right-0 bottom-0 w-[190px] sm:w-[220px] drop-shadow-2xl z-20 transition-transform duration-500 hover:scale-105">
                <img
                  src={assets.imgFreeTransparentIPhone17MockupMockuuupsStudio1}
                  alt="شاشة تطبيق الطبيب الحافظ"
                  className="w-full h-auto object-contain"
                />
              </div>

            </div>
          </div>

          {/* Right Side (in RTL): Content & Call to Actions */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-right space-y-6 text-white z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight">
              ابدأ رحلتك بين العلم والقرآن
            </h2>

            <p className="text-base sm:text-lg lg:text-[20px] text-[#f0f9f8] font-normal leading-relaxed max-w-[540px]">
              حمّل تطبيق الطبيب الحافظ، وتابع حلقتك وتسميعك وتقدّمك أينما كنت دون انقطاع.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#download"
                className="bg-[#e2a72b] hover:bg-[#d09520] text-white font-semibold text-xl sm:text-2xl px-8 py-3.5 rounded-[6px] shadow-lg shadow-black/10 hover:shadow-xl active:scale-95 transition-all flex items-center justify-center min-w-[180px]"
              >
                حمله الان
              </a>

              <button
                onClick={onLoginClick}
                type="button"
                className="bg-white hover:bg-slate-50 text-[#48a6a7] font-semibold text-xl sm:text-2xl px-8 py-3.5 rounded-[6px] border border-white shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer flex items-center justify-center min-w-[180px]"
              >
                تسجيل الدخول
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
