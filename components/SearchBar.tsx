import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Button,
  Image,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
  PlaceHolder,
  widthComplete="85%",
  widthText="95%"
}: any) => {
  return (
    <View style={[styles.container,{width:widthComplete}]}>
      <View style={[styles.searchBar__unclicked,{width:widthText}]}>
        {/* search Icon */}
        <Ionicons name="search" size={24} color="black" />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder={PlaceHolder}
          value={searchPhrase}
          onChangeText={(text)=>{
            if(text.length>0){
              setClicked(true)
            }
            else{
              setClicked(false)
            }
            setSearchPhrase(text);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Pressable
            onPress={() => {
              setSearchPhrase("");
            }}
            style={{marginLeft:"auto"}}
          >
            <Image source={require("../assets/TagCrossIcon.png")}></Image>
          </Pressable>
        )}
      </View>
    </View>
  );
  
};

export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "85%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
  },
  input: {
    fontSize: 15,
    marginLeft: 15,
    width:'100%'
  },
});
