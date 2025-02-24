export default class TaskModel {
  id: string;
  columnId: string;
  title: string;
  description: string;
  status: string;

  constructor(title: string, description: string, status: string, columnId: string) {
    this.id = generateTaskId();
    this.title = title;
    this.description = description;
    this.status = status;
    this.columnId = columnId;
  }
}

// NOTE: This is a temporary function to generate a unique ID for the task
const generateTaskId = () => {
  return Math.random().toString(36).substring(2, 15);
};
