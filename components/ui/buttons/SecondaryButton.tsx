import BaseButton, { ButtonSize } from './BaseButton';

interface SecondaryButtonProps {
  readonly onPress: () => void;
  readonly size: ButtonSize;
  readonly children: React.ReactNode;
}

export default function SecondaryButton({
  onPress,
  size,
  children,
}: SecondaryButtonProps) {
  return (
    <BaseButton onPress={onPress} size={size} type="secondary" mode="contained">
      {children}
    </BaseButton>
  );
}
