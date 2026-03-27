# backend/app.py
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from services.llm_client import llm
from services.video_generator import create_video_from_script
import os
import uuid

app = Flask(__name__)
CORS(app)  # Allow Next.js to call this

UPLOAD_FOLDER = 'static/videos'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/api/generate-video', methods=['POST'])
def generate_video():
    data = request.json
    article_text = data.get('article', '')
    
    if not article_text:
        return jsonify({"error": "No article text provided"}), 400
    
    # 1. Generate Script via Ollama
    script = llm.generate_script(article_text)
    if not script:
        return jsonify({"error": "Failed to generate script"}), 500
    
    # 2. Create Video
    video_id = str(uuid.uuid4())
    output_path = os.path.join(UPLOAD_FOLDER, f"{video_id}.mp4")
    
    try:
        create_video_from_script(script, output_path)
        return jsonify({
            "status": "success",
            "video_url": f"/static/videos/{video_id}.mp4",
            "script": script
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/static/videos/<path:filename>')
def serve_video(filename):
    return send_file(os.path.join('static/videos', filename))

if __name__ == '__main__':
    app.run(port=5000, debug=True)