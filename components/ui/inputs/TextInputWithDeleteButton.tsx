import { View, StyleSheet } from 'react-native';
import OutlinedTextInput from './OutlinedTextInput';
import IconButton from '../buttons/IconButton';
import { outlinedTextInputWithDeleteButtonStyles } from '@/styles/inputStyles';

interface TextInputWithDeleteButtonProps {
  readonly placeholder: string;
  readonly value: string;
  readonly onChangeText: (text: string) => void;
  readonly onDeleteInput: () => void;
  readonly iconColor?: string;
}

export default function TextInputWithDeleteButton({
  placeholder,
  value,
  onChangeText,
  onDeleteInput,
  iconColor,
}: TextInputWithDeleteButtonProps) {
  return (
    <View style={outlinedTextInputWithDeleteButtonStyles.container}>
      <OutlinedTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        customStyles={{ width: '89%' }}
      />
      <IconButton onPress={onDeleteInput} icon="close" color={iconColor} size={30} />
    </View>
  );
}
