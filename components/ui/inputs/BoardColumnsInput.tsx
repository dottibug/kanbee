import { View, Text, StyleSheet } from 'react-native';
import { modalStyles } from '@/styles/modalStyles';
import { typography, colors } from '@/styles/baseValues';
import TextInputWithDeleteButton from './TextInputWithDeleteButton';
import SecondaryButton from '../buttons/SecondaryButton';

const boardColumnsSubtitle = 'Board Columns';
const boardColumnsPlaceholder = 'e.g. Todo, In Progress, Done';

interface BoardColumnsProps {
  readonly boardColumns: string[];
  readonly setBoardColumns: (columns: string[]) => void;
  readonly handleDeleteColumn: (index: number) => void;
  readonly handleAddColumn: () => void;
}

export default function BoardColumnsInput({
  boardColumns,
  setBoardColumns,
  handleDeleteColumn,
  handleAddColumn,
}: BoardColumnsProps) {
  return (
    <View style={modalStyles.modalSection}>
      <Text style={typography.boldBody}>{boardColumnsSubtitle}</Text>

      <View style={boardColumnsStyles.columnInputs}>
        {boardColumns.map((column, index) => (
          <TextInputWithDeleteButton
            key={index}
            placeholder={boardColumnsPlaceholder}
            value={column}
            onChangeText={(text) => {
              const newBoardColumns = [...boardColumns];
              newBoardColumns[index] = text;
              setBoardColumns(newBoardColumns);
            }}
            onDeleteInput={() => handleDeleteColumn(index)}
            iconColor={colors.mediumGray}
          />
        ))}
      </View>

      <SecondaryButton onPress={handleAddColumn} label="Add Column" />
    </View>
  );
}

const boardColumnsStyles = StyleSheet.create({
  container: {
    gap: 8,
  },
  columnInputs: {
    gap: 12,
    marginBottom: 12,
  },
});
