import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, typography } from './baseValues';

const buttonStyles: { base: ViewStyle } = {
  base: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const buttonSizes = {
  small: {
    height: 32,
    paddingHorizontal: 16,
  },
  medium: {
    height: 40,
    paddingHorizontal: 24,
  },
  large: {
    height: 48,
    paddingHorizontal: 24,
  },
};

const buttonTypes = {
  primary: {
    backgroundColor: colors.mainPurple,
  },
  secondary: {
    backgroundColor: colors.lightGrayPurple,
  },
  destructive: {
    backgroundColor: colors.red,
  },
  text: {
    backgroundColor: 'transparent',
  },
};

const buttonTypesPressed = {
  primary: {
    backgroundColor: colors.lightPurple,
  },
  secondary: {
    backgroundColor: colors.grayPurple,
  },
  destructive: {
    backgroundColor: colors.lightRed,
  },
  text: {
    backgroundColor: 'transparent',
  },
};

const buttonTextStyle: { base: TextStyle } = {
  base: {
    textAlign: 'center',
  },
};

const buttonTextColors = {
  primary: { color: colors.white },
  secondary: { color: colors.mainPurple },
  destructive: { color: colors.white },
  text: { color: colors.mainPurple },
};

const buttonTextSizes = {
  small: { ...typography.xsHeading },
  medium: { ...typography.smHeading },
  large: { ...typography.mdHeading },
};

export const baseButtonStyles = {
  button: StyleSheet.create(buttonStyles),
  sizes: StyleSheet.create(buttonSizes),
  types: StyleSheet.create(buttonTypes),
  typesPressed: StyleSheet.create(buttonTypesPressed),
  textColors: StyleSheet.create(buttonTextColors),
  textSizes: StyleSheet.create(buttonTextSizes),
  textStyle: StyleSheet.create(buttonTextStyle),
};

export const iconButtonStyles = (pressed: boolean) =>
  StyleSheet.create({
    base: {
      opacity: pressed ? 0.25 : 1,
    },
  });
