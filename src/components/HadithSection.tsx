import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets-map'
import { fadeUpVariants, createStaggerContainer, defaultViewport } from '../animations/motionVariants'

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

      <motion.div
        variants={createStaggerContainer(0.15, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6"
      >
        {/* Calligraphic Prophet Statement */}
        <motion.h2
          variants={fadeUpVariants}
          className="text-2xl sm:text-4xl lg:text-[46px] font-semibold text-[#f2efe7] tracking-wide"
        >
          قال رسول الله ﷺ
        </motion.h2>

        {/* Hadith Words */}
        <motion.blockquote
          variants={fadeUpVariants}
          className="text-base sm:text-2xl lg:text-[27px] font-medium leading-[1.8] text-[#f2efe7]/95 px-2"
        >
          « الماهر بالقرآن مع السفرة الكرام البررة، والذي يقرأ القرآن ويتعتع فيه وهو عليه شاق له أجران »
        </motion.blockquote>

        {/* Source citation */}
        <motion.p
          variants={fadeUpVariants}
          className="text-base sm:text-xl font-semibold text-[#e2a72b] tracking-wider pt-1"
        >
          متفق عليه
        </motion.p>
      </motion.div>
    </section>
  )
}
