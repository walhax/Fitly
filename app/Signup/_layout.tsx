import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignupLayout() {
  return (
    <SafeAreaView className="flex-1 bg-white px-4" edges={['top', 'bottom']}>
      <Slot/>
    </SafeAreaView>
  );
}
