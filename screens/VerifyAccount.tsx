import { Text } from "@rneui/themed";
import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { auth, app } from "../firebase";
import { COLORS, FONTS, SHADOWS } from "../constants";

const VerifyAccount = ({ route, navigation }: any) => {
  const recaptchaVerifier: any = React.useRef(null);
  const [verificationId, setVerificationId] = React.useState("");
  const [verificationCode, setVerificationCode] = React.useState();
  async function SignInVerify(phoneNumber: any) {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 15 }}>
        <Text h3 style={styles.text}>
          Verify Account
        </Text>
        <Text style={styles.subText}>
          Four digits code are sent to ******-513.{"\n"}
          Enter the codes to verify your account
        </Text>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={app.options}
          // attemptInvisibleVerification
        />
        <View style={{ alignItems: "center" }}>
          <OTPTextView
            containerStyle={styles.textInputContainer}
            textInputStyle={styles.roundedTextInput}
            tintColor="#0A94FF"
            onTextChange={setVerificationCode}
          />
        </View>
        <Button
          color={"#0A94FF"}
          title="Submit"
          onPress={() => console.log(verificationCode)}
        />
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            color: "#0A94FF",
            fontWeight: "bold",
          }}
        >
          Send Code By Mail
        </Text>
      </View>
    </SafeAreaView>
  );
};

// CSS PART
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  textInputContainer: {
    marginTop: "10%",
    marginBottom: "20%",
    width: "90%",
  },
  roundedTextInput: {
    borderRadius: 8,
    borderWidth: 4,
  },
});

export default VerifyAccount;
