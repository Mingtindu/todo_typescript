/** @jsxImportSource @emotion/react */
import type { FormEvent } from "react";
import { useTodoLogic } from "./todo.logic";
import * as styles from "./todo.styles";
import TodoForm from "../todo/todoForm/todoForm";
import TodoList from "../todo/todoList/todoList";

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
    <div className="w-full max-w-2xl mx-auto mt-8 p-6 min-h-screen">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Header */}
          <h1 className="text-3xl font-bold text-center tracking-wide">Todo App</h1>
        
        {/* Content */}
        <div className="p-6" css={styles.container}>
          <TodoForm
            title={title}
            description={description}
            setTitle={setTitle}
            setDescription={setDescription}
            handleSubmit={handleSubmit}
          />
          <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </div>
      </div>
    </div>
  );
}
