import { View,Text, Pressable} from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import FormWrapper from '@/components/FormWrapper';
import Button from '@/components/Button';
import { OtpInput } from "react-native-otp-entry";
import SignupWrapper from '@/components/SignupWrapper';
import { button_peach, text_gray } from '@/constants/Colors';

export default function EmailVerifyScreen() {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    if (code.length === 6) {
      router.push('/Signup/EmailVerified');
    } else {
      alert('Enter a valid 6-digit code');
    }
  };

  return (
    <SignupWrapper>
      <View className='gap-4'>
        <FormWrapper title='Enter Verification Code' description='We sent a 6-digit code to your email. Enter it below to reset your password.'>
          <OtpInput numberOfDigits={6} onTextChange={(text) => setCode(text)} placeholder='*******' theme={{
            pinCodeContainerStyle:{
              backgroundColor:"white"
            }
          }}/>
        </FormWrapper>
        <View className='flex-row gap-1'>
          <Text style={{fontFamily:'Poppins-Medium', fontSize:14, color:text_gray}}>Didn’t receive code?</Text>
          <Pressable>
            <Text  style={{fontFamily:'Poppins-Medium', fontSize:14}} className={`text-[${button_peach}]`}>
              Resend code
            </Text>
          
          </Pressable>
          <Text style={{fontFamily:'Poppins-Medium', fontSize:14, color:text_gray }}>(60)</Text>
        </View>
        

      </View>

 
      <Button text='confirm' onpress={handleVerify}/>
 
    </SignupWrapper>
  );
}