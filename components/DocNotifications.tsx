import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FONTS } from "../constants";

export const DocNotifications = (props: any) => {
  return (
    <View style={{ marginTop: 25, flexDirection: "row" }}>
      <Image source={require("../assets/DocNotifications.png")}></Image>
      <View style={{ marginLeft: 16, flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.text, { fontSize: 12, fontWeight: "400" }]}>
            Psychiatrist
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: 12, fontWeight: "400", color: "#979C9E" },
            ]}
          >
            Today
          </Text>
        </View>
        <Text
          style={[
            styles.text,
            { fontSize: 14, fontWeight: "800", marginTop: 8 },
          ]}
        >
          Dr. Joe Smith
        </Text>
        <Text style={[styles.text,{fontSize:12,marginTop:8}]}>
          Dr. Joe is a humble person. He answered my questions patiently and
          well explained. I’ve been consulting with him twice. I really
          recommend him!
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
