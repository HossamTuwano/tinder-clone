import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const MatchedScreen = () => {
  const navigation = useNavigation()
  const {params} = useRoute();

  const {loggedInProfile, userSwipped} = params;

    return (
    <View style={[tw`h-full bg-red-500 pt-20`, {opacity: 0.89}]}>
        <View>
            <Image source={{uri: "https//links.papareact.com/mg9"}}/>
        </View>
    </View>
  );
};

export default MatchedScreen;
