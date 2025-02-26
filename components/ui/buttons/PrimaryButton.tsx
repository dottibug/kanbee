import BaseButton, { ButtonSize } from './BaseButton';

interface PrimaryButtonProps {
  readonly onPress: () => void;
  readonly size: ButtonSize;
  readonly children: React.ReactNode;
}

export default function PrimaryButton({ onPress, size, children }: PrimaryButtonProps) {
  return (
    <BaseButton onPress={onPress} size={size} type="primary" mode="contained">
      {children}
    </BaseButton>
  );
}
