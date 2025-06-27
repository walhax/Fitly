import { TextInput, View, } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { useSignupStore } from '@/store/SignupStore';
import Button from '@/components/Button';
import FormWrapper from '@/components/FormWrapper';
import SignupWrapper from '@/components/SignupWrapper';


export default function PersonalDetails() {
  const [firstnameInput, setfirstnameInput] = useState('');
  const [lastnameInput, setlastnameInput] = useState('');
  const [dobInput, setdobInput] = useState('');


  const handleNext = () => {
    if (!firstnameInput||!lastnameInput||!dobInput) return alert('Enter valid phone number');
    router.push('/Signup/Address');
  };

  return (
    <SignupWrapper >
         
      <FormWrapper title='Personal details' description='Please use details that match your government issued ID'>
        <View className='gap-4'>
          <TextInput
            value={firstnameInput}
            onChangeText={setfirstnameInput}
            className="border border-[#CECECE] bg-white py-4 px-4 rounded-md"
            placeholder="Password"
            autoCapitalize="none"
          />

          <TextInput
            value={lastnameInput}
            onChangeText={setlastnameInput}
            className="border border-[#CECECE] bg-white py-4 px-4 rounded-md"
            placeholder="Confirm Password"
            autoCapitalize="none"
          />

        </View>
      </FormWrapper>

      <Button text='Next' onpress={handleNext}/>
    </SignupWrapper>

    
  );
}
