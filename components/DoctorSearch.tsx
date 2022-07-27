import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { FONTS } from '../constants'
interface doctorCard{
    DocName : String,
    Qualification : String,
    profile:string,
    Rating: Number,
    onPress: any,
    width:number,
    key:any,
  } 
const DoctorSearch = (props:doctorCard) => {
  return (
    <TouchableOpacity style={[styles.container]} key={props.key} 
    onPress={props.onPress}
    >
      <View style={{ height: 185, borderRadius: 12, alignSelf: "center" }}>
        <Image
          style={{height:190,width:140}}
          source={{uri:props.profile}}
          resizeMode="contain"
        ></Image>
        <View style={styles.starView}>
          <View
            style={{
              flexDirection: "row",
              margin: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.text,
                { fontSize: 12, fontWeight: "800", marginRight: 5 },
              ]}
            >
              {props.Rating}
            </Text>
            <Ionicons name="star" size={15} color="rgba(255, 196, 98, 1)" />
          </View>
        </View>
      </View>
      <Text
        style={[
          styles.text,
          { fontSize: 15, fontWeight: "800", marginTop: 10 },
        ]}
      >
        {props.DocName}
      </Text>
      <Text
        style={[
          styles.text,
          { fontSize: 10, fontWeight: "300", color:'grey'},
        ]}
      >
        {props.Qualification}
      </Text>
    </TouchableOpacity>
  )
}

export default DoctorSearch

const styles = StyleSheet.create({
    container: {
      marginTop: 19,
      width: 150,
      borderRadius: 16,
      backgroundColor: "#FFFFFF",
      padding: 10,
      paddingTop:0
    },
    text: {
      fontFamily: FONTS.regular,
    },
    starView: {
      right: 0,
      top: 10,
      position: "absolute",
      margin: 8,
      backgroundColor: "white",
      borderRadius: 8,
    },
  });