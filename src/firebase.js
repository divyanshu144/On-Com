import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config

const firebaseConfig = {
  apiKey: "AIzaSyAJDz0e9aqlnYT-cfoGOQI0MBsncxgbZz8",
  authDomain: "oncom-a99fd.firebaseapp.com",
  projectId: "oncom-a99fd",
  storageBucket: "oncom-a99fd.appspot.com",
  messagingSenderId: "708989593299",
  appId: "1:708989593299:web:2b151292dde1337c429626",
  measurementId: "G-M58MGQNM6K"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
