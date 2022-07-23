import React, { useState } from "react";
import {
  TouchableOpacity,
  Image,
  Modal,
  Linking,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Menu } from "react-native-paper";
import { useAuth } from "../lib/auth/AuthContext";
import { AntDesign, Entypo } from "@expo/vector-icons";
export const CustomMenu = () => {
  const auth = useAuth();
  const [showMenu, setShowMenu] = React.useState(false);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 20 }}
      onPress={() => setShowMenu(true)}
    >
      <Menu
        visible={showMenu}
        onDismiss={() => setShowMenu(false)}
        anchor={<Entypo name="dots-three-vertical" size={24} color="black" />}
      >
        <Menu.Item
          icon={()=><Entypo name="clipboard" size={24} color="grey" />}
          onPress={() => {
            navigation.navigate("MedicalRecords");
            setShowMenu(false);
          }}
          title="My Records"
        />
        <Menu.Item
          icon={()=><Entypo name="log-out" size={24} color="grey" />}
          onPress={() => {
            auth?.signout();
          }}
          title="Sign Out"
        />
        <Menu.Item
          icon={()=><Entypo name="mail" size={24} color="grey" />}
          onPress={() => {
            Linking.openURL("mailto:sayheyofficial21@gmail.com");
          }}
          title="Write To Us"
        />
        <Menu.Item
          icon={()=><AntDesign name="customerservice" size={24} color="grey" />}
          onPress={() => {
            Linking.openURL(`tel:${"+91 9082588340"}`);
          }}
          title="Call Us"
        />
      </Menu>
    </TouchableOpacity>
  );
};
