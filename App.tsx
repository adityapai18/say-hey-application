import Signup from "./screens/Signup";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import RootNavigation from "./navigation";
import { FONTS } from "./constants";
import { ProvideAuth } from "./lib/auth/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./screens/OnBoardingScreen";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  const [first, setfirst] = useState(false);
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState<Boolean>();
  const Stack = createStackNavigator();
  const loadFonts = async () => {
    await Font.loadAsync({
      AvenirLTStd: require("./assets/fonts/AvenirLTStd.ttf"),
    }).then(() => setfirst(true));
  };
  useEffect(() => {
    loadFonts();
    const isAppLaunched = async () => {
      // AsyncStorage.removeItem("isAppFirstLaunched");
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem("isAppFirstLaunched", "false");
      } else {
        setIsAppFirstLaunched(false);
      }
      console.log(appData, isAppFirstLaunched);
    };
    isAppLaunched();
  }, []);

  if (!first) return null;
  return (
    <ProvideAuth>
      <NavigationContainer>
        <Stack.Navigator >
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnBoard"
              component={OnboardingScreen}
              options={{
                headerShown: false,
              }}
            />
          )}
          <Stack.Screen
            name="Root"
            component={RootNavigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProvideAuth>
  );
}
