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
  ImageBackground,
  Switch,
} from "react-native";
import { Button } from "@rneui/base";
import * as ImagePicker from "expo-image-picker";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

const EditProfile = ({ navigation }: any) => {
  const [image, setImage] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            marginTop: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable style={styles.profilePic} onPress={pickImage}>
            {image == "" ? (
              <Image
                source={require("../assets/PatientImage.png")}
                style={{
                  width: 85,
                  height: 85,
                  borderRadius: 10,
                  position: "absolute",
                }}
              />
            ) : (
              <Image
                source={{ uri: image }}
                style={{
                  width: 85,
                  height: 85,
                  borderRadius: 10,
                  position: "absolute",
                }}
              />
            )}
            <Image source={require("../assets/Camera.png")}></Image>
          </Pressable>
          <Text
            style={[
              styles.text,
              {
                marginTop: 10,
                color: "#3B566E",
                fontSize: 19,
                fontWeight: "800",
                textAlign: "center",
              },
            ]}
          >
            Shanaws Mahamud
          </Text>
          <Text
            style={[
              styles.text,
              {
                marginTop: 5,
                color: "#404446",
                fontSize: 12,
                fontWeight: "400",
                textAlign: "center",
              },
            ]}
          >
            +91 123 456 78
          </Text>
        </View>
        <View style={{ marginTop: 90 }}>
          <View
            style={{
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 45,
            }}
          >
            <Text
              style={[
                styles.text,
                { fontWeight: "400", fontSize: 14, color: "#3B566E" },
              ]}
            >
              Full Name
            </Text>
            <Text
              style={[
                styles.text,
                { fontWeight: "400", fontSize: 14, color: "#6F8BA4" },
              ]}
            >
              Shanaws Mahamud
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 45,
            }}
          >
            <Text
              style={[
                styles.text,
                { fontWeight: "400", fontSize: 14, color: "#3B566E" },
              ]}
            >
              Your Email
            </Text>
            <Text
              style={[
                styles.text,
                { fontWeight: "400", fontSize: 14, color: "#6F8BA4" },
              ]}
            >
              hi@shanaws.xyz
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 45,
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.text,
                { fontWeight: "400", fontSize: 14, color: "#3B566E" },
              ]}
            >
              Change Password
            </Text>
            <Image source={require("../assets/RightArrow.png")} />
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 45,
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.text,
                { fontWeight: "400", fontSize: 14, color: "#3B566E" },
              ]}
            >
              Notifications
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#0A94FF" }}
              thumbColor={"white"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <Pressable style={styles.button}>
          <Text
            style={[
              styles.text,
              { fontSize: 15, fontWeight: "700", color: "white" },
            ]}
          >
            Done
          </Text>
        </Pressable>
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
  profilePic: {
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#504DE5",
    width: 91,
    height: 91,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "75%",
    height: 40,
    borderRadius: 19,
    backgroundColor: "#0A94FF",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditProfile;
