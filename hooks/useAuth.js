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
import { auth } from "../firebase";

// import { auth } from "../firebase";

const AuthContext = createContext({});

const config = {
  androidClientId: process.env.ANDROID_CLIENT_ID,
  iosClientId: process.env.IOS_CLIENT_ID,
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged In
          setUser(user);
        } else {
          // Not Logged In
          setUser(null);
        }
        setLoadingInitial(false);
      }),
    []
  );

  const logout = () => {
    setLoading(true);

    signOut(auth)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };
  const signInWithGoogle = async () => {
    setLoading(true);
    await Google.loadAsync(config)
      .then(async (loginResult) => {
        if (loginResult.type === "success") {
          const { idToken, accesToken } = loginResult;
          const credential = GoogleAuthProvider.credential(idToken, accesToken);
          await signInWithCredential(auth, credential);
        }
        return Promise.reject();
      })
      .catch(function (error) {
        return setError(error);
      })
      .finally(() => setLoading(false));
  };

  const memoedValue = useMemo(
    () => ({
      user: 'hossam',
      loading,
      error,
      signInWithGoogle,
      logout,
    }),
    [user, error, loading]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
