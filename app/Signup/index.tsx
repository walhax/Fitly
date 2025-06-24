// ✅ signup/index.tsx (Email Input Screen)
import { View, Text, TextInput, } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { useSignupStore } from '@/store/SignupStore';
import {text_gray} from '@/constants/Colors'
import Button from '@/components/Button';
import Ionicons from '@expo/vector-icons/Ionicons';
import FormWrapper from '@/components/FormWrapper';

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
        <FormWrapper title='Enter your email address' description='Add an email to secure your account and stay updated.'>
          <TextInput
            value={emailInput}
            onChangeText={setEmailInput}
            className="border border-[#CECECE] bg-white py-4 px-4 rounded-md"
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </FormWrapper>
      </View>

 
      <Button text='Submit Email' link={'/Signup/EmailVerify'}/>
    </View>
  );
}