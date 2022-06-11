import React from "react";
import {  TouchableOpacity, Image } from "react-native";
import { Menu } from "react-native-paper";
export const CustomMenu = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 10}}
      onPress={() => setShowMenu(true)}
    >
      <Menu
        visible={showMenu}
        onDismiss={() => setShowMenu(false)}
        anchor={<Image source={require("../assets/MenuButton.png")}></Image>}
      >
        <Menu.Item onPress={() => {}} title="Item 1" />
        <Menu.Item onPress={() => {}} title="Item 2" />
        <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu>
    </TouchableOpacity>
  );
};
