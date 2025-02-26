import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Board from '@/components/boards/Board';
import { tempBoardData } from '@/data/tempBoardData';
import { useColumnStore } from '@/state/ui/columnStore';

export default function Home() {
  const setColumns = useColumnStore((state) => state.setColumns);

  useEffect(() => {
    setColumns(tempBoardData.columns);
  }, [setColumns]);

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']}>
      <Board board={tempBoardData} />
    </SafeAreaView>
  );
}
