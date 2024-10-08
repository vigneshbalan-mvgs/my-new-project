import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Trends() {
  return (
    <View style={styles.container} screenOptions={{ headerShown: false }}>
      <Text style={styles.text}>Trends Screen</Text>
    </View>
  );
}

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
});
