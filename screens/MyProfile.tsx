import { Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";
import { Button } from "@rneui/base";
import { AppointmentCard } from "../components/AppointmentCard";
import { COLORS, FONTS, SHADOWS } from "../constants";
import { useAuth } from "../lib/auth/AuthContext";
import { TouchableOpacity } from "react-native-gesture-handler";
const MyProfile = ({ navigation }: any) => {
  const auth = useAuth();
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{ marginTop: 15, flexDirection: "row" }}>
          <View style={styles.profilePic}>
            <Image
              source={{ uri: auth?.user.photoURL }}
              style={{
                width: 85,
                height: 85,
                borderRadius: 10,
                position: "absolute",
              }}
            ></Image>
          </View>
          <View style={{ marginLeft: "6%", marginTop: 5 }}>
            <Text
              style={[
                styles.text,
                { fontSize: 19, fontWeight: "800", color: "#3B566E" },
              ]}
            >
              {auth?.user.displayName}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 11,
                  fontWeight: "400",
                  color: "#404446",
                  marginTop: 5,
                },
              ]}
            >
              {auth?.user.email}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        >
          <Text
            style={[
              styles.text,
              {
                fontSize: 13,
                fontWeight: "800",
                color: "#0A94FF",
              },
            ]}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15,
            marginTop: 5,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 13,
                  fontWeight: "800",
                  color: "#3B566E",
                },
              ]}
            >
              Appointments
            </Text>
            <Text>27</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 13,
                  fontWeight: "800",
                  color: "#3B566E",
                },
              ]}
            >
              My Doctors
            </Text>
            <Text>10</Text>
          </View>
        </View>
        <AppointmentCard
          image={require("../assets/AppointmentDoc1.png")}
          name={"Dr. Penny Tool"}
          stream={"Gynecologist"}
          address={"931 0lmstead RD - 750m away"}
          dateTime={"March 31, 2019 / 9:00 AM"}
        />
        <AppointmentCard
          image={require("../assets/AppointmentDoc2.png")}
          name={"Dr. Gustav Purpleson"}
          stream={"Gynecologist"}
          address={"5 Hewitt Blvd - 120m away"}
          dateTime={"May 12, 2019 / 9:30 AM"}
        />
        <AppointmentCard
          image={require("../assets/AppointmentDoc3.png")}
          name={"Dr. Girth Wiedenbauer"}
          stream={"Dermatologist"}
          address={"931 0lmstead RD - 750m away"}
          dateTime={"July 15, 2019 / 10:30 AM"}
        />
        <AppointmentCard
          image={require("../assets/AppointmentDoc3.png")}
          name={"Dr. Girth Wiedenbauer"}
          stream={"Dermatologist"}
          address={"931 0lmstead RD - 750m away"}
          dateTime={"July 20, 2019 / 10:30 AM"}
        />
      </SafeAreaView>
    </ScrollView>
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
  profilePic: {
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#504DE5",
    width: 91,
    height: 91,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#0A94FF",
    height: 40,
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: "8%",
  },
});

export default MyProfile;
