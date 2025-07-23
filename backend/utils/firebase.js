const admin = require("firebase-admin");

// Initialize Firebase Admin SDK - Only from environment variables
if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
  throw new Error("FIREBASE_SERVICE_ACCOUNT environment variable is required");
}

// Parse the service account (no need for newline replacement since it's properly escaped)
let serviceAccount;
try {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  console.log(
    "🧪 Firebase initialized with project:",
    serviceAccount.project_id
  );
} catch (error) {
  console.error("❌ Error parsing FIREBASE_SERVICE_ACCOUNT:", error.message);
  throw new Error("Invalid FIREBASE_SERVICE_ACCOUNT format");
}

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
