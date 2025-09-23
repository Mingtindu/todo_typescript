import type { FC, MouseEvent } from "react";
import { useTodos } from "../../context/TodoContext";
import type { Todo } from "../../types/todo.types";
import { ListItem, TodoText, RemoveButton } from "./TodoItem.styles";

const TodoItem: FC<{ todo: Todo }> = ({ todo }) => {
  const { dispatch } = useTodos();

  return (
    <ListItem>
      <TodoText
        completed={todo.completed}
        onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
      >
        {todo.title} - {todo.description}
      </TodoText>

      <RemoveButton
        onClick={(e: MouseEvent<HTMLButtonElement>) =>
          dispatch({ type: "REMOVE", payload: todo.id })
        }
      >
        ✕
      </RemoveButton>
    </ListItem>
  );
};

export default TodoItem;
