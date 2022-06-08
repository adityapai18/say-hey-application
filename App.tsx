import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DateAndTimeScreen from  "./screens/DateAndTimeScreen";
import DateAndTimeSelectScreen from "./screens/DateAndTimeSelectScreen";
import Signup from "./screens/Signup";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import Home from "./screens/Home";
import React from "react";
import VerifyAccount from "./screens/VerifyAccount";
import SignIn from "./screens/Signin";
import Transanction from "./screens/Transanction";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createNativeStackNavigator();

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
  return (<NavigationContainer>
  <Stack.Navigator  initialRouteName="Home">
    <Stack.Screen name="Home" component={Transanction} />
  </Stack.Navigator>
</NavigationContainer>);
}
