import { View, Text } from 'react-native';
import OutlinedTextInput from './OutlinedTextInput';
import { typography } from '@/styles/baseValues';
import { modalStyles } from '@/styles/modalStyles';
const boardNameSubtitle = 'Board Name';
const boardNamePlaceholder = 'e.g. Website Design';

interface BoardNameProps {
  readonly boardName: string;
  readonly setBoardName: (text: string) => void;
}

export default function BoardNameInput({ boardName, setBoardName }: BoardNameProps) {
  return (
    <View style={modalStyles.modalSection}>
      <Text style={typography.boldBody}>{boardNameSubtitle}</Text>
      <OutlinedTextInput
        placeholder={boardNamePlaceholder}
        value={boardName}
        onChangeText={setBoardName}
      />
    </View>
  );
}
