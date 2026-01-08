import { useAppState, } from "../../store/useAppState";

export function useTodos() {
  const { toggleTodo, selectedUserId, allTodos, filtered } = useAppState();

  const todos = selectedUserId ? allTodos.find(
    l => l.userId === selectedUserId
  )?.todos : null;
  
  const filteredTodos = selectedUserId ? allTodos.find(
    l => l.userId === selectedUserId
  )?.todos.filter(t => !t.completed) : null;


  const toggle = (todoId: number) => {
    if (!selectedUserId) return;
    toggleTodo(selectedUserId, todoId);
  };

  return {
    todos: filtered ? filteredTodos : todos,
    toggleTodo: toggle,
  }
}
