import React, { useState } from 'react'
import { assets } from '../assets-map'

export const Activities: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const items = [
    {
      title: 'حلقات الحفظ والمراجعة',
      description: 'جلسات أسبوعية لتثبيت المحفوظ بين الطلبة وتصحيح التلاوة.',
      image: assets.imgQuran1,
      badge: 'قرآن وتجويد',
    },
    {
      title: 'ورشات طبية تطبيقية',
      description: 'مهارات سريرية يقدمها طلبة وأساتذة من الميدان الطبي.',
      image: assets.imgMedicine1,
      badge: 'طب وسريريات',
    },
    {
      title: 'لقاءات وتكريمات',
      description: 'احتفاء بالحافظين والمتميزين في ختام كل محطة ومسابقة.',
      image: assets.imgImageOfTheDay1,
      badge: 'تكريم وتميز',
    },
  ]

  const nextSlide = () => {
    setSelectedIdx((prev) => (prev === null ? 1 : (prev + 1) % items.length))
  }

  const prevSlide = () => {
    setSelectedIdx((prev) => (prev === null ? items.length - 1 : (prev - 1 + items.length) % items.length))
  }

  return (
    <section id="activities" className="relative w-full bg-[#fefefe] py-20 px-6 sm:px-12 overflow-hidden">
      
      {/* Background Decorative SVGs */}
      <img
        src={assets.imgDoctorSvgrepoCom5}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-30px] top-40 w-40 h-40 opacity-20 rotate-45"
      />
      <img
        src={assets.imgDoctorSvgrepoCom5}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-20px] bottom-32 w-36 h-36 opacity-20 -rotate-12"
      />

      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#48a6a7]">
            نشاطاتنا الميدانية
          </h2>
          <div className="h-[5px] w-48 sm:w-72 lg:w-[420px] max-w-full bg-[#e2a72b] rounded-full" />
          <p className="text-lg sm:text-xl lg:text-[23px] text-black/60 font-medium max-w-[700px] leading-relaxed pt-2">
            من الحلقات إلى الورشات، نعيش القرآن والطب معًا خارج الشاشة.
          </p>
        </div>

        {/* 3 Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedIdx(index)}
              className={`group relative w-full max-w-[320px] h-[490px] rounded-[30px] overflow-hidden border border-[#48a6a7]/60 bg-[#ddf3ee] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                selectedIdx === index ? 'ring-4 ring-[#48a6a7] scale-[1.03]' : 'hover:-translate-y-2'
              }`}
            >
              {/* Card Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Pill Tag */}
              <div className="absolute top-5 right-5 bg-[#48a6a7]/75 backdrop-blur-md border border-white/60 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                {item.badge}
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
            </div>
          ))}
        </div>

        {/* Navigation Indicators & Experience Badge */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 pt-4">
          <button
            onClick={prevSlide}
            type="button"
            className="w-10 h-10 rounded-full bg-white border border-[#48a6a7]/40 shadow-sm hover:shadow-md flex items-center justify-center text-[#1a5a81] hover:bg-[#ddf3ee] transition active:scale-90 cursor-pointer"
            aria-label="Previous Activity"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="bg-[#ddf3ee] border border-[#bdbdbd] px-6 py-2.5 rounded-[30px] shadow-sm flex items-center gap-2">
            <span className="text-[#1a5a81] font-semibold text-base sm:text-[17px]">
              +7 سنوات من العطاء
            </span>
          </div>

          <button
            onClick={nextSlide}
            type="button"
            className="w-10 h-10 rounded-full bg-white border border-[#48a6a7]/40 shadow-sm hover:shadow-md flex items-center justify-center text-[#1a5a81] hover:bg-[#ddf3ee] transition active:scale-90 cursor-pointer"
            aria-label="Next Activity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
