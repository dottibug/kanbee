import { Text, View } from 'react-native';
import KanbeeLogo from './KanbeeLogo';
import { typography } from '@/styles/typography';

type HeaderTitleProps = {
  readonly title?: string;
};

export default function HeaderTitle({ title = 'kanbee' }: HeaderTitleProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        flex: 1,
        marginLeft: -21,
      }}>
      <KanbeeLogo size={42} />
      <Text style={typography.lgHeading}>{title}</Text>
    </View>
  );
}
