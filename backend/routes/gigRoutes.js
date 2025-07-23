const express = require("express");
const router = express.Router();
const gigController = require("../controllers/gigController");
const authMiddleware = require("../middleware/authMiddleware");

// Public routes
router.get("/", gigController.getAllGigs);
router.get("/:id", gigController.getGigById);

// Protected routes
router.post("/", authMiddleware, gigController.createGig);
router.put("/:id", authMiddleware, gigController.updateGig);
router.delete("/:id", authMiddleware, gigController.deleteGig);
router.post("/:id/apply", authMiddleware, gigController.applyForGig);

module.exports = router;
