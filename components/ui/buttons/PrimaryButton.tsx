import BaseButton, { ButtonSize } from './BaseButton';
import { FlexStyle } from 'react-native';
interface PrimaryButtonProps {
  readonly onPress: () => void;
  readonly label: string;
  readonly size?: ButtonSize;
  readonly width?: FlexStyle['width'];
}

export default function PrimaryButton({
  onPress,
  label,
  size = 'medium',
  width = '100%',
}: PrimaryButtonProps) {
  return (
    <BaseButton
      onPress={onPress}
      label={label}
      size={size}
      type="primary"
      width={width}
    />
  );
}
