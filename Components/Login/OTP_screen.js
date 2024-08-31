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

import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import auth from "../../firebaseConfig.js";
import firestore from "@react-native-firebase/firestore";

const OTPScreen = ({ navigation }) => {
  const { verificationId } = route.params;
  const [otp, setOtp] = useState("");

  const confirmCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);
      Alert.alert("OTP verified successfully");
      navigation.navigate("Register");
    } catch (error) {
      Alert.alert("Error Verifying Code", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        value={otp}
        onChangeText={confirmCode}
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
