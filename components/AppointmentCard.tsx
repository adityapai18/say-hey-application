import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FONTS } from "../constants";
import { FontAwesome, FontAwesome5, Fontisto } from "@expo/vector-icons";
export const AppointmentCard = (props: any) => {
  return (
    <View style={{ marginTop: 25, alignContent: "center" }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={props.image}
          style={{
            height: 84,
            width: 84,
            borderRadius: 16,
            resizeMode: "contain",
          }}
        ></Image>
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
          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Fontisto name="doctor" size={15} color="black" />
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
                {props.exp}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 20,
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="rupee-sign" size={15} color="black" />
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
                {props.fee}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          // marginTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* <Text style={[styles.text, { color: "#3B566E", fontSize: 13 }]}>
          {props.dateTime}
        </Text>
        <Text style={[styles.text, { color: "#3B566E", fontSize: 13 }]}>
          More...
        </Text> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.regular,
  },
});
