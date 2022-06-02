import { Text } from "@rneui/themed";

import { Formik } from "formik";
import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { PrimaryButton } from "../components/Button";
import { COLORS, FONTS, SHADOWS } from "../constants";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text h3 style={styles.text}>
          Welcome to {""}
          <Text h3 style={{ color: COLORS.primary }}>
            SAYHEY,
          </Text>
        </Text>
        <Text h4 style={styles.subText}>
          Let us get to know you better!
        </Text>
      </View>
      <View>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email"
                style={styles.input}
              />
              <Button title="Submit" />
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
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
    marginTop: 25,
    padding: 8,
    color: COLORS.lightgray,
  },
});

export default Login;
