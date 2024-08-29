import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function LoginPage({ navigation }) {
  const [userNumber, setUserNumber] = useState("");

  const handleLogin = () => {
    if (userNumber.trim() === "") {
      Alert.alert("Details Needed", "Please fill in all fields.");
    } else {
      navigation.navigate("OTP");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SportsPerson</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#aaa"
        keyboardType="number-pad"
        value={userNumber}
        onChangeText={setUserNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>
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
  logo: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    width: "80%",
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "orange",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
