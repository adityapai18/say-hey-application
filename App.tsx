import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Signup from "./screens/Signup";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as Font from "expo-font";
import { useEffect } from "react";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const Stack = createStackNavigator();

export default function App() {
  const [first, setfirst] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      AvenirLTStd: require("./assets/fonts/AvenirLTStd.ttf"),
    }).then(()=>setfirst(true))
  };
  useEffect(() => {
    loadFonts();
  });
  if (!first) return null;
  return <Signup />;
}
