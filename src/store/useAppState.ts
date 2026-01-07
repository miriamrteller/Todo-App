import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { TodoList } from "../Types/TodosTypes";
import type { User } from "../Types/UserTypes";

type AppState = {
  allTodos: TodoList[];
  allUsers: User[];
  selectedUserId: number | null;
  setSelectedUser: (id: number | null) => void;
  toggleTodo: (userId: number, todoId: number) => void;
  setAllTodos: (todos: TodoList[]) => void;
  setAllUsers: (users: User[]) => void;
};

export const useAppState = create<AppState>()(
  persist(
    (set) => ({
      allTodos: [],

      allUsers: [],

      selectedUserId: null,
      setSelectedUser: (id) => set({ selectedUserId: id }),

      setAllTodos: (todos) => set({ allTodos: todos }),
      toggleTodo: (userId: number, todoId: number) =>
        set(state => ({
          allTodos: state.allTodos.map(todoList =>
            todoList.userId !== userId
              ? todoList
              : {
                ...todoList,
                todos: todoList.todos.map(todo =>
                  todo.id === todoId
                    ? { ...todo, completed: !todo.completed }
                    : todo
                ),
              }
          ),
        })),

      setAllUsers: (users) => set({ allUsers: users }),
    }),
    {
      name: "app-state",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
