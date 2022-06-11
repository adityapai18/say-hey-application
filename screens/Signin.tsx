import { Text } from "@rneui/themed";
import { Formik } from "formik";
import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from "react-native";
import { COLORS, FONTS, SHADOWS } from "../constants";
import PhoneInput from "react-native-phone-number-input";

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text h3 style={styles.text}>
          Hello Again?
        </Text>
        <Text style={styles.subText}>
          Welcome back you've {"\n"}been missed!!
        </Text>
      </View>
      <View>
        <Formik
          initialValues={{
            mobileNumber: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={{ marginTop: 25 }}>
              <PhoneInput
                value={values.mobileNumber}
                defaultCode="IN"
                layout="first"
                containerStyle={styles.phoneContainer}
                textContainerStyle={styles.numberInput}
              />
              <View style={{ marginTop: "30%" }}>
                <Button
                  color={"#0A94FF"}
                  title="Send OTP"
                  onPress={handleSubmit}
                />
              </View>
              <Text style={{ textAlign: "center", margin: 15 }}>
                Signin with <Text style={{ color: "#FF7360" }}>Password</Text>
              </Text>
              <Text
                style={{
                  marginTop: 25,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                or
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginTop: 15,
                }}
              >
                <Image
                  source={require("../assets/Facebook.png")}
                  style={styles.logo}
                />
                <Image
                  source={require("../assets/Apple.png")}
                  style={styles.logo}
                />
                <Image
                  source={require("../assets/Google.png")}
                  style={styles.logo}
                />
              </View>
              <Text style={{ textAlign: "center", margin: 25 }}>
                Already have an account?{" "}
                <Text style={{ color: "#FF7360" }}>Login</Text>
              </Text>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    backgroundColor: COLORS.offWhite,
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
    marginTop: 15,
  },
  subText: {
    fontFamily: FONTS.regular,
    color: COLORS.gray,
    textAlign: "center",
  },
  phoneContainer: {
    width: "95%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    height: 56,
    boxShadow: SHADOWS.dark,
    margin: 12,
    color: COLORS.lightgray,
  },
  numberInput: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    color: COLORS.lightgray,
    boxShadow: SHADOWS.dark,
  },
  logo: {
    width: 30,
    height: 30,
  },
});

export default SignIn;
