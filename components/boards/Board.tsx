import { SafeAreaView } from 'react-native-safe-area-context';
import { SectionList } from 'react-native';
import TaskCard from './TaskCard';
import ColumnHeader from './ColumnHeader';
import BoardModel from '@/models/BoardModel';
import { boardStyles } from '@/styles/boardStyles';
import { useColumnStore } from '@/state/ui/columnStore';

// TODO: Maybe default isOpen to true?

interface BoardProps {
  readonly board: BoardModel;
}

export default function Board({ board }: BoardProps) {
  const { columns } = useColumnStore((state) => state);

  return (
    <SafeAreaView style={boardStyles.container} edges={['left', 'right', 'bottom']}>
      <SectionList
        sections={columns.map((column) => ({
          column: column,
          data: column.isOpen ? column.tasks : [], // Only show tasks if the column is open
        }))}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={(item) => item.id.toString()}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section }) => (
          <ColumnHeader column={section.column} isOpen={section.column.isOpen} />
        )}
      />
    </SafeAreaView>
  );
}
