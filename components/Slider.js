import { Dimensions ,StyleSheet} from "react-native";
import Carousel from "react-native-snap-carousel";
import styles from "./styles";
import React from "react";
import { ParallaxImage } from "react-native-snap-carousel";
import { View, Text, Pressable, SafeAreaView } from "react-native";

function CarouselItem({ item, index }, parallaxProps) {
  return (
    <Pressable>
      <SafeAreaView style={styles.item}>
        <ParallaxImage
          source={item.Image} /* the source of the image */
          containerStyle={styles1.cardContainer}
          style={styles.image}
          {...parallaxProps} /* pass in the necessary props */
        />
       <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.title1} numberOfLines={2}>
          {item.title1}
        </Text>

      </SafeAreaView>
    </Pressable>
  );
}

const { width } = Dimensions.get("window");

const styles1 = StyleSheet.create({
    cardContainer: {
        marginTop: 5,
        width: width-40,
        backgroundColor: '#ffffff',
        height: 200,
        borderRadius: 20,
        resizeMode:"contain",
    },
    cardtext2: { color: '#000',fontSize: 13, },
    cardtext3: { color: '#000' ,fontSize: 20, fontWeight: "bold" },
});
export default function Docslider({ data }) {
  const settings = {
    sliderWidth: width - 40,
    sliderHeight: width,
    itemWidth: width,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };
  return (
    <View style={styles.container1}>
      <Carousel {...settings} />
    </View>
  );
  
}