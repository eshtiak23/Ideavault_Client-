import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // register
  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const loginUser = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };

  // update profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // logout
  const logoutUser = () => {
    return signOut(auth);
  };

  // observer
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

      if (currentUser?.email) {

  fetch("${import.meta.env.VITE_API_URL}/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email: currentUser.email,
    }),
  });

}

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };

  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logoutUser,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}