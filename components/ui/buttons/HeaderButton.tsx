import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { iconButtonStyles } from '@/styles/buttonStyles';
// NOTE: onPressOut is used due to a bug in React Navigation header buttons on Android

interface HeaderButtonProps {
  readonly onPress: () => void;
}

export default function HeaderButton({ onPress }: HeaderButtonProps) {
  return (
    <Pressable
      onPressOut={onPress}
      style={({ pressed }) => [iconButtonStyles(pressed).base]}>
      <Ionicons name="add-circle" size={32} />
    </Pressable>
  );
}
