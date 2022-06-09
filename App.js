import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import React from "react";
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
  const [loaded] = useFonts({
    AvenirLTStd: require("./assets/fonts/AvenirLTStd.ttf"),
  });

  
  if (!loaded) return null;
  return (<NavigationContainer>
  <Stack.Navigator  initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
</NavigationContainer>);
}
