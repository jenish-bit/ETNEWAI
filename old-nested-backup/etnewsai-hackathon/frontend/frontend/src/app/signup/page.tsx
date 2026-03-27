'use client'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-bg p-8 flex items-center justify-center">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-fg mb-4">Create Account</h1>
        <p className="text-fg-muted mb-8">Join ET News AI today</p>
        <button className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold">
          Get Started
        </button>
      </div>
    </div>
  )
}
