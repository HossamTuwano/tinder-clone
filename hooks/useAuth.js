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
  const signInWithGoogle = () => {
    // try {
    fetch("http://10.0.2.2:5272/api/UsersContoller", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: {
        name: "nana mwangaza",
        age: "23",
        gender: "female",
        occupation: "software developer",
      },
    })
      .then((response) => console.log(response.json))
      .catch((error) => console.log(error));
  };

  const memoedValue = useMemo(
    () => ({
      user,
      signInWithGoogle,
      logout,
    }),
    [user, error, loading]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
