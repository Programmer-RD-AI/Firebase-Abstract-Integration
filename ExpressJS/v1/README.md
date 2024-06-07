## Firebase Integration with Express.js (Version 1)

### Introduction

This project provides a comprehensive integration of Firebase services with an Express.js backend. It covers authentication, Firestore database, Realtime Database, and Firebase Storage operations. The project demonstrates best practices for implementing Firebase functionalities in an Express.js application.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Programmer-RD-AI/Firebase-Abstract-Integration.git
   ```

2. Install dependencies:

   ```bash
   cd ExpressJS/v1
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the `server` directory.
   - Add your Firebase project configuration and service account key path in the `.env` file.

### Folder Structure

```plaintext
ExpressJS/v1
│   .env
│   .gitignore
│   authentication.js
│   config
│   ├── firebase.js
│   firestore.js
│   package.json
│   README.md
│   realtime.js
│   storage.js
│   utils
│   ├── getDocumentIdByContent.js
```

### Usage

#### Authentication

The `Authentication` class provides methods for user authentication:

- `createUser(userData)`: Creates a new user with the provided data.
- `loginUser(email, password)`: Logs in a user with the provided email and password.
- `updateUser(uid, updateUserData)`: Updates user data with the provided user ID and update data.
- `getUser(uid)`: Retrieves user data with the provided user ID.
- `deleteUser(uid)`: Deletes a user with the provided user ID.
- `createPhoneVerification(phoneNumber)`: Initiates phone number verification.
- `verifyPhoneVerification(verificationId, otp)`: Verifies phone number verification.
- `resetPassword(email)`: Sends a password reset email.
- `getUsers()`: Retrieves a list of all users.

#### Firestore

The `Firestore` class provides CRUD operations for Firestore collections:

- `create(data)`: Creates a new document in the Firestore collection.
- `read()`: Reads a document from the Firestore collection.
- `update(data)`: Updates a document in the Firestore collection.
- `delete()`: Deletes a document from the Firestore collection.
- `readPaths()`: Retrieves all paths of documents in the Firestore collection.
- `readAll()`: Retrieves all documents from the Firestore collection.

#### Realtime Database

The `RealTime` class provides CRUD operations for Firebase Realtime Database:

- `create(data)`: Creates a new item in the database.
- `read()`: Retrieves all items from the database.
- `update(id, newData)`: Updates an item in the database.
- `delete(id)`: Deletes an item from the database.

#### Firebase Storage

The `Storage` class provides operations for Firebase Storage:

- `uploadByte8Array(path, imageBase64)`: Uploads a base64-encoded image to Firebase Storage.
- `uploadFile(file, path)`: Uploads a file to Firebase Storage.
- `getDownloadURL(path)`: Retrieves the download URL of a file from Firebase Storage.
- `deleteFile(path)`: Deletes a file from Firebase Storage.

### Contributors

- [Ranuga Disansa](https://github.com/Programmer-RD-AI)
- [Supun Narangoda](https://github.com/SupunNarangoda)

This project was developed for the [SupportVol](https://github.com/SupportVol) project.
