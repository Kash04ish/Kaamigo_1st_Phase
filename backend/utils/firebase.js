require('dotenv').config(); // ← Make sure this is FIRST

const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require('../config/credentials/firebase-service-account.json');

console.log("Raw ENV Value:", process.env.FIREBASE_SERVICE_ACCOUNT);

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const auth = admin.auth();
const db = admin.firestore();

module.exports = {
  admin,
  auth,
  db,
};
