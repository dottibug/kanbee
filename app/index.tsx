import { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Board from '@/models/Board';

export default function Home() {
  const [boards, setBoards] = useState<Board[]>([]);
  return (
    <SafeAreaView>
      {boards.length === 0 && (
        <View>
          <Text>No boards found</Text>
        </View>
      )}

      <Text>Main Screen</Text>
    </SafeAreaView>
  );
}
