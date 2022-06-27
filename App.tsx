import Signup from "./screens/Signup";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import React from "react";
import SignIn from "./screens/Signin";
import { CustomMenu } from "./components/CustomMenu";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigation from './navigation';
import { FONTS } from "./constants";
import { ProvideAuth } from "./lib/auth/AuthContext";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};


export default function App() {
  const [first, setfirst] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      AvenirLTStd: require("./assets/fonts/AvenirLTStd.ttf"),
    }).then(() => setfirst(true));
  };
  useEffect(() => {
    loadFonts();
  });
  if (!first) return null;
  return (
    <ProvideAuth>
    <RootNavigation/>
    </ProvideAuth>
      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName="Home">
      //     <Stack.Screen
      //       name="SignUp"
      //       component={Signup}
      //       options={{
      //         headerShown: false,
      //       }}
      //     />
      //     <Stack.Screen
      //       name="SignIn"
      //       component={SignIn}
      //       options={{
      //         headerShown: false,
      //       }}
      //     />
      //     {/* <Stack.Screen
      //         name="VerifyAccount"
      //         component={VerifyAccount}
      //         options={{
      //           headerShown: false,
      //         }}
      //       /> */}

          
      //   </Stack.Navigator>
      // </NavigationContainer>
  );
}
