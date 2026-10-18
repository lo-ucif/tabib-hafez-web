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
          className="relative bg-[#48a6a7] rounded-[24px] px-6 sm:px-10 lg:px-14 py-10 lg:py-0 min-h-auto lg:h-[280px] xl:h-[300px] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 w-full overflow-visible"
        >
          {/* Right side in RTL: Title, Subtitle & Buttons */}
          <motion.div
            variants={createStaggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="w-full lg:w-[56%] xl:w-[58%] flex flex-col items-center lg:items-start text-center lg:text-right space-y-3 sm:space-y-4 text-white z-10"
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-bold leading-tight tracking-wide"
            >
              ابدأ رحلتك بين العلم والقرآن
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-sm sm:text-base lg:text-[19px] text-[#f0f9f8] font-normal leading-relaxed max-w-[560px]"
            >
              حمّل تطبيق الطبيب الحافظ، وتابع حلقتك وتسميعك وتقدّمك أينما كنت.
            </motion.p>
            {/* Buttons Row */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3 w-full sm:w-auto"
            >
              {/* Primary Download Button (Yellow) */}
              <motion.a
                href="#download"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#e2a72b] hover:bg-[#cf931d] text-white font-bold text-base sm:text-lg lg:text-[22px] px-7 sm:px-9 py-3 sm:py-3.5 rounded-[8px] shadow-md shadow-black/10 hover:shadow-lg transition-shadow text-center w-full sm:w-auto min-w-[145px] sm:min-w-[165px]"
              >
                حمله الآن
              </motion.a>

              {/* Secondary Login Button (White) */}
              <motion.button
                onClick={onLoginClick}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white hover:bg-slate-50 text-[#48a6a7] font-bold text-base sm:text-lg lg:text-[22px] px-7 sm:px-9 py-3 sm:py-3.5 rounded-[8px] shadow-sm hover:shadow transition-shadow cursor-pointer text-center w-full sm:w-auto min-w-[145px] sm:min-w-[165px]"
              >
                تسجيل الدخول
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Left side in RTL: Dual iPhones overflowing top & bottom */}
          <div className="w-full lg:w-[44%] xl:w-[42%] flex items-center justify-center lg:justify-start relative min-h-[300px] lg:min-h-0 lg:h-full">
            <div className="relative w-[280px] sm:w-[320px] lg:w-[380px] xl:w-[410px] h-[300px] lg:h-full flex items-center">
              {/* Phone 1 (Back / Left) - Protrudes UP */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.7, delay: 0.15, ease: premiumEase }}
                className="absolute left-0 lg:left-0 -top-4 lg:-top-16 xl:-top-30 w-[145px] sm:w-[170px] lg:w-[210px] xl:w-[225px] drop-shadow-2xl z-10 transition-transform duration-500 hover:scale-105"
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
                className="absolute left-[110px] sm:left-[130px] lg:left-[155px] xl:left-[170px] -bottom-4 lg:-bottom-16 xl:-bottom-30 w-[145px] sm:w-[170px] lg:w-[210px] xl:w-[225px] drop-shadow-xl z-20 transition-transform duration-500 hover:scale-105"
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
      </div>
    </section>
  );
};
