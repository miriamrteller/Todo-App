import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { TodoList, Todo } from "../types/TodosTypes";
import type { User } from "../types/UserTypes";

type AppState = {
  allTodos: TodoList[];
  users: User[];
  selectedUserId: number | null;
  filtered: boolean;

  toggleFilter: () => void;
  setSelectedUser: (id: number | null) => void;
  toggleTodo: (userId: number, todoId: number) => void;
  setAllTodos: (todos: TodoList[]) => void;
  setUsers: (users: User[]) => void;
};

export const useAppState = create<AppState>()(
  persist(
    (set) => ({
      allTodos: [],
      users: [],
      selectedUserId: null,
      filtered:false,

      setSelectedUser: (id) => set({ selectedUserId: id, filtered: false }),
      setAllTodos: (todos) => set({ allTodos: todos }),
      toggleFilter: () => set(state => ({filtered: !state.filtered})),
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

      setUsers: (users) => set({ users: users }),
    }),
    {
      name: "app-state",
      partialize: (state) => ({ allTodos: state.allTodos }),
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

