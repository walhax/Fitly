import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { text_gray } from '@/constants/Colors'

type prop= PropsWithChildren<{
  title:string,
  description:string,
} >

export default function FormWrapper({children, title, description, }:prop){
  return (
    <View className='gap-4'>
      <Text style={{fontFamily:'Poppins-SemiBold'}} className="text-2xl ">{title}</Text>
      <Text style={{fontFamily:'Poppins-Medium', color:text_gray,}} className='text-base'>{description}</Text>
      <View className='bg-[#FDEFEF80] py-5 px-4 rounded-2xl'>
        {children}
      </View> 
    </View>
  )




}