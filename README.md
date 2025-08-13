# AI-Generated Product Descriptions

## 📌 Project Information
**Project Name** – AI-Generated Product Descriptions  

**Short Description** – Using Natural Language Generation (NLG) with the Gemini API to automatically create compelling product descriptions.  

**Tech Stack** – React + Vite + TypeScript, Python + Flask, Tailwind CSS  

---

## ✨ Features
- Generate professional and engaging product descriptions instantly using Gemini API.

---
## ­🚀 Getting Started

## 📂 Environment Variables
Before running the server, create a `.env` file inside the **server** directory with the following content:

```
GEMINI_API_KEY=your_api_key_here
```

**Steps to get your API key:**
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Sign in with your Google account.
3. Click **Create API Key**.
4. Copy the key and paste it into the `.env` file.

---

## ⚙️ Installation Instructions

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Python](https://www.python.org/downloads/) (v3.10+ recommended)

---

### **Clone the Repository**
```bash
git clone <repository-url>
cd <project-directory>
```

---

### **Install & Run Client**
```bash
cd <project-directory>
cd <project-client>

npm install
npm run dev
```

---

### **Install & Run Server**
```bash
cd <project-directory>
cd <project-server>

# Create virtual environment
python -m venv venv

# Activate virtual environment (Windows)
venv\Scripts\activate
# For Mac/Linux:
# source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app.py
```

---

## 🚀 Running in Production
***For production deployment:***

***First Run the Server with:***
```bash
cd <project-directory
cd <server>
venv\Scripts\activate
python app.py
```
***Second Run the website with:***
```bash
cd <project-directory
cd <client>
npm run build
```