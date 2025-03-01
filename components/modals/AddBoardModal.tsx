import { useModalStore } from '@/state/ui/modalStore';
import BaseModal from './BaseModal';
import { Text, View, StyleSheet } from 'react-native';
import { typography } from '@/styles/baseValues';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import { useState, useEffect } from 'react';
import BoardNameInput from '../ui/inputs/BoardNameInput';
import BoardColumnsInput from '../ui/inputs/BoardColumnsInput';
import { modalStyles } from '@/styles/modalStyles';
// TODO 3: Refactor, clean up comments, and push the changes with message "Create add board modal and base modal components"

const title = 'Add New Board';

export default function AddBoardModal() {
  const [boardName, setBoardName] = useState('');
  const [boardColumns, setBoardColumns] = useState<string[]>([]);
  const { modalType, isOpen, closeModal } = useModalStore();

  const visible = modalType === 'addBoard' && isOpen;

  useEffect(() => {
    if (boardColumns.length === 0) setBoardColumns(['']);
  }, [boardColumns.length]);

  const handleAddColumn = () => setBoardColumns([...boardColumns, '']);

  const handleDeleteColumn = (index: number) => {
    const newBoardColumns = [...boardColumns];
    newBoardColumns.splice(index, 1);
    setBoardColumns(newBoardColumns);
  };

  const handleAddBoard = () => {
    console.log(
      `(in AddBoardModal) boardName: ${boardName}\nboardColumns: ${boardColumns}`
    );
    // TODO: add the board to the database
    // NOTE: make sure you do not add a board if the board name is empty
  };

  return (
    <BaseModal visible={visible} onDismiss={closeModal}>
      <Text style={[typography.lgHeading, { marginBottom: 24 }]}>{title}</Text>
      <View style={modalStyles.modalContentContainer}>
        <BoardNameInput boardName={boardName} setBoardName={setBoardName} />
        <BoardColumnsInput
          boardColumns={boardColumns}
          setBoardColumns={setBoardColumns}
          handleDeleteColumn={handleDeleteColumn}
          handleAddColumn={handleAddColumn}
        />
        <PrimaryButton onPress={handleAddBoard} label="Add Board" />
      </View>
    </BaseModal>
  );
}
