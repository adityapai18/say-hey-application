import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MedicalRecords from "../screens/MedicalRecords";
import Home2 from "../screens/Home2"
import ScheduleScreen from "../screens/ScheduleScreen"
import AddRecords from "../screens/AddRecords";
import NotificationScreen from "../screens/NotificationScreen"
import DateAndTimeScreen from "../screens/DateAndTimeScreen"
import DateAndTimeSelectScreen from "../screens/DateAndTimeSelectScreen"
import DoctorDetails from "../screens/DoctorDetails";
import MyProfile from "../screens/MyProfile"
import CalendlyBookingPage from "../screens/CalendlyBookingPage";
import PdfViewPage from "../screens/PdfViewPage";
import { CustomMenu } from "../components/CustomMenu";
import EditProfile from "../screens/EditProfile"
import { FONTS } from "../constants";
import { Provider as PaperProvider } from "react-native-paper";
const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <PaperProvider >
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home2}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ScheduleScreen"
            component={ScheduleScreen}
            options={{
              title: "My Appointments",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: FONTS.regular,
                fontWeight: "700",
                color: "#404446",
                fontSize: 18,
              },
            }}
          />
          <Stack.Screen
            name="NotificationScreen"
            component={NotificationScreen}
            options={{
              title: "Notifications",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: FONTS.regular,
                fontWeight: "700",
                color: "#404446",
                fontSize: 18,
              },
            }}
          />
          <Stack.Screen
            name="DateAndTimeScreen"
            component={DateAndTimeScreen}
            options={{
              title: "Book Appointment",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: FONTS.regular,
                fontWeight: "700",
                color: "#404446",
                fontSize: 18,
              },
            }}
          />
          <Stack.Screen
            name="DateAndTimeSelect"
            component={DateAndTimeSelectScreen}
            options={{
              title: "Make Appointment",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: FONTS.regular,
                fontWeight: "700",
                color: "#404446",
                fontSize: 18,
              },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={MyProfile}
            options={{
              title: "My Profile",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: FONTS.regular,
                fontWeight: "700",
                color: "#404446",
                fontSize: 18,
              },
              headerRight: () => <CustomMenu />,
            }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              title: "Edit Profile",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: FONTS.regular,
                fontWeight: "700",
                color: "#404446",
                fontSize: 18,
              },
              headerRight: () => <CustomMenu />,
            }}
          />
          <Stack.Screen
            name="MedicalRecords"
            component={MedicalRecords}
            options={{
              title: "Medical Records",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: FONTS.regular,
                fontWeight: "700",
                color: "#404446",
                fontSize: 18,
              },
            }}
          />
          <Stack.Screen
            name="AddRecords"
            component={AddRecords}
            options={{
              title: "Add Records",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: FONTS.regular,
                fontWeight: "700",
                color: "#404446",
                fontSize: 18,
              },
            }}
          />
          <Stack.Screen
            name="DoctorDetails"
            component={DoctorDetails}
            options={{
              title: "Add Records",
              headerShown:false,
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: FONTS.regular,
                fontWeight: "700",
                color: "#404446",
                fontSize: 18,
              },
            }}
          />
          <Stack.Screen
            name="CalendlyBookingPage"
            component={CalendlyBookingPage}
            options={{
              title: "Booking Page",
              headerShown:false,
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: FONTS.regular,
                fontWeight: "700",
                color: "#404446",
                fontSize: 18,
              },
            }}
          />
          
        </Stack.Navigator>
    </PaperProvider>
  );
}
