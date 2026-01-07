import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type User = { id: number; name: string };
type Todo = { id: number; userId: number; title: string; completed: boolean };

type AppState = {
  users: User[];
  setUsers: (users: User[]) => void;

  selectedUser: number | null;
  selectUser: (id: number) => void;
  clearSelected: () => void;

  todos: Todo[];
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
      todos: [],
      setTodos: (todos: Todo[]) => set({ todos }),
      clearTodos: () => set({ todos: [] }),
    }),
    {
      name: "app-state",
      storage: createJSONStorage(() => sessionStorage), 
    }
  )
);
