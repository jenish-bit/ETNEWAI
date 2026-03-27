# backend/services/video_generator.py
from moviepy.editor import *
import os
import json

def create_video_from_script(script_json, output_path):
    """
    Creates a simple slideshow video from script JSON.
    Note: For full offline TTS, integrate Piper TTS here. 
    For demo speed, we'll use text overlays.
    """
    try:
        data = json.loads(script_json)
    except:
        data = {"title": "News Update", "scenes": [{"text": "Breaking News", "visual_description": "Background"}]}
    
    clips = []
    
    # Title Card (3 seconds)
    title_clip = TextClip(
        data.get("title", "News Update"),
        fontsize=40, color='white', bg_color='#080C1A',
        size=(1280, 720), method='caption'
    ).set_duration(3)
    clips.append(title_clip)
    
    # Scenes (5 seconds each)
    for scene in data.get("scenes", [])[:5]:  # Limit to 5 scenes for demo
        text = scene.get("text", "")
        clip = TextClip(
            text,
            fontsize=32, color='#FF6B35', bg_color='#0D1326',
            size=(1280, 720), method='caption'
        ).set_duration(5)
        clips.append(clip)
    
    # Concatenate
    final_video = concatenate_videoclips(clips, method="compose")
    
    # Write output (low FPS for speed on 8GB RAM)
    final_video.write_videofile(
        output_path,
        fps=24,
        codec='libx264',
        audio_codec='aac',
        threads=2  # Limit CPU usage
    )
    
    return output_path