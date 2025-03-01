import { colors, typography } from './baseValues';
import { StyleSheet } from 'react-native';

export const outlinedTextInputStyles = (isFocused: boolean) =>
  StyleSheet.create({
    input: {
      width: '100%',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 4,
      backgroundColor: colors.white,
      borderWidth: 1.25,
      borderColor: isFocused ? colors.mainPurple : colors.mediumGray,
      ...typography.inputBody,
    },
  });

export const outlinedTextInputWithDeleteButtonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
