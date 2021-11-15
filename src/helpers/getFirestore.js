import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD072huh1ZvgdRCdLYo8x97HL_azhJioIc",
  authDomain: "serendipia-36350.firebaseapp.com",
  projectId: "serendipia-36350",
  storageBucket: "serendipia-36350.appspot.com",
  messagingSenderId: "934239260372",
  appId: "1:934239260372:web:82b61970e208a2ad3a7541"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
  return firebase.firestore(app);
}