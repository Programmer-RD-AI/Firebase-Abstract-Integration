import {
  ref,
  getDownloadURL,
  deleteObject,
  uploadString,
  storage,
} from "./config/firebase.js";

/**
 * Class representing Firebase Storage operations.
 */
export class Storage {
  /**
   * Constructs a new instance of the Storage class.
   * @param {string} initPath - The initial path for storage operations.
   */
  constructor(initPath) {
    this.initPath = initPath;
  }

  /**
   * Uploads a base64-encoded image to Firebase Storage.
   * @param {string} path - The path to store the image.
   * @param {string} imageBase64 - The base64-encoded image data.
   * @returns {Promise<[boolean, string | Error, string]>} A promise containing upload status, error message (if any), and download URL.
   */
  async uploadByte8Array(path, imageBase64) {
    try {
      // Get a reference to the storage location
      const storageRef = ref(storage, this.initPath + path);
      // Upload the base64-encoded image
      await uploadString(storageRef, imageBase64, "base64");
      // Get the download URL of the uploaded image
      const downloadURL = await this.getDownloadURL(path);
      return [true, downloadURL];
    } catch (error) {
      console.error("Error uploading image:", error);
      return [false, error.message, NaN];
    }
  }

  /**
   * Uploads a file to Firebase Storage.
   * @param {File} file - The file to upload.
   * @param {string} path - The path to store the file.
   * @returns {Promise<[boolean, string | Error]>} A promise containing upload status and download URL (if successful).
   */
  async uploadFile(file, path) {
    try {
      // Get a reference to the storage location
      const storageRef = ref(storage, this.initPath + path);
      // Upload the file
      const snapshot = await storageRef.put(file);
      // Get the download URL of the uploaded file
      const downloadURL = await snapshot.ref.getDownloadURL();
      return [true, downloadURL];
    } catch (error) {
      console.error("Error uploading file:", error);
      return [false, error];
    }
  }

  /**
   * Retrieves the download URL of a file from Firebase Storage.
   * @param {string} path - The path of the file.
   * @returns {Promise<[boolean, string | Error]>} A promise containing retrieval status and download URL (if successful).
   */
  async getDownloadURL(path) {
    try {
      // Get a reference to the storage location
      const storageRef = ref(storage, this.initPath + path);
      // Get the download URL of the file
      const downloadURL = await getDownloadURL(storageRef);
      return [true, downloadURL];
    } catch (error) {
      console.error("Error getting download URL:", error);
      return [false, error.message];
    }
  }

  /**
   * Deletes a file from Firebase Storage.
   * @param {string} path - The path of the file to delete.
   * @returns {Promise<[boolean, string | Error]>} A promise containing deletion status and download URL (if successful).
   */
  async deleteFile(path) {
    try {
      // Get a reference to the storage location
      const storageRef = ref(storage, this.initPath + path);
      // Delete the file
      await deleteObject(storageRef);
      return [true, NaN];
    } catch (error) {
      console.error("Error deleting file:", error);
      return [false, error.message];
    }
  }
}

export default Storage;
