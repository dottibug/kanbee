import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import HeaderButton from '@/components/ui/buttons/HeaderButton';
import { baseStyles } from '@/styles/baseStyles';

// NOTE: If you use another app-wide provider, make sure it wraps the PaperProvider

export default function RootLayout() {
  return (
    <SafeAreaProvider style={baseStyles.container}>
      <PaperProvider>
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
            },
          }}>
          <Stack.Screen
            name="index"
            options={{
              title: 'Home',
              headerRight: () => <HeaderButton />,
            }}
          />
          <Stack.Screen name="board" options={{ title: 'Board' }} />
        </Stack>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
