import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZgFj446lO4GdPwH46mOpm0oolyBR8rdk",
    authDomain: "whatsapp-clone-ab0df.firebaseapp.com",
    projectId: "whatsapp-clone-ab0df",
    storageBucket: "whatsapp-clone-ab0df.appspot.com",
    messagingSenderId: "323924175402",
    appId: "1:323924175402:web:08ca2da54f6977f924b153",
    measurementId: "G-6HHV5KW374"
  });

  const database = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export default database;
  export {auth,provider};