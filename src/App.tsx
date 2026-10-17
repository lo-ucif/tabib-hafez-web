import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { HadithSection } from './components/HadithSection'
import { Activities } from './components/Activities'
import { Roles } from './components/Roles'
import { AppDownload } from './components/AppDownload'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { AuthModal } from './components/AuthModal'

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login')

  const openAuth = (tab: 'login' | 'register') => {
    setAuthTab(tab)
    setAuthModalOpen(true)
  }

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-[#1a5a81] flex flex-col font-changa selection:bg-[#48a6a7] selection:text-white" dir="rtl">
      {/* Sticky Header / Navbar */}
      <Navbar onOpenAuth={openAuth} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Hero Section (Section 13) */}
        <Hero onRegister={() => openAuth('register')} />

        {/* Features Section (Section 2) */}
        <Features />

        {/* Hadith Section (Section 3) */}
        <HadithSection />

        {/* Field Activities Section (Section 6) */}
        <Activities />

        {/* Platform Roles Section (Section 4) */}
        <Roles />

        {/* Mobile App Download Banner (Section phne) */}
        <AppDownload onLoginClick={() => openAuth('login')} />

        {/* Contact Section (Section 11) */}
        <Contact />
      </main>

      {/* Footer (Footer / 1 /) */}
      <Footer />

      {/* Interactive Authentication Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialTab={authTab}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  )
}
