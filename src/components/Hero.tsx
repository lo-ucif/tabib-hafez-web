import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets-map";
import {
  fadeUpVariants,
  createStaggerContainer,
  premiumEase,
} from "../animations/motionVariants";

interface HeroProps {
  onRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  return (
    <section
      id="home"
      className="relative mt-5 sm:mt-20 lg:mt-10 w-full bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24 overflow-hidden"
    >
      {/* Background Decorative Stethoscope SVGs with gentle floating motion */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <motion.img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          animate={{ y: [-8, 8, -8], rotate: [12, 16, 12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-6 top-6 w-28 sm:w-40 h-28 sm:h-40 opacity-20"
        />
        <motion.img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          animate={{ y: [8, -8, 8], rotate: [-45, -40, -45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute left-6 bottom-8 w-24 sm:w-36 h-24 sm:h-36 opacity-20"
        />
        <motion.img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          animate={{ y: [-6, 6, -6], rotate: [75, 78, 75] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-1/3 top-1/2 -translate-y-1/2 w-32 sm:w-44 h-32 sm:h-44 opacity-15 hidden lg:block"
        />
      </div>

      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 relative z-10">
        {/* In Figma Mobile Mode (node 942:5416): Content Container is on top */}
        <motion.div
          variants={createStaggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-right space-y-5 sm:space-y-6"
        >
          <motion.img
            variants={fadeUpVariants}
            src={assets.imgCover2RemovebgPreview2}
            alt="شعار الطبيب الحافظ"
            className="block md:hidden h-full w-full"
          />
          {/* Main Title */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-[#1a5a81] leading-[1.35] tracking-wide"
          >
            سماعة في العنق ... وقران في القلب
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            variants={fadeUpVariants}
            className="text-sm sm:text-lg lg:text-[19px] text-[#1a5a81]/90 font-normal leading-[1.8] max-w-[620px]"
          >
            مشروع طلابي علمي قرآني من نادي شفاء، بإشراف مديرية الأنشطة الثقافية
            والعلمية والرياضية بجامعة قسنطينة 3. يجمع طلبة التخصصات الطبية في
            مسار متكامل لحفظ كتاب الله ومراجعته، بتسميع منتظم ومتابعة دقيقة
            وشهادات معتمدة.
          </motion.p>

          {/* Action Button */}
          <motion.div variants={fadeUpVariants} className="pt-2 w-full sm:w-auto flex justify-center lg:justify-start">
            <motion.button
              onClick={onRegister}
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="w-full sm:w-auto bg-[#e2a72b] hover:bg-[#cf931d] text-white font-semibold text-xl sm:text-[24px] px-10 py-3.5 rounded-[6px] shadow-lg shadow-[#e2a72b]/25 hover:shadow-xl hover:shadow-[#e2a72b]/35 transition-shadow cursor-pointer flex items-center justify-center min-w-[196px]"
            >
              سجل الان
            </motion.button>
          </motion.div>

          {/* Sub-label */}
          <motion.p
            variants={fadeUpVariants}
            className="text-xs sm:text-[15px] font-light text-[#1a5a81]/70 pt-2 border-t border-slate-100 w-full text-center lg:text-right"
          >
            مشروع الطبيب الحافظ قسنطينة | نادي شفاء
          </motion.p>
        </motion.div>

        {/* Hero Illustration / Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: premiumEase, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center items-center pt-2 lg:pt-0"
        >
          <div className="relative w-[321px] h-full lg:w-[600px] lg:h-full group">
            <img
              src={assets.imgFrame10000091311}
              alt="لوحة تحكم الطبيب الحافظ"
              className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
