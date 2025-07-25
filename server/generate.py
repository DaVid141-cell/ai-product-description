import requests

def generate_description(name, features, category):
    prompt = (
        f"Write a concise, professional SEO product description (2-5 sentences) for a {category} named '{name}'. "
        f"Include the features: {features}. Do not use emojis, bold text, markdown, use simple words, or salesy language."
    )

    try:
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "gemma2:2b",  # Using the faster gemma model
                "prompt": prompt,
                "stream": False       # Disable streaming for simpler response
            }
        )

        if response.status_code == 200:
            return response.json().get("response", "No response from model")
        else:
            return f"Error: {response.status_code} - {response.text}"

    except Exception as e:
        return f"Exception during generation: {str(e)}"
