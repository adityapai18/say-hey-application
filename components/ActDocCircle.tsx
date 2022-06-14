import { Text } from "@rneui/themed";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { COLORS, FONTS, SHADOWS } from "../constants";

export const ActDocCircle = (props: any) => {
  return (
    <View style={{ marginTop: 19, marginRight: 22 }}>
      <Image source={require("../assets/actDoc1.png")}></Image>
      <Text
        style={[
          styles.text,
          {
            fontSize: 12,
            fontWeight: "400",
            textAlign: "center",
            marginTop: 11,
          },
        ]}
      >
        Jenifer
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.regular,
  },
});
