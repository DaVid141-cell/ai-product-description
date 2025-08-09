import requests
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=api_key)

model = genai.GenerativeModel("models/gemini-2.5-pro")

def generate_description(name, brand, features, category):

    prompt = (
        f"Write a concise, professional SEO product description (2-4 sentences) for a {category} named '{name}'. "
        f"Include the features: {features} and brand: {brand}. Do not use emojis, bold text, markdown, use simple words, or salesy language."
    )
    try:
        response = model.generate_content(prompt)

        # Robust check to get the content safely
        if hasattr(response, "text") and response.text:
            return response.text
        elif hasattr(response, "parts") and response.parts:
            return response.parts[0].text
        else:
            return "No description was returned by the AI."

    except Exception as e:
        return f"Exception during generation: Please input all of the data fields in the form. Thank you!"
