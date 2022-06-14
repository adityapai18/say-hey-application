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
  ImageBackground,
} from "react-native";
import { COLORS, FONTS, SHADOWS } from "../constants";

export const DoctorReviewCard = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={{ height: 185, borderRadius: 12, alignSelf: "center" }}>
        <Image
          source={require("../assets/DoctorReview.png")}
          resizeMode="contain"
        ></Image>
        <View style={styles.starView}>
          <View
            style={{
              flexDirection: "row",
              margin: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.text,
                { fontSize: 12, fontWeight: "800", marginRight: 5 },
              ]}
            >
              4.5
            </Text>
            <Image source={require("../assets/ReviewStar.png")}></Image>
          </View>
        </View>
      </View>
      <Text
        style={[
          styles.text,
          { fontSize: 18, fontWeight: "800", marginTop: 10 },
        ]}
      >
        Dr. Amanda Brown
      </Text>
      <Text
        style={[
          styles.text,
          { fontSize: 12, fontWeight: "300"},
        ]}
      >
        Psychiatrist, MBBS
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 19,
    marginRight: 20,
    height: 257,
    width: 209,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  text: {
    fontFamily: FONTS.regular,
  },
  starView: {
    right: 0,
    top: 0,
    position: "absolute",
    margin: 8,
    backgroundColor: "white",
    borderRadius: 8,
  },
});
