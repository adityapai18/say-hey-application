import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS } from "../constants";
const MedicalRecords = ({navigation}:any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require("../assets/MedicalRecord.png")}
          style={{ marginTop: 95, alignSelf: "center" }}
        />
        <Text
          style={[
            styles.text,
            {
              fontWeight: "800",
              fontSize: 22,
              color: "#222222",
              alignSelf: "center",
              marginTop: 40,
            },
          ]}
        >
          Add a medical record.
        </Text>
        <Text
          style={[
            styles.text,
            {
              fontWeight: "400",
              fontSize: 14,
              color: "#677294",
              alignSelf: "center",
              textAlign: "center",
              marginTop: 13,
            },
          ]}
        >
          A detailed health history helps a doctor diagnose{"\n"} you better.
        </Text>
        <TouchableOpacity style={styles.button} 
        onPress={()=>{navigation.navigate("AddRecords")}}
        >
          <Text
            style={[
              styles.text,
              { fontWeight: "700", fontSize: 18, color: "white" },
            ]}
          >
            Add a record
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MedicalRecords;

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
  button: {
    backgroundColor: "#0A94FF",
    width: 240,
    height: 54,
    marginTop: 33,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
