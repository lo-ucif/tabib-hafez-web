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
    <section id="contact" className="relative w-full bg-[#fefefe] pt-20 pb-28 px-6 sm:px-12 overflow-hidden">
      
      {/* Wave curved SVG background from Figma */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40">
        <img
          src={assets.imgRectangle339}
          alt=""
          className="w-full h-auto object-cover min-h-[350px]"
        />
      </div>

      {/* Decorative SVGs */}
      <img
        src={assets.imgDoctorSvgrepoCom5}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-16 top-10 w-36 h-36 opacity-15 rotate-12"
      />

      <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#48a6a7]">
            تواصل معنا
          </h2>
          <div className="h-[5px] w-36 sm:w-56 lg:w-[234px] bg-[#e2a72b] rounded-full" />
          <p className="text-lg sm:text-xl lg:text-[23px] text-black/60 font-medium max-w-[650px] leading-relaxed pt-2">
            لأي استفسار أو اقتراح، يسعدنا أن نسمع منك.
          </p>
        </div>

        {/* Content & Form Container */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Side Prompt / Text (in RTL, Right Column) */}
          <div className="lg:col-span-5 text-right space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-black/75 leading-[1.6]">
              هل لديك سؤال عن التسجيل أو الحلقات أو التطبيق؟
            </h3>
            <p className="text-lg sm:text-xl text-[#1a5a81] leading-relaxed">
              اكتب لنا وسيردّ عليك فريق المشروع في أقرب وقت.
            </p>
            <div className="p-6 bg-[#ddf3ee]/60 border border-[#48a6a7]/30 rounded-2xl space-y-2 text-sm text-[#1a5a81]">
              <p className="font-semibold text-base">جامعة قسنطينة 3 - كلية الطب</p>
              <p>مشروع الطبيب الحافظ | نادي شفاء العلمي</p>
            </div>
          </div>

          {/* Form Card (in RTL, Left Column) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[30px] p-8 sm:p-10 shadow-[0px_0px_35px_rgba(0,0,0,0.06)] border border-slate-100">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h4 className="text-2xl font-bold text-[#1a5a81]">
                    تم استلام رسالتك بنجاح!
                  </h4>
                  <p className="text-slate-600">
                    شكرًا لتواصلك معنا، سيتواصل معك أحد مسؤولي المشروع قريبًا.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-right">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      placeholder="الاسم واللقب"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full h-[58px] px-4 rounded-[6px] border border-slate-300 focus:border-[#48a6a7] focus:ring-2 focus:ring-[#48a6a7]/20 outline-none text-base transition bg-white"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      البريد الالكتروني *
                    </label>
                    <input
                      type="email"
                      placeholder="example@univ-constantine3.dz"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full h-[58px] px-4 rounded-[6px] border border-slate-300 focus:border-[#48a6a7] focus:ring-2 focus:ring-[#48a6a7]/20 outline-none text-base transition bg-white"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      الموضوع
                    </label>
                    <input
                      type="text"
                      placeholder="عنوان استفسارك أو طلبك"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-[58px] px-4 rounded-[6px] border border-slate-300 focus:border-[#48a6a7] focus:ring-2 focus:ring-[#48a6a7]/20 outline-none text-base transition bg-white"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      الرسالة *
                    </label>
                    <textarea
                      placeholder="اكتب استفسارك أو اقتراحك هنا..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full p-4 rounded-[6px] border border-slate-300 focus:border-[#48a6a7] focus:ring-2 focus:ring-[#48a6a7]/20 outline-none text-base transition bg-white resize-none"
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="agreed-policy"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="w-5 h-5 rounded text-[#48a6a7] border-slate-300 focus:ring-[#48a6a7] cursor-pointer"
                    />
                    <label htmlFor="agreed-policy" className="text-sm font-light text-[#303030] cursor-pointer select-none">
                      أوافق على الشروط وسياسة الخصوصية
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#48a6a7] hover:bg-[#3b8c8d] text-white font-semibold text-xl sm:text-2xl px-10 py-3.5 rounded-[6px] shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer min-w-[200px]"
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
