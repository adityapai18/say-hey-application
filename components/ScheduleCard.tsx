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
  ActivityIndicator,
  GestureResponderEvent,
} from "react-native";
import { Divider } from "@rneui/themed";
import { COLORS, FONTS, SHADOWS } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
interface Schedule {
  DocName: String;
  Qualification: String;
  profile: String;
  dateTime: number;
  end: number;
  key: any;
  engId: number;
  DocAmount: number;
  payment: boolean | null | undefined;
  onPressReschedule :(((event: GestureResponderEvent) => void) & (() => void)) | undefined
  onPressCancel :(((event: GestureResponderEvent) => void) & (() => void)) | undefined
  RefreshListen: () => Promise<void>;
}
import axios from "axios";
import RazorpayCheckout from "react-native-razorpay";
import { useAuth } from "../lib/auth/AuthContext";
export const ScheduleCard = (props: Schedule) => {
  console.log(props)
  const date = new Date(props.dateTime);
  console.log(date)
  const endTime = new Date(props.end);
  const [animating, setAnimating] = useState(false);
  const [meetDet, setdate] = useState({
    scheduleDate: date.toLocaleDateString(),
    start: date.toLocaleTimeString(),
    end: endTime.toLocaleTimeString(),
  });
  const auth = useAuth();
  const CreateOrder = () => {
    axios
      .post("https://shielded-caverns-63372.herokuapp.com/api/payment/order", {
        user_id: auth?.user.uid,
        engagment_id: props.engId,
        amount: props.DocAmount,
        currency: "INR",
        reciept: "abnxcksnbcs2324",
      })
      .then((val) => {
        console.log(val.data.order);
        RazorPayment(props.DocName, val.data.amount, val.data.order.id);
      });
  };
  const RazorPayment = (
    docName: String,
    payentAmount: number,
    orderId: string
  ) => {
    setAnimating(false);
    var options = {
      description: docName + " consultation",
      image:
        "https://sayhey.co.in/wp-content/uploads/2019/08/cf-1-e1654764573813.png",
      currency: "INR",
      key: "rzp_test_733G69NpHUh2Pg",
      amount: payentAmount,
      name: "SAY HEY",
      order_id: orderId,
      prefill: {
        email: auth?.user.email,
        name: auth?.user.displayName,
      },
      theme: { color: "#53a20e" },
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        alert(`Success !!`);
        console.log({ ...data });
        sendConfirmation(data);
      })
      .catch((error) => {
        // handle failure
        console.log(error);
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  const sendConfirmation = (data: any) => {
    axios
      .post("https://shielded-caverns-63372.herokuapp.com/api/payment/verify", {
        razorpay_order_id: data.razorpay_order_id,
        razorpay_payment_id: data.razorpay_payment_id,
        razorpay_signature: data.razorpay_signature,
        eng_id: props.engId,
      })
      .then((val) => {
        console.log(val.data);
      });
  };
  return (
    <View style={styles.ScheduleCard} key={props.key}>
      {/* <ActivityIndicator
        animating={animating}
        color="#0A94FF"
        size="large"
        style={{ flex: 1 , display:'none'}}
      /> */}
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: props.profile }}
          style={{ height: 40, width: 40, borderRadius: 40 }}
          resizeMode="contain"
        ></Image>
        <View style={{ marginLeft: 15, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.text, { fontWeight: "700", fontSize: 14 }]}>
              {props.DocName}
            </Text>
            <Text style={[styles.text, { fontWeight: "300", fontSize: 12 }]}>
              {meetDet.scheduleDate}
            </Text>
          </View>
          <Text
            style={[
              styles.text,
              {
                fontWeight: "300",
                fontSize: 12,
                color: "#979C9E",
                marginTop: 5,
              },
            ]}
          >
            {props.Qualification}
          </Text>
        </View>
      </View>
      <Divider style={{ marginVertical: 25 }} />
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/TimeVectorIcon.png")}></Image>
          <Text style={[styles.text, { fontWeight: "300", fontSize: 13 }]}>
            {meetDet.start} - {meetDet.end}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/LocationVectorIcon.png")}></Image>
          <Text
            style={[
              styles.text,
              { fontWeight: "300", fontSize: 13, marginLeft: 10 },
            ]}
          >
            Online
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 25,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {!props.payment ? (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#0A94FF" }]}
            onPress={CreateOrder}
          >
            <Text
              style={[
                styles.text,
                { fontWeight: "300", fontSize: 16, color: "white" },
              ]}
            >
              Pay
            </Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity style={styles.button}
            onPress={props.onPressCancel}
            >
              <Text
                style={[
                  styles.text,
                  { fontWeight: "300", fontSize: 16, color: "#0A94FF" },
                ]}
              >
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#0A94FF" }]}
              onPress={props.onPressReschedule}
            >
              <Text
                style={[
                  styles.text,
                  { fontWeight: "300", fontSize: 16, color: "white" },
                ]}
              >
                Reschedule
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ScheduleCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 16,
    padding: 24,
  },
  text: {
    fontFamily: FONTS.regular,
  },
  button: {
    borderRadius: 8,
    borderColor: "#0A94FF",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  //   shadowColor: "#000000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 3,
  //     },
  //     shadowRadius: 5,
  //     shadowOpacity: 1.0,
  //     elevation: 15,
});
