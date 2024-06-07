# ReactJS Firebase Integration Abstraction 2.0

This repository contains an abstraction layer for integrating Firebase services with a ReactJS application. It provides simplified methods for handling authentication, Realtime Database, Storage, and Firestore operations.

## Installation

To use this abstraction layer in your ReactJS project, follow these steps:

1. Install the necessary dependencies:
   ```bash
   npm install firebase @firebase/database @firebase/storage @firebase/firestore
   ```
2. Clone this repository:

   ```bash
   git clone https://github.com/Programmer-RD-AI/Firebase-Abstract-Integration.git
   ```

3. Copy the relevant files (`firebase-config.js`, `FirebaseAuthentication.js`, `FirebaseRealtimeDatabase.js`, `FirebaseStorage.js`, `FirebaseFirestore.js`) into your ReactJS project.

4. Modify the `firebase-config.js` file according to your Firebase project credentials.

## Usage

### Authentication

The `FirebaseAuthentication` class provides methods for user authentication:

```javascript
// Example usage
import FirebaseAuthentication from "./FirebaseAuthentication.js";

const auth = new FirebaseAuthentication();

const [success, userId] = await auth.register(email, password);
if (success) {
  console.log("User registered successfully. UserID:", userId);
} else {
  console.error("Error registering user:", userId);
}
```

### Realtime Database

The `FirebaseRealtimeDatabase` class allows CRUD operations on Firebase Realtime Database:

```javascript
// Example usage
import FirebaseRealtimeDatabase from "./FirebaseRealtimeDatabase.js";

const realtimeDb = new FirebaseRealtimeDatabase("collectionName", uid);

const data = { field1: "value1", field2: "value2" };

const [success, docId] = await realtimeDb.create(data);
if (success) {
  console.log("Document created successfully. DocumentID:", docId);
} else {
  console.error("Error creating document:", docId);
}
```

### Storage

<!-- Implementation details for Firebase Storage will go here -->

### Firestore

<!-- Implementation details for Firestore will go here -->

<hr>

This should reflect the usage of the abstraction layer in the context of the EdTract ReactJS project. If you have any more changes or additions, feel free to let me know!
