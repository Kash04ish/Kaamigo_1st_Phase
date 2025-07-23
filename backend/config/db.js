const { db } = require("../utils/firebase");

const connectDB = async () => {
  try {
    // Test the Firebase Firestore connection by trying to access a collection
    await db.collection("test").doc("connection").set({
      timestamp: new Date(),
      message: "Firebase connection successful",
    });
    console.log("Firebase Firestore Connected");

    // Delete the test document to keep things clean
    await db.collection("test").doc("connection").delete();
  } catch (error) {
    console.error(`Error connecting to Firebase: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
