import { useState } from "react"
import { useAppState } from "../../store/useAppState"

export function useTodoFilter() {
    const { allTodos, selectedUserId } = useAppState();
    const [onlyComplete, setOnlyComplete] = useState(false)

    const filtered = onlyComplete ?
        allTodos.find(tl => tl.userId === selectedUserId)?.todos.filter(t => !t.completed)
        : allTodos.find(tl => tl.userId === selectedUserId)?.todos;
        
    return {
        onlyComplete,
        filterResults: () => setOnlyComplete(p => !p),
        filtered
    }
}