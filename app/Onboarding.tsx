import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Slideshow from '@/components/SlideShow'
import Button from '@/components/Button'
import { Link } from 'expo-router'

export default function Onboarding() {
  return (
    <SafeAreaView className='flex-1' edges={['top', 'bottom']}>
        <View className=" flex-1 w-full bg-white justify-between py-16">
          <Slideshow/>
          <View className='mt-[32px] gap-[16px] items-center'>
            <Button color='#EB6363' text='Create an account' link='Signup/SignUp'/>
            <View className='flex-row gap-2 justify-center'>
              <Text className="text-base font-normal text-[#888888]">Already have an account?</Text>
              <Link href={'..'} className='text-base font-medium text-[#EB6363]'>Login</Link>
            </View>
          </View>
        </View>
    </SafeAreaView>
  )  
}