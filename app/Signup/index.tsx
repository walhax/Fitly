// ✅ signup/index.tsx (Email Input Screen)
import { View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { useSignupStore } from '@/store/SignupStore';

export default function EmailScreen() {
  const [emailInput, setEmailInput] = useState('');
  const setEmail = useSignupStore((s) => s.setEmail);

  const handleNext = () => {
    if (!emailInput.includes('@')) return alert('Enter valid email');
    setEmail(emailInput);
    router.push('./EmailVerify');
  };

  return (
    <View className="flex-1 justify-center gap-4">
      <Text className="text-xl font-semibold">Enter your email</Text>
      <TextInput
        value={emailInput}
        onChangeText={setEmailInput}
        className="border border-gray-300 p-3 rounded-md"
        placeholder="you@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Pressable onPress={handleNext} className="bg-blue-600 p-3 rounded-md">
        <Text className="text-white text-center">Continue</Text>
      </Pressable>
    </View>
  );
}