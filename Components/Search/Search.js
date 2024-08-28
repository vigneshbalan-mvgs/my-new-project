import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

const Search = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (text) => {
    setSearch(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder="Search Here..."
        onChangeText={updateSearch}
        value={search}
        platform="default" // Can also be "ios" or "android" for platform-specific styling
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "absolute",
    top: 20,
    backgroundColor: "#fff",
  },
  searchContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  inputContainer: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
  },
});

export default Search;
