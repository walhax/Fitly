import { TextInput, View, Text} from 'react-native';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import Button from '@/components/Button';
import FormWrapper from '@/components/FormWrapper';
import SignupWrapper from '@/components/SignupWrapper';


export default function PersonalDetails() {
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
                placeholder="Enter Email"
                autoCapitalize="none"
            />

            <TextInput
                value={lastnameInput}
                onChangeText={setlastnameInput}
                className="border border-[#CECECE] bg-white py-4 px-4 rounded-md"
                placeholder="Password"
                autoCapitalize="none"
            />
        
            <View className='flex-row justify-end'>
                <Link href='/Auth/ForgotPassword'>
                    <Text className='color-[#EB6363]'>Forgot Password</Text>
                </Link>
            </View>
        </View>
      </FormWrapper>

      <Button text='Login' onpress={handleNext}/>
    </SignupWrapper>

    
  );
}
