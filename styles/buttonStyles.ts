import { StyleSheet } from 'react-native';
import { colors } from './baseStyles';
import { typography } from './typography';
import { ButtonType, ButtonSize } from '../components/ui/buttons/BaseButton';

export const buttonStyles = {
  getTypeStyles: (type: ButtonType, size: ButtonSize, pressed: boolean) => ({
    ...styles.base,
    ...styles[size],
    backgroundColor: buttonTypes[type].background(pressed),
  }),

  getTextStyles: (type: ButtonType, size: ButtonSize, pressed: boolean) => ({
    ...(size === 'small'
      ? typography.xsHeading
      : size === 'medium'
      ? typography.smHeading
      : typography.mdHeading),
    color: buttonTypes[type].text(pressed),
    textAlign: 'center' as const,
  }),
};

export const iconButtonStyles = (pressed: boolean) =>
  StyleSheet.create({
    base: {
      opacity: pressed ? 0.25 : 1,
    },
  });

const buttonTypes = {
  primary: {
    background: (pressed: boolean) => (pressed ? colors.lightPurple : colors.mainPurple),
    text: (pressed: boolean) => colors.white,
  },
  secondary: {
    background: (pressed: boolean) =>
      pressed ? colors.grayPurple : colors.lightGrayPurple,
    text: (pressed: boolean) => colors.mainPurple,
  },
  destructive: {
    background: (pressed: boolean) => (pressed ? colors.lightRed : colors.red),
    text: (pressed: boolean) => colors.white,
  },
  text: {
    background: () => 'transparent',
    text: (pressed: boolean) => (pressed ? colors.lightPurple : colors.mainPurple),
  },
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
});
