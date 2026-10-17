import React, { useState } from 'react'

interface AuthModalProps {
  isOpen: boolean
  initialTab?: 'login' | 'register'
  onClose: () => void
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, initialTab = 'login', onClose }) => {
  const [tab, setTab] = useState<'login' | 'register'>(initialTab)
  const [role, setRole] = useState<'student' | 'teacher' | 'admin'>('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [year, setYear] = useState('السنة الأولى طب')
  const [successMsg, setSuccessMsg] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSuccessMsg(
      tab === 'login'
        ? `مرحباً بك! جاري تسجيل دخول ${role === 'student' ? 'الطالب' : role === 'teacher' ? 'الأستاذ' : 'المشرف'}...`
        : 'تم تقديم طلب تسجيلك في مشروع الطبيب الحافظ بنجاح! سيتم مراجعة الملف وإشعارك.'
    )
    setTimeout(() => {
      setSuccessMsg('')
      onClose()
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 p-6 sm:p-8 text-right"
        dir="rtl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute left-4 top-4 text-slate-400 hover:text-slate-600 transition p-1 rounded-lg"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#1a5a81]">
            {tab === 'login' ? 'تسجيل الدخول إلى المنصة' : 'التسجيل في مشروع الطبيب الحافظ'}
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            جامعة قسنطينة 3 - كلية الطب | نادي شفاء
          </p>

          {/* Tab Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-xl mt-4">
            <button
              type="button"
              onClick={() => {
                setTab('login')
                setSuccessMsg('')
              }}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition ${
                tab === 'login' ? 'bg-white text-[#1a5a81] shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              تسجيل الدخول
            </button>
            <button
              type="button"
              onClick={() => {
                setTab('register')
                setSuccessMsg('')
              }}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition ${
                tab === 'register' ? 'bg-white text-[#1a5a81] shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              حساب جديد
            </button>
          </div>
        </div>

        {successMsg ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
              ✓
            </div>
            <p className="font-semibold text-slate-800 text-lg">{successMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Role selector for login */}
            {tab === 'login' && (
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  نوع الحساب
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole('student')}
                    className={`py-2 text-xs font-medium rounded-lg border transition ${
                      role === 'student'
                        ? 'border-[#48a6a7] bg-[#ddf3ee] text-[#1a5a81]'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    طالب
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('teacher')}
                    className={`py-2 text-xs font-medium rounded-lg border transition ${
                      role === 'teacher'
                        ? 'border-[#48a6a7] bg-[#ddf3ee] text-[#1a5a81]'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    أستاذ
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('admin')}
                    className={`py-2 text-xs font-medium rounded-lg border transition ${
                      role === 'admin'
                        ? 'border-[#48a6a7] bg-[#ddf3ee] text-[#1a5a81]'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    إشراف
                  </button>
                </div>
              </div>
            )}

            {tab === 'register' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    الاسم واللقب *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="مثال: أحمد عبد الله"
                    className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:border-[#48a6a7] outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    المستوى الدراسي الطبي *
                  </label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:border-[#48a6a7] outline-none text-sm bg-white"
                  >
                    <option value="السنة الأولى طب">السنة الأولى طب بشرى</option>
                    <option value="السنة الثانية طب">السنة الثانية طب بشرى</option>
                    <option value="السنة الثالثة طب">السنة الثالثة طب بشرى</option>
                    <option value="السنة الرابعة طب">السنة الرابعة طب بشرى</option>
                    <option value="السنة الخامسة طب">السنة الخامسة طب بشرى</option>
                    <option value="السنة السادسة طب">السنة السادسة طب بشرى</option>
                    <option value="طب الأسنان">طب الأسنان</option>
                    <option value="صيدلة">صيدلة</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                البريد الإلكتروني *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@univ-constantine3.dz"
                className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:border-[#48a6a7] outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                كلمة المرور *
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:border-[#48a6a7] outline-none text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#48a6a7] hover:bg-[#3d9192] text-white font-semibold text-base rounded-lg shadow-md transition active:scale-98 mt-2"
            >
              {tab === 'login' ? 'دخول' : 'تأكيد التسجيل'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
