import { Text } from "@rneui/themed";
import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { DoctorCard } from "../components/DoctorCard";
import { Button } from "@rneui/base";
import { COLORS, FONTS, SHADOWS } from "../constants";

const Transanction = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DoctorCard
          name="Dr Usman Yusuf"
          qualification="M.B.B.S , Psychiatrist , MD"
        />
        <View style={{ marginTop: 36, padding: 16, flexDirection: "row" }}>
          <View
            style={{
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/Location.png")}></Image>
          </View>
          <View>
            <Text style={[styles.text, { fontSize: 18, fontWeight: "800" }]}>
              Zoom Meeting
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 14,
                  fontWeight: "300",
                  color: "#6C7072",
                  marginTop: 5,
                },
              ]}
            >
              Please check your mail for the details
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 16, padding: 16, flexDirection: "row" }}>
          <View
            style={{
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/CalendarGreen.png")}></Image>
          </View>
          <View>
            <Text style={[styles.text, { fontSize: 18, fontWeight: "800" }]}>
              Appointment Date
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 14,
                  fontWeight: "300",
                  color: "#6C7072",
                  marginTop: 5,
                },
              ]}
            >
              Monday, March 29 2022
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 16, padding: 16, flexDirection: "row" }}>
          <View
            style={{
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/TimerPurple.png")}></Image>
          </View>
          <View>
            <Text style={[styles.text, { fontSize: 18, fontWeight: "800" }]}>
              Time
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 14,
                  fontWeight: "300",
                  color: "#6C7072",
                  marginTop: 5,
                },
              ]}
            >
              09.00 am - 10.00 am
            </Text>
          </View>
        </View>
        <View style={styles.PatientInfo}>
          <Text
            style={[
              styles.text,
              {
                color: "white",
                fontWeight: "700",
                fontSize: 18,
                marginLeft: 15,
              },
            ]}
          >
            Patient's Information
          </Text>
        </View>
        <View
          style={{
            margin: 12,
            padding: 12,
            backgroundColor: "white",
            borderRadius: 12,
          }}
        >
          <Text style={[styles.text, { fontSize: 16, fontWeight: "800" }]}>
            Patient Name
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: 12, fontWeight: "300", marginTop: 4 },
            ]}
          >
            Amanda Monopoe
          </Text>
        </View>
        <View
          style={{
            margin: 12,
            padding: 12,
            backgroundColor: "white",
            borderRadius: 12,
          }}
        >
          <Text style={[styles.text, { fontSize: 16, fontWeight: "800" }]}>
            Age
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: 12, fontWeight: "300", marginTop: 4 },
            ]}
          >
            35 years old
          </Text>
        </View>
        <View
          style={{
            margin: 12,
            padding: 12,
            backgroundColor: "white",
            borderRadius: 12,
          }}
        >
          <Text style={[styles.text, { fontSize: 16, fontWeight: "800" }]}>
            Gender
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: 12, fontWeight: "300", marginTop: 4 },
            ]}
          >
            Female
          </Text>
        </View>
        <View
          style={{
            margin: 12,
            padding: 12,
            backgroundColor: "white",
            borderRadius: 12,
          }}
        >
          <Text style={[styles.text, { fontSize: 16, fontWeight: "800" }]}>
            Problems
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: 12, fontWeight: "300", marginTop: 4 },
            ]}
          >
            Broken Marriage, Family Problems & Feeling sad
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// CSS PART
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
  PatientInfo: {
    marginTop: 32,
    height: 56,
    backgroundColor: "#054A80",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Transanction;
