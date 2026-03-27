// frontend/src/components/VideoStudio/VideoGenerator.tsx
'use client';
import { useState } from 'react';
import { generateNewsVideo } from '@/lib/api';

export default function VideoGenerator() {
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateNewsVideo(article);
      setVideoUrl(`${window.location.origin}${result.video_url}`);
    } catch (err) {
      alert('Generation failed. Ensure Flask backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-bg-2 rounded-xl border border-border">
      <h2 className="text-2xl font-bold text-fg mb-4">AI News Video Studio</h2>
      <textarea
        className="w-full p-4 bg-bg-3 rounded-lg text-fg border border-border focus:outline-none focus:border-primary"
        rows={6}
        placeholder="Paste news article here..."
        value={article}
        onChange={(e) => setArticle(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-4 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold transition"
      >
        {loading ? 'Generating...' : 'Generate Video'}
      </button>
      
      {videoUrl && (
        <video controls className="mt-6 w-full rounded-lg border border-border">
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
}