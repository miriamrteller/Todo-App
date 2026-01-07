import { useEffect } from "react";
import { useAppState } from "../store/useAppState";
import { todosData } from "../api/todos";
import { users } from "../api/users";
import type { TodoList } from "../Types/TodosTypes";
import type { User } from "../Types/UserTypes";

export function useInitTodos() {
    const { allTodos, setAllTodos, allUsers, setAllUsers } = useAppState();

    useEffect(() => {
        if (allTodos.length === 0) {
            setAllTodos(todosData as TodoList[]);
        }
    }, [allTodos.length, setAllTodos]);

    useEffect(()=>{
        if(allUsers.length === 0) {
            setAllUsers(users as User[])
        }
    })
}
