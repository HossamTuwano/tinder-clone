import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Touchable,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import getMatchedUserInfo from "../lib/getMatchedUserInfo";
import useAuth from "../hooks/useAuth";
import { useRoute } from "@react-navigation/native";
import tw from "twrnc";
import SenderMessage from "../components/SenderMessage";
import ReceiverMessage from "../components/ReceiverMessage";

const MessageScreen = () => {
  const user = useAuth();
  const { params } = useRoute();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const { matchDetails } = params;

  //   useEffect(
  //     () =>
  //       onSnapshot(
  //         query(
  //           collection(db, "matches", matchDetails.id, "messages"),
  //           orderBy("timestamp", "desc")
  //         ),
  //         (snapshot) =>
  //           setMessages(
  //             snapshot.docs.map((doc) => ({
  //               id: doc.id,
  //               ...doc.data(),
  //             }))
  //           )
  //       ),
  //     [matchDetails, db]
  //   );

  //   const sendMessage = () => {
  //     addDoc(collection(db, "matches", matchDetails.id, "messages"), {
  //       timestamp: serverTimestap(),
  //       userId: user.uid,
  //       displayName: user.displayName,
  //       photoURL: matchDetails.users[user.uid].photoURL,
  //       message: input,
  //     });

  //     setInput("");
  //   };

  const sendMessage = () => {};
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header
        title={getMatchedUserInfo(matchDetails?.users, user.uid).displayName}
        callEnabled
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw`flex-1`}
        keyboardVerticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={messages}
            style={tw`pl-4`}
            renderItem={(item) => {
              messages.userId === user.uid ? (
                <SenderMessage key={messages.id} message={messages} />
              ) : (
                <ReceiverMessage key={messages.id} message={messages} />
              );
            }}
          />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <View
        style={tw`flex-row justify-between items-center border-t border-gray-200 px-5 py-2`}
      >
        <TextInput
          style={tw`h-10 text-lg`}
          placeholder="Send Message..."
          onChange={setInput}
          onSubmitEditing={sendMessage}
          value={input}
        />
        <Button title="Send" color="#FF5864" onPress={sendMessage} />
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;
