// frontend/src/lib/api.ts
const BACKEND_URL = 'http://localhost:5000';

export async function generateNewsVideo(articleText: string) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/generate-video`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ article: articleText }),
    });
    
    if (!response.ok) throw new Error('Failed to generate video');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}