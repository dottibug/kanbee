import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import HeaderButton from '@/components/ui/buttons/HeaderButton';
import { baseStyles } from '@/styles/baseStyles';
import HeaderTitle from '@/components/ui/HeaderTitle';
import ModalRouter from '@/components/modals/ModalRouter';
import { useModalStore, ModalType } from '@/state/ui/modalStore';
// NOTE: If you use another app-wide provider, make sure it wraps the PaperProvider

export default function RootLayout() {
  const { openModal } = useModalStore();
  const handleAddBoard = () => openModal(ModalType.ADD_BOARD);

  return (
    <SafeAreaProvider style={baseStyles.container}>
      <PaperProvider>
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerTitleStyle: {
              fontSize: 24,
            },
            headerTitle: () => <HeaderTitle />,
            headerRight: () => <HeaderButton onPress={handleAddBoard} />,
          }}>
          <Stack.Screen
            name="index"
            options={{
              title: 'Home',
            }}
          />
        </Stack>
        <ModalRouter />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
