// ✅ signup/index.tsx (Email Input Screen)
import { TextInput, } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { useSignupStore } from '@/store/SignupStore';
import Button from '@/components/Button';
import FormWrapper from '@/components/FormWrapper';
import SignupWrapper from '@/components/SignupWrapper';

export default function EmailScreen() {
  const [emailInput, setEmailInput] = useState('');
  const setEmail = useSignupStore((s) => s.setEmail);

  const handleNext = () => {
    if (!emailInput.includes('@')) return alert('Enter valid email');
    setEmail(emailInput);
    router.push('/Signup/EmailVerify');
  };

  return (
    <SignupWrapper>
         
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

      <Button text='Submit Email' onpress={handleNext}/>
    </SignupWrapper>

    
  );
}