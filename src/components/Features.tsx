import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets-map'
import {
  fadeUpVariants,
  createStaggerContainer,
  staggerItemVariants,
  defaultViewport,
  premiumEase,
} from '../animations/motionVariants'

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
      icon: assets.imgGroup1,
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
    <section id="features" className="relative w-full max-w-full bg-[#fcfcfc] py-14 sm:py-20 px-4 sm:px-12 overflow-hidden">
      
      {/* Background Decorative Stethoscope SVGs clipped securely (~20% opacity) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          className="absolute -right-6 top-12 w-28 sm:w-36 h-28 sm:h-36 opacity-20 rotate-12"
        />
        <img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          className="absolute -left-6 bottom-20 w-32 sm:w-44 h-32 sm:h-44 opacity-20 -rotate-12"
        />
        <img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          className="absolute right-1/4 bottom-8 w-24 sm:w-32 h-24 sm:h-32 opacity-15 rotate-45 hidden lg:block"
        />
        <img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          className="absolute left-1/3 top-8 w-24 sm:w-32 h-24 sm:h-32 opacity-15 -rotate-[30deg] hidden lg:block"
        />
      </div>

      <div className="max-w-[1300px] mx-auto flex flex-col items-center w-full">
        
        {/* Section Heading with scroll reveal */}
        <motion.div
          variants={createStaggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center flex flex-col items-center mb-10 sm:mb-16 space-y-3 sm:space-y-4 w-full"
        >
          <motion.h2 variants={fadeUpVariants} className="text-2xl sm:text-4xl lg:text-[40px] font-semibold text-[#48a6a7]">
            ماذا تجد في الطبيب الحافظ؟
          </motion.h2>
          <motion.div variants={fadeUpVariants} className="h-[5px] w-36 sm:w-80 lg:w-[562px] max-w-full bg-[#e2a72b] rounded-full" />
          <motion.p variants={fadeUpVariants} className="text-sm sm:text-xl lg:text-[23px] text-black/60 font-medium max-w-[750px] leading-relaxed pt-1 px-2">
            أدوات تنظّم رحلتك مع القرآن، وتوازن بينها وبين دراستك الطبية.
          </motion.p>
        </motion.div>

        {/* 6 Features Staggered Grid */}
        <motion.div
          variants={createStaggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full justify-items-center"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={staggerItemVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: premiumEase },
              }}
              className="group relative w-full max-w-[335px] sm:max-w-[362px] min-h-[300px] sm:min-h-[311px] bg-white rounded-[14px] p-5 sm:p-7 flex flex-col items-center justify-between text-center border border-slate-100 shadow-[0px_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0px_14px_34px_rgba(72,166,167,0.16)] transition-shadow duration-300 overflow-hidden"
            >
              {/* Subtle curved background glow image from Figma */}
              <img
                src={assets.imgEllipse3}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[300px] opacity-40 group-hover:opacity-80 transition-opacity"
              />

              {/* Icon Container */}
              <div className="h-[80px] sm:h-[95px] flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110">
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
                <p className="text-xs sm:text-[16px] text-black/60 font-normal leading-[1.65]">
                  {card.description}
                </p>
              </div>

              {/* Accent Bottom Line on hover */}
              <div className="h-1 w-0 group-hover:w-16 bg-[#48a6a7] rounded-full transition-all duration-300 relative z-10" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
