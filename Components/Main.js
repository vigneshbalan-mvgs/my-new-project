import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "./Home/HomeScreen.js";
import Trends from "./Trends/Trends.js";
import Profile from "./Profile/Profile.js";
import Create from "./Create/Create.js";
import TeamBuild from "./TeamBuild/TeamBuild.js";
import Chat from "./Chat/Chat.js";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Trends":
              iconName = "trending-up";
              break;
            case "Profile":
              iconName = "person";
              break;
            case "Create":
              iconName = "add-circle";
              break;
            case "TeamBuild":
              iconName = "group";
              break;
            case "Chat":
              iconName = "chat";
              break;
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Trends"
        component={Trends}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="TeamBuild"
        component={TeamBuild}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Main;
