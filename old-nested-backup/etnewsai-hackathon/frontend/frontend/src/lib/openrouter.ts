export const OPENROUTER_API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || '';
export const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1';

export async function callOpenRouter(messages: any[], model: string = 'openai/gpt-4o-mini') {
  const response = await fetch('\/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer \',
      'Content-Type': 'application/json',
      'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4028',
      'X-Title': 'ET News AI',
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 2000,
    }),
  });

  if (!response.ok) {
    throw new Error('OpenRouter API call failed');
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

export async function generateVideoScript(articleText: string) {
  const prompt = \Generate a 90-second video script from this news article. Include:
  1. Hook (first 5 seconds)
  2. Key points (3-4 main points)
  3. Visual suggestions for each section
  4. Closing statement
  
  Article: \\;

  return await callOpenRouter([
    { role: 'system', content: 'You are a professional news video producer.' },
    { role: 'user', content: prompt }
  ]);
}

export async function translateText(text: string, targetLanguage: string) {
  const languageMap: Record<string, string> = {
    'hindi': 'Hindi',
    'tamil': 'Tamil',
    'telugu': 'Telugu',
    'bengali': 'Bengali',
  };

  const prompt = \Translate the following business news to \. 
  Make it culturally adapted, not literal translation. Keep financial terms clear.
  
  Text: \\;

  return await callOpenRouter([
    { role: 'system', content: 'You are a professional translator specializing in business news.' },
    { role: 'user', content: prompt }
  ], 'openai/gpt-4o-mini');
}

export async function generateNewsBriefing(topic: string, articles: string[]) {
  const prompt = \Create a comprehensive news briefing on: \
  
  Synthesize these articles into:
  1. Executive Summary (2-3 sentences)
  2. Key Points (bullet points)
  3. Market Impact
  4. What to Watch Next
  
  Articles: \\;

  return await callOpenRouter([
    { role: 'system', content: 'You are an expert news analyst creating executive briefings.' },
    { role: 'user', content: prompt }
  ]);
}

export async function analyzeSentiment(text: string) {
  const prompt = \Analyze the sentiment of this news content. Rate from -10 (very negative) to +10 (very positive).
  Provide:
  1. Sentiment score
  2. Key sentiment drivers
  3. Overall tone
  
  Text: \\;

  return await callOpenRouter([
    { role: 'system', content: 'You are a sentiment analysis expert.' },
    { role: 'user', content: prompt }
  ]);
}
