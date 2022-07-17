import { Text } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { ScheduleCard } from "../components/ScheduleCard";
import { meetData } from "../lib/api/Connection";
import { COLORS, FONTS, SHADOWS } from "../constants";
import { useAuth } from "../lib/auth/AuthContext";
import RazorpayCheckout from "react-native-razorpay";
const ScheduleScreen = ({ navigation }: any) => {
  const auth = useAuth();
  const [docData, setdocData] = useState();
  const [refreshing, setRefreshing] = React.useState(false);
  useEffect(() => {
    meetData(auth?.user.email).then((value) => {
      setdocData(value.data.appointments);
    });
  }, []);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    meetData(auth?.user.email)
      .then((value) => {
        setdocData(value.data.appointments);
      })
      .then((value) => {
        setRefreshing(false);
      });
  }, [refreshing]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={[styles.appoinmentType, { backgroundColor: "#0A94FF" }]}>
          <Text style={[styles.text, { color: "white" }]}>Upcoming</Text>
        </View>
        <View style={styles.appoinmentType}>
          <Text style={[styles.text, { color: "#A4AEBC" }]}>Complete</Text>
        </View>
        <View style={styles.appoinmentType}>
          <Text style={[styles.text, { color: "#A4AEBC" }]}>Cancel</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {docData &&
          docData.map((item) => {
            if (item.docdata1) {
              return (
                <ScheduleCard
                  key={item.id}
                  Qualification={item.docdata1.qualification}
                  DocName={item.docdata1.doc_name}
                  profile={item.docdata1.prof_pic}
                  dateTime={item.engagement.timestamp}
                  end={item.metadata.endTime}
                />
              );
            }
          })}
        <TouchableOpacity
          onPress={() => {
            var options = {
              description: "Credits towards consultation",
              image: "https://i.imgur.com/3g7nmJC.png",
              currency: "INR",
              key: "rzp_live_HE6ZAVo4zXG0Ay",
              amount: "5000",
              name: "Acme Corp",
              order_id: "order_DslnoIgkIDL8Zt", 
              prefill: {
                email: "gaurav.kumar@example.com",
                contact: "9191919191",
                name: "Gaurav Kumar",
              },
              theme: { color: "#53a20e" },
            };
            RazorpayCheckout.open(options)
              .then((data) => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
              })
              .catch((error) => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
              });
          }}
        >
          <Text>PAYMENT</Text>
        </TouchableOpacity>
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
  appoinmentType: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    borderRadius: 8,
  },
});

export default ScheduleScreen;
