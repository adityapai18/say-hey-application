import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const PrimaryButton = (props: any) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 40,
    backgroundColor: COLORS.primary,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2,
    borderRadius: 12,
    borderColor: COLORS.primary,
  },
  text: {
    color: COLORS.white,
    fontWeight: "bold",
  },
});
