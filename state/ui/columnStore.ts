import ColumnModel from '@/models/ColumnModel';
import { create } from 'zustand';

export interface ColumnState {
  columns: ColumnModel[];
  toggleColumn: (column: ColumnModel) => void;
  setColumns: (columns: ColumnModel[]) => void;
}

export const useColumnStore = create<ColumnState>((set) => ({
  columns: [],

  toggleColumn: (column: ColumnModel) => {
    set((state) => {
      const updatedColumns = state.columns.map((col) => {
        if (col.id === column.id) {
          // Create a new instance of ColumnModel with the updated isOpen property
          const updatedColumn = new ColumnModel(col.title, col.boardId);
          updatedColumn.id = col.id;
          updatedColumn.tasks = col.tasks;
          updatedColumn.isOpen = !col.isOpen;
          return updatedColumn;
        }
        return col;
      });

      return { columns: updatedColumns };
    });
  },

  setColumns: (columns: ColumnModel[]) => set({ columns }),
}));
