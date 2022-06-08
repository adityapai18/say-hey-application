import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DateAndTimeScreen from  "./screens/DateAndTimeScreen";
import React from "react";
import DateAndTimeSelectScreen from "./screens/DateAndTimeSelectScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    AvenirLTStd: require("./assets/fonts/AvenirLTStd.ttf"),
  });

  
  if (!loaded) return null;
  return <DateAndTimeSelectScreen />;
}
