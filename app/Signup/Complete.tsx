import { View} from 'react-native';
import { router } from 'expo-router';
import SignupWrapper from '@/components/SignupWrapper';
import Verified from '@/components/Verified';
import Button from '@/components/Button';

export default function EmailVerifiedScreen() {
  return (
    <SignupWrapper>
      <View className='flex-1 pt-40'>
        < Verified title='Profile setup successfully' description='Your address has been verified. Bennaan Benaiah Longdet. You can now continue.'/>
        <Button text='Next' onpress={() => router.push('/Signup/Phone')} />
      </View>
    </SignupWrapper>
   
  );
}