import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./CarouselItem";
import styles from "./styles";
import { View } from 'react-native';

const { width } = Dimensions.get("window");
export default function CustomSlider({ data }) {
  const settings = {
    sliderWidth: width-40,
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