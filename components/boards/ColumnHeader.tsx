import { View, Text, StyleSheet } from 'react-native';

interface ColumnHeaderProps {
  readonly title: string;
}

export default function ColumnHeader({ title }: ColumnHeaderProps) {
  return (
    <View style={tempHeaderStyle.header}>
      <Text>{title}</Text>
    </View>
  );
}

const tempHeaderStyle = StyleSheet.create({
  header: {
    backgroundColor: 'red',
  },
});
