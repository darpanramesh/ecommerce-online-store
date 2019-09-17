import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDZi-DNQ9sbcZIQAJdIb0hZUJkCU6S6rQQ",
  authDomain: "online-shop-collections.firebaseapp.com",
  databaseURL: "https://online-shop-collections.firebaseio.com",
  projectId: "online-shop-collections",
  storageBucket: "",
  messagingSenderId: "748142482581",
  appId: "1:748142482581:web:36737bb1c114d97e91779c"
};

  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);



 const provider = new firebase.auth.FacebookAuthProvider();
export{
  firebaseApp,provider
}