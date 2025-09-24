/** @jsxImportSource @emotion/react */

import { Button } from "../../components/ui/button";
import type { TodoItem as TodoType } from "./todo.logic";
import * as styles from "./todo.styles";

interface Props {
  todo: TodoType;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export default function TodoItem({ todo, toggleTodo, removeTodo }: Props) {
  return (
    <li css={styles.todoItem(todo.completed)}>
      <span onClick={() => toggleTodo(todo.id)}>
        {todo.title}: {todo.description}
      </span>
      <Button
        variant="destructive"
        size="sm"
        className="ml-4 px-2 py-1 text-white bg-red-500 hover:bg-red-600"
        onClick={() => removeTodo(todo.id)}
      >
        Remove
      </Button>
    </li>
  );
}
