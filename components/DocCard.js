import React from "react";
import { StyleSheet, View, Text, Dimensions, Image, ScrollView } from "react-native";
import * as constant from "../utilities/constant";
const DocCard = () => {
    return (
        <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={styles.cardContainer}>
                    <Image
                        style={{ width: 200, height: 200, margin: 10, borderRadius: 25, opacity: 0.9 }}
                        source={constant.IMAGES.pic1} />
                    <View style={{ flexDirection: "column" }}>
                        <View><Text style={styles.cardtext3}>   Dr.Daryl Neil</Text></View>
                        <View><Text style={styles.cardtext2}>     (Psychiatrist, MBBS)</Text></View>

                    </View></View>
                <View style={styles.cardContainer}>
                    <Image
                        style={{ width: 200, height: 200, margin: 10, borderRadius: 25, opacity: 0.9 }}
                        source={constant.IMAGES.pic1} />
                    <View style={{ flexDirection: "column" }}>
                        <View><Text style={styles.cardtext3}>   Dr.Daryl Neil</Text></View>
                        <View><Text style={styles.cardtext2}>     (Psychiatrist, MBBS)</Text></View>

                    </View></View>
                <View style={styles.cardContainer}>
                    <Image
                        style={{ width: 200, height: 200, margin: 10, borderRadius: 25, opacity: 0.9 }}
                        source={constant.IMAGES.pic1} />
                    <View style={{ flexDirection: "column" }}>
                        <View><Text style={styles.cardtext3}>   Dr.Daryl Neil</Text></View>
                        <View><Text style={styles.cardtext2}>     (Psychiatrist, MBBS)</Text></View>

                    </View></View>
            </View>
        </ScrollView>
    );
};

const { deviceWidth } = Dimensions.get("window");
const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 10,
        width: 220,
        backgroundColor: '#ffffff',
        height: 270,
        borderRadius: 20,
        marginLeft: 10,
    },
    cardtext2: { color: '#000', fontSize: 13, alignSelf:"auto"},
    cardtext3: { color: '#000', fontSize: 20, fontWeight: "bold",alignSelf:"auto"},
});
export default DocCard;