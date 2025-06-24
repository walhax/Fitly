import { TextInput, } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { useSignupStore } from '@/store/SignupStore';
import Button from '@/components/Button';
import FormWrapper from '@/components/FormWrapper';
import SignupWrapper from '@/components/SignupWrapper';


export default function PhoneScreen() {
  const [phoneInput, setPhoneInput] = useState('');
  const setPhone = useSignupStore((s) => s.setPhone);

  const handleNext = () => {
    if (phoneInput.length < 10) return alert('Enter valid phone number');
    setPhone(phoneInput);
    router.push('/Signup/PhoneVerify');
  };

  return (
    <SignupWrapper optional={true} onpress={()=>router.push('/Signup/PhoneVerify')}>
         
      <FormWrapper title='Enter your phone number' description='Add a phone number to secure your account and stay updated.'>
        <TextInput
          value={phoneInput}
          onChangeText={setPhoneInput}
          className="border border-[#CECECE] bg-white py-4 px-4 rounded-md"
          placeholder="Phone Number"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </FormWrapper>

      <Button text='Submit Number' onpress={handleNext}/>
    </SignupWrapper>

    
  );
}
