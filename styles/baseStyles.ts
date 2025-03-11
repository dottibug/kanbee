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

export const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  centerItems: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
