import { createContext, useReducer, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext();

const ACTIONS = {
    ADD: "ADD",
    TOGGLE: "TOGGLE",
    DELETE: "DELETE",
    EDIT: "EDIT",
};

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD:
            return [...todos, action.payload];
        case ACTIONS.TOGGLE:
            return todos.map((t) =>
                t.id === action.payload ? { ...t, completed: !t.completed } : t
            );
        case ACTIONS.DELETE:
            return todos.filter((t) => t.id !== action.payload);
        case ACTIONS.EDIT:
            return todos.map((t) =>
                t.id === action.payload.id ? { ...t, text: action.payload.text } : t
            );
        default:
            return todos;
    }
}

export const TodoProvider = ({ children }) => {
    const [storedTodos, setStoredTodos] = useLocalStorage("todos", []);
    const [todos, dispatch] = useReducer(reducer, storedTodos);

    useEffect(() => {
        setStoredTodos(todos);
    }, [todos, setStoredTodos]);

    return (
        <TodoContext.Provider value={{ todos, dispatch, ACTIONS }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => useContext(TodoContext);
