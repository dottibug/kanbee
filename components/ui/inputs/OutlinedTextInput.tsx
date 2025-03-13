import { TextInput } from 'react-native';
import { colors } from '@/styles/baseStyles';
import { useState } from 'react';
import { outlinedTextInputStyles } from '@/styles/inputStyles';

interface OutlinedTextInputProps {
  readonly placeholder: string;
  readonly value: string;
  readonly onChangeText: (text: string) => void;
  readonly maxLength?: number;
  readonly autoFocus?: boolean;
  readonly autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  readonly autoCorrect?: boolean;
  readonly customStyles?: {};
}

export default function OutlinedTextInput({
  placeholder,
  value,
  onChangeText,
  maxLength = 40,
  autoFocus = false,
  autoCapitalize = 'sentences',
  autoCorrect = true,
  customStyles,
}: OutlinedTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.mediumGray}
      autoFocus={autoFocus}
      maxLength={maxLength}
      onFocus={handleFocus}
      onBlur={handleBlur}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      underlineColorAndroid="transparent"
      style={{
        ...outlinedTextInputStyles(isFocused).input,
        ...customStyles,
      }}
      numberOfLines={1}
      textAlignVertical="center"
      // This is a workaround to prevent a flickering underline below the text when typing on Android
      keyboardType="visible-password"
    />
  );
}
