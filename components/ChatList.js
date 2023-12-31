import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import useAuth from "../hooks/useAuth";
import ChatRow from "./ChatRow";

const ChatList = () => {
  const [matches, setMatches] = useState(["m"]);
  const { user } = useAuth();

  //   useEffect(() => {
  //     onSnapshot(
  //       query(
  //         collection(db, "matches"),
  //         where("usersMatched", "array-contains", user.uid)
  //       ),
  //       (snapshot) =>
  //         setMatches(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             ...doc.data(),
  //           }))
  //         )
  //     );
  //   }, [user]);

  console.log(matches);

  return true ? (
    <FlatList
      style={tw`h-full`}
      data={matches}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatRow matchDetails={item} />}
    />
  ) : (
    <View style={tw`p-5`}>
      <Text style={tw`text-center text-lg`}>No matches at the moment </Text>
    </View>
  );
};

export default ChatList;
