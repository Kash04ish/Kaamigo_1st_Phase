# 🧠 Kaamigo – Reels Bhi. Rozgaar Bhi.

**Kaamigo** is a voice-first, reel-powered freelance discovery platform for India’s next billion users. Built with a full-stack architecture designed to support real-time gigs, video resumes, and inclusive access.
Whether you need an electrician, mehendi artist, engineer, or tutor? Kaamigo connects you to skilled local talent through reels, voice search, and a live map.
No red tape- just real skills, instant gigs, and trusted conversations.

---

## 🌟 Key Features

### 🎞️ Reels-Based Worker Discovery
- Scrollable short videos showcasing freelancers’ skills
- Build trust through real human proof-of-work

### 🗺️ Real-Time Map View
- Locate nearby freelancers instantly
- Workers auto-appear on map when active

### 🔓 Open Job Board
- Post quick gigs, odd jobs, or recurring tasks
- Real-time updates with filterable skill tags

### 💬 Pre-Booking Communication
- Free chat and call before booking to build trust
- Push notifications for job responses and messages

### 🛡️ Skill Badges & Trust Scores
- Realtime rating system with verified badges
- Community feedback, reviews, and endorsements

### 🔁 Daily Coins & Rewards System
- Users earn coins through tasks, learning, referrals
- Gamified dashboard with leaderboard and streaks

---

## 📁 Project Structure

### 🔹 Backend (`/backend`)
> Node.js + Express API to handle authentication, job posts, user profiles, and media handling.

- **config/** – Environment and database config  
- **controllers/** – Route logic for users, jobs, auth  
- **middleware/** – JWT, validation, error handling  
- **models/** – Mongoose schemas for users, gigs, reviews  
- **routes/** – API endpoints  
- **utils/** – Helper functions  
- `index.js` – Server entry point  
- `package.json` – Backend dependencies  

### 🔸 Frontend (`/frontend`)
> React (Vite) + Tailwind CSS interface for job browsing, reel uploads, and maps.

- **src/** – React components, pages, state  
- **public/** – Static assets  
- **tailwind.config.js** – Custom Tailwind theme  
- **vite.config.js** – Vite dev server config  
- `.env` – Environment variables  

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/kaamigo_web.git
cd kaamigo_web
```
Setup Backend
```bash
cd backend
npm install
npm start
```
Setup Frontend
```bash
cd frontend
npm install
npm run dev
```