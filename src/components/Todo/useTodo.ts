
import { type Todo } from "../../Types/TodosTypes";
import { useAppState } from "../../store/useAppState";

export function useTodos(userId?: number | null) {
  const { allTodos, toggleTodo } = useAppState();

  const todos: Todo[] | null = userId
    ? allTodos.find(tl => tl.userId === userId)?.todos ?? []
    : null;

  const toggle = (todoId: number) => {
    if (!userId) return;
    toggleTodo(userId, todoId);
  };

  return { todos, toggleTodo: toggle };
}
