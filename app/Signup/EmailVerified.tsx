import { View, Text } from 'react-native';
import { router } from 'expo-router';
import SignupWrapper from '@/components/SignupWrapper';
import Verified from '@/components/Verified';
import Button from '@/components/Button';

export default function EmailVerifiedScreen() {
  return (
    <SignupWrapper>
      <View className='flex-1 pt-40'>
        < Verified title='Email address verified successfully' description='Your email address has been verified successfully'/>
        <Button text='Next' onpress={() => router.push('/Signup/Phone')} />
      </View>
    </SignupWrapper>
   
  );
}