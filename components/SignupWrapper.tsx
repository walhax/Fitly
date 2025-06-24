import { View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { SmallButton } from './Button';

type Props = {
    children: React.ReactNode;
    optional?:boolean,
    onpress?:any
};

export default function SignupWrapper({children,optional,onpress}:Props) {
  return (

    <View className="flex-1 py-10 gap-4">
        <View className='w-full flex-row justify-between'>
            <Ionicons name="chevron-back-sharp" size={30} color="black" />
            {optional?(
                <SmallButton onpress={onpress}/>
            )

            :null}
            
        </View>
        
        <View className='flex-1 justify-between'>
            {children}
        </View>
      
    </View>
  )
}