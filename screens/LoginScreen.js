import { View, Text, Button } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const { signInWithGoogle, loading } = useAuth();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>{loading ? "Loading..." : "Login To the App"}</Text>
      <Button title="Login" onPress={signInWithGoogle} />
    </SafeAreaView>
  );
};

export default LoginScreen;
