import admin from 'firebase-admin';

import serviceAccount from './firebase.config.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://quiz-dev-d120e-default-rtdb.asia-southeast1.firebasedatabase.app"
});
