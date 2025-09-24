/** @jsxImportSource @emotion/react */
import type { FormEvent } from "react";
import { useTodoLogic } from "./todo.logic";
import * as styles from "./todo.styles";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo() {
  const {
    todos,
    title,
    setTitle,
    description,
    setDescription,
    addTodo,
    toggleTodo,
    removeTodo,
  } = useTodoLogic();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <div css={styles.container}>
      <h1>Todo App</h1>
      <TodoForm
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
      />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}
