import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { assets } from "../assets-map";
import {
  fadeUpVariants,
  createStaggerContainer,
  defaultViewport,
  premiumEase,
} from "../animations/motionVariants";

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_qdkmf6d";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_cye4mvn";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "G0Pau62zQ44jLhSKR";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agreed: false,
  });
  const [showNotification, setShowNotification] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim()) {
      setErrorMessage("يرجى إدخال الاسم الكامل.");
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setErrorMessage("يرجى إدخال عنوان بريد إلكتروني صحيح.");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("يرجى كتابة نص الرسالة.");
      return;
    }

    if (!formData.agreed) {
      setErrorMessage("يرجى الموافقة على الشروط وسياسة الخصوصية للمتابعة.");
      return;
    }

    setLoading(true);

    try {
      const enteredSubject = formData.subject.trim();
      const subjectTitle = enteredSubject || "رسالة جديدة من موقع الطبيب الحافظ";

      const now = new Date();
      const dateFormatted = now.toLocaleDateString("ar-DZ", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const timeFormatted = now.toLocaleTimeString("ar-DZ", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const formattedTime = `${dateFormatted} - ${timeFormatted}`;

      // Exactly matches the EmailJS template variables: {{name}}, {{email}}, {{time}}, {{title}}, {{message}}
      const templateParams = {
        name: formData.name.trim(),
        from_name: formData.name.trim(),
        email: formData.email.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        title: subjectTitle,
        subject: subjectTitle,
        time: formattedTime,
        date: formattedTime,
        message: formData.message.trim(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        agreed: false,
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage(
        "حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى لاحقًا أو التحقق من الاتصال.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-full bg-[#fefefe] pt-14 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-12 overflow-hidden"
    >
      {/* Top Floating Notification on Success with AnimatePresence */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.96 }}
            transition={{ duration: 0.32, ease: premiumEase }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] max-w-md w-[92%] sm:w-auto bg-[#48a6a7] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-white/25 flex items-center justify-between gap-4 select-none"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="text-right">
                <h4 className="font-bold text-sm sm:text-base">
                  تم إرسال رسالتك بنجاح!
                </h4>
                <p className="text-xs sm:text-sm text-white/90">
                  شكرًا لتواصلك معنا، سيتواصل معك أحد مسؤولي المشروع قريبًا.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowNotification(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/15 transition-colors cursor-pointer shrink-0"
              aria-label="إغلاق التنبيه"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wave curved SVG background from Figma clipped securely */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40 overflow-hidden">
        <img
          src={assets.imgRectangle339}
          alt=""
          className="w-full h-auto object-cover min-h-[300px] sm:min-h-[350px]"
        />
      </div>

      {/* Decorative SVGs with gentle floating motion */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <motion.img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          animate={{ y: [-6, 6, -6], rotate: [12, 16, 12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-4 sm:right-16 top-10 w-28 sm:w-40 h-28 sm:h-40 opacity-20"
        />
        <motion.img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          animate={{ y: [6, -6, 6], rotate: [-45, -40, -45] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -left-6 sm:left-12 bottom-20 w-32 sm:w-44 h-32 sm:h-44 opacity-20"
        />
        <motion.img
          src={assets.imgDoctorSvgrepoCom4}
          alt=""
          aria-hidden="true"
          animate={{ y: [-5, 5, -5], rotate: [180, 184, 180] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute left-1/4 top-16 w-24 sm:w-32 h-24 sm:h-32 opacity-15 hidden lg:block"
        />
      </div>

      <div className="max-w-[1300px] mx-auto flex flex-col items-center relative z-10 w-full">
        {/* Section Heading with scroll reveal */}
        <motion.div
          variants={createStaggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center flex flex-col items-center mb-10 sm:mb-16 space-y-3 sm:space-y-4 w-full"
        >
          <motion.h2
            variants={fadeUpVariants}
            className="text-2xl sm:text-4xl lg:text-[40px] font-semibold text-[#48a6a7]"
          >
            تواصل معنا
          </motion.h2>
          <motion.div
            variants={fadeUpVariants}
            className="h-[5px] w-36 sm:w-56 lg:w-[234px] max-w-full bg-[#e2a72b] rounded-full"
          />
          <motion.p
            variants={fadeUpVariants}
            className="text-sm sm:text-xl lg:text-[23px] text-black/60 font-medium max-w-[650px] leading-relaxed pt-1 px-2"
          >
            لأي استفسار أو اقتراح، يسعدنا أن نسمع منك.
          </motion.p>
        </motion.div>

        {/* Content & Form Container */}
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
          {/* Side Prompt / Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.65, ease: premiumEase }}
            className="w-full lg:w-[45%] text-center lg:text-right space-y-4 sm:space-y-6 order-1 pt-2 lg:pt-0"
          >
            <h3 className="text-lg sm:text-3xl lg:text-[32px] font-medium text-black/75 leading-[1.6]">
              هل لديك سؤال عن التسجيل أو الحلقات أو التطبيق؟ اكتب لنا وسيردّ
              عليك فريق المشروع في أقرب وقت.
            </h3>
            {/* <p className="text-sm sm:text-xl text-[#1a5a81] leading-relaxed">
              اكتب لنا وسيردّ عليك فريق المشروع في أقرب وقت.
            </p> */}
            {/* University info badge (Desktop only inside this container) */}
            <div className="hidden lg:block p-5 sm:p-6 bg-[#ddf3ee]/60 border border-[#48a6a7]/30 rounded-2xl text-[#1a5a81] font-moshref-thulth font-normal text-[26px] leading-[49px] tracking-[2px]">
              <p>جامعة قسنطينة 3 - كلية الطب</p>
              <p>مشروع الطبيب الحافظ | نادي شفاء العلمي</p>
            </div>
          </motion.div>

          {/* Form Card with reveal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.65, delay: 0.1, ease: premiumEase }}
            className="w-full lg:w-[55%] max-w-[580px] order-2"
          >
            <div className="bg-white rounded-[20px] sm:rounded-[30px] p-5 sm:p-10 shadow-[0px_0px_35px_rgba(0,0,0,0.06)] border border-slate-100">
              <form
                onSubmit={handleSubmit}
                className="space-y-3.5 sm:space-y-5 text-right w-full"
              >
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    placeholder="الاسم واللقب"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    disabled={loading}
                    className="w-full h-[52px] sm:h-[58px] px-3.5 sm:px-4 rounded-[6px] border border-slate-300 focus:border-[#48a6a7] focus:ring-2 focus:ring-[#48a6a7]/20 outline-none text-sm sm:text-base transition bg-white disabled:bg-slate-50 disabled:cursor-not-allowed"
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
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    disabled={loading}
                    className="w-full h-[52px] sm:h-[58px] px-3.5 sm:px-4 rounded-[6px] border border-slate-300 focus:border-[#48a6a7] focus:ring-2 focus:ring-[#48a6a7]/20 outline-none text-sm sm:text-base transition bg-white disabled:bg-slate-50 disabled:cursor-not-allowed"
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
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    disabled={loading}
                    className="w-full h-[52px] sm:h-[58px] px-3.5 sm:px-4 rounded-[6px] border border-slate-300 focus:border-[#48a6a7] focus:ring-2 focus:ring-[#48a6a7]/20 outline-none text-sm sm:text-base transition bg-white disabled:bg-slate-50 disabled:cursor-not-allowed"
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
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    disabled={loading}
                    rows={4}
                    className="w-full p-3 sm:p-4 rounded-[6px] border border-slate-300 focus:border-[#48a6a7] focus:ring-2 focus:ring-[#48a6a7]/20 outline-none text-sm sm:text-base transition bg-white resize-none disabled:bg-slate-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="agreed-policy"
                    checked={formData.agreed}
                    onChange={(e) =>
                      setFormData({ ...formData, agreed: e.target.checked })
                    }
                    disabled={loading}
                    className="w-4 h-4 rounded text-[#48a6a7] border-slate-300 focus:ring-[#48a6a7] cursor-pointer disabled:cursor-not-allowed"
                  />
                  <label
                    htmlFor="agreed-policy"
                    className="text-xs sm:text-sm font-light text-[#303030] cursor-pointer select-none"
                  >
                    أوافق على الشروط وسياسة الخصوصية
                  </label>
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs sm:text-sm animate-in fade-in">
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-1">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.975 }}
                    className="w-full sm:w-auto bg-[#48a6a7] hover:bg-[#3b8c8d] disabled:bg-[#48a6a7]/60 text-white font-semibold text-base sm:text-2xl px-8 py-3 rounded-[6px] shadow-md hover:shadow-lg transition-shadow cursor-pointer disabled:cursor-not-allowed min-w-[180px] flex items-center justify-center gap-2.5"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>جاري الإرسال...</span>
                      </>
                    ) : (
                      "ارسل الان"
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* 3rd Item (Mobile & Tablet): University & Club Info Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.5, ease: premiumEase }}
            className="block lg:hidden w-full max-w-[580px] p-4 sm:p-6 bg-[#ddf3ee]/60 border border-[#48a6a7]/30 rounded-2xl text-center text-[#1a5a81] font-moshref-thulth font-normal text-[22px] sm:text-[30px] leading-[34px] sm:leading-[44px] tracking-[2px] order-3"
          >
            <p>جامعة قسنطينة 3 - كلية الطب</p>
            <p>مشروع الطبيب الحافظ | نادي شفاء العلمي</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
