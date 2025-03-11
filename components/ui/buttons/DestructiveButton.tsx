import { FlexStyle } from 'react-native';
import BaseButton, { ButtonSize } from './BaseButton';

interface DestructiveButtonProps {
  readonly onPress: () => void;
  readonly label: string;
  readonly size?: ButtonSize;
  readonly width?: FlexStyle['width'];
}

export default function DestructiveButton({
  onPress,
  label,
  size,
  width = '100%',
}: DestructiveButtonProps) {
  return (
    <BaseButton
      onPress={onPress}
      label={label}
      size={size}
      type="destructive"
      width={width}
    />
  );
}
