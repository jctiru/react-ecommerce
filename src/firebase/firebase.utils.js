import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB5MlhTymwsCONYRMZnofp-lIlzFqBYP_A",
  authDomain: "react-ecommerce-b2fbe.firebaseapp.com",
  databaseURL: "https://react-ecommerce-b2fbe.firebaseio.com",
  projectId: "react-ecommerce-b2fbe",
  storageBucket: "react-ecommerce-b2fbe.appspot.com",
  messagingSenderId: "446576624909",
  appId: "1:446576624909:web:9c6fdb813758e44e36dc44"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
