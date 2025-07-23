const UserModel = require("../models/UserModel");
const { auth } = require("../utils/firebase");
const jwt = require("jsonwebtoken");
const serverConfig = require("../config/server");

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { email, password, displayName } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Create user in Firebase Auth
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: displayName || "",
    });

    // Create user in Firestore
    const userData = {
      email,
      password, // Will be hashed in the model
      displayName: displayName || "",
      uid: userRecord.uid,
      // other fields can be added here
    };

    const newUser = await UserModel.createUser(userData);

    // Create JWT token
    const token = jwt.sign({ id: newUser.id }, serverConfig.JWT_SECRET, {
      expiresIn: serverConfig.JWT_EXPIRE,
    });

    res.status(201).json({
      success: true,
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
        displayName: newUser.displayName,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server error during registration",
    });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Get user from Firestore
    const user = await UserModel.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Verify password
    const isPasswordValid = await UserModel.comparePassword(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Create JWT token
    const token = jwt.sign({ id: user.id }, serverConfig.JWT_SECRET, {
      expiresIn: serverConfig.JWT_EXPIRE,
    });

    // Remove password from response
    delete user.password;

    res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    // Get user ID from authenticated request
    const userId = req.user.id;

    // Get user from Firestore
    const user = await UserModel.getUserById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Profile retrieval error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while retrieving profile",
    });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    // Get user ID from authenticated request
    const userId = req.user.id;
    const updateData = req.body;

    // Remove fields that shouldn't be updated directly
    delete updateData.email; // Email updates should be handled separately
    delete updateData.password; // Password updates should be handled separately

    // Update user in Firestore
    const updatedUser = await UserModel.updateUser(userId, updateData);

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating profile",
    });
  }
};
