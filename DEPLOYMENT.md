# Kaamigo Backend Deployment Guide

## Local Development Setup

1. **Install dependencies:**

   ```bash
   cd backend
   npm install
   ```

2. **Environment Setup:**

   - All configuration is in `backend/.env` file
   - Firebase credentials are directly in the environment variables
   - No separate credentials folder needed

3. **Run locally:**
   ```bash
   npm run dev  # For development with nodemon
   npm start    # For production
   ```

## Deployment on Render

### 1. Environment Variables Setup

Copy the following environment variables to your Render service dashboard:

**Required:**

- `NODE_ENV=production`
- `FIREBASE_SERVICE_ACCOUNT` = (copy the entire JSON string from your .env file)

**Additional (configure as needed):**

- `MONGODB_URI` = Your MongoDB connection string
- `JWT_SECRET` = A secure random string
- `JWT_EXPIRES_IN=7d`
- `PORT=5000` (or let Render assign automatically)
- `ALLOWED_ORIGINS` = Your frontend URLs (comma-separated)

### 2. Render Service Configuration

- **Root Directory:** `backend`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Environment:** Node.js

### 4. Clean Architecture ✅

- ✅ No credentials folder or files
- ✅ All Firebase config in environment variables only
- ✅ Single `.env` file for all configuration
- ✅ No generation scripts needed
- ✅ Ready for production deployment

### 5. Security Benefits

- Firebase service account never stored in files
- All sensitive data in environment variables
- No risk of accidentally committing credentials
- Easier to rotate keys (just update environment variable)
- Clean project structure with no credential files

### 4. Database Connection

Make sure to:

- Set up your MongoDB database (MongoDB Atlas recommended)
- Add the connection string to `MONGODB_URI` environment variable
- Configure network access in MongoDB Atlas for Render's IP ranges

### 5. Testing Deployment

After deployment, test these endpoints:

- `GET /` - Health check
- `GET /api/users` - User routes
- `GET /api/gigs` - Gig routes

## Security Checklist

- ✅ Firebase credentials in environment variables
- ✅ Credentials folder in .gitignore
- ⚠️ Set strong JWT_SECRET
- ⚠️ Configure CORS for your frontend domains
- ⚠️ Use HTTPS in production
