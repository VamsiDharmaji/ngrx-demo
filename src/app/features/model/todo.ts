export class Todo {
  id: number;
  title: string;
  completed: boolean;
}

export enum TodoListType {
  Pending = 0,
  Completed,
}
