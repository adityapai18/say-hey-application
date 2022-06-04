import React from "react";
import { ParallaxImage } from "react-native-snap-carousel";
import { View, Text, Pressable, SafeAreaView } from "react-native";
import styles from "./styles";
import * as constant from "../utilities/constant";

function CarouselItem({ item, index }, parallaxProps) {
  return (
    <Pressable>
      <SafeAreaView style={styles.item}>
        <ParallaxImage
          source={item.Image} /* the source of the image */
          containerStyle={styles.imageContainer}
          style={styles.image}
          {...parallaxProps} /* pass in the necessary props */
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </SafeAreaView>
    </Pressable>
  );
}

export default CarouselItem;
