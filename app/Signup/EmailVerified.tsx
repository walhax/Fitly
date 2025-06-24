import { View, Text } from 'react-native';
import { router } from 'expo-router';
import SignupWrapper from '@/components/SignupWrapper';
import Octicons from '@expo/vector-icons/Octicons';
import { text_gray } from '@/constants/Colors';
import Button from '@/components/Button';

export default function EmailVerifiedScreen() {
  return (
    <SignupWrapper>
      <View className='flex-1 pt-40'>
        <View className='w-full items-center gap-y-8 flex-1'>
          <Octicons name="verified" size={72} color="green" />
          <View className=' gap-2'>
            <Text style={{fontFamily:'Poppins-SemiBold'}} className="text-2xl text-center">Email address verified successfully</Text>
            <Text style={{fontFamily:'Poppins-Medium', color:text_gray,}} className='text-base text-center'>Your email address has been verified successfully</Text>
          </View>

        </View>
        <Button text='Next' onpress={() => router.push('/Signup/Phone')} />
      </View>
    </SignupWrapper>
   
  );
}