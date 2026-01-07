export function useStorage(key: string) {

    const storedItem = sessionStorage.getItem(key);
    const setStorage = (value: string) => sessionStorage.setItem(key, value)

    return {
        storedItem,
        setStorage
    }
}