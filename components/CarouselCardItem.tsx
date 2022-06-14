import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { FONTS } from "../constants";
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
export const CarouselCard = ({ item, index }: any) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={require("../assets/DoctorCardShade4.png")}
        style={styles.shadeLeft}
      ></Image>
      <Image
        source={require("../assets/DoctorCardShade3.png")}
        style={styles.shadeLeft}
      ></Image>
      <View style={{ marginLeft: 20, marginTop: 20, height: 84, width: 245 }}>
        <Text
          style={[
            styles.text,
            { fontSize: 20, color: "white", lineHeight: 28 },
          ]}
        >
          {item.title}
        </Text>
      </View>
      <View style={{ marginLeft: 20, marginTop: 16, height: 40, width: 162 }}>
        <Text
          style={[
            styles.text,
            { fontSize: 14, color: "white", lineHeight: 20 },
          ]}
        >
          {item.body}
        </Text>
      </View>
      <View style={styles.shadeRight}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../assets/GroupShades.png")}
            style={{ position: "absolute" }}
          ></Image>
          <Image source={require("../assets/MentalHealthVector.png")}></Image>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.regular,
  },
  container: {
    height: 180,
    backgroundColor: "#054A80",
    borderRadius: 16,
    width:ITEM_WIDTH*0.9,
  },
  shadeLeft: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  shadeRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
