import { PaperProvider } from 'react-native-paper';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import HeaderButton from '@/components/ui/HeaderButton';

// NOTE: If you use another app-wide provider, make sure it wraps the PaperProvider

export default function RootLayout() {
  // NOTE: onPressOut is used due to a bug in React Navigation header buttons on Android
  return (
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
  );
}
