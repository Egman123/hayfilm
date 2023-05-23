import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrEIFUmODWKkn15ew7L2KRS6te_8vzMag",
    authDomain: "disney-cloneplus.firebaseapp.com",
    projectId: "disney-cloneplus",
    storageBucket: "disney-cloneplus.appspot.com",
    messagingSenderId: "884225923305",
    appId: "1:884225923305:web:3b5304184f9a10f89e3878",
    measurementId: "G-DDSY0B5N2Q"
  };
  


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const storage = getStorage(app);
  
  export {auth, provider, storage, signInWithPopup};
  export default db;