// Load environment variables first, before any other imports
require("dotenv").config();

// backend/index.js
const express = require("express");
const cors = require("cors");
const connectFirebase = require("./config/db");
const serverConfig = require("./config/server");

console.log(
  "🧪 Firebase project loaded:",
  process.env.FIREBASE_SERVICE_ACCOUNT
    ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT).project_id
    : "Not found"
);

const app = express();
const PORT = serverConfig.PORT;

// Connect to Firebase
connectFirebase();

// Import routes
const userRoutes = require("./routes/userRoutes");
const gigRoutes = require("./routes/gigRoutes");

// Middleware
app.use(
  cors({
    origin: serverConfig.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Kaamigo API is running 🚀");
});

const { auth, db } = require("./utils/firebase");
// Example: List all users
app.get("/test-firebase", async (req, res) => {
  try {
    const users = await auth.listUsers();
    res.json(users.users.map((u) => ({ uid: u.uid, email: u.email })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API routes
app.use("/api/users", userRoutes);
app.use("/api/gigs", gigRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Server Error",
    error:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Something went wrong",
  });
});

app.listen(PORT, () => {
  console.log(
    `Server is running at http://localhost:${PORT} in ${serverConfig.NODE_ENV} mode`
  );
});
