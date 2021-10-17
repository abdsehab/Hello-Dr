import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase.confiq';

const InitializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default InitializeFirebase;