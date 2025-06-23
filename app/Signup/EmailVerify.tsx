import { View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function EmailVerifyScreen() {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    if (code.length === 6) {
      router.push('./EmailVerified');
    } else {
      alert('Enter a valid 6-digit code');
    }
  };

  return (
    <View className="flex-1 justify-center gap-4">
      <Text className="text-xl font-semibold">Verify your email</Text>
      <TextInput
        value={code}
        onChangeText={setCode}
        className="border border-gray-300 p-3 rounded-md"
        keyboardType="numeric"
        placeholder="Enter OTP"
      />
      <Pressable onPress={handleVerify} className="bg-green-600 p-3 rounded-md">
        <Text className="text-white text-center">Verify</Text>
      </Pressable>
    </View>
  );
}