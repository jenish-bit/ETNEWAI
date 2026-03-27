'use client'

export default function VideoStudioPage() {
  return (
    <div className="min-h-screen bg-bg p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-fg mb-4">AI News Video Studio</h1>
        <p className="text-fg-muted mb-8">Transform articles into broadcast-quality videos</p>
        
        <div className="bg-surface border border-border rounded-xl p-8">
          <div className="text-center">
            <div className="h-64 bg-bg-3 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-fg-dim">Video preview will appear here</p>
            </div>
            <button className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold">
              Generate Video
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
