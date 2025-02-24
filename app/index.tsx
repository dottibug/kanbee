import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import BoardModel from '@/models/BoardModel';
import Board from '@/components/boards/Board';
import { tempBoardData } from '@/data/tempBoardData';

export default function Home() {
  const [boards, setBoards] = useState<BoardModel[]>([]);
  return (
    <SafeAreaView>
      {boards.length === 0 && (
        // <Text>You have no boards. Add a board to get started.</Text>
        <Board board={tempBoardData} />
      )}
    </SafeAreaView>
  );
}
