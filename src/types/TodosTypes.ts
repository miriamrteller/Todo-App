export type Todo = { id:number; title: string; completed: boolean };

export type TodoList = {
  userId: number;
  todos: Todo[];
};
