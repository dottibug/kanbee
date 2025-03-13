import { Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { baseStyles } from '@/styles/baseStyles';
import { typography } from '@/styles/typography';
import { useColumnStore } from '@/state/ui/columnStore';
import Board from '@/components/boards/Board';
import { tempBoardData } from '@/data/tempBoardData';
export default function Dashboard() {
  const setColumns = useColumnStore((state) => state.setColumns);

  useEffect(() => {
    setColumns(tempBoardData.columns);
  }, [setColumns]);

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={[baseStyles.container]}>
      <Text style={[typography.xlHeading, tempStyles.heading]}>Dashboard</Text>
      <Board board={tempBoardData} />
    </SafeAreaView>
  );
}

const tempStyles = StyleSheet.create({
  heading: {
    marginTop: 24,
    textAlign: 'center',
  },
});
