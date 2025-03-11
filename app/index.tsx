import { ScrollView, Text } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColumnStore } from '@/state/ui/columnStore';
import { tempBoardData } from '@/data/tempBoardData';
import KanbeeLogo from '@/components/ui/KanbeeLogo';
import Board from '@/components/boards/Board';
import { baseStyles } from '@/styles/baseStyles';
import { typography } from '@/styles/typography';
import Auth from '@/services/Auth';

export default function Home() {
  const setColumns = useColumnStore((state) => state.setColumns);

  useEffect(() => {
    setColumns(tempBoardData.columns);
  }, [setColumns]);

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={[baseStyles.container]}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={baseStyles.centerItems}>
        <KanbeeLogo size={108} />
        <Text style={typography.xlHeading}>Kanbee Login</Text>
        {/* TODO: auth component */}
        <Auth />
        {/* TODO: buttons: forgot password and sign up */}
      </ScrollView>
      {/* <Board board={tempBoardData} /> */}
    </SafeAreaView>
  );
}
