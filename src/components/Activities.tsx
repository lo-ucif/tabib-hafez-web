import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { assets } from '../assets-map'
import {
  fadeUpVariants,
  createStaggerContainer,
  defaultViewport,
  premiumEase,
} from '../animations/motionVariants'

export const Activities: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const items = [
    {
      id: 1,
      title: 'حلقات الحفظ والمراجعة',
      description: 'جلسات أسبوعية لتثبيت المحفوظ بين الطلبة وتصحيح التلاوة بأحكام التجويد والإتقان.',
      image: assets.imgQuran1,
      badge: 'قرآن وتجويد',
    },
    {
      id: 2,
      title: 'ورشات طبية تطبيقية',
      description: 'مهارات سريرية وتدريبات عملية على الإسعافات الأولية يقدمها طلبة وأطباء ممارسون.',
      image: assets.imgMedicine1,
      badge: 'طب وسريريات',
    },
    {
      id: 3,
      title: 'لقاءات وتكريمات سنوية',
      description: 'احتفاء دوري بالحافظين والمتميزين في ختام كل محطة ومسابقة قرآنية جامعية.',
      image: assets.imgImageOfTheDay1,
      badge: 'تكريم وتميز',
    },
    {
      id: 4,
      title: 'قوافل طبية تطوعية',
      description: 'فحوصات مجانية واستشارات صحية ميدانية يقدمها طلبة وأطباء النادي لخدمة المجتمع.',
      image: '/activities/caravan.webp',
      badge: 'تطوع وإحسان',
    },
    {
      id: 5,
      title: 'مسابقات قرآنية رمضانية',
      description: 'منافسات سنوية في حفظ وترتيل القرآن الكريم بين طلبة الكليات الطبية بأجواء إيمانية.',
      image: '/activities/competition.webp',
      badge: 'مسابقات وتنافس',
    },
    {
      id: 6,
      title: 'ندوات فكرية وتزكية',
      description: 'محاضرات تجمع بين أخلاقيات الطبيب المسلم وعلوم الشريعة والتزكية الإيمانية.',
      image: '/activities/seminar.webp',
      badge: 'فكر وتزكية',
    },
  ]

  const total = items.length

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }

  // Handle card click on desktop: advances or focuses the clicked item
  const handleDesktopCardClick = (offset: number) => {
    if (offset === 0) {
      nextSlide()
    } else {
      setCurrentIndex((prev) => (prev + offset) % total)
    }
  }

  // Handle card click on mobile: changes image to next
  const handleMobileCardClick = () => {
    nextSlide()
  }

  // Touch gesture support on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left (in RTL forward)
        nextSlide()
      } else {
        // Swiped right (in RTL backward)
        prevSlide()
      }
    }
    setTouchStartX(null)
  }

  // Desktop visible 3 items
  const desktopVisible = [
    { item: items[currentIndex], offset: 0, actualIndex: currentIndex },
    { item: items[(currentIndex + 1) % total], offset: 1, actualIndex: (currentIndex + 1) % total },
    { item: items[(currentIndex + 2) % total], offset: 2, actualIndex: (currentIndex + 2) % total },
  ]

  // Mobile single active item
  const mobileItem = items[currentIndex]

  return (
    <section id="activities" className="relative w-full bg-[#fefefe] py-14 sm:py-20 px-4 sm:px-12 overflow-hidden">
      
      {/* Background Decorative Stethoscope SVGs (~20% opacity) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          className="absolute left-[-30px] top-40 w-28 sm:w-40 h-28 sm:h-40 opacity-20 rotate-45"
        />
        <img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          className="absolute right-[-20px] bottom-32 w-28 sm:w-36 h-28 sm:h-36 opacity-20 -rotate-12"
        />
        <img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          className="absolute left-1/3 bottom-12 w-24 sm:w-32 h-24 sm:h-32 opacity-15 rotate-[60deg] hidden lg:block"
        />
      </div>

      <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Heading with scroll reveal */}
        <motion.div
          variants={createStaggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center flex flex-col items-center mb-10 sm:mb-14 space-y-3 sm:space-y-4"
        >
          <motion.h2 variants={fadeUpVariants} className="text-2xl sm:text-4xl lg:text-[40px] font-semibold text-[#48a6a7]">
            نشاطاتنا الميدانية
          </motion.h2>
          <motion.div variants={fadeUpVariants} className="h-[5px] w-40 sm:w-72 lg:w-[420px] max-w-full bg-[#e2a72b] rounded-full" />
          <motion.p variants={fadeUpVariants} className="text-base sm:text-xl lg:text-[23px] text-black/60 font-medium max-w-[700px] leading-relaxed pt-1">
            من الحلقات إلى الورشات، نعيش القرآن والطب معًا خارج الشاشة.
          </motion.p>
        </motion.div>

        {/* ============================================================ */}
        {/* DESKTOP / TABLET VIEW: Exactly 3 cards showed, clickable */}
        {/* ============================================================ */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 w-full justify-items-center mb-8">
          {desktopVisible.map(({ item, offset, actualIndex }) => (
            <motion.div
              key={`${actualIndex}-${offset}`}
              onClick={() => handleDesktopCardClick(offset)}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: premiumEase } }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full max-w-[340px] h-[503px] rounded-[30px] overflow-hidden border border-[#48a6a7]/60 bg-[#ddf3ee] shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer select-none"
              title="انقر لتغيير النشاط"
            >
              {/* Card Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Pill Tag */}
              <div className="absolute top-5 right-5 bg-[#48a6a7]/85 backdrop-blur-md border border-white/60 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
                {item.badge}
              </div>

              {/* Hint badge on hover */}
              <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-md text-[#1a5a81] text-xs font-medium px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                <span>انقر للتالي</span>
                <span>←</span>
              </div>

              {/* Frosted Teal Gradient Overlay at Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-[190px] bg-gradient-to-t from-[#1a5a81]/95 via-[#48a6a7]/80 to-transparent flex flex-col justify-end p-6 text-right">
                <h3 className="text-xl sm:text-[22px] font-bold text-white mb-2 drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] font-medium text-white/90 leading-relaxed drop-shadow-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============================================================ */}
        {/* MOBILE VIEW: Exactly 1 card showed, tap to change image */}
        {/* ============================================================ */}
        <div className="block md:hidden w-full max-w-[340px] mb-8">
          <motion.div
            onClick={handleMobileCardClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full h-[490px] rounded-[30px] overflow-hidden border-2 border-[#48a6a7] bg-[#ddf3ee] shadow-xl cursor-pointer select-none"
          >
            {/* Smooth transition Card Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={mobileItem.id}
                src={mobileItem.image}
                alt={mobileItem.title}
                initial={{ opacity: 0.3, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.3, scale: 0.98 }}
                transition={{ duration: 0.35, ease: premiumEase }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Floating Pill Tag */}
            <div className="absolute top-5 right-5 bg-[#48a6a7]/90 backdrop-blur-md border border-white/60 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
              {mobileItem.badge}
            </div>

            {/* Tap to change indicator on mobile */}
            <div className="absolute top-5 left-5 bg-black/45 backdrop-blur-md border border-white/40 text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
              <svg className="w-3.5 h-3.5 text-[#e2a72b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>انقر لتغيير الصورة</span>
            </div>

            {/* Frosted Teal Gradient Overlay at Bottom */}
            <div className="absolute inset-x-0 bottom-0 h-[190px] bg-gradient-to-t from-[#1a5a81]/95 via-[#48a6a7]/85 to-transparent flex flex-col justify-end p-6 text-right">
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
                {mobileItem.title}
              </h3>
              <p className="text-xs font-medium text-white/90 leading-relaxed drop-shadow-sm">
                {mobileItem.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* Navigation Indicators & Buttons */}
        {/* ============================================================ */}
        <div className="flex flex-col items-center gap-4 w-full">
          
          {/* Buttons & Experience Badge */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 pt-2">
            {/* Previous Button */}
            <motion.button
              onClick={prevSlide}
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#48a6a7]/50 shadow-sm hover:shadow-md flex items-center justify-center text-[#1a5a81] hover:bg-[#ddf3ee] transition-colors cursor-pointer"
              aria-label="السابق"
            >
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Center Badge */}
            <div className="bg-[#ddf3ee] border border-[#bdbdbd]/70 px-5 sm:px-6 py-2 rounded-[30px] shadow-sm flex items-center">
              <span className="text-[#1a5a81] font-semibold text-sm sm:text-[17px]">
                +7 سنوات من العطاء
              </span>
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#48a6a7]/50 shadow-sm hover:shadow-md flex items-center justify-center text-[#1a5a81] hover:bg-[#ddf3ee] transition-colors cursor-pointer"
              aria-label="التالي"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          </div>

          {/* 6 Interactive Event Dots */}
          <div className="flex items-center justify-center gap-2 pt-1">
            {items.map((_, idx) => {
              const isActive = idx === currentIndex
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  type="button"
                  aria-label={`الانتقال إلى النشاط ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full h-2.5 cursor-pointer ${
                    isActive
                      ? 'w-8 bg-[#48a6a7] shadow-sm'
                      : 'w-2.5 bg-[#48a6a7]/30 hover:bg-[#48a6a7]/60'
                  }`}
                />
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
