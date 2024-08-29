import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const OTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = () => {
    if (otp.trim() === "") {
      Alert.alert("Error", "Please enter the OTP.");
    } else {
      navigation.navigate("Register");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        value={otp}
        onChangeText={setOtp}
        placeholder="Enter OTP"
        keyboardType="number-pad"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black", // Orange color
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 16,
    borderColor: "orange", // Orange border color
    borderWidth: 1,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "orange", // Orange color
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "black", // White text color
    fontSize: 18,
    fontWeight: "bold",
  },
});
