import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD_QHyTk9HcnUd-YmDyFnBgPRK6VMaXBhE",
  authDomain: "managementool-6fec4.firebaseapp.com",
  databaseURL: "https://managementool-6fec4.firebaseio.com",
  projectId: "managementool-6fec4",
  storageBucket: "managementool-6fec4.appspot.com",
  messagingSenderId: "626991050900"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase