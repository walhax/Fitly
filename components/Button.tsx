import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useRouter } from 'expo-router'

type prop ={
  color?:string,
  text?:string,
  link?:any
}


export default function Button({color, text, link}: prop) {
  const router = useRouter()
  return (
    <View className='w-full items-center'>
      <TouchableOpacity className={`bg-[#EB6363] py-[13px] w-[335px] rounded-lg `} onPress={()=>router.push(link)}>
        <Text className='text-white font-semibold text-base text-center'>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}