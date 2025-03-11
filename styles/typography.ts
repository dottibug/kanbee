import { StyleSheet } from 'react-native';
import { colors } from './baseStyles';

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
