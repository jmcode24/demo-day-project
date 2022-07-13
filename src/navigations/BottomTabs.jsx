import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather, Foundation, Octicons } from "@expo/vector-icons";
import HomeStackScreen from "../screens/HomeStackScreen";
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tab.Screen
        name="Main Home"
        component={HomeStackScreen}
        options={{
          // title: "Charity Village",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Campaigns"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Donations"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
