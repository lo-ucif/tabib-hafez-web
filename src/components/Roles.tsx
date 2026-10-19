import React from 'react'
import { motion } from 'framer-motion'
import studentImg from '../assets/student.webp'
import teacherImg from '../assets/teacher.webp'
import supervisorImg from '../assets/supervisor.webp'
import { assets } from '../assets-map'
import {
  fadeUpVariants,
  createStaggerContainer,
  staggerItemVariants,
  defaultViewport,
  premiumEase,
} from '../animations/motionVariants'

export const Roles: React.FC = () => {
  return (
    <section id="roles" className="relative w-full max-w-full bg-[#fefefe] py-14 sm:py-20 px-4 sm:px-12 overflow-hidden">
      
      {/* Background Decorative Stethoscope SVGs (~20% opacity) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          className="absolute -right-8 top-16 w-32 sm:w-44 h-32 sm:h-44 opacity-20 rotate-12"
        />
        <img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          className="absolute -left-8 bottom-12 w-32 sm:w-44 h-32 sm:h-44 opacity-20 -rotate-45"
        />
        <img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          className="absolute left-1/4 -top-6 w-24 sm:w-36 h-24 sm:h-36 opacity-15 rotate-[70deg] hidden lg:block"
        />
      </div>

      <div className="max-w-[1300px] mx-auto flex flex-col items-center w-full relative z-10">
        
        {/* Section Heading with scroll reveal */}
        <motion.div
          variants={createStaggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center flex flex-col items-center mb-10 sm:mb-16 space-y-3 sm:space-y-4 w-full"
        >
          <motion.h2 variants={fadeUpVariants} className="text-2xl sm:text-4xl lg:text-[40px] font-semibold text-[#48a6a7]">
            منظومة واحدة لكل الأدوار
          </motion.h2>
          <motion.div variants={fadeUpVariants} className="h-[5px] w-36 sm:w-80 lg:w-[562px] max-w-full bg-[#e2a72b] rounded-full" />
          <motion.p variants={fadeUpVariants} className="text-sm sm:text-xl lg:text-[23px] text-black/60 font-medium max-w-[750px] leading-relaxed pt-1 px-2">
            لكل مستخدم لوحته الخاصة وأدواته التي تناسب مهمّته في رحلة التحفيظ.
          </motion.p>
        </motion.div>

        {/* 3 Roles Grid with staggered reveal */}
        <motion.div
          variants={createStaggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full justify-items-center"
        >
          
          {/* Card 1: الطالب */}
          <motion.div
            variants={staggerItemVariants}
            whileHover={{ y: -7, transition: { duration: 0.28, ease: premiumEase } }}
            className="group relative w-full max-w-[335px] sm:max-w-[362px] min-h-[311px] sm:h-[330px] bg-white rounded-[16px] border border-slate-100 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0px_14px_34px_rgba(72,166,167,0.18)] transition-shadow duration-300 flex flex-col items-center p-5 sm:p-6 text-center justify-between overflow-hidden"
          >
            
            {/* Character Graphic Container */}
            <div className="relative w-[110px] sm:w-[130px] h-[110px] sm:h-[130px] mt-1 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <img
                src={studentImg}
                alt="الطالب"
                className="w-full h-full object-contain drop-shadow-sm select-none"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-black mt-2">
              الطالب
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-[17px] text-black/65 font-medium leading-[1.6] max-w-[300px]">
              يتابع حفظه ومراجعته، يطلب مواعيد التسميع، ويرى تقدّمه وحضوره وشهاداته.
            </p>

            {/* Bottom accent indicator */}
            <div className="h-1 w-12 group-hover:w-20 bg-[#48a6a7] rounded-full transition-all duration-300 mt-2" />
          </motion.div>

          {/* Card 2: الأستاذ */}
          <motion.div
            variants={staggerItemVariants}
            whileHover={{ y: -7, transition: { duration: 0.28, ease: premiumEase } }}
            className="group relative w-full max-w-[335px] sm:max-w-[362px] min-h-[311px] sm:h-[330px] bg-white rounded-[16px] border border-slate-100 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0px_14px_34px_rgba(226,167,43,0.2)] transition-shadow duration-300 flex flex-col items-center p-5 sm:p-6 text-center justify-between overflow-hidden"
          >
            
            {/* Character Graphic Container */}
            <div className="relative w-[110px] sm:w-[130px] h-[110px] sm:h-[130px] mt-1 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <img
                src={teacherImg}
                alt="الأستاذ"
                className="w-full h-full object-contain drop-shadow-sm select-none"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-black mt-2">
              الأستاذ
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-[17px] text-black/65 font-medium leading-[1.6] max-w-[300px]">
              يدير حلقته، يقيّم الحفظ والتجويد، يرصد الحضور، ويوجّه طلابه بخطة أسبوعية.
            </p>

            {/* Bottom accent indicator */}
            <div className="h-1 w-12 group-hover:w-20 bg-[#e2a72b] rounded-full transition-all duration-300 mt-2" />
          </motion.div>

          {/* Card 3: المشرف والإدارة */}
          <motion.div
            variants={staggerItemVariants}
            whileHover={{ y: -7, transition: { duration: 0.28, ease: premiumEase } }}
            className="group relative w-full max-w-[335px] sm:max-w-[362px] min-h-[311px] sm:h-[330px] bg-white rounded-[16px] border border-slate-100 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0px_14px_34px_rgba(26,90,129,0.2)] transition-shadow duration-300 flex flex-col items-center p-5 sm:p-6 text-center justify-between overflow-hidden md:col-span-2 lg:col-span-1"
          >
            
            {/* Character Graphic Container */}
            <div className="relative w-[110px] sm:w-[130px] h-[110px] sm:h-[130px] mt-1 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <img
                src={supervisorImg}
                alt="المشرف والإدارة"
                className="w-full h-full object-contain drop-shadow-sm select-none"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-black mt-2">
              المشرف والإدارة
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-[17px] text-black/65 font-medium leading-[1.6] max-w-[300px]">
              يعتمد التسجيلات، ينظّم الحلقات والأساتذة، ويتابع أداء المنصة عبر تقارير شاملة.
            </p>

            {/* Bottom accent indicator */}
            <div className="h-1 w-12 group-hover:w-20 bg-[#1a5a81] rounded-full transition-all duration-300 mt-2" />
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
