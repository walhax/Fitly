import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function EmailVerifiedScreen() {
  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Text className="text-xl font-semibold">Email Verified ✅</Text>
      <Pressable onPress={() => router.push('./Phone')} className="bg-blue-600 p-3 rounded-md">
        <Text className="text-white text-center">Continue</Text>
      </Pressable>
    </View>
  );
}