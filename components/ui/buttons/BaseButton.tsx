import { buttonStyles } from '@/styles/buttonStyles';
import { Pressable, Text, FlexStyle } from 'react-native';

export type ButtonType = 'primary' | 'secondary' | 'destructive' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  readonly onPress: () => void;
  readonly label: string;
  readonly type?: ButtonType;
  readonly size?: ButtonSize;
  readonly width?: FlexStyle['width'];
}

export default function BaseButton({
  onPress,
  label,
  width,
  type = 'primary',
  size = 'medium',
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...buttonStyles.getTypeStyles(type, size, pressed),
        width,
      })}>
      {({ pressed }) => (
        <Text style={buttonStyles.getTextStyles(type, size, pressed)}>{label}</Text>
      )}
    </Pressable>
  );
}
