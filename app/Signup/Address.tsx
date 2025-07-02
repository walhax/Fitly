import { TextInput, View, } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import Button from '@/components/Button';
import FormWrapper from '@/components/FormWrapper';
import SignupWrapper from '@/components/SignupWrapper';


export default function Address() {
  const [firstnameInput, setfirstnameInput] = useState('');
  const [lastnameInput, setlastnameInput] = useState('');
  const [dobInput, setdobInput] = useState('');


  const handleNext = () => {
    if (!firstnameInput||!lastnameInput||!dobInput) return alert('Enter valid phone number');
    router.push('/Signup/Address');
  };

  return (
    <SignupWrapper optional={true} onpress={()=>router.push('/Signup/Complete')}>
    
         
      <FormWrapper title='Personal details' description='Please use details that match your government issued ID'>
        <View className='gap-4'>
            <TextInput
                value={firstnameInput}
                onChangeText={setfirstnameInput}
                className="border border-[#CECECE] bg-white py-4 px-4 rounded-md"
                placeholder="Select State"
                autoCapitalize="none"
            />

            <TextInput
                value={lastnameInput}
                onChangeText={setlastnameInput}
                className="border border-[#CECECE] bg-white py-4 px-4 rounded-md"
                placeholder="Enter City"
                autoCapitalize="none"
            />

            <TextInput
                value={dobInput}
                onChangeText={setdobInput}
                className="border border-[#CECECE] bg-white py-4 px-4 rounded-md"
                placeholder=" Enter Address"
                autoCapitalize="none"
            />

            <TextInput
                value={dobInput}
                onChangeText={setdobInput}
                className="border border-[#CECECE] bg-white py-4 px-4 rounded-md"
                placeholder=" Enter Postal Code"
                autoCapitalize="none"
            />
        </View>
      </FormWrapper>

      <Button text='Submit Number' onpress={handleNext}/>
    </SignupWrapper>

    
  );
}
