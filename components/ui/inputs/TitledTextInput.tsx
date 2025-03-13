import { View, Text } from 'react-native';
import OutlinedTextInput from './OutlinedTextInput';
import { typography } from '@/styles/typography';
import { modalStyles } from '@/styles/modalStyles';

interface TitledTextInputProps {
  readonly subtitle: string;
  readonly placeholder: string;
  readonly value: string;
  readonly setValue: (text: string) => void;
  readonly autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  readonly autoCorrect?: boolean;
}

export default function TitledTextInput({
  subtitle,
  placeholder,
  value,
  setValue,
  autoCapitalize = 'sentences',
  autoCorrect = true,
}: TitledTextInputProps) {
  return (
    <View style={modalStyles.modalSection}>
      <Text style={typography.boldBody}>{subtitle}</Text>
      <OutlinedTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
      />
    </View>
  );
}
