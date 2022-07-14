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
import { TouchableOpacity } from "react-native-gesture-handler";
interface Schedule{
  DocName : String,
  Qualification : String,
  profile:String,
  dateTime:Number,
  end:Number,
  key:number
}
export const ScheduleCard = (props: Schedule) => {
  console.log(props)
  const date = new Date(props.dateTime);
  const endTime = new Date(props.end);
  const [meetDet, setdate] = useState({
    scheduleDate:date.toLocaleDateString(),
    start:date.toLocaleTimeString(),
    end:endTime.toLocaleTimeString()
  })

  console.log(date.toLocaleDateString(),date.toLocaleTimeString())
  return (
    <View style={styles.ScheduleCard} key={props.key}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{uri:props.profile}}
        style={{height:40,width:40,borderRadius:40}}
        resizeMode='contain'
        ></Image>
        <View style={{ marginLeft: 15, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.text, { fontWeight: "700", fontSize: 14 }]}>
              {props.DocName}
            </Text>
            <Text style={[styles.text, { fontWeight: "300", fontSize: 12 }]}>
              {meetDet.scheduleDate}
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
            {props.Qualification}
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
            {meetDet.start} - {meetDet.end}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent:'center',
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/LocationVectorIcon.png")}></Image>
          <Text style={[styles.text, { fontWeight: "300", fontSize: 13,marginLeft:10 }]}>Online</Text>
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
        <TouchableOpacity style={styles.button}>
          <Text
            style={[
              styles.text,
              { fontWeight: "300", fontSize: 16, color: "#0A94FF" },
            ]}
          >
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "#0A94FF" }]}>
          <Text
            style={[
              styles.text,
              { fontWeight: "300", fontSize: 16, color: "white" },
            ]}
          >
            Reschedule
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ScheduleCard: {
    flex:1,
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
