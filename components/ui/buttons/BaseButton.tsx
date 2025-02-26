import { colors } from '@/styles/baseValues';
import { Button as PaperButton } from 'react-native-paper';

export type ButtonMode = 'contained' | 'outlined' | 'text';
export type ButtonType = 'primary' | 'secondary' | 'destructive' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

interface PaperButtonProps {
  readonly onPress: () => void;
  readonly mode?: ButtonMode;
  readonly type?: ButtonType;
  readonly size?: ButtonSize;
  readonly customStyles?: object;
  readonly labelStyle?: object;
  readonly children: React.ReactNode;
}

export default function BaseButton({
  onPress,
  mode = 'contained',
  type = 'primary',
  size = 'medium',
  customStyles,
  labelStyle,
  children,
}: PaperButtonProps) {
  return (
    <PaperButton
      onPress={onPress}
      mode={mode}
      buttonColor={getButtonColor(type)}
      textColor={getTextColor(type)}
      rippleColor={getRippleColor(type)}
      contentStyle={getContentStyle(size, customStyles)}
      labelStyle={labelStyle}>
      {children}
    </PaperButton>
  );
}

function getContentStyle(size: ButtonSize, customStyles?: object) {
  return {
    height: getButtonHeight(size),
    ...customStyles,
  };
}

function getButtonHeight(size: ButtonSize) {
  switch (size) {
    case 'small':
      return 32;
    case 'medium':
      return 40;
    case 'large':
      return 48;
  }
}
function getButtonColor(type: ButtonType) {
  switch (type) {
    case 'primary':
      return colors.mainPurple;
    case 'secondary':
      return colors.lightPurple;
    case 'destructive':
      return colors.red;
    case 'text':
      return 'transparent';
  }
}

function getTextColor(type: ButtonType) {
  switch (type) {
    case 'secondary':
      return colors.mainPurple;
    case 'text':
      return colors.mediumGray;
    case 'primary':
    case 'destructive':
      return colors.white;
  }
}

function getRippleColor(type: ButtonType) {
  switch (type) {
    case 'primary':
      return colors.lightPurple;
    case 'secondary':
      return colors.white;
    case 'destructive':
      return colors.lightRed;
    case 'text':
      return colors.lightGray;
  }
}
