import { View, Text } from "react-native";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as Google from "expo-auth-session";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "firebase/auth";
// import { auth } from "../firebase";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  // useEffect(
  //   () =>
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         // Logged In
  //         setUser(user);
  //       } else {
  //         // Not Logged In
  //         setUser([]);
  //       }
  //       setLoadingInitial(false);
  //     }),
  //   []
  // );

  const logout = () => {
    setLoading(true);

    signOut(auth)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };
  const signInWithGoogle = async () => {
    setUser(user.push("hossam"));
  };

  const memoedValue = useMemo(
    () => ({
      user: "hossam",
      signInWithGoogle,
      logout,
    }),
    [user, error, loading]
  );

  console.log(user);
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
