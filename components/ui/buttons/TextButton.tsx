import BaseButton, { ButtonSize } from '@/components/ui/buttons/BaseButton';
import { FlexStyle } from 'react-native';

interface TextButtonProps {
  readonly label: string;
  readonly onPress: () => void;
  readonly size?: ButtonSize;
  readonly width?: FlexStyle['width'];
}

export default function TextButton({
  label,
  onPress,
  size = 'medium',
  width = '100%',
}: TextButtonProps) {
  return (
    <BaseButton label={label} onPress={onPress} type="text" size={size} width={width} />
  );
}
