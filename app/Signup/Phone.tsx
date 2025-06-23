import { View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { useSignupStore } from '@/store/SignupStore';
import { router } from 'expo-router';

export default function PhoneScreen() {
  const [phoneInput, setPhoneInput] = useState('');
  const setPhone = useSignupStore((s) => s.setPhone);

  const handleNext = () => {
    if (phoneInput.length < 10) return alert('Enter valid phone number');
    setPhone(phoneInput);
    router.push('./PhoneVerify');
  };

  return (
    <View className="flex-1 justify-center gap-4">
      <Text className="text-xl font-semibold">Enter your phone number</Text>
      <TextInput
        value={phoneInput}
        onChangeText={setPhoneInput}
        className="border border-gray-300 p-3 rounded-md"
        keyboardType="phone-pad"
        placeholder="08012345678"
      />
      <Pressable onPress={handleNext} className="bg-blue-600 p-3 rounded-md">
        <Text className="text-white text-center">Continue</Text>
      </Pressable>
    </View>
  );
}
