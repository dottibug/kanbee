import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { iconButtonStyles } from '@/styles/buttonStyles';
import { colors } from '@/styles/typography';

interface IconButtonProps {
  readonly onPress: () => void;
  readonly icon: keyof typeof Ionicons.glyphMap;
  readonly size?: number;
  readonly color?: string;
}

export default function IconButton({
  onPress,
  icon,
  size = 24,
  color = colors.black,
}: IconButtonProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => iconButtonStyles(pressed).base}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}
