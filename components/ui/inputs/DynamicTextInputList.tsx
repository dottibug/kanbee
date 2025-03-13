import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/styles/baseStyles';
import { modalStyles } from '@/styles/modalStyles';
import { typography } from '@/styles/typography';
import TextInputWithDeleteButton from './TextInputWithDeleteButton';
import SecondaryButton from '../buttons/SecondaryButton';

// TODO: change key to a unique id (not index)

interface DynamicTextInputListProps {
  readonly subtitle: string;
  readonly placeholder: string;
  readonly buttonLabel: string;
  readonly listValues: string[];
  readonly setListValues: (values: string[]) => void;
  readonly handleDeleteValue: (index: number) => void;
  readonly handleAddValue: () => void;
}

export default function DynamicTextInputList({
  subtitle,
  placeholder,
  buttonLabel,
  listValues,
  setListValues,
  handleDeleteValue,
  handleAddValue,
}: DynamicTextInputListProps) {
  return (
    <View style={modalStyles.modalSection}>
      <Text style={typography.boldBody}>{subtitle}</Text>

      <View style={listStyles.columnInputs}>
        {listValues.map((value, index) => (
          <TextInputWithDeleteButton
            key={index}
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => {
              const newListValues = [...listValues];
              newListValues[index] = text;
              setListValues(newListValues);
            }}
            onDeleteInput={() => handleDeleteValue(index)}
            iconColor={colors.mediumGray}
          />
        ))}
      </View>

      <SecondaryButton onPress={handleAddValue} label={buttonLabel} />
    </View>
  );
}

const listStyles = StyleSheet.create({
  columnInputs: {
    gap: 12,
    marginBottom: 12,
  },
});
