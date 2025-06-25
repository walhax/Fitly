import { View} from 'react-native';
import { router } from 'expo-router';
import SignupWrapper from '@/components/SignupWrapper';
import Verified from '@/components/Verified';
import Button from '@/components/Button';

export default function EmailVerifiedScreen() {
  return (
    <SignupWrapper>
      <View className='flex-1 pt-40'>
        < Verified title='phone number verified successfully' description='Your phone number has been verified successfully'/>
        <Button text='Next' onpress={() => router.push('/Signup/PersonalDetails')} />
      </View>
    </SignupWrapper>
   
  );
}