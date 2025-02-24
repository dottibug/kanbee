import TaskModel from './TaskModel';

export default class ColumnModel {
  id: string;
  boardId: string;
  name: string;
  tasks: TaskModel[];

  constructor(name: string, boardId: string) {
    this.id = generateColId();
    this.name = name;
    this.tasks = [];
    this.boardId = boardId;
  }

  public addTask(task: TaskModel) {
    this.tasks.push(task);
  }

  public addTasks(tasks: TaskModel[]) {
    this.tasks.push(...tasks);
  }
}

// NOTE: This is a temporary function to generate a unique ID for the board
const generateColId = () => {
  return Math.random().toString(36).substring(2, 15);
};
