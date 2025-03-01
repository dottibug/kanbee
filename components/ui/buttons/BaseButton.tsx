import { baseButtonStyles } from '@/styles/buttonStyles';
import { Pressable, Text } from 'react-native';

export type ButtonType = 'primary' | 'secondary' | 'destructive' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  readonly onPress: () => void;
  readonly label: string;
  readonly type?: ButtonType;
  readonly size?: ButtonSize;
}

export default function BaseButton({
  onPress,
  label,
  type = 'primary',
  size = 'medium',
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => getButtonStyle(size, type, pressed)}>
      <Text style={getButtonTextStyle(size, type)}>{label}</Text>
    </Pressable>
  );
}

function getButtonStyle(size: ButtonSize, type: ButtonType, pressed: boolean) {
  return {
    ...(pressed ? baseButtonStyles.typesPressed[type] : baseButtonStyles.types[type]),
    ...baseButtonStyles.button.base,
    ...baseButtonStyles.sizes[size],
  };
}

function getButtonTextStyle(size: ButtonSize, type: ButtonType) {
  return {
    ...baseButtonStyles.textStyle.base,
    ...baseButtonStyles.textSizes[size],
    ...baseButtonStyles.textColors[type],
  };
}
