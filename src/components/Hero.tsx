import React from "react";
import { assets } from "../assets-map";

interface HeroProps {
  onRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  return (
    <section
      id="home"
      className="relative mt-5 sm:mt-20 lg:mt-10 w-full bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* In Figma Mobile Mode (node 942:5416): Content Container is on top */}
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-right space-y-5 sm:space-y-6">
          <img
            src={assets.imgCover2RemovebgPreview2}
            alt="شعار الطبيب الحافظ"
            className="block md:hidden h-full w-full hover:scale-105 transition-transform"
          />
          {/* Main Title */}
          <h1 className="text-4xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-[#1a5a81] leading-[1.35] tracking-wide">
            سماعة في العنق ... وقران في القلب
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-lg lg:text-[19px] text-[#1a5a81]/90 font-normal leading-[1.8] max-w-[620px]">
            مشروع طلابي علمي قرآني من نادي شفاء، بإشراف مديرية الأنشطة الثقافية
            والعلمية والرياضية بجامعة قسنطينة 3. يجمع طلبة التخصصات الطبية في
            مسار متكامل لحفظ كتاب الله ومراجعته، بتسميع منتظم ومتابعة دقيقة
            وشهادات معتمدة.
          </p>

          {/* Action Button */}
          <div className="pt-2 w-full sm:w-auto flex justify-center lg:justify-start">
            <button
              onClick={onRegister}
              type="button"
              className="w-full sm:w-auto bg-[#e2a72b] hover:bg-[#cf931d] text-white font-semibold text-xl sm:text-[24px] px-10 py-3.5 rounded-[6px] shadow-lg shadow-[#e2a72b]/25 hover:shadow-xl hover:shadow-[#e2a72b]/35 active:scale-95 transition-all cursor-pointer flex items-center justify-center min-w-[196px]"
            >
              سجل الان
            </button>
          </div>

          {/* Sub-label */}
          <p className="text-xs sm:text-[15px] font-light text-[#1a5a81]/70 pt-2 border-t border-slate-100 w-full text-center lg:text-right">
            مشروع الطبيب الحافظ قسنطينة | نادي شفاء
          </p>
        </div>

        {/* In Figma Mobile Mode (node 942:5416): Illustration is on bottom (w: 321px, h: 210px) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center pt-2 lg:pt-0">
          <div
            className="
              relative
              w-[321px]
              h-full
              lg:w-[600px]
              lg:h-full
              group
            "
          >
            <img
              src={assets.imgFrame10000091311}
              alt="لوحة تحكم الطبيب الحافظ"
              className="
                w-full
                h-full
                object-contain
                drop-shadow-xl
                transition-transform
                duration-500
                hover:scale-[1.02]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
