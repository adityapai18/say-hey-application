import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { CarouselCard } from "./CarouselCardItem";
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
const data=[
    {
        title:"Consult with specialists, Prevent you from Mental Issue!",
        body:"Get special 10% discount this May"
    },
    {
        title:"This is the second card in the carousel , thankyou !",
        body:"Get special 10% discount this May"
    },
    {
        title:"Consult with specialists, Prevent you from Mental Issue!",
        body:"Get special 10% discount this May"
    },
    {
        title:"Consult with , Prevent you from Mental Issue!",
        body:"Get special 10% discount this May"
    }
]
const CarouselCards = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
  
    return (
      <View>
        <Carousel
          layout="tinder"
          layoutCardOffset={2}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCard}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index:any) => setIndex(index)}
          useScrollView={true}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
          }}
          dotColor="#0A94FF"
          inactiveDotColor="#E3E5E5"
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
    )
  };

export default CarouselCards;
