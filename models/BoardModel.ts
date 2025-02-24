import ColumnModel from '@/models/ColumnModel';

export default class BoardModel {
  id: string;
  name: string;
  columns: ColumnModel[];

  constructor(name: string) {
    this.id = generateBoardId();
    this.name = name;
    this.columns = [];
  }

  public addColumn(column: ColumnModel) {
    this.columns.push(column);
  }

  public addColumns(columns: ColumnModel[]) {
    this.columns.push(...columns);
  }
}

// NOTE: This is a temporary function to generate a unique ID for the board
const generateBoardId = () => {
  return Math.random().toString(36).substring(2, 15);
};
