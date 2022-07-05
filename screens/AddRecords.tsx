import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-paper";
import { COLORS, FONTS, SHADOWS } from "../constants";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
const AddRecords = () => {
  const [images, setImages] = useState<Array<ImagePicker.ImageInfo>>([]);
  const [doc, setDoc] = useState<DocumentPicker.DocumentResult>();
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImages([...images, result]);
    }
  };
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type) {
      setDoc(result);
    }
    console.log({...doc});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {images.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.imagePicker}>
              <Image
                source={{ uri: item.uri }}
                style={{ width: 100, height: 125, borderRadius: 6 }}
                resizeMode="contain"
              ></Image>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          <Text style={[styles.text, { color: "white", textAlign: "center" }]}>
            <Text style={{ fontSize: 40 }}>+{"\n"}</Text>
            <Text>Add more images</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: "60%",
          backgroundColor: "#FFFFFF",
          borderRadius: 30,
        }}
      >
        <ScrollView>
          <View
            style={{
              padding: 18,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={[styles.text, { fontSize: 16 }]}>Record for</Text>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 18,
                    color: "#0A94FF",
                    fontWeight: "bold",
                    marginTop: 13,
                  },
                ]}
              >
                Shanaws Mahamud
              </Text>
            </View>
            <View>
              <Image source={require("../assets/EditIcon.png")}></Image>
            </View>
          </View>
          <Divider
            style={{ width: "90%", alignSelf: "center", marginVertical: 2 }}
          />
          <View
            style={{
              padding: 18,
            }}
          >
            <Text style={[styles.text, { fontSize: 16 }]}>Type of Record</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: 17,
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={require("../assets/ReportIcon.png")} />
                <Text
                  style={[
                    styles.text,
                    { fontSize: 13, color: "#677294", marginTop: 6 },
                  ]}
                >
                  Report
                </Text>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={require("../assets/PrescriptionIcon.png")} />
                <Text
                  style={[
                    styles.text,
                    { fontSize: 13, color: "#677294", marginTop: 6 },
                  ]}
                >
                  Prescription
                </Text>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={require("../assets/InvoiceIcon.png")} />
                <Text
                  style={[
                    styles.text,
                    { fontSize: 13, color: "#677294", marginTop: 6 },
                  ]}
                >
                  Invoice
                </Text>
              </View>
            </View>
          </View>
          <Divider
            style={{ width: "90%", alignSelf: "center", marginVertical: 2 }}
          />
          <View
            style={{
              padding: 18,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={[styles.text, { fontSize: 16 }]}>
                Record created on
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 18,
                    color: "#0A94FF",
                    fontWeight: "bold",
                    marginTop: 13,
                  },
                ]}
              >
                27 Feb, 2021
              </Text>
            </View>
            <View>
              <Image source={require("../assets/EditIcon.png")}></Image>
            </View>
          </View>
          <Divider
            style={{ width: "90%", alignSelf: "center", marginVertical: 2 }}
          />
          {doc && (
            <>
              <View style={{ padding: 18 }}>
                <Text style={[styles.text, { fontSize: 16 }]}>
                  File Selected:{" "}
                </Text>
                <Text style={[styles.text, { fontSize: 13, color: "#677294" }]}>
                  {doc.name}
                </Text>
              </View>
              <Divider
                style={{ width: "90%", alignSelf: "center", marginVertical: 2 }}
              />
            </>
          )}
          <TouchableOpacity style={styles.button} onPress={pickDocument}>
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
      </View>
    </SafeAreaView>
  );
};

export default AddRecords;

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
  imagePicker: {
    height: 125,
    margin: 7,
    width: 100,
    backgroundColor: "#0A94FF33",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  button: {
    backgroundColor: "#0A94FF",
    marginBottom: 15,
    width: "50%",
    height: 54,
    marginTop: 33,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
