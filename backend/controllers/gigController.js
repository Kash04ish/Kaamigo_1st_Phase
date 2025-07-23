const GigModel = require("../models/GigModel");

// Get all gigs
exports.getAllGigs = async (req, res) => {
  try {
    // Extract query parameters for filtering
    const { category, minBudget, maxBudget, jobType, search } = req.query;

    // Get all gigs first (Firebase has limited querying capabilities)
    let gigs = await GigModel.getGigs();

    // Apply filters manually
    if (category) {
      gigs = gigs.filter((gig) => gig.category === category);
    }

    if (minBudget) {
      gigs = gigs.filter((gig) => gig.payRate.min >= parseInt(minBudget));
    }

    if (maxBudget) {
      gigs = gigs.filter((gig) => gig.payRate.max <= parseInt(maxBudget));
    }

    if (jobType) {
      const payType = jobType === "Contract" ? "fixed" : "hourly";
      gigs = gigs.filter((gig) => gig.payType === payType);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      gigs = gigs.filter(
        (gig) =>
          gig.title.toLowerCase().includes(searchLower) ||
          gig.description.toLowerCase().includes(searchLower)
      );
    }

    // Sort gigs by createdAt descending
    gigs.sort((a, b) => b.createdAt - a.createdAt);

    res.status(200).json({
      success: true,
      count: gigs.length,
      data: gigs,
    });
  } catch (error) {
    console.error("Get all gigs error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching gigs",
    });
  }
};

// Get gig by ID
exports.getGigById = async (req, res) => {
  try {
    const { id } = req.params;

    const gig = await GigModel.getGigById(id);

    if (!gig) {
      return res.status(404).json({
        success: false,
        message: "Gig not found",
      });
    }

    res.status(200).json({
      success: true,
      data: gig,
    });
  } catch (error) {
    console.error("Get gig error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching gig",
    });
  }
};

// Create a new gig
exports.createGig = async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      budgetMin,
      budgetMax,
      jobType,
      category,
      skills,
    } = req.body;

    // Validate required fields
    if (
      !title ||
      !description ||
      !location ||
      !budgetMin ||
      !budgetMax ||
      !jobType
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create new gig data
    const gigData = {
      title,
      description,
      location,
      payRate: {
        min: parseInt(budgetMin),
        max: parseInt(budgetMax),
      },
      payType: jobType === "Contract" ? "fixed" : "hourly",
      category: category || "General",
      skills: skills || [],
    };

    // Save to Firestore
    const savedGig = await GigModel.createGig(gigData, req.user.id);

    res.status(201).json({
      success: true,
      message: "Gig created successfully",
      gig: savedGig,
    });
  } catch (error) {
    console.error("Create gig error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server error while creating gig",
    });
  }
};

// Update a gig
exports.updateGig = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Get data to update
    const updateData = {};

    // Only include fields that are provided
    if (req.body.title) updateData.title = req.body.title;
    if (req.body.description) updateData.description = req.body.description;
    if (req.body.location) updateData.location = req.body.location;
    if (req.body.budgetMin || req.body.budgetMax) {
      updateData.payRate = updateData.payRate || {};
      if (req.body.budgetMin)
        updateData.payRate.min = parseInt(req.body.budgetMin);
      if (req.body.budgetMax)
        updateData.payRate.max = parseInt(req.body.budgetMax);
    }
    if (req.body.jobType) {
      updateData.payType = req.body.jobType === "Contract" ? "fixed" : "hourly";
    }
    if (req.body.category) updateData.category = req.body.category;
    if (req.body.skills) updateData.skills = req.body.skills;
    if (req.body.status) updateData.status = req.body.status;

    // Update gig
    const updatedGig = await GigModel.updateGig(id, updateData, userId);

    res.status(200).json({
      success: true,
      message: "Gig updated successfully",
      gig: updatedGig,
    });
  } catch (error) {
    console.error("Update gig error:", error);
    res.status(error.message.includes("Not authorized") ? 403 : 500).json({
      success: false,
      message: error.message || "Server error while updating gig",
    });
  }
};

// Delete a gig
exports.deleteGig = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Delete gig
    await GigModel.deleteGig(id, userId);

    res.status(200).json({
      success: true,
      message: "Gig deleted successfully",
    });
  } catch (error) {
    console.error("Delete gig error:", error);
    res.status(error.message.includes("Not authorized") ? 403 : 500).json({
      success: false,
      message: error.message || "Server error while deleting gig",
    });
  }
};

// Apply for a gig
exports.applyForGig = async (req, res) => {
  try {
    const { id } = req.params; // gig id from URL
    const { name, email, phone, message } = req.body;
    const userId = req.user.id;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email and phone are required",
      });
    }

    // Application data
    const applicationData = {
      name,
      email,
      phone,
      message: message || "",
    };

    // Apply for the gig
    const updatedGig = await GigModel.applyToGig(id, userId, applicationData);

    res.status(200).json({
      success: true,
      message: "Application submitted successfully",
      gig: updatedGig,
    });
  } catch (error) {
    console.error("Apply for gig error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server error while applying for gig",
    });
  }
};
