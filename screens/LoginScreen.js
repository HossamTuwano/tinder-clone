import { View, Text, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const { signInWithGoogle, loading } = useAuth();
  const navigation = useNavigation(); 
  
  return (
    <View>
      <Text>{loading ? 'Loading...' : 'Login To the App'}</Text>
      <Button title="Login" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;
