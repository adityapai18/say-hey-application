import { Text } from "@rneui/themed";
import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView
} from "react-native";
import { DoctorCard } from "../components/DoctorCard";
import { Button } from "@rneui/base";
import { COLORS, FONTS, SHADOWS } from "../constants";

const Transanction = () => {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
        <DoctorCard
        name="Dr Usman Yusuf"
        qualification="M.B.B.S , Psychiatrist , MD"
        />
      <View
        style={{
          marginTop: 36,
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ justifyContent: "space-evenly" }}>
          <Text style={[styles.text, { fontSize: 18, fontWeight: "800" }]}>
            Total Payment
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: 14, fontWeight: "400", color: "#6C7072" },
            ]}
          >
            Session fee for 60 minutes
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={[styles.text, { fontSize: 18, fontWeight: "800" }]}>
            $200.00
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 16,
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ justifyContent: "space-evenly" }}>
          <Text style={[styles.text, { fontSize: 18, fontWeight: "800" }]}>
            Promo Applied
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={[styles.text, { fontSize: 18, fontWeight: "800" }]}>
            $50.00
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 16,
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ justifyContent: "space-evenly" }}>
          <Text style={[styles.text, { fontSize: 18, fontWeight: "800" }]}>
            To Pay
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={[styles.text, { fontSize: 18, fontWeight: "800" }]}>
            $150.00
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 16,
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ justifyContent: "space-evenly" }}>
          <Text
            style={[
              styles.text,
              { fontSize: 18, fontWeight: "800", color: "#054A80" },
            ]}
          >
            Coupon Applied !
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: 14, fontWeight: "400", color: "#0A94FF" },
            ]}
          >
            First10 Promo 10%
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Pressable>
            <Text
              style={[
                styles.text,
                { fontSize: 18, fontWeight: "800", color: "#0A94FF" },
              ]}
            >
              Change
            </Text>
          </Pressable>
        </View>
      </View>
      <Text
        style={[
          styles.text,
          { fontSize: 19, fontWeight: "800", marginTop: 28 },
        ]}
      >
        Payment Method
      </Text>
      <View
        style={{
          marginVertical: 16,
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ justifyContent: "space-evenly",flexDirection:"row" ,alignItems:"center" }}>
          <Image source={require("../assets/VisaLogo.png")} style={{marginRight:20}}/>
          <View>
          <Text
            style={[
              styles.text,
              { fontSize: 18, fontWeight: "800" },
            ]}
          >
            Visa.......4122
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: 14, fontWeight: "400", color: "#979C9E" },
            ]}
          >
            Primary
          </Text>
          </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Pressable>
            <Text
              style={[
                styles.text,
                { fontSize: 18, fontWeight: "800", color: "#0A94FF" },
              ]}
            >
              Change
            </Text>
          </Pressable>
        </View>
      </View>
      <Button title={"Confirm Appointment"}></Button>
    </SafeAreaView>
    </ScrollView>
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
  
});

export default Transanction;
