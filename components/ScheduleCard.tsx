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
import { Divider } from "@rneui/themed";
import { COLORS, FONTS, SHADOWS } from "../constants";

export const ScheduleCard = (props: any) => {
  return (
    <View style={styles.ScheduleCard}>
      <View style={{ flexDirection: "row" }}>
        <Image source={require("../assets/DoctorScheduleCard.png")}></Image>
        <View style={{ marginLeft: 15, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.text, { fontWeight: "700", fontSize: 14 }]}>
              Dr. Jessica Lim
            </Text>
            <Text style={[styles.text, { fontWeight: "300", fontSize: 12 }]}>
              Fri, Dec 18
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              {
                fontWeight: "300",
                fontSize: 12,
                color: "#979C9E",
                marginTop: 5,
              },
            ]}
          >
            Psychologist
          </Text>
        </View>
      </View>
      <Divider style={{ marginVertical: 25 }} />
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/TimeVectorIcon.png")}></Image>
          <Text style={[styles.text, { fontWeight: "300", fontSize: 13 }]}>
            04:00 PM - 05:00 PM
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/LocationVectorIcon.png")}></Image>
          <Text style={[styles.text, { fontWeight: "300", fontSize: 13 }]}>
            Siloam Hospital
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 25,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Pressable style={styles.button}>
          <Text
            style={[
              styles.text,
              { fontWeight: "300", fontSize: 16, color: "#0A94FF" },
            ]}
          >
            Cancel
          </Text>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: "#0A94FF" }]}>
          <Text
            style={[
              styles.text,
              { fontWeight: "300", fontSize: 16, color: "white" },
            ]}
          >
            Reschedule
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ScheduleCard: {
    height: 220,
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 16,
    padding: 24,
  },
  text: {
    fontFamily: FONTS.regular,
  },
  button: {
    borderRadius: 8,
    borderColor: "#0A94FF",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  //   shadowColor: "#000000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 3,
  //     },
  //     shadowRadius: 5,
  //     shadowOpacity: 1.0,
  //     elevation: 15,
});
