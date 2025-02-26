import { Text, Pressable, Animated } from 'react-native';
import ColumnModel from '@/models/ColumnModel';
import { columnStyles } from '@/styles/boardStyles';
import { useRef, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useColumnStore, ColumnState } from '@/state/ui/columnStore';

interface ColumnHeaderProps {
  readonly column: ColumnModel;
  readonly isOpen: boolean;
}

export default function ColumnHeader({ column, isOpen }: ColumnHeaderProps) {
  const toggleColumn = useColumnStore((state: ColumnState) => state.toggleColumn);
  console.log('Column:', column);

  const rotateAnim = useRef(new Animated.Value(isOpen ? 1 : 0)).current;

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  function handleHeaderPress() {
    toggleColumn(column);
    Animated.spring(rotateAnim, {
      toValue: isOpen ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    Animated.spring(rotateAnim, {
      toValue: isOpen ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  return (
    <Pressable style={columnStyles.columnHeaderContainer} onPress={handleHeaderPress}>
      <Text style={columnStyles.columnHeader}>
        {`${column.title} (${column.getNumberOfTasks()})`}
      </Text>
      <Animated.View style={{ transform: [{ rotate }] }}>
        <Ionicons name="caret-up" size={16} />
      </Animated.View>
    </Pressable>
  );
}
