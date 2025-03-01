import { colors } from '@/styles/baseValues';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface KanbeeLogoProps {
  readonly size?: number;
}

export default function KanbeeLogo({ size = 42 }: KanbeeLogoProps) {
  return <MaterialCommunityIcons name="bee" size={size} color={colors.mainPurple} />;
}
