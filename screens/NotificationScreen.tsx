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
import { Button } from "@rneui/base";
import { DocNotifications } from "../components/DocNotifications";
import { COLORS, FONTS, SHADOWS } from "../constants";
import SearchBar from "../components/SearchBar";
const NotificationScreen = ({ navigation }: any) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <SearchBar
          widthComplete="100%"
          widthText="100%"
          PlaceHolder="Search"
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
      </View>
      <View
        style={{
          marginTop: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={[
            styles.circularView,
            {
              backgroundColor: "#76A869",
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <Image source={require("../assets/MessageIcon.png")}></Image>
        </View>
        <View
          style={[
            styles.circularView,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <Image source={require("../assets/BookSavedIcon.png")}></Image>
        </View>
        <View
          style={[
            styles.circularView,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <Image
            source={require("../assets/NotificationOrangeIcon.png")}
          ></Image>
        </View>
        <View
          style={[
            styles.circularView,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <Image source={require("../assets/BoxIcon.png")}></Image>
        </View>
      </View>
      <View style={styles.DocUpdates}>
        <Text
          style={[
            styles.text,
            {
              color: "white",
              fontWeight: "700",
              fontSize: 18,
              marginLeft: 15,
            },
          ]}
        >
          Patient's Information
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 15,marginBottom:15 }}>
          <DocNotifications />
          <DocNotifications />
          <DocNotifications />
          <DocNotifications />
          <DocNotifications />
          <DocNotifications />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  circularView: {
    height: 56,
    width: 56,
    borderRadius: 28,
  },
  DocUpdates: {
    marginTop: 32,
    height: 56,
    backgroundColor: "#054A80",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default NotificationScreen;
