import * as firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDktt0IGukSSMvsuqvbn21fP_3QdIdeXOM",
  authDomain: "app-estudos-ea84a.firebaseapp.com",
  projectId: "app-estudos-ea84a",
  storageBucket: "app-estudos-ea84a.appspot.com",
  messagingSenderId: "1013913378509",
  appId: "1:1013913378509:web:d92965c48e4fa28a371384",
  measurementId: "G-BBT74034V4",
};

firebase.initializeApp(config);

export async function loginUser(username: string, password: string) {
  const email = `${username}@codedamn.com`;
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
