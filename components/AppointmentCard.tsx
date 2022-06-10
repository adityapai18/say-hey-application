import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FONTS } from "../constants";

export const AppointmentCard = (props: any) => {
  return (
    <View style={{ marginTop: 25 }}>
      <View style={{ flexDirection: "row" }}>
        <Image source={props.image} style={{ borderRadius: 16, resizeMode:"contain" }}></Image>
        <View style={{ margin: 13 }}>
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
            {props.name}
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 11,
                fontWeight: "300",
                color: "#6F8BA4",
                marginTop: 3,
              },
            ]}
          >
            {props.stream}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 12 }}>
            <Image source={require("../assets/Path.png")}></Image>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 12,
                  fontWeight: "400",
                  color: "#6F8BA4",
                  marginLeft: 5,
                },
              ]}
            >
              {props.address}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 15,flexDirection:"row",justifyContent:"space-between" }}>
        <Text style={[styles.text, { color: "#3B566E", fontSize: 13 }]}>
          {props.dateTime}
        </Text>
        <Text style={[styles.text, { color: "#3B566E", fontSize: 13 }]}>
          More...
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.regular,
  },
});
