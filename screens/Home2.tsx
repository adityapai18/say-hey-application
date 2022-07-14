import { Text } from "@rneui/themed";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import SearchBar from "../components/SearchBar";
import CarouselCard from "../components/CarouselCards";
import { COLORS, FONTS, SHADOWS } from "../constants";
import { ScheduleCardHome } from "../components/ScheduleCardHome";
import { DoctorReviewCard } from "../components/DoctorReviewCard";
import { meetData } from "../lib/api/Connection";
import { viewAllDoc } from "../lib/api/Connection";
import { useAuth } from "../lib/auth/AuthContext";
const Home2 = ({ navigation }: any) => {
  const auth =useAuth();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [upComingSchedule, setUpComingSchedule] = useState();
  const [clicked, setClicked] = useState(false);
  const [docData, setDocData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  useEffect(() => {
    getDocData();
    meetData(auth?.user.email).then((value)=>{
      console.log('start\n\n')
      var minDate=Infinity;
      value.data.appointments.map((item:any)=>{
        const dateCom=new Date(item.engagement.timestamp)
        const today = new Date()
        if(dateCom.getTime()>today.getTime()){
           minDate= Math.min(minDate,dateCom.getTime());
        }
      })
      const result = value.data.appointments.filter(item=>item.engagement.timestamp===minDate);
      setUpComingSchedule(result[0]);
      console.log(upComingSchedule)
    })
  }, []);
  async function getDocData() {
    viewAllDoc().then((value) => {
      setDocData(value.data);
    });
  }
  const DocDetailScreen = (item: any) => {
    // console.log(item);
    navigation.navigate("DoctorDetails", { ...item });
  };
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    meetData(auth?.user.email).then((value)=>{
      console.log('start\n\n')
      var minDate=Infinity;
      value.data.appointments.map((item:any)=>{
        const dateCom=new Date(item.engagement.timestamp)
        const today = new Date()
        if(dateCom.getTime()>today.getTime()){
           minDate= Math.min(minDate,dateCom.getTime());
        }
      })
      const result = value.data.appointments.filter(item=>item.engagement.timestamp===minDate);
      setUpComingSchedule(result[0]);
      console.log(upComingSchedule)
    }).then((value)=>{
      setRefreshing(false)
    })
  }, [refreshing]);
  return (
    <ScrollView
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
    >
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
          <TouchableOpacity
            style={{ backgroundColor: "white", borderRadius: 12 }}
            onPress={() => {
              navigation.navigate("NotificationScreen");
            }}
          >
            <Image
              source={require("../assets/Notification.png")}
              style={{ margin: 16 }}
            ></Image>
          </TouchableOpacity>
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
          <TouchableOpacity
            style={{ backgroundColor: "#0A94FF", borderRadius: 12 }}
          >
            <Image
              source={require("../assets/SettingsIcon.png")}
              style={{ margin: 16 }}
            ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 25,
            justifyContent: "center",
            flex: 1,
            alignContent: "center",
          }}
        >
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
          <TouchableOpacity>
            <Image source={require("../assets/mood1.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/mood2.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/mood3.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../assets/mood4.png")}></Image>
          </TouchableOpacity>
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
          <TouchableOpacity>
            <Text
              style={[
                styles.text,
                { color: "#0A94FF", fontSize: 14, fontWeight: "800" },
              ]}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <ScheduleCardHome
        Key={upComingSchedule ? upComingSchedule.id : Math.random()}
        dateTime={upComingSchedule ? upComingSchedule.engagement.timestamp:''}
        DocName={upComingSchedule ? upComingSchedule.docdata1.doc_name :''}
        Qualification={upComingSchedule ? upComingSchedule.docdata1.qualification :''}
        profile={upComingSchedule ? upComingSchedule.docdata1.prof_pic :''}
        />
        {/* <View
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
          <TouchableOpacity>
            <Text
              style={[
                styles.text,
                { color: "#0A94FF", fontSize: 14, fontWeight: "800" },
              ]}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row" }}
        >
          <ActDocCircle />
          <ActDocCircle />
          <ActDocCircle />
          <ActDocCircle />
          <ActDocCircle />
          <ActDocCircle />
          <ActDocCircle />
        </ScrollView> */}
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
          <TouchableOpacity>
            <Text
              style={[
                styles.text,
                { color: "#0A94FF", fontSize: 14, fontWeight: "800" },
              ]}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          style={{ marginBottom: 50, flex: 1 }}
          showsHorizontalScrollIndicator={false}
        >
          {docData.map((item: any, index) => {
            return (
              <DoctorReviewCard
                key={index}
                profile={item.prof_pic}
                Qualification={item.qualification}
                DocName={item.doc_name}
                Rating={item.rating}
                onPress={() => {
                  DocDetailScreen(item);
                }}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Image source={require("../assets/Home.png")}></Image>
          <Text
            style={[
              styles.text,
              { fontSize: 14, fontWeight: "400", color: "#0A94FF" },
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => {
            navigation.navigate("ScheduleScreen");
          }}
        >
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
        </TouchableOpacity>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Image source={require("../assets/Discover.png")}></Image>
          <Text
            style={[
              styles.text,
              { fontSize: 14, fontWeight: "400", color: "#A9A9A9" },
            ]}
          >
            Discover
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
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
        </TouchableOpacity>
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
