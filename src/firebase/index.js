import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCFnLaRqYV2tSULentOsoJWRVl_PjyWQ7A",
  authDomain: "duke-tutor-v2.firebaseapp.com",
  databaseURL: "https://duke-tutor-v2.firebaseio.com",
  projectId: "duke-tutor-v2",
  storageBucket: "duke-tutor-v2.appspot.com",
  messagingSenderId: "817827512753",
  appId: "1:817827512753:web:29e59ba4dc58b8b9727d90"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
