import { StyleSheet } from 'react-native';

export const colors = {
  black: '#000112',
  white: '#FFFFFF',
  lightGray: '#F4F7FD',
  mediumGray: '#828FA3',
  darkGray: '#2B2C37',
  mainPurple: '#635FC7',
  lightPurple: '#A8A4FF',
  grayPurple: '#c0bfe8',
  lightGrayPurple: '#dfdff3',
  red: '#EA5555',
  lightRed: '#FF9898',
};

const fontSizes = {
  xsmall: 12,
  small: 13,
  medium: 15,
  large: 18,
  xlarge: 24,
};

const fontWeights = {
  medium: '500' as const,
  bold: '700' as const,
};

export const typography = StyleSheet.create({
  xlHeading: {
    fontSize: fontSizes.xlarge,
    fontWeight: fontWeights.bold,
    color: colors.black,
  },
  lgHeading: {
    fontSize: fontSizes.large,
    fontWeight: fontWeights.bold,
    color: colors.black,
  },
  mdHeading: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.bold,
    color: colors.black,
  },
  smHeading: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.bold,
    color: colors.mediumGray,
  },
  xsHeading: {
    fontSize: fontSizes.xsmall,
    fontWeight: fontWeights.bold,
    color: colors.mediumGray,
  },
  boldBody: {
    fontSize: fontSizes.xsmall,
    fontWeight: fontWeights.bold,
    color: colors.mediumGray,
  },
  regularBody: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.medium,
    color: colors.darkGray,
  },
  inputBody: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.medium,
    color: colors.darkGray,
  },
});
