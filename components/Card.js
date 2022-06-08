import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import * as constant from "../utilities/constant";
import { COLORS } from "../constants";
const Card = () => {
    return (
        <View style={styles.cardContainer}>
            <View><Text style={styles.cardtext}>   Mental Depression</Text></View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "column" }}>
                      <View><Text style={styles.cardtext1}>    Today 10:00 AM</Text></View>
                      <View><Text style={styles.button}>  1st Checkup</Text></View>
                      <View><Text style={styles.cardtext3}>    Dr.Daryl Neil</Text></View>
                      <View><Text style={styles.cardtext2}>     (Psychiatrist, M.D)</Text></View>
                </View>
                <Image
                    style={{width: 150, height: 156,borderRadius:25, opacity: 0.9 }}
                    source={constant.IMAGES.pic1} />
            </View>
        </View>
    );
};

const { deviceWidth } = Dimensions.get("window");
const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 5,
        width: deviceWidth,
        backgroundColor: '#054a80',
        height: 200,
        borderRadius: 20,
    }, button: {
        width: "80%",
        height: 30,
        backgroundColor: COLORS.primary,
        shadowColor: COLORS.primary,
        shadowOffset: { height: 1, width: 1 },
        marginLeft:15,
        marginTop:10,
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2,
        borderRadius: 12,
        borderColor: COLORS.primary,
        fontSize:18,
        color:'#f2f4f5',
      },
    cardtext: { color: '#f2f4f5', marginTop: 10,fontSize: 28, },
    cardtext1: { color: '#f2f4f5', marginTop: 10,  fontSize: 18, },
    cardtext2: { color: '#f2f4f5',  fontSize: 13, },
    cardtext3: { color: '#f2f4f5', marginTop: 10,  fontSize: 18,fontWeight:"bold" },
});
export default Card;