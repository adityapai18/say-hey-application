import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PdfViewPage from "../screens/PdfViewPage";
import { FONTS } from "../constants";
import SignIn from "../screens/Signin";
import Signup from "../screens/Signup";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
            name="PdfViewPage"
            component={PdfViewPage}
            options={{
              title: "Booking Page",
              headerShown:false,
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: FONTS.regular,
                fontWeight: "700",
                color: "#404446",
                fontSize: 18,
              },
            }}
            />
      </Stack.Navigator>
  );
}
