The solution involves using Promises and async/await to handle the asynchronous nature of Firebase operations. Ensure that you access the document snapshot's properties only after the data has fully loaded.  Example:

```javascript
// bug.js - demonstrates the bug

import { db } from './firebase'; // Assuming you have a firebase config setup

db.collection('users').doc('user1').get().then((doc) => {
  console.log(doc.data().name); // Error: doc.data() might be undefined
});

// bugSolution.js - corrected code

import { db } from './firebase';

db.collection('users').doc('user1').get().then((doc) => {
  if (doc.exists) {
    console.log(doc.data().name); // Correct: access property after data is loaded
  } else {
    console.error('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
```