# Kaamigo

**Voice-first, reels-powered platform connecting talent with opportunities in Tier 2/3 India.**

*Reels Bhi. Rozgaar Bhi.*

## Project Structure

```
kaamigo/
├── frontend/          # React frontend application
│   ├── src/          # Source code
│   ├── .env          # Frontend environment variables (not tracked in git)
│   ├── package.json  # Frontend dependencies
│   └── ...           # Other frontend files
├── backend/          # Node.js backend application
│   ├── index.js      # Main server file
│   ├── package.json  # Backend dependencies
│   └── ...           # Other backend files
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

## Features

- 🎥 **Video Reels**: Showcase skills through dynamic video content
- 🎤 **Voice-First**: Intuitive voice search and communication
- 🗺️ **Location-Based**: Find local talent with interactive maps
- ✅ **Trust & Verification**: Verified freelancer profiles
- 💳 **Secure Payments**: Multiple payment options
- 🕐 **24/7 Support**: Dedicated customer support

## Tech Stack

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Firebase (Authentication & Firestore)
- Supabase (Storage)
- Leaflet Maps
- Framer Motion

### Backend
- Node.js
- Express.js

## Contributing

1. Create a feature branch from `main`
2. Make your changes in the appropriate directory (`frontend/` or `backend/`)
3. Ensure your `.env` files are not committed
4. Submit a pull request

## Security Guidelines

- **Never commit `.env` files** - They contain sensitive credentials
- **Keep Firebase config in environment variables** - Use the `.env` file for all API keys
- **Maintain project structure** - Keep frontend and backend code separate
- **Review pull requests** - All changes should be reviewed before merging

## Project Structure Guidelines

- Place shared config files (`.gitignore`, `README.md`) at the root level
- Keep frontend code strictly within the `frontend/` directory
- Keep backend code strictly within the `backend/` directory
- Use environment variables for all sensitive data

## License

This project is private and proprietary.

---

**Kaamigo** - Connecting talent with opportunities through voice-first innovation.
