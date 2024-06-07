import { auth, firebase } from "./config/firebase.js";
import Firestore from "./firestore.js";

/**
 * Class representing authentication functionalities.
 */
export class Authentication {
  /**
   * Creates a new user with the provided user data.
   * @param {object} userData - The user data to create the user.
   * @returns {Promise<[boolean, string]>} - A tuple indicating success status and the user ID.
   */
  async createUser(userData) {
    try {
      const userRecord = await auth.createUser(userData);
      return [true, userRecord.uid];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Generates a verification email link for the provided email.
   * @param {string} email - The user's email.
   * @returns {string} - The verification email link.
   */
  verificationEmail(email) {
    return auth.generateEmailVerificationLink(email);
  }

  /**
   * Logs in the user with the provided email and password.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {Promise<[boolean, string]>} - A tuple indicating success status and the user ID.
   */
  async loginUser(email, password) {
    try {
      const userRecord = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      return [true, userRecord.user.uid];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Updates the user with the provided user ID and update data.
   * @param {string} uid - The user ID to update.
   * @param {object} updateUserData - The data to update the user with.
   * @returns {Promise<[boolean, object]>} - A tuple indicating success status and the updated user data.
   */
  async updateUser(uid, updateUserData) {
    try {
      const userRecord = await auth.updateUser(uid, updateUserData);
      return [true, userRecord.toJSON()];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Retrieves the user with the provided user ID.
   * @param {string} uid - The user ID to retrieve.
   * @returns {Promise<[boolean, object]>} - A tuple indicating success status and the retrieved user data.
   */
  async getUser(uid) {
    try {
      const user = await auth.getUser(uid);
      return [true, user];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Deletes the user with the provided user ID.
   * @param {string} uid - The user ID to delete.
   * @returns {Promise<[boolean, string]>} - A tuple indicating success status and the deleted user ID.
   */
  async deleteUser(uid) {
    try {
      await auth.deleteUser(uid);
      return [true, uid];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Creates a phone number verification session cookie.
   * @param {string} phoneNumber - The user's phone number.
   * @returns {Promise<string>} - The session cookie.
   */
  async createPhoneVerification(phoneNumber) {
    const request = await auth.createSessionCookie(phoneNumber, {
      expiresIn: 3600,
    });
    return request;
  }

  /**
   * Verifies a phone number verification session cookie.
   * @param {string} verificationId - The verification ID.
   * @param {string} otp - The one-time password.
   * @returns {Promise<Object>} - The user credentials.
   */
  async verifyPhoneVerification(verificationId, otp) {
    const userCreds = await auth.verifySessionCookie(verificationId, otp);
    return userCreds;
  }

  /**
   * Sends a password reset email to the user.
   * @param {string} email - The user's email.
   * @returns {Promise<void>} - A promise indicating the success of sending the email.
   */
  async resetPassword(email) {
    const request = await auth.sendPasswordResetEmail(email);
    return request;
  }

  /**
   * Retrieves a list of all users.
   * @returns {Promise<Array<Object>>} - A promise containing an array of user objects.
   */
  async getUsers() {
    const listUsersResult = await auth.listUsers();
    const users = await Promise.all(
      listUsersResult.users.map(async (userRecord) => {
        // Additional async operation to read user data from Firestore
        let userData;
        try {
          const fs = await Firestore("users", userRecord.uid);
          userData = fs.read();
        } catch {
          userData = { false: "No user data found" };
        }
        return { ...userRecord, ...userData }; // Include default
      })
    );
  }
}
