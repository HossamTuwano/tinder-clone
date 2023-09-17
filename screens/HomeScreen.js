import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  return (
    <SafeAreaView>
      <View style={tw`flex-row items-center justify-between px-5`}>
        <TouchableOpacity onPress={logout}>
          <Image
            style={tw`rounded-full h-10 w-10`}
            source={{
              uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={tw`rounded-full h-14 w-14`}
            source={{
              uri: "https://w7.pngwing.com/pngs/698/493/png-transparent-tinder-hd-logo-thumbnail.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={tw``}>
          <Ionicons name="chatbubbles-sharp" color='#FF5864' size={30} />
        </TouchableOpacity>
      </View>

      {/* <Text>I am the HomeScreen</Text>
      <Button
        title="Go to Chat Screen"
        onPress={() => {
          navigation.navigate("Chat");
        }}
      />
      <Button title="logout" onPress={logout} /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
