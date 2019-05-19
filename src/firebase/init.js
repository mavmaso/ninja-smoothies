import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC2FZvQixyKAl59cpb1CnmgZHtM-S3TsBg",
  authDomain: "ninja-smoothies-98992.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-98992.firebaseio.com",
  projectId: "ninja-smoothies-98992",
  storageBucket: "ninja-smoothies-98992.appspot.com",
  messagingSenderId: "53906919256",
  appId: "1:53906919256:web:dae75b26ccd98c09"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnap: true })

//export store
export default firebaseApp.firestore()
