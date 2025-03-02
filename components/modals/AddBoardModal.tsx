import { useModalStore } from '@/state/ui/modalStore';
import BaseModal from './BaseModal';
import { Text, View } from 'react-native';
import { typography } from '@/styles/baseValues';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import { useState, useEffect } from 'react';
import TitledTextInput from '../ui/inputs/TitledTextInput';
import DynamicTextInputList from '../ui/inputs/DynamicTextInputList';
import { modalStyles } from '@/styles/modalStyles';

export default function AddBoardModal() {
  const { modalType, isOpen, closeModal } = useModalStore();
  const visible = modalType === MODAL_ADD_BOARD && isOpen;

  const [boardName, setBoardName] = useState('');
  const [boardColumns, setBoardColumns] = useState<string[]>([]);

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
    // NOTE: make sure you do not add a column if the column name in the array is empty
  };

  return (
    <BaseModal visible={visible} onDismiss={closeModal}>
      <Text style={[typography.lgHeading, { marginBottom: 24 }]}>{TITLE}</Text>
      <View style={modalStyles.modalContentContainer}>
        <TitledTextInput
          subtitle={SUBTITLE_BOARD_NAME}
          placeholder={PLACEHOLDER_BOARD_NAME}
          value={boardName}
          setValue={setBoardName}
        />
        <DynamicTextInputList
          subtitle={SUBTITLE_BOARD_COLUMNS}
          placeholder={PLACEHOLDER_BOARD_COLUMNS}
          listValues={boardColumns}
          setListValues={setBoardColumns}
          handleDeleteValue={handleDeleteColumn}
          handleAddValue={handleAddColumn}
          buttonLabel={BUTTON_ADD_COLUMN}
        />
        <PrimaryButton onPress={handleAddBoard} label={BUTTON_ADD_BOARD} />
      </View>
    </BaseModal>
  );
}

const MODAL_ADD_BOARD = 'addBoard';
const TITLE = 'Add New Board';
const SUBTITLE_BOARD_NAME = 'Board Name';
const PLACEHOLDER_BOARD_NAME = 'e.g. Website Design';
const SUBTITLE_BOARD_COLUMNS = 'Board Columns';
const PLACEHOLDER_BOARD_COLUMNS = 'e.g. Todo, In Progress, Done';
const BUTTON_ADD_COLUMN = 'Add Column';
const BUTTON_ADD_BOARD = 'Add Board';
