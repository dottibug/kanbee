import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '@/styles/baseStyles';
interface KanbeeLogoProps {
  readonly size?: number;
}

export default function KanbeeLogo({ size = 42 }: KanbeeLogoProps) {
  return <MaterialCommunityIcons name="bee" size={size} color={colors.mainPurple} />;
}
