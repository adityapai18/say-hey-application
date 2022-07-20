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
} from "react-native";
import { ScheduleCard } from "../components/ScheduleCard";
import { meetData } from "../lib/api/Connection";
import { COLORS, FONTS, SHADOWS } from "../constants";
import { useAuth } from "../lib/auth/AuthContext";
import WebView from "react-native-webview";

const ScheduleScreen = ({ navigation }: any) => {
  const auth = useAuth();
  const url= /\bhttps?:\/\/\S+?ms=1/gi;
  const [docData, setdocData] = useState();
  const [refreshing, setRefreshing] = React.useState(false);
  const [visible, setvisible] = useState(false);
  const [modalUrl, setmodalUrl] = useState('');
  const showModal = () => setvisible(true);
  const hideModal = () => setvisible(false);
  useEffect(() => {
    meetData(auth?.user.email).then((value) => {
      setdocData(value.data.appointments);
    });
  }, []);
  const cancelHandler = (item:string)=>{
    const arr = item.match(url);
    if(arr[1]){
      setmodalUrl(arr[1]);
      showModal();
    }
  }
  const rescheduleHandler = (item:string)=>{
    const arr = item.match(url);
    if(arr[0]){
      setmodalUrl(arr[0]);
      showModal();
    }
  }
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
          docData.map((item,index) => {
            if (item.docdata1) {
              console.log(item)
              return (
                <ScheduleCard
                  key={item.engagement.id}
                  Qualification={item.docdata1.qualification}
                  DocName={item.docdata1.doc_name}
                  profile={item.docdata1.prof_pic}
                  dateTime={item.engagement.timestamp}
                  end={item.metadata.endTime}
                  DocAmount={item.docdata1.price}
                  engId={item.engagement.id}
                  payment={item.payment}
                  onPressCancel={()=>{
                    cancelHandler(item.engagement.bodyPreview)
                  }}
                  onPressReschedule={()=>{
                    rescheduleHandler(item.engagement.bodyPreview)
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
    alignSelf:"center",
    padding:'3%'
  },
});

export default ScheduleScreen;
