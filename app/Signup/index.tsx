// ✅ signup/index.tsx (Email Input Screen)
import { View, Text, TextInput, } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { useSignupStore } from '@/store/SignupStore';
import {text_gray} from '@/constants/Colors'
import Button from '@/components/Button';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function EmailScreen() {
  const [emailInput, setEmailInput] = useState('');
  const setEmail = useSignupStore((s) => s.setEmail);

  const handleNext = () => {
    if (!emailInput.includes('@')) return alert('Enter valid email');
    setEmail(emailInput);
    router.push('./EmailVerify');
  };

  return (
    <View className="flex-1 py-10  justify-between ">
      <View className='gap-4'>
        <Ionicons name="chevron-back-sharp" size={30} color="black" />
        <Text style={{fontFamily:'Poppins-SemiBold'}} className="text-2xl ">Enter your email address</Text>
        <Text style={{fontFamily:'Poppins-Medium', color:text_gray,}} className='text-base ' >Add an email to secure your account and stay updated.</Text>
        <View className='bg-[#FDEFEF80] py-5 px-4 rounded-2xl'>
          <TextInput
            value={emailInput}
            onChangeText={setEmailInput}
            className="border border-[#CECECE] bg-white py-4 px-4 rounded-md"
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

 
      <Button text='Submit Email' link={'./EmailVerify'}/>
    </View>
  );
}