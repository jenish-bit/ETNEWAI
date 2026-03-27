'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: 'My ET', href: '/my-et' },
    { name: 'Navigator', href: '/news-navigator' },
    { name: 'Story Arc', href: '/story-arc' },
    { name: 'Video Studio', href: '/video-studio' },
    { name: 'Vernacular', href: '/vernacular' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-bg-2/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">ET</span>
            </div>
            <div>
              <div className="text-fg font-bold leading-tight">ETNewsAI</div>
              <div className="text-[10px] text-fg-dim -mt-1">AI-NATIVE NEWS</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const active = pathname === item.href
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={\px-4 py-2 rounded-lg text-sm font-medium transition-all \\}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-sm text-fg-muted hover:text-fg transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-semibold transition-all">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
