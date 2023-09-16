import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-rn";

export default function App() {
  return (
    <View style={tw("flex-1 justify-end items-center")}>
      <Text>Open up App.js to start working on your hooray!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
