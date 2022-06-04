import { Button } from "@rneui/base";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const PrimaryButton = (props: any) => {
  return <Button style={styles.button} title={props.title} />;
};
const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 40,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    borderRadius: 12,
    borderColor: COLORS.primary,
  },
});
