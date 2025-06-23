import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";


export default function RootLayout() {
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
