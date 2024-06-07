# Express.js Firebase Integration Abstraction 2.0

This repository contains an abstraction layer for integrating Firebase services with an Express.js application. It provides simplified methods for handling authentication, Firestore, Realtime Database, and Storage operations.

## Installation

To use this abstraction layer in your Express.js project, follow these steps:

1. Install the necessary dependencies:

   ```bash
   npm install firebase-admin firebase express
   ```

2. Clone this repository:

   ```bash
   git clone https://github.com/Programmer-RD-AI/Firebase-Abstract-Integration.git
   ```

3. Copy the relevant files (`config`, `utils`, `RealTime.js`, `Firestore.js`, `Storage.js`, `Authentication.js`) into your Express.js project.

4. Modify the configuration files (`firebase.js`, `.env`) according to your Firebase project credentials.

## Usage

### Authentication

The `Authentication` class provides methods for user authentication:

```javascript
// Example usage
import { Authentication } from "./Authentication.js";

const auth = new Authentication();

const userData = { email: "example@example.com", password: "password123" };

const [success, userId] = await auth.createUser(userData);
if (success) {
  console.log("User created successfully. UserID:", userId);
} else {
  console.error("Error creating user:", userId);
}
```

### Firestore

The `Firestore` class allows CRUD operations on Firestore collections:

```javascript
// Example usage
import Firestore from "./Firestore.js";

const firestore = new Firestore("collectionName");

const data = { field1: "value1", field2: "value2" };

const [success, docId] = await firestore.create(data);
if (success) {
  console.log("Document created successfully. DocumentID:", docId);
} else {
  console.error("Error creating document:", docId);
}
```

### Realtime Database

The `RealTime` class provides CRUD operations for Firebase Realtime Database:

```javascript
// Example usage
import RealTime from "./RealTime.js";

const realtime = new RealTime("path/to/database");

const data = { field1: "value1", field2: "value2" };

const [success, itemId] = await realtime.create(data);
if (success) {
  console.log("Item created successfully. ItemID:", itemId);
} else {
  console.error("Error creating item:", itemId);
}
```

### Storage

The `Storage` class offers methods for uploading, downloading, and deleting files in Firebase Storage:

```javascript
// Example usage
import Storage from "./Storage.js";

const storage = new Storage("path/to/storage");

const file = new File(["file contents"], "filename.txt");

const [success, downloadURL] = await storage.uploadFile(file, "path/to/upload");
if (success) {
  console.log("File uploaded successfully. Download URL:", downloadURL);
} else {
  console.error("Error uploading file:", downloadURL);
}
```

## Contributors

- [Ranuga Disansa](https://github.com/Programmer-RD-AI)
- [Neluki Hamangoda](https://github.com/neluki13)
