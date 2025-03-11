import { FlexStyle } from 'react-native';
import BaseButton, { ButtonSize } from './BaseButton';

interface SecondaryButtonProps {
  readonly onPress: () => void;
  readonly size?: ButtonSize;
  readonly label: string;
  readonly width?: FlexStyle['width'];
}

export default function SecondaryButton({
  onPress,
  label,
  size = 'medium',
  width = '100%',
}: SecondaryButtonProps) {
  return (
    <BaseButton
      onPress={onPress}
      size={size}
      type="secondary"
      label={label}
      width={width}
    />
  );
}
