'use client'

import Link from 'next/link'
import { ArrowRightIcon, PlayIcon, SparklesIcon, GlobeAltIcon, ChartBarIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Stock Ticker */}
      <div className="bg-bg-2 border-b border-border py-2 overflow-hidden">
        <div className="flex space-x-12 animate-marquee whitespace-nowrap">
          <span className="text-green-500 font-semibold">LIVE</span>
          <span>GOLD <span className="text-green-500">₹71,240 +0.31%</span></span>
          <span>BRENT <span className="text-red-500">\.12 -0.22%</span></span>
          <span>NIFTYBANK <span className="text-green-500">47,623.80 +0.78%</span></span>
          <span>SENSEX <span className="text-green-500">73,847.15 +0.62%</span></span>
          <span>NIFTY 50 <span className="text-green-500">22,412.30 +0.54%</span></span>
          <span>USDINR <span className="text-red-500">83.42 -0.08%</span></span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 bg-bg-2/50 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <SparklesIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-fg font-bold text-lg leading-tight">ETNewsAI</div>
            <div className="text-[10px] text-primary -mt-1">AI-NATIVE NEWS</div>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-fg-muted hover:text-fg transition-colors">Features</Link>
          <Link href="#" className="text-fg-muted hover:text-fg transition-colors">How It Works</Link>
          <Link href="#" className="text-fg-muted hover:text-fg transition-colors">Languages</Link>
          <Link href="/signup" className="text-fg hover:text-primary transition-colors">Sign In</Link>
          <Link href="/signup" className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transition-all transform hover:scale-105">
            Get Started Free
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
            AI-NATIVE • LAUNCHED MARCH 2026
          </span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-fg mb-6 leading-tight">
          News that <br />
          <span className="text-primary italic">thinks for you.</span>
        </h1>
        <p className="text-xl text-fg-muted max-w-3xl mb-10 leading-relaxed">
          ETNewsAI transforms ET's journalism into a personalized intelligence layer — 
          briefings, video news, story arcs, and business news in your language.
        </p>
        
        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          <div className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-fg flex items-center space-x-2">
            <ChartBarIcon className="w-4 h-4 text-primary" />
            <span>My ET</span>
          </div>
          <div className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-fg flex items-center space-x-2">
            <GlobeAltIcon className="w-4 h-4 text-primary" />
            <span>News Navigator</span>
          </div>
          <div className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-fg flex items-center space-x-2">
            <VideoCameraIcon className="w-4 h-4 text-primary" />
            <span>Video Studio</span>
          </div>
          <div className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-fg flex items-center space-x-2">
            <SparklesIcon className="w-4 h-4 text-primary" />
            <span>Story Arc</span>
          </div>
          <div className="px-4 py-2 bg-surface border border-border rounded-full text-sm text-fg flex items-center space-x-2">
            <GlobeAltIcon className="w-4 h-4 text-primary" />
            <span>Vernacular</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <Link href="/my-et" className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg shadow-primary/25">
            <span>Start for Free</span>
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
          <Link href="/video-studio" className="px-8 py-4 bg-surface hover:bg-surface-hover text-fg rounded-full font-semibold flex items-center space-x-2 border border-border transition-all">
            <PlayIcon className="h-5 w-5" />
            <span>See Live Demo</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-bg flex items-center justify-center text-white text-sm font-bold">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <span className="text-fg-muted"><strong className="text-fg">42,000+</strong> professionals joined</span>
        </div>
      </div>

      {/* AI Core Visualization */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-fg mb-6">Your Personal Intelligence Layer</h2>
            <p className="text-fg-muted text-lg mb-8 leading-relaxed">
              Experience business news like never before. AI-powered personalization, 
              interactive briefings, and multilingual content—all in one place.
            </p>
            <div className="space-y-4">
              {['Personalized newsroom', 'AI video generation', 'Multi-language support', 'Real-time insights'].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-fg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative bg-surface border border-border rounded-3xl p-8">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
                    <SparklesIcon className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-fg font-semibold text-lg">AI CORE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
