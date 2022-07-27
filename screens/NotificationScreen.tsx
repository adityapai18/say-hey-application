import { Text } from "@rneui/themed";
import React, { useRef, useState , useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  Button,
} from "react-native";
import { DocNotifications } from "../components/DocNotifications";
import { COLORS, FONTS, SHADOWS } from "../constants";
import SearchBar from "../components/SearchBar";
import messaging from '@react-native-firebase/messaging';
const recieveToken =()=>{
  messaging().getToken().then((val)=>{
    console.log(val)
  })
}
const NotificationScreen = ({ navigation }: any) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  // const [expoPushToken, setExpoPushToken] = useState('');
  // const [notification, setNotification] = useState<Notifications.Notification>();
  // const notificationListener = useRef();
  // const responseListener = useRef();
  useEffect(() => {
    // registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // // This listener is fired whenever a notification is received while the app is foregrounded
    // notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    //   setNotification(notification);
    // });

    // // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    // responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //   console.log(response);
    // });

    // return () => {
    //   Notifications.removeNotificationSubscription(notificationListener.current);
    //   Notifications.removeNotificationSubscription(responseListener.current);
    // };
  }, []);
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
// async function sendPushNotification(expoPushToken) {
//   const message = {
//     to: expoPushToken,
//     sound: 'default',
//     title: 'Original Title',
//     body: 'And here is the body!',
//     data: { someData: 'Data' },
//   };

//   await fetch('https://exp.host/--/api/v2/push/send', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Accept-encoding': 'gzip, deflate',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(message),
//   });
// }
// async function registerForPushNotificationsAsync() {
//   let token;
//   if (Device.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }

//   if (Platform.OS === 'android') {
//     Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   return token;
// }

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
