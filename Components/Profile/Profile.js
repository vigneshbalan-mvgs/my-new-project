import React from "react";
import { SafeAreaView } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  const profileData = {
    photo: "https://via.placeholder.com/200",
    name: "Firstname LastName",
    sex: "Male",
    dob: "January 1, 1990",
    email: "Username@example.com",
    sports: ["Game1", "Game2", "Game3", "Game4"],
    college: ["University Name 1", "University Name 2"],
    school: ["High School 1", "High School 2"],
    achievement: "State Champion in Basketball",
    playingAtGround: "PlaceName",
    homeTown: "Town Name",
    currentlyIn: "Country Name",
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: profileData.photo }} style={styles.photo} />
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <Text style={styles.name}>{profileData.name}</Text>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Sex:</Text>
          <Text style={styles.infoValue}>{profileData.sex}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>DOB:</Text>
          <Text style={styles.infoValue}>{profileData.dob}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>{profileData.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Playing At Ground:</Text>
          <Text style={styles.infoValue}>{profileData.playingAtGround}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Home Town:</Text>
          <Text style={styles.infoValue}>{profileData.homeTown}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Currently In:</Text>
          <Text style={styles.infoValue}>{profileData.currentlyIn}</Text>
        </View>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.gridItem}>
          <Text style={styles.gridTitle}>Sports:</Text>
          {profileData.sports.map((sport, index) => (
            <Text key={index} style={styles.gridValue}>
              {sport}
            </Text>
          ))}
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridTitle}>Colleges:</Text>
          {profileData.college.map((college, index) => (
            <Text key={index} style={styles.gridValue}>
              {college}
            </Text>
          ))}
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridTitle}>Schools:</Text>
          {profileData.school.map((school, index) => (
            <Text key={index} style={styles.gridValue}>
              {school}
            </Text>
          ))}
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridTitle}>Achievement:</Text>
          <Text style={styles.gridValue}>{profileData.achievement}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  infoContainer: {
    width: "100%",
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoValue: {
    fontSize: 18,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  gridItem: {
    width: "48%",
    marginBottom: 16,
  },
  gridTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  gridValue: {
    fontSize: 18,
  },
});

export default Profile;
