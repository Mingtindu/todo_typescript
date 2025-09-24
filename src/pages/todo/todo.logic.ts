import { useState } from "react";

export interface TodoItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export function useTodoLogic() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    if (!title.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), title, description, completed: false },
    ]);
    setTitle("");
    setDescription("");
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return {
    todos,
    title,
    setTitle,
    description,
    setDescription,
    addTodo,
    removeTodo,
    toggleTodo,
  };
}
