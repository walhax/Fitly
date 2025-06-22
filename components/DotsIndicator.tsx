// components/DotsIndicator.tsx
import { View } from "react-native";

type Props = {
  count: number;
  activeIndex: number;
};

export default function DotsIndicator({ count, activeIndex }: Props) {
  return (
    <View className="flex-row mt-6 gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <View
          key={i}
          className={`h-2 rounded-full ${activeIndex === i ? "bg-[##EB6363] w-5" : "bg-[#F9CFCF] w-2"}`}
        />
      ))}
    </View>
  );
}