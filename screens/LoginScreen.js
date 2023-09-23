import { View, Text, Button } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const LoginScreen = () => {
  const { signInWithGoogle, loading } = useAuth();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`flex justify-center h-full`}>
      <View style={tw`px-2`}>
        <Text style={tw`text-center mb-3`}>
          {loading ? "Loading..." : "Click login to continue"}
        </Text>
        <Button title="Login" onPress={() => navigation.navigate("Home")} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
