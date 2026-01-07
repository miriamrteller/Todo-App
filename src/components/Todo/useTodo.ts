import { useState, useEffect } from 'react';
import { todosData, type Todo } from '../../api/todos';

type UseTodosReturn = {
  todos: Todo[] | null;
  toggleTodo: (id: number) => void;
};

export function useTodos(userId?: number | null): UseTodosReturn {
  const [todos, setTodos] = useState<Todo[] | null>(null);

  useEffect(() => {
    if (!userId) {
      setTodos(null);
      return;
    }

    const storageKey = `todos_user_${userId}`;
    const stored = sessionStorage.getItem(storageKey);
    if (stored) {
      try {
        setTodos(JSON.parse(stored));
      } catch {
        setTodos(todosData.find(entry => entry.userId === userId)?.todos ?? null);
      }
    } else {
      setTodos(todosData.find(entry => entry.userId === userId)?.todos ?? null);
    }
  }, [userId]); 

  useEffect(() => {
    if (!userId || !todos) return;
    const storageKey = `todos_user_${userId}`;
    sessionStorage.setItem(storageKey, JSON.stringify(todos));
  }, [todos, userId]);

  const toggleTodo = (id: number) => {
    if (!todos) return;
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  return { todos, toggleTodo };
}
