// context/TodoContext.tsx
import { createContext, useContext, useReducer, useEffect } from "react";
import type { Todo, TodoAction } from "../types/todo.types";
import type { ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface TodoContextType { 
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), completed: false, ...action.payload },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state from localStorage
  const [storedTodos, setStoredTodos] = useLocalStorage<Todo[]>("todos", []);

  const [todos, dispatch] = useReducer(todoReducer, storedTodos);

  //  Persist todos whenever they change
  useEffect(() => {
    setStoredTodos(todos);
  }, [todos, setStoredTodos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodos must be used within TodoProvider");
  return context;
};
