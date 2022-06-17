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

export const ScheduleCardHome = (props: any) => {
  return (
    <View style={styles.ScheduleCard}>
      <Text
        style={[
          styles.text,
          { fontSize: 28, fontWeight: "400", color: "white" },
        ]}
      >
        Mental Depression
      </Text>
      <Text
        style={[
          styles.text,
          { fontSize: 14, fontWeight: "400", color: "white", marginTop: 4 },
        ]}
      >
        Today 10.00 AM
      </Text>
      <View style={styles.checkupButton}>
        <Text
          style={[
            styles.text,
            {
              fontSize: 15,
              fontWeight: "400",
              color: "white",
              marginVertical: 4,
              marginHorizontal: 8,
            },
          ]}
        >
          1st checkup
        </Text>
      </View>
      <View
        style={{
          marginTop: 21,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image source={require("../assets/ScheduleCardDoctor.png")}></Image>
        <View style={{ marginLeft: 4 }}>
          <Text
            style={[
              styles.text,
              {
                fontSize: 15,
                fontWeight: "800",
                color: "white",
              },
            ]}
          >
            Dr. Daryl Nehls
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 12,
                fontWeight: "400",
                color: "#F5F8FA",
              },
            ]}
          >
            Psychiatrist, M.D
          </Text>
        </View>
      </View>
      <Image
        source={require("../assets/Ellipse80.png")}
        style={[styles.shadeRight,{borderBottomRightRadius:16}]}
      ></Image>
      <Image
        source={require("../assets/Ellipse81.png")}
        style={[styles.shadeRight,{borderBottomRightRadius:16}]}
      ></Image>
      <Image
        source={require("../assets/Ellipse82.png")}
        style={[styles.shadeRight,{borderBottomRightRadius:16}]}
      ></Image>
      <Image
        source={require("../assets/Depression.png")}
        style={[styles.shadeRight, { right: 14, bottom: -3 }]}
      ></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  ScheduleCard: {
    height: 203,
    backgroundColor: "#054A80",
    borderRadius: 16,
    marginTop: 16,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 15,
  },
  text: {
    fontFamily: FONTS.regular,
  },
  checkupButton: {
    backgroundColor: "#0A94FF",
    borderRadius: 8,
    width: "auto",
    alignSelf: "flex-start",
    marginTop: 9,
  },
  shadeRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    resizeMode:"cover"
  },
});
