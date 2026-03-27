# backend/services/llm_client.py
import requests
import json

class OllamaClient:
    def __init__(self, model="llama3.2:3b", base_url="http://localhost:11434"):
        self.model = model
        self.base_url = base_url
    
    def generate_script(self, article_text):
        """Generate a 60-second video script from article text"""
        prompt = f"""
        You are a news video producer. Convert this news article into a 60-second video script.
        Format: JSON with keys 'title', 'scenes' (array of objects with 'text' and 'visual_description').
        Article: {article_text[:2000]}  # Limit input to avoid context overflow
        """
        
        try:
            response = requests.post(
                f"{self.base_url}/api/generate",
                json={
                    "model": self.model,
                    "prompt": prompt,
                    "stream": False,
                    "format": "json"  # Force JSON output
                },
                timeout=120  # Ollama might take time on 8GB RAM
            )
            return response.json().get("response", "")
        except Exception as e:
            print(f"Ollama Error: {e}")
            return None

llm = OllamaClient()