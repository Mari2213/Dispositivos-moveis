import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDktt0IGukSSMvsuqvbn21fP_3QdIdeXOM",
  authDomain: "app-estudos-ea84a.firebaseapp.com",
  projectId: "app-estudos-ea84a",
  storageBucket: "app-estudos-ea84a.appspot.com",
  messagingSenderId: "1013913378509",
  appId: "1:1013913378509:web:d92965c48e4fa28a371384",
  measurementId: "G-BBT74034V4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
