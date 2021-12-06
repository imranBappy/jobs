import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PRODUCT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
//   databaseURL: process.env.REACT_APP_databaseURL,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDP9iW2YtcW0gFdcdKQUux0j9beEuPeY34",
  authDomain: "quiz-dev-d120e.firebaseapp.com",
  databaseURL:
    "https://quiz-dev-d120e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz-dev-d120e",
  storageBucket: "quiz-dev-d120e.appspot.com",
  messagingSenderId: "243291056704",
  appId: "1:243291056704:web:a8404d8db62b1874edcda5",
  measurementId: "G-EK6RPCG37W",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
