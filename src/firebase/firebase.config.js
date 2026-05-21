import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAeG3j2EJw7_jYsh-TVfu1AVYeiWLyZUs",
  authDomain: "ideavault-d14a3.firebaseapp.com",
  projectId: "ideavault-d14a3",
  storageBucket: "ideavault-d14a3.firebasestorage.app",
  messagingSenderId: "499385759153",
  appId: "1:499385759153:web:7878550aa0acad0736b990",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
