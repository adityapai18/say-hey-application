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
  ActivityIndicator,
} from "react-native";
import { AppointmentCard } from "../components/AppointmentCard";
import { COLORS, FONTS, SHADOWS } from "../constants";
import { useAuth } from "../lib/auth/AuthContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { meetData } from "../lib/api/Connection";
import { SafeAreaProvider } from "react-native-safe-area-context";
const MyProfile = ({ navigation }: any) => {
  const auth = useAuth();
  const [refreshing, setrefreshing] = useState(false);
  const [docsTotal, setdocsTotal] = useState([]);
  const [totalApp, settotal] = useState(0);
  useEffect(() => {
    setrefreshing(true)
    meetData(auth?.user.email).then((value) => {
      if (value.data.appointments) {
        settotal(value.data.appointments.length);
        var arr: any = value.data.appointments;
        var clean = arr.filter(
          (curr, index, self) =>
            index ===
            self.findIndex(
              (t) => t.docdata1.doc_name === curr.docdata1.doc_name
            )
        );
        clean.map((item) => console.log(item));
        setdocsTotal(clean);
        setrefreshing(false)
      }
    }).catch(err=>setrefreshing(false))
  }, []);
  // var clean = arr.filter((arr, index, self) =>
  //   index === self.findIndex((t) => (t.save === arr.save && t.State === arr.State)))
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
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
            <Text>{totalApp}</Text>
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
            <Text>{docsTotal.length}</Text>
          </View>
        </View>
        <ActivityIndicator
          animating={refreshing}
          size="large"
          style={{
            zIndex: 1,
            display:refreshing?'flex':'none'
          }}
          color="#0A94FF"
        />
        <View style={{ flex: 1 }}>
          {docsTotal &&
            docsTotal.map((item) => (
              <AppointmentCard
                image={{ uri: item.docdata1.prof_pic }}
                name={item.docdata1.doc_name}
                stream={item.docdata1.doc_pass}
                exp={item.docdata1.experience}
                fee={item.docdata1.price}
              />
            ))}
        </View>
        {/* 
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
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
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
