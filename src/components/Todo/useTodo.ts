import { useAppState } from "../../store/useAppState";
import type { TodoList } from "../../Types/TodosTypes";

export function useTodos() {
  const { allTodos, toggleTodo, selectedUserId } = useAppState();

  const todos =  selectedUserId
        ? allTodos.find((todolist: TodoList) => todolist.userId === selectedUserId)?.todos ?? []
        : null
  
  const toggle = (todoId: number) => {
    if (!selectedUserId) return;
    toggleTodo(selectedUserId, todoId);
  };

  return { todos, toggleTodo: toggle };
}
