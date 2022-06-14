import { Text } from "@rneui/themed";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import SearchBar from "../components/SearchBar";
import CarouselCard from "../components/CarouselCards";
import { COLORS, FONTS, SHADOWS } from "../constants";
import { ScheduleCard } from "../components/ScheduleCard";
import { ActDocCircle } from "../components/ActDocCircle";
import { DoctorReviewCard } from "../components/DoctorReviewCard";
const Home2 = ({ navigation }: any) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={[styles.text, { fontSize: 12, fontWeight: "400" }]}>
              WELCOME TO 👋
            </Text>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 28,
                  fontWeight: "800",
                  letterSpacing: 2,
                  color: "#0A94FF",
                },
              ]}
            >
              SayHey
            </Text>
          </View>
          <View style={{ backgroundColor: "white", borderRadius: 12 }}>
            <Image
              source={require("../assets/Notification.png")}
              style={{ margin: 16 }}
            ></Image>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}
        >
          <SearchBar
            PlaceHolder="Search your doctor"
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
          <View style={{ backgroundColor: "#0A94FF", borderRadius: 12 }}>
            <Image
              source={require("../assets/SettingsIcon.png")}
              style={{ margin: 16 }}
            ></Image>
          </View>
        </View>
        <View style={{ marginTop: 25, justifyContent: "center" }}>
          <CarouselCard />
        </View>
        <Text
          style={[
            styles.text,
            { fontSize: 18, fontWeight: "800", letterSpacing: 0.75 },
          ]}
        >
          How are you feeling today?
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Image source={require("../assets/mood1.png")}></Image>
          <Image source={require("../assets/mood2.png")}></Image>
          <Image source={require("../assets/mood3.png")}></Image>
          <Image source={require("../assets/mood4.png")}></Image>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={[
              styles.text,
              { fontSize: 18, fontWeight: "800", letterSpacing: 0.75 },
            ]}
          >
            Upcoming schedule?
          </Text>
          <Pressable>
            <Text
              style={[
                styles.text,
                { color: "#0A94FF", fontSize: 14, fontWeight: "800" },
              ]}
            >
              See All
            </Text>
          </Pressable>
        </View>
        <ScheduleCard />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={[
              styles.text,
              { fontSize: 18, fontWeight: "800", letterSpacing: 0.75 },
            ]}
          >
            Active Doctors
          </Text>
          <Pressable>
            <Text
              style={[
                styles.text,
                { color: "#0A94FF", fontSize: 14, fontWeight: "800" },
              ]}
            >
              See All
            </Text>
          </Pressable>
        </View>
        <ScrollView horizontal={true} style={{ flexDirection: "row" }}>
          <ActDocCircle />
          <ActDocCircle />
          <ActDocCircle />
          <ActDocCircle />
          <ActDocCircle />
          <ActDocCircle />
          <ActDocCircle />
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={[
              styles.text,
              { fontSize: 18, fontWeight: "800", letterSpacing: 0.75 },
            ]}
          >
            Top rated Doctors
          </Text>
          <Pressable>
            <Text
              style={[
                styles.text,
                { color: "#0A94FF", fontSize: 14, fontWeight: "800" },
              ]}
            >
              See All
            </Text>
          </Pressable>
        </View>
        <ScrollView horizontal={true} style={{ marginBottom: 50 }}>
          <DoctorReviewCard />
          <DoctorReviewCard />
          <DoctorReviewCard />
          <DoctorReviewCard />
        </ScrollView>
      </SafeAreaView>
      <View style={styles.bottomNav}>
        <Pressable style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../assets/Home.png")}></Image>
          <Text
            style={[
              styles.text,
              { fontSize: 14, fontWeight: "400", color: "#0A94FF" },
            ]}
          >
            Home
          </Text>
        </Pressable>
        <Pressable style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../assets/Schedule.png")}></Image>
          <Text
            style={[
              styles.text,
              {
                fontSize: 14,
                fontWeight: "400",
                color: "#A9A9A9",
                marginTop: 2,
              },
            ]}
          >
            Schedule
          </Text>
        </Pressable>
        <Pressable style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../assets/Discover.png")}></Image>
          <Text
            style={[
              styles.text,
              { fontSize: 14, fontWeight: "400", color: "#A9A9A9" },
            ]}
          >
            Discover
          </Text>
        </Pressable>
        <Pressable
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Image source={require("../assets/Beranda.png")}></Image>
          <Text
            style={[
              styles.text,
              { fontSize: 14, fontWeight: "400", color: "#A9A9A9" },
            ]}
          >
            Account
          </Text>
        </Pressable>
      </View>
    </ScrollView>
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
  bottomNav: {
    height: 72,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default Home2;
