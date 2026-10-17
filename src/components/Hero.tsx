import React from 'react'
import { assets } from '../assets-map'

interface HeroProps {
  onRegister: () => void
}

export const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  return (
    <section id="home" className="relative w-full bg-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Side (in RTL): Dashboard mockup illustration */}
        <div className="w-full lg:w-[50%] flex justify-center items-center">
          <div className="relative w-full max-w-[574px] group">
            <img
              src={assets.imgFrame10000091311}
              alt="لوحة تحكم الطبيب الحافظ"
              className="w-full h-auto object-contain drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Right Side (in RTL): Content & Call to Action */}
        <div className="w-full lg:w-[50%] flex flex-col items-start text-right space-y-6">
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-[#1a5a81] leading-[1.3] tracking-wide">
            سماعة في العنق...وقران في القلب
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg lg:text-[19px] text-[#1a5a81]/90 font-normal leading-[1.8] max-w-[620px]">
            مشروع طلابي علمي قرآني من نادي شفاء، بإشراف مديرية الأنشطة الثقافية والعلمية والرياضية بجامعة قسنطينة 3.
            يجمع طلبة التخصصات الطبية في مسار متكامل لحفظ كتاب الله ومراجعته، بتسميع منتظم ومتابعة دقيقة وشهادات معتمدة.
          </p>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={onRegister}
              type="button"
              className="bg-[#e2a72b] hover:bg-[#cf931d] text-white font-semibold text-[22px] sm:text-[24px] px-10 py-3.5 rounded-[6px] shadow-lg shadow-[#e2a72b]/25 hover:shadow-xl hover:shadow-[#e2a72b]/35 active:scale-95 transition-all cursor-pointer flex items-center justify-center min-w-[196px]"
            >
              سجل الان
            </button>
          </div>

          {/* Sub-label */}
          <p className="text-sm sm:text-[15px] font-light text-[#1a5a81]/70 pt-2 border-t border-slate-100 w-full">
            مشروع الطبيب الحافظ قسنطينة | نادي شفاء
          </p>
        </div>

      </div>
    </section>
  )
}
