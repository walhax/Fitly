import { View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ImageBackground } from 'expo-image';

type Props = {
  children: React.ReactNode;
};

export default function SignupWrapper({children}:Props) {
  return (

    <View className="flex-1 py-10 gap-4">
      <Ionicons name="chevron-back-sharp" size={30} color="black" />
      <View className='flex-1 justify-between'>
        {children}
      </View>
      
    </View>
  )
}