import { useState } from 'react'
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Palette,
  Terminal,
} from 'lucide-react'

export default function App() {
  const [count, setCount] = useState(0)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'stack'>('overview')

  const copyCommand = () => {
    navigator.clipboard.writeText('npm run dev')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const techStack = [
    {
      name: 'React 19',
      role: 'UI Library',
      color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30',
      icon: Layers,
      description: 'Declarative, component-driven UI with modern hooks and concurrent mode.',
    },
    {
      name: 'Vite 6',
      role: 'Next-Gen Bundler',
      color: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30',
      icon: Zap,
      description: 'Instant server start, lightning-fast HMR, and optimized production builds.',
    },
    {
      name: 'TypeScript',
      role: 'Type Safety',
      color: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30',
      icon: Code2,
      description: 'Robust static typing, auto-completion, and enhanced developer ergonomics.',
    },
    {
      name: 'Tailwind CSS v4',
      role: 'Utility Styling',
      color: 'from-teal-500/20 to-emerald-500/20 text-teal-400 border-teal-500/30',
      icon: Palette,
      description: 'Next-generation engine with zero-config Vite plugin and high performance.',
    },
  ]

  const features = [
    {
      title: 'Vite Plugin Tailwind v4',
      desc: 'Configured with @tailwindcss/vite for native, lightning-fast compilation.',
    },
    {
      title: 'Full TypeScript Strictness',
      desc: 'Pre-configured tsconfig with strict type checks for enterprise scale.',
    },
    {
      title: 'Lucide Icons Included',
      desc: 'Beautiful, clean vector icons pre-installed and ready to use.',
    },
    {
      title: 'Ready for Production',
      desc: 'Tree-shaken CSS and code splitting out-of-the-box for optimal Lighthouse scores.',
    },
  ]

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-pink-500/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full" />

      {/* Header / Navigation */}
      <header className="relative z-10 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Vite + React
              </span>
              <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                TS + Tailwind v4
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition"
            >
              Tailwind Docs
              <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://vite.dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition"
            >
              Vite Docs
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-16 w-full flex-1 flex flex-col justify-center">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium shadow-inner">
            <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            <span>Modern Web Stack Initialized Successfully</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Craft blazing fast apps with{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              React, Vite & Tailwind
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Your project is ready with TypeScript, Tailwind CSS v4, hot module replacement, and modern tooling configured.
          </p>

          {/* Quick Terminal Command */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-xl text-sm font-mono text-slate-300 shadow-xl backdrop-blur-sm">
              <Terminal className="h-4 w-4 text-slate-500" />
              <span>npm run dev</span>
              <button
                onClick={copyCommand}
                type="button"
                className="ml-2 p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition"
                title="Copy command"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {/* Interactive State Demo Button */}
            <button
              onClick={() => setCount((c) => c + 1)}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
            >
              <Cpu className="h-4 w-4" />
              <span>Interactive Count: {count}</span>
            </button>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="mt-14 max-w-4xl mx-auto w-full">
          <div className="flex justify-center border-b border-slate-800/80 mb-8">
            <div className="flex space-x-2 bg-slate-900/60 p-1 rounded-xl border border-slate-800">
              {(['overview', 'features', 'stack'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  type="button"
                  className={`px-4 py-2 text-xs font-semibold rounded-lg capitalize transition cursor-pointer ${
                    activeTab === tab
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content: Overview */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm space-y-3 hover:border-slate-700 transition">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg text-white">Start Building</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Open <code className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs">src/App.tsx</code> to edit this screen and enjoy instant fast refreshes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm space-y-3 hover:border-slate-700 transition">
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Palette className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg text-white">Tailwind CSS v4 Ready</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Style with classes directly in JSX. No heavy configuration file needed — fast, modern, and zero friction.
                </p>
              </div>
            </div>
          )}

          {/* Tab Content: Features */}
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4 hover:border-slate-700 transition"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content: Stack */}
          {activeTab === 'stack' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techStack.map((tech, idx) => {
                const IconComponent = tech.icon
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3 hover:border-slate-700 transition flex flex-col justify-between"
                  >
                    <div>
                      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${tech.color} border flex items-center justify-center mb-3`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold text-white text-base">{tech.name}</h4>
                      <p className="text-xs font-semibold text-indigo-400 mt-0.5">{tech.role}</p>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{tech.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        <p className="flex items-center justify-center gap-1.5">
          Configured with React + Vite + TypeScript + Tailwind CSS v4
        </p>
      </footer>
    </div>
  )
}
