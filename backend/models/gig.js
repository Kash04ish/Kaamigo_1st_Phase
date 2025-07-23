const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  payRate: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  payType: {
    type: String,
    enum: ["hourly", "fixed", "monthly"],
    default: "hourly",
  },
  category: {
    type: String,
    required: true,
  },
  skills: [
    {
      type: String,
    },
  ],
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applicants: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      applicationData: {
        name: String,
        email: String,
        phone: String,
        message: String,
      },
      appliedAt: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        enum: ["pending", "rejected", "accepted"],
        default: "pending",
      },
    },
  ],
  status: {
    type: String,
    enum: ["open", "closed", "filled"],
    default: "open",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Gig", gigSchema);
