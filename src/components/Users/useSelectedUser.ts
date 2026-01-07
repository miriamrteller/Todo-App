import { useState } from "react"

type UseUserSelector = {
    selectedUser: number | null;
    selectUser: (id: number) => void;
    clearSelected: () => void;
}

export function useSelectUser(): UseUserSelector {
    const storageKey = `selected_user`;

    const [selectedUser, setSelectedUser] = useState<number | null>(() => {
        const stored = sessionStorage.getItem(storageKey);
        if (stored) {
            try {
                return JSON.parse(stored) as number;
            } catch {
                return null; 
            }
        }
        else return null;
    }


    );

    const selectUser = (id: number) => {
        setSelectedUser(id);
        sessionStorage.setItem(storageKey, `${id}`);
    }
    const clearSelected = () => {
        setSelectedUser(null);
        sessionStorage.removeItem(storageKey);
    }

    return {
        selectedUser,
        selectUser,
        clearSelected
    }
}