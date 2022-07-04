import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SHADOWS } from "../constants";
import * as ImagePicker from "expo-image-picker";
const AddRecords = () => {
  const [images, setImages] = useState<Array<String>>([]);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      var uri = result.uri;
      setImages([...images, uri]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
        {images.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.imagePicker}>
              <Image
                source={{ uri: item }}
                style={{width:100,height:125}}
                resizeMode="contain"
              ></Image>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          <Text style={[styles.text, { color: "white", textAlign:"center" }]}>
            <Text style={{ fontSize: 40 }}>+{'\n'}</Text>
            <Text>Add more images</Text>
          </Text>
        </TouchableOpacity>
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
    margin:7,
    width: 100,
    backgroundColor: "#0A94FF33",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
});
