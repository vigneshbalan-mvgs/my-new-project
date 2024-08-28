import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

const Scroll = () => {
  <ScrollView
    style={styles.scrollView}
    contentContainerStyle={styles.contentContainer}
  >
    <View style={styles.box}>
      <Text>1.One</Text>
    </View>
    <View style={styles.box}>
      <Text>1.One</Text>
    </View>
    <View style={styles.box}>
      <Text>1.One</Text>
    </View>
    <View style={styles.box}>
      <Text>1.One</Text>
    </View>
    <View style={styles.box}>
      <Text>1.One</Text>
    </View>
    <View style={styles.box}>
      <Text>1.One</Text>
    </View>
    <View style={styles.box}>
      <Text>1.One</Text>
    </View>
    <View style={styles.box}>
      <Text>1.One</Text>
    </View>
  </ScrollView>;
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  box: {
    width: 150,
    height: 150,
    margin: 10,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Scroll;
