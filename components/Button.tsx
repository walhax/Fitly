import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type prop ={
  color?:string,
  text?:string,
  onpress: ()=>void
}


export default function Button({color, text, onpress}: prop) {
  return (
    <View className='w-full items-center'>
      <TouchableOpacity className={`bg-[#EB6363] py-[13px] w-[335px] rounded-lg `} onPress={onpress}>
        <Text className='text-white font-semibold text-base text-center'>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}


export  function SmallButton({color, text, onpress}: prop) {
  return (
    <View className='items-center'>
      <TouchableOpacity className={`bg-[#EB6363] px-6 py-2  rounded-lg `} onPress={onpress}>
        <Text className='text-white font-semibold text-base text-center'>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}