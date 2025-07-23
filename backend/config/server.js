/**
 * Server configuration for Kaamigo backend
 */
module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  JWT_SECRET: process.env.JWT_SECRET || "your_jwt_secret",
  JWT_EXPIRE: process.env.JWT_EXPIRE || "30d",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",
  FIREBASE_SERVICE_ACCOUNT_PATH:
    process.env.FIREBASE_SERVICE_ACCOUNT_PATH ||
    "./config/credentials/firebase-service-account.json",
};
