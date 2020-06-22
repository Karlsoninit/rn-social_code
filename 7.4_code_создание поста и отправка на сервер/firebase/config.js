import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDFauNPYaTGMGWKEvyHdTh8m_kfhKDiQuU",
  authDomain: "rn-social-391ec.firebaseapp.com",
  databaseURL: "https://rn-social-391ec.firebaseio.com",
  projectId: "rn-social-391ec",
  storageBucket: "rn-social-391ec.appspot.com",
  messagingSenderId: "974670373504",
  appId: "1:974670373504:web:fe01e1286f5ad11ff0fc65",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
