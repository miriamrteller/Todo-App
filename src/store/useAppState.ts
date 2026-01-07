import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type User } from "../Types/UserTypes";
import { type TodoList } from "../Types/TodosTypes";

type AppState = {
  users: User[];
  setUsers: (users: User[]) => void;

  selectedUser: number | null;
  selectUser: (id: number) => void;
  clearSelected: () => void;

  allTodos: TodoList[];
  setAllTodos: (todos: TodoList[]) => void;
  toggleTodo: (userId: number, todoId: number) => void;
};

export const useAppState = create<AppState>()(
  persist(
    (set) => ({
      // Users
      users: [],
      setUsers: (users: User[]) => set({ users }),

      // Selected user
      selectedUser: null,
      selectUser: (id: number) => set({ selectedUser: id }),
      clearSelected: () => set({ selectedUser: null }),

      // Todos
      allTodos: [],
      setAllTodos: (allTodos: TodoList[]) => set({ allTodos }),
      toggleTodo: (userId, todoId) =>
        set(state => ({
          allTodos: state.allTodos.map(todoList =>
            todoList.userId === userId
              ? {
                ...todoList,
                todos: todoList.todos.map(todo =>
                  todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
                ),
              }
              : todoList
          ),
        })),
    }),
    {
      name: "app-state",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
