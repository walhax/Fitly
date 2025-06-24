import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import SignupWrapper from '@/components/SignupWrapper';

export default function EmailVerifiedScreen() {
  return (
    <SignupWrapper>
      <Text className="text-xl font-semibold">Email Verified ✅</Text>
      <Pressable onPress={() => router.push('./Phone')} className="bg-blue-600 p-3 rounded-md">
        <Text className="text-white text-center">Continue</Text>
      </Pressable>
    </SignupWrapper>
   
  );
}