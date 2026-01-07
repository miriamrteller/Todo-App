import { useState, useEffect } from 'react';
import { todosData } from '../../api/todos';
import { type Todo } from '../../Types/TodosTypes';
import { useAppState } from '../../store/useAppState';

type UseTodosReturn = {
  todos: Todo[] | null;
  toggleTodo: (id: number) => void;
};

export function useTodos(userId?: number | null): UseTodosReturn {
  const { todos, setTodos, clearTodos } = useAppState();

  useEffect(() => {
    if (!userId) {
      clearTodos();
      return;
    }

    const storageKey = `todos_user_${userId}`;
    const stored = sessionStorage.getItem(storageKey);

    const setInitialTodos = () =>{
      const todosFromData = todosData.find(entry => entry.userId === userId)?.todos
      if(todosFromData) setTodos(todosFromData);
      else clearTodos()
    }

    if (stored) {
      try {
        setTodos(JSON.parse(stored));
      } catch {
        setInitialTodos();
      }
    } else {
      setInitialTodos();
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
