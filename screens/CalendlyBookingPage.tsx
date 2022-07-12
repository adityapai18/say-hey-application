import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
const CalendlyBookingPage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "fff" }}>
      <WebView
        style={{ flex: 1 }}
        source={{
          html: `
          <iframe src="https://meetings.hubspot.com/say_hey" frameborder="0" style='height:100%;width:100%;'></iframe>
          `,
        }}
      />
      </SafeAreaView>
  );
};

export default CalendlyBookingPage;

const styles = StyleSheet.create({});
