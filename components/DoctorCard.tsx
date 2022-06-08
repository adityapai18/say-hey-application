import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FONTS } from "../constants";

export const DoctorCard = (props: any) => {
  return (
    <View style={styles.doctorCard}>
      <Image source={require("../assets/DoctorRound.png")}></Image>
      <Text
        style={[
          styles.text,
          { fontSize: 20, fontWeight: "400", color: "white",marginTop:5 },
        ]}
      >
        {props.name}
      </Text>
      <Text
        style={[
          styles.text,
          { fontSize: 12, fontWeight: "400", color: "white" },
        ]}
      >
        {props.qualification}
      </Text>
      <Image
        source={require("../assets/DoctorCardShade4.png")}
        style={styles.shadeLeft}
      ></Image>
      <Image
        source={require("../assets/DoctorCardShade3.png")}
        style={styles.shadeLeft}
      ></Image>
      <Image
        source={require("../assets/DoctorCardShade2.png")}
        style={styles.shadeRight}
      ></Image>
      <Image
        source={require("../assets/DoctorCardShade1.png")}
        style={styles.shadeRight}
      ></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.regular,
  },
  doctorCard: {
    marginTop: 15,
    height: 180,
    backgroundColor: "#084c84",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 15,
  },
  shadeRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  shadeLeft: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});
