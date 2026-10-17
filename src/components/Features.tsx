import React from 'react'
import { assets } from '../assets-map'

export const Features: React.FC = () => {
  const cards = [
    {
      title: 'حلقات وجدول دراسي',
      description: 'انضم إلى حلقة تناسب مستواك، وتابع جدول الحصص الأسبوعي وأوقات التسميع في مكان واحد.',
      icon: assets.imgGroup4,
      iconClass: 'h-[65px] sm:h-[70px] w-auto',
    },
    {
      title: 'تسميع ومراجعة عن بُعد',
      description: 'قاعات مباشرة داخل المنصة للتسميع والمراجعة مع أستاذك، دون الحاجة إلى أي تطبيق خارجي.',
      icon: assets.imgVector,
      iconClass: 'h-[70px] sm:h-[76px] w-auto',
    },
    {
      title: 'متابعة التقدّم والإحصائيات',
      description: 'مؤشرات واضحة لمقدار حفظك ومراجعتك ونسبة حضورك، لتعرف أين وصلت دائمًا.',
      icon: assets.imgMeetNowSvgrepoCom1,
      iconClass: 'h-[80px] sm:h-[90px] w-auto',
    },
    {
      title: 'الحضور وتبريرات الغياب',
      description: 'سجّل حضورك، وقدّم تبريرات الغياب إلكترونياً، واطّلع على سجلّك في أي وقت بشفافية كاملة.',
      icon: assets.imgLayer2,
      iconClass: 'h-[75px] sm:h-[85px] w-auto',
    },
    {
      title: 'امتحانات وشهادات',
      description: 'امتحانات دورية بتصحيح واضح، وشهادات تُصدر تلقائيًا عند إتمام المحطة بنجاح.',
      icon: assets.imgGroup,
      iconClass: 'h-[72px] sm:h-[80px] w-auto',
    },
    {
      title: 'أخبار وفعاليات النادي',
      description: 'تابع إعلانات النادي وفعالياته: ورشات، ندوات، مسابقات قرآنية وتكريمات.',
      icon: assets.imgFile,
      iconClass: 'h-[75px] sm:h-[85px] w-auto',
    },
  ]

  return (
    <section id="features" className="relative w-full bg-[#fcfcfc] py-14 sm:py-20 px-4 sm:px-12 overflow-hidden">
      
      {/* Background Decorative Stethoscope SVGs */}
      <img
        src={assets.imgDoctorSvgrepoCom5}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-40px] top-12 w-28 sm:w-36 h-28 sm:h-36 opacity-30 rotate-12 blur-[0.5px]"
      />
      <img
        src={assets.imgDoctorSvgrepoCom4}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-20px] bottom-20 w-32 sm:w-44 h-32 sm:h-44 opacity-25 -rotate-12 blur-[0.5px]"
      />

      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        
        {/* Section Heading (Matching Figma mobile node 942:5427) */}
        <div className="text-center flex flex-col items-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-semibold text-[#48a6a7]">
            ماذا تجد في الطبيب الحافظ؟
          </h2>
          <div className="h-[5px] w-40 sm:w-80 lg:w-[562px] max-w-full bg-[#e2a72b] rounded-full" />
          <p className="text-base sm:text-xl lg:text-[23px] text-black/60 font-medium max-w-[750px] leading-relaxed pt-1">
            أدوات تنظّم رحلتك مع القرآن، وتوازن بينها وبين دراستك الطبية.
          </p>
        </div>

        {/* 6 Features Grid (Single column stack on mobile matching node 942:5431) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full justify-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative w-full max-w-[362px] min-h-[300px] sm:min-h-[311px] bg-white rounded-[14px] p-6 sm:p-7 flex flex-col items-center justify-between text-center border border-slate-100 shadow-[0px_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0px_12px_32px_rgba(72,166,167,0.14)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle curved background glow image from Figma */}
              <img
                src={assets.imgEllipse3}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] opacity-40 group-hover:opacity-80 transition-opacity"
              />

              {/* Icon Container */}
              <div className="h-[85px] sm:h-[95px] flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={card.icon}
                  alt={card.title}
                  className={`${card.iconClass} object-contain`}
                />
              </div>

              {/* Title & Description */}
              <div className="relative z-10 space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-[22px] font-semibold text-black leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-[16px] text-black/60 font-normal leading-[1.65]">
                  {card.description}
                </p>
              </div>

              {/* Accent Bottom Line on hover */}
              <div className="h-1 w-0 group-hover:w-16 bg-[#48a6a7] rounded-full transition-all duration-300 relative z-10" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
