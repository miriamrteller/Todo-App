import { useMemo } from 'react';
import { todos, type Todo, type TodoList } from '../../api/todos';

export function useTodos(userId: number | null): Todo[] | null {
  return useMemo(() => {
    if (userId == null) return null;
    return todos.find((entry: TodoList) => entry.userId === userId)?.todos ?? null;
  }, [userId]);
}
