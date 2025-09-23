// components/TodoList.tsx
import TodoItem from "./TodoItem/TodoItem";
import { useTodos } from "../context/TodoContext";

const TodoList = () => {
  const { todos } = useTodos();

  if (todos.length === 0) return <p>No todos yet</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
