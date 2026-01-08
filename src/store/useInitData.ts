import { useEffect, useRef } from "react";
import { useAppState } from "../store/useAppState";
import { todosData } from "../api/todos";
import { usersData } from "../api/users";
import type { User } from "../types/UserTypes";

export function useInitTodos() {
    const { allTodos, setAllTodos, users, setUsers } = useAppState();
    const hasInitialized = useRef(false);
  
    useEffect(() => {
      if (hasInitialized.current) return;
      if (allTodos.length === 0) {
        setAllTodos(todosData);
      }
      hasInitialized.current = true;
    }, [allTodos.length, setAllTodos]);

    useEffect(()=>{
        if(users.length === 0) {
            setUsers(usersData as User[])
        }
    })
}
