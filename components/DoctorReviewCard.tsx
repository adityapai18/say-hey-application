import { Text } from "@rneui/themed";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  GestureResponderEvent,
} from "react-native";
import { COLORS, FONTS, SHADOWS } from "../constants";
interface doctorCard{
  DocName : String,
  Qualification : String,
  profile:string,
  Rating: Number,
  onPress: any,
} 
export const DoctorReviewCard = (props:doctorCard) => {
  return (
    <TouchableOpacity style={styles.container} 
    onPress={props.onPress}
    >
      <View style={{ height: 185, borderRadius: 12, alignSelf: "center" }}>
        <Image
          style={{height:190,width:193}}
          source={{uri:props.profile}}
          resizeMode="contain"
        ></Image>
        <View style={styles.starView}>
          <View
            style={{
              flexDirection: "row",
              margin: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.text,
                { fontSize: 12, fontWeight: "800", marginRight: 5 },
              ]}
            >
              {props.Rating}
            </Text>
            <Image source={require("../assets/ReviewStar.png")}></Image>
          </View>
        </View>
      </View>
      <Text
        style={[
          styles.text,
          { fontSize: 18, fontWeight: "800", marginTop: 10 },
        ]}
      >
        {props.DocName}
      </Text>
      <Text
        style={[
          styles.text,
          { fontSize: 12, fontWeight: "300"},
        ]}
      >
        {props.Qualification}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 19,
    marginRight: 20,
    flex:1,
    width: 209,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  text: {
    fontFamily: FONTS.regular,
  },
  starView: {
    right: 0,
    top: 0,
    position: "absolute",
    margin: 8,
    backgroundColor: "white",
    borderRadius: 8,
  },
});
