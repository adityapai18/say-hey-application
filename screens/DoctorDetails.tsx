import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS } from "../constants";
import WebView from "react-native-webview";
const DoctorDetails = ({ navigation, route }: any) => {
  const [docData, setdocData] = useState();
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    setdocData(route.params);
    console.log(route.params);
  }, []);
  const showModal = () => setvisible(true);
  const hideModal = () => setvisible(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#dbe0e4" }}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("../assets/RightArrow.png")}
          style={{ transform: [{ rotate: "180deg" }] }}
        ></Image>
      </TouchableOpacity>
      <View style={{ height: "50%" }}>
        <ImageBackground
          source={require("../assets/DoctorDetailsImg.png")}
          resizeMode="contain"
          style={{ flex: 1 }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            borderTopStartRadius: 25,
            borderTopEndRadius: 25,
            padding: 28,
          }}
        >
          <Text style={[styles.text, { fontWeight: "400", fontSize: 28 }]}>
            {docData && docData.doc_name}
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontWeight: "400",
                fontSize: 16,
                color: "#6C7072",
                marginTop: 8,
              },
            ]}
          >
            {docData && docData.qualification}, {docData && docData.specialist}
          </Text>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  padding: 14,
                  backgroundColor: "#F5F8FA",
                  marginRight: 12,
                  borderRadius: 8,
                }}
              >
                <Image source={require("../assets/MedalIcon.png")}></Image>
              </View>
              <Text style={[styles.text, { color: "#6C7072", fontSize: 16 }]}>
                {docData && docData.experience}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  padding: 14,
                  backgroundColor: "#F5F8FA",
                  marginRight: 12,
                  borderRadius: 8,
                }}
              >
                <Image source={require("../assets/RatingsIcon.png")}></Image>
              </View>
              <Text style={[styles.text, { color: "#6C7072", fontSize: 16 }]}>
                {docData && docData.rating}
              </Text>
            </View>
          </View>
          <Text style={[styles.text, { fontWeight: "bold", fontSize: 18 }]}>
            About Doctor
          </Text>
          <Text
            style={[
              styles.text,
              { color: "#6C7072", fontSize: 14, lineHeight: 20 },
            ]}
          >
            {docData && docData.decription
              ? docData.decription
              : "Dr. Usman Yusuf is an M.B.B.S, Psychiatrist, MD with special" +
                "interest Mental Health problems. He was awarded with the recent" +
                "publications about GERD problems from CDC"}
          </Text>
          <TouchableOpacity style={styles.button} onPress={showModal}>
            <Text
              style={[
                styles.text,
                { fontWeight: "700", fontSize: 18, color: "white" },
              ]}
            >
              Check Schedule
            </Text>
          </TouchableOpacity>
          <Modal visible={visible} onDismiss={hideModal}>
            <View style={{ flex: 1 }}>
              <WebView
                source={{ uri: "https://meetings.hubspot.com/say_hey" }}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.regular,
  },
  button: {
    backgroundColor: "#0A94FF",
    marginBottom: 5,
    height: 56,
    width: "100%",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  backButton: {
    padding: 16,
    zIndex: 1,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top: 0,
    left: 0,
    marginTop: 25,
    marginLeft: 20,
    borderRadius: 12,
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
