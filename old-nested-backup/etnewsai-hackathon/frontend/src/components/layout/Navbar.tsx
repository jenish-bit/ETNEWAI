'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">ET News AI</Link>
        <Link href="/my-et">My ET</Link>
        <Link href="/video-studio">Video Studio</Link>
        <Link href="/vernacular">Vernacular</Link>
      </div>
    </nav>
  )
}
