// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
  //  apiKey: "AIzaSyBNeVFd4i4dWI5jTz-D4IuN_m55Sl1QaK0",
    //authDomain: "todo-app-9fe01.firebaseapp.com",
    //projectId: "todo-app-9fe01",
    //storageBucket: "todo-app-9fe01.appspot.com",
    //messagingSenderId: "1025903123889",
    //appId: "1:1025903123889:web:0abb341f6cb7c732d4b190",
    //measurementId: "G-GZNPL709JZ"
  //};
  import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNeVFd4i4dWI5jTz-D4IuN_m55Sl1QaK0",
    authDomain: "todo-app-9fe01.firebaseapp.com",
    projectId: "todo-app-9fe01",
    storageBucket: "todo-app-9fe01.appspot.com",
    messagingSenderId: "1025903123889",
    appId: "1:1025903123889:web:0abb341f6cb7c732d4b190",
    measurementId: "G-GZNPL709JZ"
  });
  const db = firebase.firestore();
  export default db;
  