import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { viewAllDoc } from "../lib/api/Connection";
import SearchBar from "../components/SearchBar";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import DoctorSearch from "../components/DoctorSearch";
import { Checkbox, RadioButton } from "react-native-paper";
import Slider from "@react-native-community/slider";
const ViewAllDocs = ({ navigation }: any) => {
  const [DocData, setDocData] = useState([]);
  const [refreshing, setrefreshing] = useState(false);
  const [filterVisible, setfilterVisible] = useState(false);
  const [checked, setchecked] = useState("first");
  const [english, setenglish] = useState(false);
  const [hindi, sethindi] = useState(false);
  const [sliderVal, setsliderVal] = useState(0.2);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    setrefreshing(true);
    getDocData();
  }, []);
  function getDocData() {
    viewAllDoc()
      .then((value) => {
        setDocData(value.data);
        setrefreshing(false);
      })
      .catch((err) => setrefreshing(false));
  }

  const DocDetailScreen = (item: any) => {
    // console.log(item);
    navigation.navigate("DoctorDetails", { ...item });
  };
  return (
    <SafeAreaView style={styles.container}>
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
        <View style={{ position: "relative" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#0A94FF",
              borderRadius: 12,
              alignSelf: "flex-end",
            }}
            onPress={() => setfilterVisible(true)}
          >
            <Ionicons
              name="filter"
              size={30}
              color="white"
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          display: filterVisible ? "flex" : "none",
          zIndex: 2,
          backgroundColor: "white",
          marginTop: 10,
          padding: 15,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setfilterVisible(false)}
          style={{ alignSelf: "flex-end" }}
        >
          <Entypo name="circle-with-cross" size={24} color="#0A94FF" />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Price range:</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginTop: 10,
              paddingHorizontal: 4,
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "grey" }}>Below 500</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "grey" }}>500-1000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "grey" }}>1000 +</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Gender :</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <RadioButton.Item
              value="first"
              uncheckedColor="grey"
              color="#0A94FF"
              label="Male"
              labelStyle={{ color: "black", fontSize: 13 }}
              style={{ flexDirection: "row-reverse" }}
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => {
                setchecked("first");
              }}
            />
            <RadioButton.Item
              value="second"
              uncheckedColor="grey"
              color="#0A94FF"
              label="Female"
              labelStyle={{ color: "black", fontSize: 13 }}
              style={{ flexDirection: "row-reverse" }}
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => {
                setchecked("second");
              }}
            />
            <RadioButton.Item
              value="third"
              uncheckedColor="grey"
              color="#0A94FF"
              label="Others"
              labelStyle={{ color: "black", fontSize: 13 }}
              style={{ flexDirection: "row-reverse" }}
              status={checked === "third" ? "checked" : "unchecked"}
              onPress={() => {
                setchecked("third");
              }}
            />
          </View>
        </View>
        <View
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Languages :</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Checkbox
                uncheckedColor="grey"
                color="#0A94FF"
                status={english ? "checked" : "unchecked"}
                onPress={() => {
                  setenglish(!english);
                }}
              />
              <Text>English</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 15,
              }}
            >
              <Checkbox
                uncheckedColor="grey"
                color="#0A94FF"
                status={hindi ? "checked" : "unchecked"}
                onPress={() => {
                  sethindi(!hindi);
                }}
              />
              <Text>Hindi</Text>
            </View>
          </View>
        </View>
        <View
          style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Experience :</Text>
          <Slider
            style={{ width: 100, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
      </View>
      <ActivityIndicator
        animating={refreshing}
        size="large"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: 1,
        }}
        color="#0A94FF"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            alignSelf: "center",
            alignContent: "center",
            justifyContent: "space-evenly",
          }}
        >
          {DocData.filter((post) => {
            if (searchPhrase === "") {
              return post;
            } else if (
              post.doc_name.toLowerCase().includes(searchPhrase.toLowerCase())
            ) {
              return post;
            }
          }).map((item: any, index) => {
            return (
              <DoctorSearch
                key={index}
                profile={item.prof_pic}
                Qualification={item.qualification}
                DocName={item.doc_name}
                Rating={item.rating}
                width={150}
                onPress={() => {
                  DocDetailScreen(item);
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewAllDocs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: COLORS.offWhite,
  },
});
