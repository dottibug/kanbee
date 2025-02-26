import TaskModel from './TaskModel';

export default class ColumnModel {
  id: string;
  boardId: string;
  title: string;
  tasks: TaskModel[];
  public isOpen: boolean;

  constructor(title: string, boardId: string) {
    this.id = generateColId();
    this.title = title;
    this.tasks = [];
    this.boardId = boardId;
    this.isOpen = true;
  }

  public addTask(task: TaskModel) {
    this.tasks.push(task);
  }

  public addTasks(tasks: TaskModel[]) {
    this.tasks.push(...tasks);
  }

  public getNumberOfTasks() {
    return this.tasks.length;
  }
}

// NOTE: This is a temporary function to generate a unique ID for the board
const generateColId = () => {
  return Math.random().toString(36).substring(2, 15);
};
