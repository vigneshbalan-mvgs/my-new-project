import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";

const RegisterForm = ({ navigation }) => {
  const { uid } = route.params;
  const [photo, setPhoto] = useState(null);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSport, setSelectedSport] = useState("");

  const saveProfile = async () => {
    try {
      await firestore().collection("users").doc(uid).set({
        username,
        firstName,
        lastName,
        dob,
        gender: selectedGender,
        sport: selectedSport,
        photo,
        dob,
        gender,
      });
      //after saving details, navigate to main page
      navigation.navigate("Main");
    } catch (error) {
      console.log("Error saving profile", error);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.uri);
    }
  };

  const handleSave = () => {
    if (
      !username.trim() ||
      !firstName.trim() ||
      !lastName.trim() ||
      !dob.trim() ||
      !selectedGender.trim() ||
      !selectedSport.trim()
    ) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    } else {
      Alert.alert("Success", "Profile saved successfully.");
      navigation.navigate("Main");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TouchableOpacity onPress={pickImage} style={styles.photoContainer}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.photo} />
        ) : (
          <Text style={styles.photoText}>Pick a Photo</Text>
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <View>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      {/* Gender Section */}
      <Text style={styles.label}>Select Gender:</Text>
      <Picker
        selectedValue={selectedGender}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedGender(itemValue)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
      {/* Sports Section */}
      <Text style={styles.label}>Select Sport:</Text>
      <Picker
        selectedValue={selectedSport}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedSport(itemValue)}
      >
        <Picker.Item label="Select Sport" value="" />
        <Picker.Item label="Football" value="football" />
        <Picker.Item label="Basketball" value="basketball" />
        <Picker.Item label="Tennis" value="tennis" />
        <Picker.Item label="Cricket" value="cricket" />
      </Picker>
      {/* Date of Birth */}
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={dob}
        keyboardType="number-pad"
        onChangeText={setDob}
      />
      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff", // White background for the container
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "black",
  },
  photoContainer: {
    alignItems: "center",
    marginBottom: 20,
    color: "black",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 2,
  },
  photoText: {
    color: "black",
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: "#FF6F00", // Orange border color
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: "black",
  },
  button: {
    width: "100%",
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
export default RegisterForm;
