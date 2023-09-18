import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const DUMMY_DATA = [
  {
    firstName: "Hossam",
    lastName: "Tuwano",
    job: "Software Developer",
    photoUrl:
      "https://avatars.githubusercontent.com/u/51116268?s=400&u=97168419edb7621855406b0b948e77150edcbfbf&v=4",
    age: 23,
    id: 1,
  },
  {
    firstName: "Samatar",
    lastName: "Aziz",
    job: "Software Developer",
    photoUrl: "https://avatars.githubusercontent.com/u/39125180?v=4",
    age: 21,
    id: 2,
  },
  {
    firstName: "Rohit",
    lastName: "Gulam",
    job: "Software Developer",
    photoUrl: "https://avatars.githubusercontent.com/u/83160332?v=4",
    age: 23,
    id: 3,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const swipeRef = useRef(null);

  return (
    <SafeAreaView style={tw`flex-1`}>
      {/* Header */}
      <View style={tw`flex-row items-center justify-between px-5`}>
        <TouchableOpacity onPress={logout}>
          <Image
            style={tw`rounded-full h-10 w-10`}
            source={{
              uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Modal");
          }}
        >
          <Image
            style={tw`rounded-full h-14 w-14`}
            source={{
              uri: "https://w7.pngwing.com/pngs/698/493/png-transparent-tinder-hd-logo-thumbnail.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbubbles-sharp" color="#FF5864" size={30} />
        </TouchableOpacity>
      </View>
      {/* End of the Header */}

      {/* Cards */}

      <View style={tw`flex -mt-6`}>
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          cards={DUMMY_DATA}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4DED30",
                },
              },
            },
          }}
          backgroundColor={"#F4D0E9"}
          onSwipedLeft={() => {
            console.log("Swipe PASS");
          }}
          onSwipedRight={() => {
            console.log("Swipe MATCH");
          }}
          renderCard={(card) => (
            <View key={card.id} style={tw`relative rounded-xl bg-white h-3/4 `}>
              <Image
                style={tw`absolute top-0 rounded-xl h-full w-full`}
                source={{ uri: card.photoUrl }}
              />
              <View
                style={[
                  tw`absolute bottom-0 justify-between justify-between py-2 rounded-b-xl px-6 items-center flex-row bg-white w-full h-20`,
                  styles.cardShadow,
                ]}
              >
                <View>
                  <Text style={tw`text-xl font-bold`}>
                    {card.firstName} {card.lastName}
                  </Text>
                  <Text>{card.job}</Text>
                </View>

                <Text style={tw`text-2xl font-bold`}>{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <View style={tw`flex flex-row justify-evenly`}>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeLeft()}
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-red-200`}
        >
          <Entypo name="cross" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeRight()}
          style={tw`items-center justify-center rounded-full w-16 h-16 bg-green-200`}
        >
          <AntDesign name="heart" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
