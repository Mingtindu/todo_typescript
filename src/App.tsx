// // src/App.tsx
// import { useState } from "react";
// import AddTodoForm from "./components/AddTodoForm";
// import TodoList from "./components/TodoList";
// import type { Todo } from "./types";

// function App() {
//   const [todos, setTodos] = useState<Todo[]>([]); // complex state type

//   const [filter, setFilter] = useState("all");

//   // const addTodo = ({
//   //   title,
//   //   description,
//   // }: {
//   //   title: string;
//   //   description: string;
//   // }) => {
//   //   const newTodo:{} Todo = {
//   //     id: Date.now(),
//   //     title,
//   //     description,
//   //     completed: false,
//   //   };
//   //   setTodos([...todos, newTodo]);
//   // };
//   const addTodo = ({ title, description }: Omit<Todo, "id" | "completed">) => {
//     setTodos([
//       ...todos,
//       {
//         id: Date.now(),
//         title,
//         description,
//         completed: false,
//       },
//     ]);
//   };

//   const toggleTodo = (id: number) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id: number) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <AddTodoForm addTodo={addTodo} />
//       <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
//     </div>
//   );
// }

// export default App;

import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import CountriesList from "./components/CountriesLIst";
import { List } from "./components/List";
import ShoppingCartDemo from "./components/ShoppingCartDemo";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

export default function App() {
  return (
    <TodoProvider>
      <div className="max-w-md mx-auto mt-10 p-4 border rounded">
        <AddTodoForm />
        <TodoList />
        <CountriesList/>
        <List
          items={["apple", "banana", "cherry"]}
          render={(fruit) => <li>{fruit.toUpperCase()}</li>}
        />
        <ShoppingCartDemo></ShoppingCartDemo>
      </div>
    </TodoProvider>
  );
}
