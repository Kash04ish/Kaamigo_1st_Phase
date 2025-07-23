// const admin = require("firebase-admin");

// // Initialize Firebase Admin SDK
// const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
//   ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT.replace(/\\n/g, '\n'))
//   : require('../config/credentials/firebase-service-account.json');

// // Initialize Firebase Admin
// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
// }

// const auth = admin.auth();
// const db = admin.firestore();

// module.exports = {
//   admin,
//   auth,
//   db,
// };
const admin = require("firebase-admin");

let serviceAccount;

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  // Running on Render or a secure server using JSON stringified blob
  try {
    serviceAccount = JSON.parse(
      process.env.FIREBASE_SERVICE_ACCOUNT.replace(/\\n/g, "\n")
    );
  } catch (err) {
    console.error("❌ Failed to parse FIREBASE_SERVICE_ACCOUNT:", err);
    process.exit(1); // hard exit so Render fails clearly
  }
} else {
  // Local development fallback (file-based)
  serviceAccount = require("../config/credentials/firebase-service-account.json");
}

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Exports
const auth = admin.auth();
const db = admin.firestore();

module.exports = {
  admin,
  auth,
  db,
};
