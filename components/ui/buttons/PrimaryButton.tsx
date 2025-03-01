import BaseButton, { ButtonSize } from './BaseButton';

interface PrimaryButtonProps {
  readonly onPress: () => void;
  readonly label: string;
  readonly size?: ButtonSize;
}

export default function PrimaryButton({
  onPress,
  label,
  size = 'medium',
}: PrimaryButtonProps) {
  return <BaseButton onPress={onPress} label={label} size={size} type="primary" />;
}
