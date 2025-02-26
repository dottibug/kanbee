import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// NOTE: onPressOut is used due to a bug in React Navigation header buttons on Android

export default function HeaderButton() {
  const handleAddBoard = () => {
    console.log('Add Board');
  };

  return (
    <Pressable
      onPressOut={handleAddBoard}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.25 : 1,
        },
      ]}>
      <Ionicons name="add-circle" size={32} />
    </Pressable>
  );
}
