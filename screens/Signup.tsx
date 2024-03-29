import { Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Checkbox from "expo-checkbox";
import { COLORS, FONTS, SHADOWS } from "../constants";
import PhoneInput from "react-native-phone-number-input";
import { useAuth } from "../lib/auth/AuthContext";
const Signup = ({ navigation }: any) => {
  const [isSelected, setSelection] = useState(false);
  const auth = useAuth();
  function signUpFunc(value: any) {
    auth?.signup(value.email, value.password, value.firstName, value.lastName);
  }
  // useEffect(()=>{
  //   initAsync();
  // },[])

  // const initAsync = async () => {
  //   await GoogleSignIn.initAsync({
  //     clientId:'669318155909-una5r35mjt4d9bk2mnej3c0nh6kg4vgi.apps.googleusercontent.com'
  //   });
  //   syncUserWithStateAsync();
  // };
  // const signInAsync = async () => {
  //   try {
  //     await GoogleSignIn.askForPlayServicesAsync();
  //     const { type, user } = await GoogleSignIn.signInAsync();
  //     if (type === 'success') {
  //       syncUserWithStateAsync();
  //     }
  //   } catch ({ message }) {
  //     alert(message);
  //   }
  // };
  // const syncUserWithStateAsync = async () => {
  //   const user = await GoogleSignIn.signInSilentlyAsync();
  //   console.log(user)
  // };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#F5F8FA"
          barStyle={"dark-content"}
        />
        <View>
          <Text h3 style={styles.text}>
            Welcome to {""}
            <Text h3 style={{ color: COLORS.primary }}>
              SAYHEY,
            </Text>
          </Text>
          <Text style={styles.subText}>Let us get to know you better!</Text>
        </View>
        <View>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              mobileNumber: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              if (isSelected) {
                signUpFunc(values);
              } else {
                alert("Please check terms and conditions");
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <View
                  style={{
                    marginTop: 25,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextInput
                    onChangeText={handleChange("firstName")}
                    onBlur={handleBlur("firstName")}
                    value={values.firstName}
                    placeholder="First Name"
                    style={styles.input}
                  />
                  <TextInput
                    onChangeText={handleChange("lastName")}
                    onBlur={handleBlur("lastName")}
                    value={values.lastName}
                    placeholder="Last Name"
                    style={styles.input}
                  />
                  <TextInput
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    placeholder="Email"
                    style={styles.input}
                  />
                  <PhoneInput
                    defaultCode="IN"
                    layout="first"
                    containerStyle={styles.phoneContainer}
                    textContainerStyle={styles.numberInput}
                    onChangeFormattedText={(text) => {
                      values.mobileNumber = text;
                    }}
                  />
                  <TextInput
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholder="Password"
                    style={styles.input}
                  />
                  <Text
                    style={{
                      marginLeft: 12,
                      color: "#CDCFD0",
                      alignSelf: "flex-start",
                    }}
                  >
                    *minimum 6 characters
                  </Text>
                </View>
                <View
                  style={{
                    margin: 12,
                    padding: 8,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    color={"#0A94FF"}
                    value={isSelected}
                    onValueChange={setSelection}
                  />
                  <View
                    style={{
                      marginLeft: 20,
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    <Text> By clicking here I agree SAYHEY'S</Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("PdfViewPage", {
                          pdfBool: true,
                        });
                      }}
                    >
                      <Text style={{ color: "#0A94FF" }}>
                        Terms Of Service{" "}
                      </Text>
                    </TouchableOpacity>
                    <Text>and </Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("PdfViewPage", {
                          pdfBool: false,
                        });
                      }}
                    >
                      <Text style={{ color: "#0A94FF" }}>Privacy Policy</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Button
                  color={"#0A94FF"}
                  title="Submit"
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
          <Text
            style={{ marginTop: 10, textAlign: "center", fontWeight: "bold" }}
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
            <TouchableOpacity
              onPress={() => {
                auth?.onFacebookButtonPress();
              }}
            >
              <Image
                source={require("../assets/Facebook.png")}
                style={styles.logo}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                auth?.onGoogleButtonPress();
              }}
            >
              <Image
                source={require("../assets/Google.png")}
                style={styles.logo}
              />
            </TouchableOpacity>
          </View>
          <Text style={{ textAlign: "center", margin: 25 }}>
            Already have an account?{" "}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <Text
                style={{ color: "#FF7360", textDecorationLine: "underline" }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

// CSS PART
const styles = StyleSheet.create({
  container: {
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
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    height: 56,
    boxShadow: SHADOWS.dark,
    margin: 12,
    padding: 8,
    color: COLORS.lightgray,
    width: "95%",
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
  button: {
    backgroundColor: "#0A94FF",
    height: 56,
    justifyContent: "center",
    borderRadius: 12,
  },
  logo: {
    width: 35,
    height: 35,
  },
});

export default Signup;
