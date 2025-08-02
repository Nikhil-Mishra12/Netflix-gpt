# 🎬 Netflix GPT

A *Netflix Clone* built with *React + Vite* featuring *Firebase Authentication* and *GPT-powered movie suggestions*.  
This project fetches movies using the *TMDB API* and enhances the browsing experience with *AI-based recommendations*.

---

## 🚀 Features

✅ *User Authentication* – Sign up & log in with Firebase  
✅ *Browse Movies* – Get trending, popular, and top-rated movies using TMDB API  
✅ *GPT Movie Suggestions* – AI-powered search to recommend movies  
✅ *Responsive UI* – Built with Tailwind CSS for mobile-first design  
✅ *YouTube Trailers* – Watch trailers directly inside the app  
✅ *Secure API Keys* – Managed with .env for safety  

---

## 🛠 Tech Stack

- ⚛ *React (Vite)*
- 🎨 *Tailwind CSS*
- 🔥 *Firebase Auth*
- 🎥 *TMDB API*
- 🤖 *OpenAI GPT API*
- 🌐 *React Router*

---

## 📂 Project Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/netflix-gpt.git
cd netflix-gpt

##install node module
npm install

#create .envfile and add your apikey
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_OPENAI_API_KEY=your_openai_api_key

#Run you project
npm run dev