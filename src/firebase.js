import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

// import { Provider } from 'react-redux';

const firebaseConfig = {
  apiKey: "AIzaSyB52Y6Y-apm3AdKpfIRrGT-tqsoXv7jFyA",
  authDomain: "linkedin-clone-d5b28.firebaseapp.com",
  projectId: "linkedin-clone-d5b28",
  storageBucket: "linkedin-clone-d5b28.appspot.com",
  messagingSenderId: "1046923620152",
  appId: "1:1046923620152:web:3dad738daa8b99f8595bcd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
