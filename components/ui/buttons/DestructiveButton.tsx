import BaseButton, { ButtonSize } from './BaseButton';

interface DestructiveButtonProps {
  readonly onPress: () => void;
  readonly label: string;
  readonly size?: ButtonSize;
}

export default function DestructiveButton({
  onPress,
  label,
  size,
}: DestructiveButtonProps) {
  return <BaseButton onPress={onPress} label={label} size={size} type="destructive" />;
}
