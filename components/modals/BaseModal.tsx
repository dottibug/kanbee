import { Modal, Portal } from 'react-native-paper';
import { modalStyles } from '@/styles/modalStyles';
interface ModalProps {
  readonly visible: boolean;
  readonly onDismiss: () => void;
  readonly children: React.ReactNode;
}

export default function BaseModal({ visible = false, onDismiss, children }: ModalProps) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={modalStyles.modal}>
        {children}
      </Modal>
    </Portal>
  );
}
