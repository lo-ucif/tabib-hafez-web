import React from 'react'
import { assets } from '../assets-map'

export const Roles: React.FC = () => {
  return (
    <section id="roles" className="relative w-full bg-[#fefefe] py-20 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#48a6a7]">
            منظومة واحدة لكل الأدوار
          </h2>
          <div className="h-[5px] w-48 sm:w-80 lg:w-[562px] max-w-full bg-[#e2a72b] rounded-full" />
          <p className="text-lg sm:text-xl lg:text-[23px] text-black/60 font-medium max-w-[750px] leading-relaxed pt-2">
            لكل مستخدم لوحته الخاصة وأدواته التي تناسب مهمّته في رحلة التحفيظ.
          </p>
        </div>

        {/* 3 Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
          
          {/* Card 1: الطالب */}
          <div className="group relative w-full max-w-[362px] h-[330px] bg-white rounded-[16px] border border-slate-100 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0px_12px_32px_rgba(72,166,167,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center p-6 text-center justify-between overflow-hidden">
            
            {/* Character Graphic Container */}
            <div className="relative w-[130px] h-[130px] mt-2 group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0">
                <img alt="Vector 1" className="absolute inset-0 size-full object-contain" src={assets.imgVector1} />
                <img alt="Vector 2" className="absolute inset-0 size-full object-contain" src={assets.imgVector2} />
                <img alt="Vector 3" className="absolute inset-0 size-full object-contain" src={assets.imgVector3} />
                <img alt="Group 20" className="absolute inset-0 size-full object-contain" src={assets.imgGroup20} />
                <img alt="Group 21" className="absolute inset-0 size-full object-contain" src={assets.imgGroup21} />
                <img alt="Group 19" className="absolute inset-0 size-full object-contain" src={assets.imgGroup19} />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-black mt-2">
              الطالب
            </h3>

            {/* Description */}
            <p className="text-[17px] text-black/65 font-medium leading-[1.6] max-w-[300px]">
              يتابع حفظه ومراجعته، يطلب مواعيد التسميع، ويرى تقدّمه وحضوره وشهاداته.
            </p>

            {/* Bottom accent indicator */}
            <div className="w-12 h-1 bg-[#48a6a7] rounded-full group-hover:w-20 transition-all duration-300 mt-2" />
          </div>

          {/* Card 2: الأستاذ */}
          <div className="group relative w-full max-w-[362px] h-[330px] bg-white rounded-[16px] border border-slate-100 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0px_12px_32px_rgba(72,166,167,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center p-6 text-center justify-between overflow-hidden">
            
            {/* Character Graphic Container */}
            <div className="relative w-[130px] h-[130px] mt-2 group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0">
                <img alt="Vector 7" className="absolute inset-0 size-full object-contain" src={assets.imgVector7} />
                <img alt="Vector 8" className="absolute inset-0 size-full object-contain" src={assets.imgVector8} />
                <img alt="Vector 9" className="absolute inset-0 size-full object-contain" src={assets.imgVector9} />
                <img alt="Group 22" className="absolute inset-0 size-full object-contain" src={assets.imgGroup22} />
                <img alt="Group 23" className="absolute inset-0 size-full object-contain" src={assets.imgGroup23} />
                <img alt="Group 24" className="absolute inset-0 size-full object-contain" src={assets.imgGroup24} />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-black mt-2">
              الأستاذ
            </h3>

            {/* Description */}
            <p className="text-[17px] text-black/65 font-medium leading-[1.6] max-w-[300px]">
              يدير حلقته، يقيّم الحفظ والتجويد، يرصد الحضور، ويوجّه طلابه بخطة أسبوعية.
            </p>

            {/* Bottom accent indicator */}
            <div className="w-12 h-1 bg-[#e2a72b] rounded-full group-hover:w-20 transition-all duration-300 mt-2" />
          </div>

          {/* Card 3: المشرف والإدارة */}
          <div className="group relative w-full max-w-[362px] h-[330px] bg-white rounded-[16px] border border-slate-100 shadow-[0px_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0px_12px_32px_rgba(72,166,167,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center p-6 text-center justify-between overflow-hidden">
            
            {/* Character Graphic Container */}
            <div className="relative w-[130px] h-[130px] mt-2 group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0">
                <img alt="Vector 14" className="absolute inset-0 size-full object-contain" src={assets.imgVector14} />
                <img alt="Vector 15" className="absolute inset-0 size-full object-contain" src={assets.imgVector15} />
                <img alt="Group 29" className="absolute inset-0 size-full object-contain" src={assets.imgGroup29} />
                <img alt="Group 30" className="absolute inset-0 size-full object-contain" src={assets.imgGroup30} />
                <img alt="Group 34" className="absolute inset-0 size-full object-contain" src={assets.imgGroup34} />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-black mt-2">
              المشرف والإدارة
            </h3>

            {/* Description */}
            <p className="text-[17px] text-black/65 font-medium leading-[1.6] max-w-[300px]">
              يعتمد التسجيلات، ينظّم الحلقات والأساتذة، ويتابع أداء المنصة عبر تقارير شاملة.
            </p>

            {/* Bottom accent indicator */}
            <div className="w-12 h-1 bg-[#1a5a81] rounded-full group-hover:w-20 transition-all duration-300 mt-2" />
          </div>

        </div>

      </div>
    </section>
  )
}
