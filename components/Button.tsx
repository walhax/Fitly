import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'


type prop ={
    color:string,
    text:string,
}


export default function Button({color, text}: prop) {
  return (
    <View className='w-full items-center'>
      <TouchableOpacity className={`bg-[#EB6363] py-[13px] w-[335px] rounded-lg `}>
        <Text className='text-white font-semibold text-base text-center'>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}