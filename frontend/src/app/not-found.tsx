'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-2">
      <div className="text-center p-8">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-fg mb-4">Page Not Found</h2>
        <p className="text-fg-muted mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/homepage" 
          className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold transition"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}
