import React from "react";
import { Text } from "@rneui/themed";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { Button } from "@rneui/base";
import { PrimaryButton } from "../components/Button";
import { useState } from "react";
import CalendarPicker from "react-native-calendar-picker";
import { COLORS, FONTS, SHADOWS } from "../constants";

const DateAndTimeSelectScreen = ({navigation,route}:any) => {
  const presetTime = {
    avlAt8: false,
    avlAt9: false,
    avlAt10: false,
    avlAt11: false,
    avlAt12: false,
  };
  const [timeObj, setTimeObj] = useState({
    avlAt8: false,
    avlAt9: false,
    avlAt10: false,
    avlAt11: false,
    avlAt12: false,
  });
  const [layoutBool, setlayoutBool] = useState(Math.random() < 0.5);
  const [selectedDate, setSelectedDate] = useState(null);
  const onDateChange = (date: any, type: any) => {
    setSelectedDate(date);
    console.log(date);
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Image source={require("../assets/Doctor.png")}></Image>
          <View style={{ justifyContent: "space-evenly", marginLeft: 20 }}>
            <Text style={[styles.text, { fontSize: 14, fontWeight: "800" }]}>
              Dr. Cipay Mahalani
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 14, fontWeight: "400", color: "#AAAAAA" },
              ]}
            >
              Dermatologist Specialist
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 14, fontWeight: "400", color: "#AAAAAA" },
              ]}
            >
              Cempaka Hospital
            </Text>
          </View>
        </View>
        <View
          style={{ flexDirection: route.params ? "column" : "column-reverse" }}
        >
          <View style={{ marginTop: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Pick a date
            </Text>
            <View style={{ marginTop: 16 }}>
              <CalendarPicker
                allowRangeSelection={false}
                minDate={new Date(2018, 1, 1)}
                maxDate={new Date(2050, 6, 3)}
                nextTitle=">"
                previousTitle="<"
                previousTitleStyle={styles.calendar}
                nextTitleStyle={styles.calendar}
                weekdays={["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]}
                months={[
                  "January",
                  "Febraury",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ]}
                todayBackgroundColor="#ADD8E6"
                selectedDayColor="#054A80"
                selectedDayTextColor="#FFFFFF"
                scaleFactor={375}
                textStyle={{
                  fontFamily: FONTS.regular,
                  color: "#000000",
                }}
                onDateChange={onDateChange}
              />
            </View>
          </View>
          <View style={{ marginTop: 16, marginBottom: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Select Time
            </Text>
            <View
              style={{ marginTop: 15, flexDirection: "row", flexWrap: "wrap" }}
            >
              <Pressable
                style={[
                  styles.time,
                  timeObj.avlAt8 ? styles.availableTime : {},
                ]}
                onPress={() => {
                  setTimeObj({ ...presetTime, avlAt8: true });
                }}
              >
                <Text
                  style={[
                    styles.text,
                    { color: timeObj.avlAt8 ? "white" : "#AAAAAA" },
                  ]}
                >
                  08:00 AM
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.time,
                  timeObj.avlAt9 ? styles.availableTime : {},
                ]}
                onPress={() => {
                  setTimeObj({ ...presetTime, avlAt9: true });
                }}
              >
                <Text
                  style={[
                    styles.text,
                    { color: timeObj.avlAt9 ? "white" : "#AAAAAA" },
                  ]}
                >
                  09:00 AM
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.time,
                  timeObj.avlAt10 ? styles.availableTime : {},
                ]}
                onPress={() => {
                  setTimeObj({ ...presetTime, avlAt10: true });
                }}
              >
                <Text
                  style={[
                    styles.text,
                    { color: timeObj.avlAt10 ? "white" : "#AAAAAA" },
                  ]}
                >
                  10:00 AM
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.time,
                  timeObj.avlAt11 ? styles.availableTime : {},
                ]}
                onPress={() => {
                  setTimeObj({ ...presetTime, avlAt11: true });
                }}
              >
                <Text
                  style={[
                    styles.text,
                    { color: timeObj.avlAt11 ? "white" : "#AAAAAA" },
                  ]}
                >
                  11:00 AM
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.time,
                  timeObj.avlAt12 ? styles.availableTime : {},
                ]}
                onPress={() => {
                  setTimeObj({ ...presetTime, avlAt12: true });
                }}
              >
                <Text
                  style={[
                    styles.text,
                    { color: timeObj.avlAt12 ? "white" : "#AAAAAA" },
                  ]}
                >
                  12:00 AM
                </Text>
              </Pressable>
              {/* <Pressable style={styles.time}>
                <Text style={[styles.text,{color:"#AAAAAA"}]}>09:00 AM</Text>
              </Pressable>
              <Pressable style={styles.time}>
                <Text style={[styles.text,{color:"#AAAAAA"}]}>10:00 AM</Text>
              </Pressable>
              <Pressable style={styles.time}>
                <Text style={[styles.text,{color:"#AAAAAA"}]}>11:00 AM</Text>
              </Pressable>
              <Pressable style={styles.time}>
                <Text style={[styles.text,{color:"#AAAAAA"}]}>12:00 AM</Text>
              </Pressable> */}
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <Button title={"Make Appointment"}></Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
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

  detailCell: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    width: 105,
    borderRadius: 8,
  },
  DateAndTime: {
    marginTop: 32,
    height: 56,
    backgroundColor: "#054A80",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  SetDateAndTime: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 15,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#0A94FF",
    height: 56,
    borderRadius: 12,
  },
  calendar: {
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 20,
  },
  time: {
    width: 93,
    height: 42,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 7,
    backgroundColor: "transparent",
    borderColor: "#CCCCCC",
    borderWith: 1,
  },
  availableTime: {
    backgroundColor: "#054A80",
  },
});

export default DateAndTimeSelectScreen;
