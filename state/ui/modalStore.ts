import { create } from 'zustand';

export enum ModalType {
  ADD_BOARD = 'addBoard',
  EDIT_BOARD = 'editBoard',
  DELETE_BOARD = 'deleteBoard',
  ADD_COLUMN = 'addColumn',
  EDIT_COLUMN = 'editColumn',
  DELETE_COLUMN = 'deleteColumn',
  ADD_TASK = 'addTask',
  EDIT_TASK = 'editTask',
  DELETE_TASK = 'deleteTask',
  VIEW_TASK = 'viewTask',
}

interface ModalState {
  modalType: ModalType | null;
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
