import { Text } from "@rneui/themed";
import React from "react";
import { SafeAreaView, View, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { Button } from "@rneui/base";
import { COLORS, FONTS, SHADOWS } from "../constants";

const DateAndTimeScreen = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          height: 56,
          justifyContent: "space-evenly",
        }}
      >
        <View style={[styles.detailCell, { backgroundColor: "#054A80" }]}>
          <Text style={[styles.text, { color: "white" }]}>Date</Text>
        </View>
        <View style={styles.detailCell}>
          <Text style={[styles.text, { color: "#979C9E" }]}>
            Personal Details
          </Text>
        </View>
        <View style={styles.detailCell}>
          <Text style={[styles.text, { color: "#979C9E" }]}>Payment</Text>
        </View>
      </View>
      <View style={styles.DateAndTime}>
        <Image source={require("../assets/Calendar.png")}></Image>
        <Text
          style={[
            styles.text,
            { color: "white", fontWeight: "700", fontSize: 18, marginLeft: 15 },
          ]}
        >
          Date
        </Text>
      </View>
      <TouchableOpacity style={styles.SetDateAndTime}
      onPress={()=>{navigation.navigate("DateAndTimeSelect",true)}}
      >
        <Text style={{ fontSize: 16, fontWeight: "300", margin: 12 }}>
          Set the date
        </Text>
        <Image
          source={require("../assets/RightArrow.png")}
          style={{ margin: 12 }}
        ></Image>
      </TouchableOpacity>
      <View style={[styles.DateAndTime, { marginTop: 20 }]}>
        <Image source={require("../assets/TimerStart.png")}></Image>
        <Text
          style={[
            styles.text,
            { color: "white", fontWeight: "700", fontSize: 18, marginLeft: 15 },
          ]}
        >
          Time
        </Text>
      </View>
      <TouchableOpacity style={styles.SetDateAndTime} 
      onPress={()=>{navigation.navigate("DateAndTimeSelect",false)}}>
        <Text style={{ fontSize: 16, fontWeight: "300", margin: 12 }}>
          Set the time of Appointment
        </Text>
        <Image
          source={require("../assets/RightArrow.png")}
          style={{ margin: 12 }}
        ></Image>
      </TouchableOpacity>
      <View style={styles.bottom}>
        <Button title="Next" style={styles.button} />
      </View>
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
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    height: 56,
    boxShadow: SHADOWS.dark,
    marginTop: 25,
    padding: 8,
    color: COLORS.lightgray,
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
    marginBottom: 36,
  },
  button:{
    backgroundColor:"#0A94FF",
    height:56,
    borderRadius:12
  }
});

export default DateAndTimeScreen;
