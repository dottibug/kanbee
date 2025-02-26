import BoardModel from '@/models/BoardModel';
import ColumnModel from '@/models/ColumnModel';
import TaskModel from '@/models/TaskModel';

export const tempBoardData = new BoardModel('Test Board');

// Columns
const col1 = new ColumnModel('To Do', tempBoardData.id);
const col2 = new ColumnModel('Doing', tempBoardData.id);
const col3 = new ColumnModel('Done', tempBoardData.id);

// Tasks
const task1 = new TaskModel('Task 1', 'Description 1', 'status', col1.id);
const task2 = new TaskModel('Task 2', 'Description 2', 'status', col1.id);
const task3 = new TaskModel('Task 3', 'Description 3', 'status', col1.id);
const task4 = new TaskModel('Task 4', 'Description 4', 'status', col2.id);
const task5 = new TaskModel('Task 5', 'Description 5', 'status', col2.id);
const task6 = new TaskModel('Task 6', 'Description 6', 'status', col3.id);
const task7 = new TaskModel('Task 7', 'Description 7', 'status', col3.id);
const task8 = new TaskModel('Task 8', 'Description 8', 'status', col3.id);
const task9 = new TaskModel('Task 9', 'Description 9', 'status', col3.id);

// Add tasks to columns
col1.addTask(task1);
col1.addTask(task2);
col1.addTask(task3);
col2.addTask(task4);
col2.addTask(task5);
col3.addTask(task6);
col3.addTask(task7);
col3.addTask(task8);
col3.addTask(task9);

tempBoardData.addColumns([col1, col2, col3]);
