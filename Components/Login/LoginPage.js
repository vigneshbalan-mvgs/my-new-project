import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import { auth } from "../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const recaptchaVerifier = useRef(null);
  const navigation = useNavigation();

  const senVerification = async () => {
    if (phoneNumber !== "string" || phoneNumber.trim() === "") {
      try {
        const phoneProvider = new firebase.auth.PhoneAuthProvider(auth);
        const verificationId = await phoneProvider.verifyPhoneNumber(
          phoneNumber,
          recaptchaVerifier.current,
        );
        Alert.alert("OTP sent successfully");
        navigation.navigate("OTP", { verificationId, phoneNumber });
      } catch (error) {
        Alert.alert(error.message);
      }
    } else {
      Alert.alert("Please enter a valid phone number");
    }
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={auth.app.options}
      />
      <Text style={styles.logo}>SportsPerson</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#aaa"
        keyboardType="number-pad"
        autoCompleteType="tel"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TouchableOpacity style={styles.button} onPress={senVerification}>
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
