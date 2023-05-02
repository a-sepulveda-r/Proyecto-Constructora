import { createContext, useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { app } from "../config/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    const auth = getAuth(app);
    await auth.signInWithEmailAndPassword(email, password);
  };

  const register = async (email, password) => {
    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, email, password); // Usamos la función createUserWithEmailAndPassword directamente desde el paquete firebase/auth
  };

  const logout = async () => {
    const auth = getAuth(app);
    await signOut(auth);
  };

  const values = {
    currentUser,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
