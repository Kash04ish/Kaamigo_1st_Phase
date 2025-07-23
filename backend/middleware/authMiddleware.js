const jwt = require("jsonwebtoken");
const serverConfig = require("../config/server");
const UserModel = require("../models/UserModel");

/**
 * Authentication middleware to protect routes
 */
const authMiddleware = async (req, res, next) => {
  try {
    let token;

    // Check for token in headers
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to access this route",
      });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, serverConfig.JWT_SECRET);

      // Get user from Firestore
      const user = await UserModel.getUserById(decoded.id);

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User no longer exists",
        });
      }

      // Add user to request object
      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to access this route",
      });
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = authMiddleware;
