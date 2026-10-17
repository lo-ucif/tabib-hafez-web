import React, { useState } from 'react'
import { assets } from '../assets-map'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agreed: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      alert('يرجى ملء جميع الحقول المطلوبة')
      return
    }
    if (!formData.agreed) {
      alert('يرجى الموافقة على الشروط وسياسة الخصوصية')
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        agreed: false,
      })
    }, 4000)
  }

  return (
    <section id="contact" className="relative w-full bg-[#fefefe] pt-14 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-12 overflow-hidden">
      
      {/* Wave curved SVG background from Figma */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40">
        <img
          src={assets.imgRectangle339}
          alt=""
          className="w-full h-auto object-cover min-h-[300px] sm:min-h-[350px]"
        />
      </div>

      {/* Decorative SVGs */}
      <img
        src={assets.imgDoctorSvgrepoCom5}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-4 sm:right-16 top-10 w-28 sm:w-36 h-28 sm:h-36 opacity-15 rotate-12"
      />

      <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Heading (Matching Figma mobile node 942:6043) */}
        <div className="text-center flex flex-col items-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-semibold text-[#48a6a7]">
            تواصل معنا
          </h2>
          <div className="h-[5px] w-36 sm:w-56 lg:w-[234px] bg-[#e2a72b] rounded-full" />
          <p className="text-base sm:text-xl lg:text-[23px] text-black/60 font-medium max-w-[650px] leading-relaxed pt-1">
            لأي استفسار أو اقتراح، يسعدنا أن نسمع منك.
          </p>
        </div>

        {/* Content & Form Container (In mobile mode node 942:6054: Form is first, then Prompt is below) */}
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-12 items-center justify-between">
          
          {/* Side Prompt / Text (In mobile mode, order-2, below the form; on lg, order-1) */}
          <div className="w-full lg:w-[45%] text-center lg:text-right space-y-4 sm:space-y-6 order-2 lg:order-1 pt-4 lg:pt-0">
            <h3 className="text-xl sm:text-3xl lg:text-[32px] font-medium text-black/75 leading-[1.6]">
              هل لديك سؤال عن التسجيل أو الحلقات أو التطبيق؟
            </h3>
            <p className="text-base sm:text-xl text-[#1a5a81] leading-relaxed">
              اكتب لنا وسيردّ عليك فريق المشروع في أقرب وقت.
            </p>
            <div className="p-5 sm:p-6 bg-[#ddf3ee]/60 border border-[#48a6a7]/30 rounded-2xl space-y-1.5 text-sm text-[#1a5a81]">
              <p className="font-semibold text-base">جامعة قسنطينة 3 - كلية الطب</p>
              <p>مشروع الطبيب الحافظ | نادي شفاء العلمي</p>
            </div>
          </div>

          {/* Form Card (In mobile mode node 942:6057: order-1 on mobile, w: 380px max-w-full) */}
          <div className="w-full lg:w-[55%] max-w-[580px] order-1 lg:order-2">
            <div className="bg-white rounded-[24px] sm:rounded-[30px] p-6 sm:p-10 shadow-[0px_0px_35px_rgba(0,0,0,0.06)] border border-slate-100">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#1a5a81]">
                    تم استلام رسالتك بنجاح!
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base">
                    شكرًا لتواصلك معنا، سيتواصل معك أحد مسؤولي المشروع قريبًا.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-right">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      placeholder="الاسم واللقب"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full h-[54px] sm:h-[58px] px-4 rounded-[6px] border border-slate-300 focus:border-[#48a6a7] focus:ring-2 focus:ring-[#48a6a7]/20 outline-none text-sm sm:text-base transition bg-white"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
                      البريد الالكتروني *
                    </label>
                    <input
                      type="email"
                      placeholder="example@univ-constantine3.dz"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full h-[54px] sm:h-[58px] px-4 rounded-[6px] border border-slate-300 focus:border-[#48a6a7] focus:ring-2 focus:ring-[#48a6a7]/20 outline-none text-sm sm:text-base transition bg-white"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
                      الموضوع
                    </label>
                    <input
                      type="text"
                      placeholder="عنوان استفسارك أو طلبك"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-[54px] sm:h-[58px] px-4 rounded-[6px] border border-slate-300 focus:border-[#48a6a7] focus:ring-2 focus:ring-[#48a6a7]/20 outline-none text-sm sm:text-base transition bg-white"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
                      الرسالة *
                    </label>
                    <textarea
                      placeholder="اكتب استفسارك أو اقتراحك هنا..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full p-3.5 sm:p-4 rounded-[6px] border border-slate-300 focus:border-[#48a6a7] focus:ring-2 focus:ring-[#48a6a7]/20 outline-none text-sm sm:text-base transition bg-white resize-none"
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="agreed-policy"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded text-[#48a6a7] border-slate-300 focus:ring-[#48a6a7] cursor-pointer"
                    />
                    <label htmlFor="agreed-policy" className="text-xs sm:text-sm font-light text-[#303030] cursor-pointer select-none">
                      أوافق على الشروط وسياسة الخصوصية
                    </label>
                  </div>

                  {/* Submit Button (Matching Figma mobile node 942:6073, w: 199.5px) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-[#48a6a7] hover:bg-[#3b8c8d] text-white font-semibold text-lg sm:text-2xl px-10 py-3.5 rounded-[6px] shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer min-w-[200px]"
                    >
                      ارسل الان
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
