import React from 'react'
import { assets } from '../assets-map'

export const HadithSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#1a5a81] py-12 sm:py-20 px-4 sm:px-12 text-[#f2efe7] overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[420px]">
      {/* Pattern texture overlay from Figma */}
      <div className="absolute inset-0 pointer-events-none opacity-2 mix-blend-overlay">
        <img
          src={assets.imgSection3}
          alt=""
          className="w-full h-full object-cover scale-110"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
        
        {/* Calligraphic Prophet Statement */}
        <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-semibold text-[#f2efe7] tracking-wide">
          قال رسول الله ﷺ
        </h2>

        {/* Hadith Words */}
        <blockquote className="text-base sm:text-2xl lg:text-[27px] font-medium leading-[1.8] text-[#f2efe7]/95 px-2">
          « الماهر بالقرآن مع السفرة الكرام البررة، والذي يقرأ القرآن ويتعتع فيه وهو عليه شاق له أجران »
        </blockquote>

        {/* Source citation */}
        <p className="text-base sm:text-xl font-semibold text-[#e2a72b] tracking-wider pt-1">
          متفق عليه
        </p>
      </div>
    </section>
  )
}
