/** @jsxImportSource @emotion/react */

import { Checkbox } from "../../../components/ui/checkbox";
import { Button } from "../../../components/ui/button";
import type { TodoItem as TodoType } from "../todo.logic";

interface Props {
  todo: TodoType;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export default function TodoItem({ todo, toggleTodo, removeTodo }: Props) {
  return (
    <li className="group flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
      <Checkbox
        className="cursor-pointer flex-shrink-0 scale-110 hover:scale-125 transition-transform duration-200"
        checked={todo.completed}
        onCheckedChange={() => toggleTodo(todo.id)}
      />
      
      <div className="flex-1 min-w-0 cursor-pointer" onClick={() => toggleTodo(todo.id)}>
        <div className={`text-lg font-medium transition-all duration-300 ${
          todo.completed 
            ? 'line-through text-gray-400 dark:text-gray-500' 
            : 'text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400'
        }`}>
          {todo.title}
        </div>
        {todo.description && (
          <div className={`text-sm mt-1 transition-all duration-300 ${
            todo.completed 
              ? 'line-through text-gray-300 dark:text-gray-600' 
              : 'text-gray-500 dark:text-gray-400'
          }`}>
            {todo.description}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        {todo.completed && (
          <span className="text-green-500 text-lg animate-pulse">✓</span>
        )}
        <Button
          variant="destructive"
          size="sm"
          onClick={() => removeTodo(todo.id)}
          className="opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-xs font-medium rounded-full shadow-md hover:shadow-lg"
        >
          Remove
        </Button>
      </div>
    </li>
  );
}
