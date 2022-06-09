import React from "react";
import { StyleSheet, View, Text, Dimensions, Image, ScrollView } from "react-native";
import * as constant from "../utilities/constant";
const Activeprof = () => {
    return (
        <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View>
                    <Image
                        style={{ width: 80, height: 80, margin: 10, borderRadius: 100, opacity: 0.9 }}
                        source={constant.IMAGES.pic1} />
                    <View style={{ flexDirection: "column" }}>
                        <View><Text style={styles.cardtext3}>Dr.Neil</Text></View>

                    </View></View>
                <View >
                    <Image
                        style={{ width: 80, height: 80, margin: 10, borderRadius: 100, opacity: 0.9 }}
                        source={constant.IMAGES.pic1} />
                    <View style={{ flexDirection: "column" }}>
                        <View><Text style={styles.cardtext3}>Dr.Neil</Text></View>

                    </View></View>
                <View >
                    <Image
                        style={{ width: 80, height: 80, margin: 10, borderRadius: 100, opacity: 0.9 }}
                        source={constant.IMAGES.pic1} />
                    <View style={{ flexDirection: "column" }}>
                        <View><Text style={styles.cardtext3}>Dr.Neil</Text></View>

                    </View></View>
                    <View >
                    <Image
                        style={{ width: 80, height: 80, margin: 10, borderRadius: 100, opacity: 0.9 }}
                        source={constant.IMAGES.pic1} />
                    <View style={{ flexDirection: "column" }}>
                        <View><Text style={styles.cardtext3}>Dr.Neil</Text></View>

                    </View></View>
                    <View >
                    <Image
                        style={{ width: 80, height: 80, margin: 10, borderRadius: 100, opacity: 0.9 }}
                        source={constant.IMAGES.pic1} />
                    <View style={{ flexDirection: "column" }}>
                        <View><Text style={styles.cardtext3}>Dr.Neil</Text></View>

                    </View></View>
            </View>
        </ScrollView>
    );
};

const { deviceWidth } = Dimensions.get("window");
const styles = StyleSheet.create({
    cardtext3: { color: '#000', fontSize: 13, fontWeight: "bold" ,alignSelf:"center"},
});
export default Activeprof;