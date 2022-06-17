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
import { ScheduleCard } from "../components/ScheduleCard";
import { COLORS, FONTS, SHADOWS } from "../constants";
const ScheduleScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={[styles.appoinmentType, { backgroundColor: "#0A94FF" }]}>
          <Text style={[styles.text, { color: "white" }]}>Upcoming</Text>
        </View>
        <View style={styles.appoinmentType}>
          <Text style={[styles.text, { color: "#A4AEBC" }]}>Complete</Text>
        </View>
        <View style={styles.appoinmentType}>
          <Text style={[styles.text, { color: "#A4AEBC" }]}>Cancel</Text>
        </View>
      </View>
      <ScrollView>
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    backgroundColor: COLORS.offWhite,
  },

  text: {
    fontFamily: FONTS.regular,
  },
  subText: {
    fontFamily: FONTS.regular,
    color: COLORS.gray,
    textAlign: "center",
  },
  appoinmentType: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    borderRadius: 8,
  },
});

export default ScheduleScreen;
