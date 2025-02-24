import { SafeAreaView } from 'react-native-safe-area-context';
import { SectionList } from 'react-native';
import TaskCard from './TaskCard';
import ColumnHeader from './ColumnHeader';
import BoardModel from '@/models/BoardModel';

interface BoardProps {
  readonly board: BoardModel;
}

export default function Board({ board }: BoardProps) {
  return (
    <SafeAreaView>
      <SectionList
        sections={board.columns.map((column) => ({
          ...column,
          data: column.tasks,
        }))}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={(item) => item.id.toString()}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({ section }) => <ColumnHeader title={section.name} />}
      />
    </SafeAreaView>
  );
}
