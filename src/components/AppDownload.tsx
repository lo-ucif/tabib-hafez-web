import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets-map";
import {
  fadeUpVariants,
  createStaggerContainer,
  defaultViewport,
  premiumEase,
} from "../animations/motionVariants";

interface AppDownloadProps {
  onLoginClick: () => void;
}

export const AppDownload: React.FC<AppDownloadProps> = ({ onLoginClick }) => {
  return (
    <section className="relative w-full max-w-full bg-[#fdfdfd] py-16 sm:py-24 lg:py-32 xl:py-36 px-4 sm:px-8 lg:px-12 overflow-x-hidden">
      {/* Background Decorative Soft Mint Cross (Left) */}
      <div className="pointer-events-none absolute left-6 lg:left-14 top-1/2 -translate-y-1/2 opacity-30 select-none hidden md:block">
        <svg
          width="68"
          height="68"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#48a6a7"
          strokeWidth="4.5"
          strokeLinecap="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </div>

      {/* Background Decorative Stethoscope SVGs (~20% opacity) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <motion.img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          animate={{ y: [-6, 6, -6], rotate: [12, 15, 12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-6 top-8 w-28 sm:w-36 h-28 sm:h-36 opacity-20"
        />
        <motion.img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          animate={{ y: [6, -6, 6], rotate: [-45, -42, -45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute left-6 bottom-6 w-24 sm:w-32 h-24 sm:h-32 opacity-20"
        />
      </div>

      <div className="max-w-[1240px] mx-auto w-full">
        {/* Main Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7, ease: premiumEase }}
          className="relative bg-[#48a6a7] rounded-[24px] px-5 sm:px-10 lg:px-14 py-7 sm:py-9 lg:py-0 min-h-auto lg:h-[280px] xl:h-[300px] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-6 w-full max-w-[620px] lg:max-w-none mx-auto overflow-visible"
        >
          {/* Content side: Title, Subtitle & Buttons */}
          <motion.div
            variants={createStaggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="w-full lg:w-[56%] xl:w-[58%] flex flex-col items-center lg:items-start text-center lg:text-right space-y-2.5 sm:space-y-4 text-white z-10"
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-bold leading-tight tracking-wide"
            >
              ابدأ رحلتك بين العلم والقرآن
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-base lg:text-[19px] text-[#f0f9f8] font-normal leading-relaxed max-w-[560px]"
            >
              حمّل تطبيق الطبيب الحافظ، وتابع حلقتك وتسميعك وتقدّمك أينما كنت.
            </motion.p>
            {/* Buttons Row (Always side-by-side in a row) */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-2 sm:pt-3 w-auto"
            >
              {/* Primary Download Button (Yellow) */}
              <motion.a
                href="#download"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#e2a72b] hover:bg-[#cf931d] text-white font-bold text-sm sm:text-lg lg:text-[22px] px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-[8px] shadow-md shadow-black/10 hover:shadow-lg transition-shadow text-center min-w-[115px] sm:min-w-[155px]"
              >
                حمله الآن
              </motion.a>

              {/* Secondary Login Button (White) */}
              <motion.button
                onClick={onLoginClick}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white hover:bg-slate-50 text-[#48a6a7] font-bold text-sm sm:text-lg lg:text-[22px] px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-[8px] shadow-sm hover:shadow transition-shadow cursor-pointer text-center min-w-[115px] sm:min-w-[155px]"
              >
                تسجيل الدخول
              </motion.button>
            </motion.div>
          </motion.div>

          {/* DESKTOP ONLY (>= 1024px): Dual iPhones overflowing banner */}
          <div className="hidden lg:flex w-full lg:w-[44%] xl:w-[42%] items-center justify-start relative h-full">
            <div className="relative w-[380px] xl:w-[410px] h-full flex items-center">
              {/* Phone 1 (Back / Left) - Protrudes UP */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.7, delay: 0.15, ease: premiumEase }}
                className="absolute left-0 -top-16 xl:-top-30 w-[210px] xl:w-[225px] drop-shadow-2xl z-10 transition-transform duration-500 hover:scale-105"
              >
                <img
                  src={assets.imgFreeTransparentIPhone17MockupMockuuupsStudio}
                  alt="تطبيق الطبيب الحافظ في هاتف آيفون"
                  className="w-full h-auto object-contain select-none"
                />
              </motion.div>

              {/* Phone 2 (Front / Right) - Protrudes DOWN */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.7, delay: 0.25, ease: premiumEase }}
                className="absolute left-[155px] xl:left-[170px] -bottom-16 xl:-bottom-30 w-[210px] xl:w-[225px] drop-shadow-xl z-20 transition-transform duration-500 hover:scale-105"
              >
                <img
                  src={assets.imgFreeTransparentIPhone17MockupMockuuupsStudio1}
                  alt="شاشة تطبيق الطبيب الحافظ"
                  className="w-full h-auto object-contain select-none"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* MOBILE & TABLET ONLY (< 1024px): Dual iPhones Mockup (Below the Banner Card) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.7, delay: 0.15, ease: premiumEase }}
          className="flex lg:hidden justify-center items-center mt-6 sm:mt-10 relative w-full"
        >
          <div className="relative w-[280px] sm:w-[340px] h-[340px] sm:h-[410px] flex items-center justify-center">
            {/* Phone 1 (Back / Left) */}
            <div className="absolute left-2 sm:left-4 top-0 w-[150px] sm:w-[185px] drop-shadow-2xl z-10 transition-transform duration-500 hover:scale-105">
              <img
                src={assets.imgFreeTransparentIPhone17MockupMockuuupsStudio}
                alt="تطبيق الطبيب الحافظ في هاتف آيفون"
                className="w-full h-auto object-contain select-none"
              />
            </div>

            {/* Phone 2 (Front / Right) */}
            <div className="absolute left-[110px] sm:left-[135px] top-12 sm:top-14 w-[150px] sm:w-[185px] drop-shadow-2xl z-20 transition-transform duration-500 hover:scale-105">
              <img
                src={assets.imgFreeTransparentIPhone17MockupMockuuupsStudio1}
                alt="شاشة تطبيق الطبيب الحافظ"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
