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
  Modal,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { ScheduleCard } from "../components/ScheduleCard";
import { meetData } from "../lib/api/Connection";
import { COLORS, FONTS, SHADOWS } from "../constants";
import { useAuth } from "../lib/auth/AuthContext";
import WebView from "react-native-webview";

const ScheduleScreen = ({ navigation }: any) => {
  const auth = useAuth();
  const url = /\bhttps?:\/\/\S+?ms=1/gi;
  const [docData, setdocData] = useState();
  const [refreshing, setRefreshing] = React.useState(false);
  const [visible, setvisible] = useState(false);
  const [modalUrl, setmodalUrl] = useState("");
  const showModal = () => setvisible(true);
  const hideModal = () => setvisible(false);
  const presetSection = {
    upcoming: false,
    complete: false,
    cancel: false,
  };
  const [section, setsection] = useState({
    upcoming: true,
    complete: false,
    cancel: false,
  });
  useEffect(() => {
    setRefreshing(true)
    meetData(auth?.user.email).then((value) => {
      setdocData(value.data.appointments);
      setRefreshing(false);
    });
  }, []);
  const cancelHandler = (item: string) => {
    const arr = item.match(url);
    if (arr[1]) {
      setmodalUrl(arr[1]);
      showModal();
    }
  };
  const rescheduleHandler = (item: string) => {
    const arr = item.match(url);
    if (arr[0]) {
      setmodalUrl(arr[0]);
      showModal();
    }
  };
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    meetData(auth?.user.email)
      .then((value) => {
        setdocData(value.data.appointments);
        setRefreshing(false);
      })
      .catch((err)=>{
        alert(err)
        setRefreshing(false);
      })
  }, [refreshing]);
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator
          animating={refreshing}
          size="large"
          style={{
            position: "absolute",
            top:'50%',
            left:'50%',
            zIndex: 1,
          }}
          color="#0A94FF"
        />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={[
            styles.appoinmentType,
            { backgroundColor: section.upcoming ? "#0A94FF" : COLORS.offWhite },
          ]}
          onPress={() => {
            setsection({ ...presetSection, upcoming: true });
          }}
        >
          <Text
            style={[
              styles.text,
              { color: section.upcoming ? "white" : "black" },
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.appoinmentType,
            { backgroundColor: section.complete ? "#0A94FF" : COLORS.offWhite },
          ]}
          onPress={() => {
            setsection({ ...presetSection, complete: true });
          }}
        >
          <Text
            style={[
              styles.text,
              { color: section.complete ? "white" : "black" },
            ]}
          >
            Complete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.appoinmentType,
            { backgroundColor: section.cancel ? "#0A94FF" : COLORS.offWhite },
          ]}
          onPress={() => {
            setsection({ ...presetSection, cancel: true });
          }}
        >
          <Text
            style={[styles.text, { color: section.cancel ? "white" : "black" }]}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
      >
        {docData &&
          docData.map((item, index) => {
            if (item.docdata1) {
              console.log(item);
              return (
                <ScheduleCard
                  key={item.engagement.id}
                  Qualification={item.docdata1.qualification}
                  DocName={item.docdata1.doc_name}
                  profile={item.docdata1.prof_pic}
                  dateTime={item.metadata.startTime}
                  end={item.metadata.endTime}
                  DocAmount={item.docdata1.price}
                  engId={item.engagement.id}
                  payment={item.payment}
                  RefreshListen={onRefresh}
                  onPressCancel={() => {
                    cancelHandler(item.engagement.bodyPreview);
                  }}
                  onPressReschedule={() => {
                    rescheduleHandler(item.engagement.bodyPreview);
                  }}
                />
              );
            }
          })}
        <Modal visible={visible} onDismiss={hideModal}>
          <View style={{ flex: 1 }}>
            <WebView
              source={{ uri: modalUrl }}
              originWhitelist={["*"]}
              scrollEnabled={false}
              startInLoadingState={true}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={hideModal}
            style={styles.btn}
          >
            <Text
              style={[
                {
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "white",
                },
                styles.text,
              ]}
            >
              CLOSE
            </Text>
          </TouchableOpacity>
        </Modal>
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
  btn: {
    borderRadius: 5,
    backgroundColor: "#0A94FF",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: "3%",
  },
});

export default ScheduleScreen;
