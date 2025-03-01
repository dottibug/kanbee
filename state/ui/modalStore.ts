import { create } from 'zustand';

export type ModalType =
  | 'addBoard'
  | 'editBoard'
  | 'deleteBoard'
  | 'addColumn'
  | 'editColumn'
  | 'deleteColumn'
  | 'addTask'
  | 'editTask'
  | 'deleteTask'
  | 'viewTask'
  | null;

interface ModalState {
  modalType: ModalType;
  isOpen: boolean;
  openModal: (modalType: ModalType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  modalType: null,
  isOpen: false,

  openModal: (modalType: ModalType) => set({ modalType, isOpen: true }),

  closeModal: () => set({ modalType: null, isOpen: false }),
}));
