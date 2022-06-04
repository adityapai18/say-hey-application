import { Text } from "@rneui/themed";

import {View,TextInput,StyleSheet} from "react-native";
import React from "react";
import { COLORS } from "../constants";


const Searchbar=(props)=>{
    return(
        <View style={styles.container}>
            <TextInput
            placeholder="Search your Professional"
            style={styles.input}
            value={props.searchText}
            onChangeText={(text)=>props.setSearchText(text)}
            />
        </View>
    )

}

export default Searchbar;

const styles= StyleSheet.create({
container:{
    margin:10,
},
input:{
    backgroundColor:"#fff",
    padding:10,
    borderRadius: 100,
    color: "#000",
    borderWidth: 1,


}
})