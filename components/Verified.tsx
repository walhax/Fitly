import { View, Text } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { text_gray } from '@/constants/Colors';

type prop= {
    title:string,
    description:string,
} 

export default function Verified({title, description}:prop) {

    
    return (

        <View className='w-full items-center gap-y-8 flex-1'>
            <Octicons name="verified" size={72} color="green" />
            <View className=' gap-2'>
            <Text style={{fontFamily:'Poppins-SemiBold'}} className="text-2xl text-center">{title}</Text>
            <Text style={{fontFamily:'Poppins-Medium', color:text_gray,}} className='text-base text-center'>{description}</Text>
            </View>

        </View>

    
    )
};