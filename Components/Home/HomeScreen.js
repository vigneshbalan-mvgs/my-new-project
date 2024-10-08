import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Search from "../Search/Search";
import PostingPage from "./Post";

export default function HomeScreen() {
  return (
    <View style={styles.container} options={{ headerShown: false }}>
      <Search />
    </View>
  );
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  search: {
    flex: 1,
    justifyContent: "center",
    width: 100,
    height: "40px",
  },
});
