import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // Cart state
  const [cart, setCart] = useState([]);

  // const createNewUser = (email, password) => {
  //   setLoading(true);
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };
  const createNewUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  // Observer set----->>
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Login/SignIn ---->>

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user Info
  const updateUserProfile = (updateData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateData);
  };

  // Login with google
  const GoogleLogin = (email, password) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Forgot Password with email
  // const forgotPassword = () => {
  //   return sendPasswordResetEmail(auth, email);
  // };
  const forgotPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // cart Methods
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const AuthInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    updateUserProfile,
    GoogleLogin,
    forgotPassword,
    cart,
    addToCart,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
