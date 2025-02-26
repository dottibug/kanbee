import BaseButton, { ButtonSize } from './BaseButton';

interface DestructiveButtonProps {
  readonly onPress: () => void;
  readonly size: ButtonSize;
  readonly children: React.ReactNode;
}

export default function DestructiveButton({
  onPress,
  size,
  children,
}: DestructiveButtonProps) {
  return (
    <BaseButton onPress={onPress} size={size} type="destructive" mode="contained">
      {children}
    </BaseButton>
  );
}
