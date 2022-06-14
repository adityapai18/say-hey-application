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

const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
  PlaceHolder,
}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar__unclicked}>
        {/* search Icon */}
        <Image source={require("../assets/SearchIcon.png")} />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder={PlaceHolder}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
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

  },
});
