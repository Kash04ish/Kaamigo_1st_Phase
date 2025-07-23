// const path = require("path");
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT.replace(/\\n/g, '\n'))
  : require('../config/credentials/firebase-service-account.json');

  console.log('🧪 FIREBASE_SERVICE_ACCOUNT env:', process.env.FIREBASE_SERVICE_ACCOUNT?.slice(0, 100));

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
