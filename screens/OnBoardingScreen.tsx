import React, { useEffect } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FONTS } from "../constants";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#FFFFFF", white: "#fff" };

const slides = [
  {
    id: "1",
    image: require("../assets/OnBoardingImage1.png"),
    title: "Easiest Consultation",
    subtitle: "Get the right mental treatment directly from doctor by online consultation",
  },
  {
    id: "2",
    image: require("../assets/OnBoardingImage1.png"),
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    image: require("../assets/OnBoardingImage1.png"),
    title: "Increase Your Value",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Slide = ({ item }: any) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item?.image}
        style={{ height: "75%", width, resizeMode: "contain" }}
      />
      <View>
        <Text style={[styles.text, styles.title]}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const Timer = () => {
      interval = setTimeout(() => {
        goToNextSlide();
      }, 5000);
      console.log(currentSlideIndex);
    };
    Timer();
    return () => {
      clearTimeout(interval);
    };
  }, [currentSlideIndex]);

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: "#0A94FF",
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  // navigation.replace('HomeScreen')
                  console.log("homescreen");
                }}
              >
                <Text
                  style={[
                    { fontWeight: "bold", fontSize: 15, color: "white" },
                    styles.text,
                  ]}
                >
                  CONTINUE
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: "#0A94FF",
                    borderWidth: 1,
                    backgroundColor: "transparent",
                  },
                ]}
                onPress={skip}
              >
                <Text
                  style={[
                    {
                      fontWeight: "bold",
                      fontSize: 15,
                    },
                    styles.text,
                  ]}
                >
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}
              >
                <Text
                  style={[
                    {
                      fontWeight: "bold",
                      fontSize: 15,
                      color: "white",
                    },
                    styles.text,
                  ]}
                >
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "#979C9E",
    fontSize: 13,
    marginTop: 10,
    maxWidth: width*0.7,
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    fontSize: 32,
    fontWeight: "400",
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    marginTop: 20,
    borderRadius: 5,
  },
  text: {
    fontFamily: FONTS.regular,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#0A94FF",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OnboardingScreen;
