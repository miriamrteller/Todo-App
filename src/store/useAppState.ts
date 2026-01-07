import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type User } from "../Types/UserTypes";
import { type Todo } from "../Types/TodosTypes";

type AppState = {
  users: User[];
  setUsers: (users: User[]) => void;

  selectedUser: number | null;
  selectUser: (id: number) => void;
  clearSelected: () => void;

  todos: Todo[] | null;
  setTodos: (todos: Todo[]) => void;
  clearTodos: () => void;
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
      todos: null,
      setTodos: (todos: Todo[]) => set({ todos }),
      clearTodos: () => set({ todos: null }),
    }),
    {
      name: "app-state",
      storage: createJSONStorage(() => sessionStorage), 
    }
  )
);
