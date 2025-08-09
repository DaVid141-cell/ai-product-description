from flask import Flask, request, jsonify
from flask_cors import CORS
from generate import generate_description

app = Flask(__name__)
CORS(app)

@app.route("/generate-description", methods=["POST"])
def generate():
    data = request.get_json()
    name = data.get("name")
    brand = data.get("brand")
    features = data.get("features")
    category = data.get("category")

    description = generate_description(name, brand, features, category)
    return jsonify({"description": description})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
