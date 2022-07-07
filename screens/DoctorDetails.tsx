import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS } from "../constants";

const DoctorDetails = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#dbe0e4" }}>
      <View style={{ height: "50%" }}>
        <ImageBackground
          source={require("../assets/DoctorDetailsImg.png")}
          resizeMode="contain"
          style={{ flex: 1 }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            borderTopStartRadius: 25,
            borderTopEndRadius: 25,
            padding: 28,
          }}
        >
          <Text style={[styles.text, { fontWeight: "400", fontSize: 28 }]}>
            Dr. Usman Yusuf
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontWeight: "400",
                fontSize: 16,
                color: "#6C7072",
                marginTop: 8,
              },
            ]}
          >
            M.B.B.S, Psychiatrist, MD
          </Text>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  padding: 14,
                  backgroundColor: "#F5F8FA",
                  marginRight: 12,
                  borderRadius: 8,
                }}
              >
                <Image source={require("../assets/MedalIcon.png")}></Image>
              </View>
              <Text style={[styles.text, { color: "#6C7072", fontSize: 16 }]}>
                8 years
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  padding: 14,
                  backgroundColor: "#F5F8FA",
                  marginRight: 12,
                  borderRadius: 8,
                }}
              >
                <Image source={require("../assets/RatingsIcon.png")}></Image>
              </View>
              <Text style={[styles.text, { color: "#6C7072", fontSize: 16 }]}>
                4.8
              </Text>
            </View>
          </View>
          <Text style={[styles.text, { fontWeight: "bold", fontSize: 18 }]}>
            About Doctor
          </Text>
          <Text
            style={[
              styles.text,
              { color: "#6C7072", fontSize: 14, lineHeight: 20 },
            ]}
          >
            Dr. Usman Yusuf is an M.B.B.S, Psychiatrist, MD with special
            interest Mental Health problems. He was awarded with the recent
            publications about GERD problems from CDC
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("DateAndTimeScreen");
            }}
          >
            <Text
              style={[
                styles.text,
                { fontWeight: "700", fontSize: 18, color: "white" },
              ]}
            >
              Check Schedule
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.regular,
  },
  button: {
    backgroundColor: "#0A94FF",
    marginBottom: 5,
    height: 56,
    width: "100%",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
