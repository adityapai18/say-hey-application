import React, { useState } from "react";
import { Text } from "@rneui/themed";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { COLORS, FONTS, SHADOWS } from "../constants";
import Searchbar from "../components/searchbar.js";
import * as constant from "../utilities/constant";
import data from "../components/data";
import CustomSlider from "../components/CustomSlider";
import Card from "../components/Card";

const Home = () => {    
  const [searchText, setSearchText] = useState("");
  return (
    <ScrollView>
      <View style={{ flex: 1, marginTop: 40, padding: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "column" }}>
            <Text h4>WELCOME TO 👋</Text>
            <Text h2 style={{ color: COLORS.primary }}>
              SayHey!!
            </Text>
          </View>
          <Image
            style={{ width: 55, height: 60 }}
            source={constant.IMAGES.bell}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.container1}>
            <Searchbar searchText={searchText} setSearchText={setSearchText} />
          </View>
          <Image
            source={constant.IMAGES.filter}
            style={{ width: 50, height: 50, marginTop: 10, marginLeft: 7 }}
          />
        </View>
        <CustomSlider data={data} />
        <View>
          <Text h4>How Are You Feeling Today?</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Image
            style={{ width: 60, height: 60 }}
            source={constant.IMAGES.mood1}
          />
          <Image
            style={{ width: 60, height: 60 }}
            source={constant.IMAGES.mood2}
          />
          <Image
            style={{ width: 60, height: 60 }}
            source={constant.IMAGES.mood3}
          />
          <Image
            style={{ width: 60, height: 60 }}
            source={constant.IMAGES.mood4}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <View>
            <Text h4>Upcoming Schedule!</Text>
          </View>
          <View>
            <Text h4 style={{ color: COLORS.primary }}>
              See All
            </Text>
          </View>
        </View>
        <Card />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <View>
            <Text h4>Active Professionals</Text>
          </View>
          <View>
            <Text h4 style={{ color: COLORS.primary }}>
              See All
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <View>
            <Text h4>Top Rated Professionals</Text>
          </View>
          <View>
            <Text h4 style={{ color: COLORS.primary }}>
              See All
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    //paddingTop: 100,
    width: 30,
    height: 300,
    //backgroundColor: COLORS.offWhite,
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 1,
    paddingTop: 20,
  },
  container1: {
    flex: 1,
    backgroundColor: "#ffff",
    },
});
// render(<Home />);
export default Home;
