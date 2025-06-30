import { TextInput, View, Text} from 'react-native';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import { useSignupStore } from '@/store/SignupStore';
import Button from '@/components/Button';
import FormWrapper from '@/components/FormWrapper';
import SignupWrapper from '@/components/SignupWrapper';


export default function ForgotPassword() {
  const [firstnameInput, setfirstnameInput] = useState('');
  const [lastnameInput, setlastnameInput] = useState('');


  const handleNext = () => {
    if (!firstnameInput||!lastnameInput) return alert('Enter valid phone number');
    router.push('/Signup/Address');
  };

  return (
    <SignupWrapper >
         
      <FormWrapper title='Welcome Back' description='Sign in to continue your fashion journey.'>
        <View className='gap-4'>
            <TextInput
                value={firstnameInput}
                onChangeText={setfirstnameInput}
                className="border border-[#CECECE] bg-white py-4 px-4 rounded-md"
                placeholder="Email Address"
                autoCapitalize="none"
            />
        </View>
      </FormWrapper>

      <Button text='Next' onpress={handleNext}/>
    </SignupWrapper>

    
  );
}
