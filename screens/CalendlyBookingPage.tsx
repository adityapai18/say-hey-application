import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
const CalendlyBookingPage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "fff" }}>
      <WebView
      style={{flex:1}}
        source={{
          html: `
          <div class="calendly-inline-widget" data-url="https://calendly.com/sayheyofficial/60min?hide_gdpr_banner=1" style="width:100%;height:auto;"></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          `,
        }}
      />
    </SafeAreaView>
  );
};

export default CalendlyBookingPage;

const styles = StyleSheet.create({});
