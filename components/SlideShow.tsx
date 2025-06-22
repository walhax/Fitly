import { FlatList, useWindowDimensions, View, } from "react-native";
import { useRef, useState } from "react";
import SlideItem from "./SlideItems";
import DotsIndicator from "./DotsIndicator";
import {onboardingSlides} from '@/constants/onboardingContents'


export default function Slideshow() {
  const { width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  return (
    <View className="items-center">
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={onboardingSlides}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        onScroll={(e) => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
          setIndex(newIndex);
        }}
        renderItem={({ item }) => (
          <SlideItem
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
      />
      <DotsIndicator count={onboardingSlides.length} activeIndex={index} />


    </View>
  );
}
