import {Text, View, useWindowDimensions,ImageSourcePropType } from "react-native";
import { Image } from "expo-image";

type SlideItemProps = {
  title: string;
  description: string;
  image: ImageSourcePropType;
};

export default function SlideItem({ title, description, image }: SlideItemProps) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width }} className="items-center justify-center px-4">
      <Image source={image} style={{width:'100%', height:360, marginBottom:32, borderRadius:10}} contentFit="cover" />
      <Text style={{fontFamily:'Poppins'}} className="text-2xl font-bold text-center mb-2 text-black">{title}</Text>
      <Text style={{fontFamily:'Poppins'}} className="text-base text-center mx-8 text-gray-500">{description}</Text>
    </View>
  );
}
