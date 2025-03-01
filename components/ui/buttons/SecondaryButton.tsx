import BaseButton, { ButtonSize } from './BaseButton';

interface SecondaryButtonProps {
  readonly onPress: () => void;
  readonly size?: ButtonSize;
  readonly label: string;
}

export default function SecondaryButton({
  onPress,
  label,
  size = 'medium',
}: SecondaryButtonProps) {
  return <BaseButton onPress={onPress} size={size} type="secondary" label={label} />;
}
