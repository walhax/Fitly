// ✅ signup/_layout.tsx
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { View, StyleSheet } from 'react-native';

export default function SignupLayout() {
  return (
    <View className="flex-1 bg-white">
      <Image
        source={require('@/assets/images/Authbg.png')}
        contentFit="cover"
        style={[StyleSheet.absoluteFillObject, { opacity: 0.1 }]} // Only image is transparent
      />
      <SafeAreaView className="flex-1 px-4" edges={['top', 'bottom']}>
        <Slot />
      </SafeAreaView>
    </View>
  );
}