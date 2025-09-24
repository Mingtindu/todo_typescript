import { Card } from "../../components/ui/card";
import TodoItem from "./TodoItem";
import type { TodoItem as TodoType } from "./todo.logic";

interface Props {
  todos: TodoType[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export default function TodoList({ todos, toggleTodo, removeTodo }: Props) {
  return (
    <Card className="mt-4 p-4">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </Card>
  );
}
