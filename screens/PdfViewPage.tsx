import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import Pdf from "react-native-pdf";

const PdfViewPage = ({ route }: any) => {
  const { pdfBool } = route.params;
  console.log(pdfBool);
  const TandC='https://firebasestorage.googleapis.com/v0/b/sayhey-app-auth.appspot.com/o/Company%20Pdf%2FSay%20Hey!!%20-%20Terms%20%26%20Conditions.pdf?alt=media&token=b4d3b324-0836-47cc-abea-8ecab2678871'
  const Privacy = 'https://firebasestorage.googleapis.com/v0/b/sayhey-app-auth.appspot.com/o/Company%20Pdf%2Fprivacy.pdf?alt=media&token=868ca10d-1fb4-4ba5-88e3-2957f68150b1';
  return (
    <SafeAreaProvider>
      <Pdf
      trustAllCerts={false}
      source={{
        uri: pdfBool? TandC : Privacy,
        cache: true,
      }}
      onError={(error) => {
        alert(error)
      }}
      style={styles.pdf}
    ></Pdf>
    </SafeAreaProvider>
  );
};

export default PdfViewPage;

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
