import { useAppState } from "../store/useAppState";

export function resetStore() {
    useAppState.setState({
      selectedUserId: null,
      allTodos: [],
    });
  }
  
