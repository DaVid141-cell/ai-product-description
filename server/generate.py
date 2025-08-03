import requests
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=api_key)

print("API Key:", api_key)

model = genai.GenerativeModel("models/gemini-2.5-pro")

def generate_description(name, features, category):
    prompt = (
        f"Write a concise, professional SEO product description (2-5 sentences) for a {category} named '{name}'. "
        f"Include the features: {features}. Do not use emojis, bold text, markdown, use simple words, or salesy language."
    )

    try:
        response = model.generate_content(prompt)
        return response.text

    except Exception as e:
        return f"Exception during generation: {str(e)}"
        
  

