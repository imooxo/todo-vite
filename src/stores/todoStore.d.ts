interface Todo {
    id: number;
    title: string;
    description: string;
    status: "todo" | "inProgress" | "done";
}
interface TodoState {
    todos: Todo[];
    nextID: number;
    addTodo: (title: string, description: string) => void;
    InProgressTodo: (id: number) => void;
    doneTodo: (id: number) => void;
}
declare const useTodoStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<TodoState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<TodoState, TodoState>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: TodoState) => void) => () => void;
        onFinishHydration: (fn: (state: TodoState) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<TodoState, TodoState>>;
    };
}>;
export default useTodoStore;
