import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Menu } from "react-native-paper";
import { useAuth } from "../lib/auth/AuthContext";
export const CustomMenu = () => {
  const auth = useAuth();
  const [showMenu, setShowMenu] = React.useState(false);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 20}}
      onPress={() => setShowMenu(true)}
    >
      <Menu
        visible={showMenu}
        onDismiss={() => setShowMenu(false)}
        anchor={<Image source={require("../assets/MenuButton.png")}></Image>}
      >
        <Menu.Item
          onPress={() => {
            navigation.navigate('MedicalRecords');
            setShowMenu(false);
          }}
          title="My Records"
        />
        <Menu.Item onPress={() => {auth?.signout()}} title="Sign Out" />
        <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu>
    </TouchableOpacity>
  );
};
