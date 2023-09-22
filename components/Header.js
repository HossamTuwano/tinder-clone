import { View, Text, TouchableOpacity, Touchable } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const Header = ({ title, callEnabled }) => {
  const navigation = useNavigation();
  return (  
    <View style={tw`flex-row items-center p-2 justify-between`}>
      <View style={tw`flex flex-row items-center`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`p-2 flex-row items-center`}
        >
          <Ionicons name="chevron-back-outline" size={34} color="#FF5864" />
          <Text style={tw`text-2xl font-bold pl-2`}>{title}</Text>
        </TouchableOpacity>
      </View>
      
  {callEnabled && (
    <TouchableOpacity style={tw`rounded-full mr-4 p-4 bg-red-200`}>
        <Foundation style={tw``} name="telephone" size={20} color={red}/>
    </TouchableOpacity>
  )}
    </View>
  );
};

export default Header;
