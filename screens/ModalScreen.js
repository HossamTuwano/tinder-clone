import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
const ModalScreen = () => {
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);

  const navigation = useNavigation();

  const incompleteForm = !image || !job || !age;

  const updateUserProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayName: user,
      photoUrl: image,
      job: job,
      age: age,
      timestamp: serverTimeStamp(),
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Update your profile",
      headStyle: {
        backgroundColr: "#FF5864",
      },
      headerTitleStyle: { colors: "white" },
    });
  });

  return (
    <SafeAreaView>
      <View style={tw`relative`}>
        <Image
          style={tw`w-full h-20`}
          resizeMode="contain"
          source={{
            uri: "https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png",
          }}
        />
        <Text style={tw`text-xl text-gray-500 font-bold p-2 text-center`}>
          {" "}
          Welcome {user}
        </Text>
        <Text style={tw`text-center text-red-400 font-bold p-4`}>
          {" "}
          Step 1: The Profile Pic
        </Text>
        <TextInput
          value={image}
          onChangeText={setImage}
          placeholder="Profile photo URL"
          style={tw`text-center pb-2`}
        />
        <Text style={tw`text-center text-red-400 font-bold p-4`}>
          Step 2: The Job
        </Text>

        <TextInput
          value={job}
          onChangeText={setJob}
          placeholder="Enter your occupation"
          style={tw`text-center  pb-2`}
        />

        <Text style={tw`text-center text-red-400 font-bold p-4`}>
          Step 3: The Age
        </Text>

        <TextInput
          value={age}
          onChangeText={setAge}
          placeholder="Enter your age"
          style={tw`text-center pb-2`}
          maxLength={2}
          keyboardType="numeric"
        />

        <TouchableOpacity
          disabled={incompleteForm}
          onPress={updateUserProfile}
          style={[tw`absolute -bottom-10 left-[35%]`]}
        >
          <Text style={tw`text-center text-white text-xl`}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ModalScreen;
