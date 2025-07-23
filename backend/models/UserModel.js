const { db } = require("../utils/firebase");
const bcrypt = require("bcryptjs");

// Collection names
const USERS_COLLECTION = "users";

// User model functions
const UserModel = {
  /**
   * Create a new user in Firestore
   * @param {Object} userData - User data to be saved
   * @returns {Promise<Object>} Created user data
   */
  async createUser(userData) {
    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Prepare user data with hashed password
    const user = {
      email: userData.email.toLowerCase(),
      password: hashedPassword,
      displayName: userData.displayName || "",
      profilePicture: userData.profilePicture || "",
      phoneNumber: userData.phoneNumber || "",
      bio: userData.bio || "",
      location: userData.location || "",
      skills: userData.skills || [],
      createdAt: new Date(),
    };

    // Check if email already exists
    const emailExists = await db
      .collection(USERS_COLLECTION)
      .where("email", "==", user.email)
      .get();

    if (!emailExists.empty) {
      throw new Error("Email already in use");
    }

    // Create user in Firestore
    const docRef = await db.collection(USERS_COLLECTION).add(user);
    const newUser = { id: docRef.id, ...user };
    delete newUser.password; // Remove password from returned object

    return newUser;
  },

  /**
   * Get user by ID
   * @param {string} userId - User ID
   * @returns {Promise<Object>} User data
   */
  async getUserById(userId) {
    const userDoc = await db.collection(USERS_COLLECTION).doc(userId).get();

    if (!userDoc.exists) {
      return null;
    }

    const userData = userDoc.data();
    delete userData.password; // Never send password back

    return { id: userDoc.id, ...userData };
  },

  /**
   * Get user by email
   * @param {string} email - User email
   * @returns {Promise<Object>} User data including password for auth
   */
  async getUserByEmail(email) {
    const querySnapshot = await db
      .collection(USERS_COLLECTION)
      .where("email", "==", email.toLowerCase())
      .limit(1)
      .get();

    if (querySnapshot.empty) {
      return null;
    }

    const userDoc = querySnapshot.docs[0];
    return { id: userDoc.id, ...userDoc.data() };
  },

  /**
   * Update user data
   * @param {string} userId - User ID to update
   * @param {Object} userData - Data to update
   * @returns {Promise<Object>} Updated user data
   */
  async updateUser(userId, userData) {
    // Don't allow email updates through this method
    if (userData.email) delete userData.email;

    // If updating password, hash it
    if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, 10);
    }

    await db
      .collection(USERS_COLLECTION)
      .doc(userId)
      .update({
        ...userData,
        updatedAt: new Date(),
      });

    const updatedUser = await this.getUserById(userId);
    return updatedUser;
  },

  /**
   * Delete a user
   * @param {string} userId - User ID to delete
   * @returns {Promise<boolean>} Success status
   */
  async deleteUser(userId) {
    await db.collection(USERS_COLLECTION).doc(userId).delete();
    return true;
  },

  /**
   * Compare password for login
   * @param {string} candidatePassword - Password to check
   * @param {string} hashedPassword - Stored hashed password
   * @returns {Promise<boolean>} True if passwords match
   */
  async comparePassword(candidatePassword, hashedPassword) {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  },
};

module.exports = UserModel;
