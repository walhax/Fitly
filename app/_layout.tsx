import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from 'expo-font'
import { Text } from "react-native";

import "../global.css";


export default function RootLayout() {
   const [fontsLoaded] = useFonts({
    Poppins: require('@/assets/fonts/Poppins-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>
  }

  return(
    <>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="Onboarding" options={{
            headerShown:false,
          }} />
        </Stack>
      </SafeAreaProvider>
 
      <StatusBar style="dark" />
    </>
  )
}
