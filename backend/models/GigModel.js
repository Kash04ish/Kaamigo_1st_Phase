const { db } = require("../utils/firebase");

// Collection names
const GIGS_COLLECTION = "gigs";

// Gig model functions
const GigModel = {
  /**
   * Create a new gig in Firestore
   * @param {Object} gigData - Gig data to be saved
   * @param {string} userId - ID of the user creating the gig
   * @returns {Promise<Object>} Created gig data
   */
  async createGig(gigData, userId) {
    // Prepare gig data
    const gig = {
      title: gigData.title,
      description: gigData.description,
      location: gigData.location,
      payRate: {
        min: gigData.payRate.min,
        max: gigData.payRate.max,
      },
      payType: gigData.payType || "hourly",
      category: gigData.category,
      skills: gigData.skills || [],
      postedBy: userId,
      applicants: [],
      status: "open",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Create gig in Firestore
    const docRef = await db.collection(GIGS_COLLECTION).add(gig);
    return { id: docRef.id, ...gig };
  },

  /**
   * Get gig by ID
   * @param {string} gigId - Gig ID
   * @returns {Promise<Object>} Gig data
   */
  async getGigById(gigId) {
    const gigDoc = await db.collection(GIGS_COLLECTION).doc(gigId).get();

    if (!gigDoc.exists) {
      return null;
    }

    return { id: gigDoc.id, ...gigDoc.data() };
  },

  /**
   * Get all gigs with optional filtering
   * @param {Object} filters - Optional filters
   * @returns {Promise<Array>} Array of gigs
   */
  async getGigs(filters = {}) {
    let query = db.collection(GIGS_COLLECTION);

    // Apply filters
    if (filters.status) {
      query = query.where("status", "==", filters.status);
    }

    if (filters.category) {
      query = query.where("category", "==", filters.category);
    }

    if (filters.postedBy) {
      query = query.where("postedBy", "==", filters.postedBy);
    }

    // Get gigs
    const snapshot = await query.get();
    const gigs = [];

    snapshot.forEach((doc) => {
      gigs.push({ id: doc.id, ...doc.data() });
    });

    return gigs;
  },

  /**
   * Update a gig
   * @param {string} gigId - Gig ID
   * @param {Object} gigData - Data to update
   * @param {string} userId - User ID performing the update
   * @returns {Promise<Object>} Updated gig data
   */
  async updateGig(gigId, gigData, userId) {
    // Get gig to verify ownership
    const gig = await this.getGigById(gigId);

    if (!gig) {
      throw new Error("Gig not found");
    }

    if (gig.postedBy !== userId) {
      throw new Error("Not authorized to update this gig");
    }

    // Update gig
    await db
      .collection(GIGS_COLLECTION)
      .doc(gigId)
      .update({
        ...gigData,
        updatedAt: new Date(),
      });

    return this.getGigById(gigId);
  },

  /**
   * Delete a gig
   * @param {string} gigId - Gig ID
   * @param {string} userId - User ID performing the delete
   * @returns {Promise<boolean>} Success status
   */
  async deleteGig(gigId, userId) {
    // Get gig to verify ownership
    const gig = await this.getGigById(gigId);

    if (!gig) {
      throw new Error("Gig not found");
    }

    if (gig.postedBy !== userId) {
      throw new Error("Not authorized to delete this gig");
    }

    // Delete gig
    await db.collection(GIGS_COLLECTION).doc(gigId).delete();
    return true;
  },

  /**
   * Apply to a gig
   * @param {string} gigId - Gig ID
   * @param {string} userId - User ID applying
   * @param {Object} applicationData - Application data
   * @returns {Promise<Object>} Updated gig data
   */
  async applyToGig(gigId, userId, applicationData) {
    const gig = await this.getGigById(gigId);

    if (!gig) {
      throw new Error("Gig not found");
    }

    if (gig.status !== "open") {
      throw new Error("This gig is not open for applications");
    }

    // Check if user already applied
    const alreadyApplied = gig.applicants.some((app) => app.userId === userId);

    if (alreadyApplied) {
      throw new Error("You have already applied to this gig");
    }

    // Add application
    const newApplicant = {
      userId,
      applicationData,
      appliedAt: new Date(),
      status: "pending",
    };

    await db
      .collection(GIGS_COLLECTION)
      .doc(gigId)
      .update({
        applicants: [...gig.applicants, newApplicant],
        updatedAt: new Date(),
      });

    return this.getGigById(gigId);
  },

  /**
   * Update application status
   * @param {string} gigId - Gig ID
   * @param {string} applicationUserId - User ID of the applicant
   * @param {string} status - New status (pending, rejected, accepted)
   * @param {string} currentUserId - Current user ID (must be gig owner)
   * @returns {Promise<Object>} Updated gig data
   */
  async updateApplicationStatus(
    gigId,
    applicationUserId,
    status,
    currentUserId
  ) {
    const gig = await this.getGigById(gigId);

    if (!gig) {
      throw new Error("Gig not found");
    }

    if (gig.postedBy !== currentUserId) {
      throw new Error("Not authorized to update application status");
    }

    const applicantIndex = gig.applicants.findIndex(
      (app) => app.userId === applicationUserId
    );

    if (applicantIndex === -1) {
      throw new Error("Application not found");
    }

    // Update application status
    const updatedApplicants = [...gig.applicants];
    updatedApplicants[applicantIndex].status = status;

    await db.collection(GIGS_COLLECTION).doc(gigId).update({
      applicants: updatedApplicants,
      updatedAt: new Date(),
    });

    return this.getGigById(gigId);
  },
};

module.exports = GigModel;
