import { Card } from "../../../components/ui/card";
import TodoItem from "../todoItem/todoItem";
import type { TodoItem as TodoType } from "../todo.logic";

interface Props {
  todos: TodoType[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export default function TodoList({ todos, toggleTodo, removeTodo }: Props) {
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="space-y-4">
      {/* Progress Header */}
      {totalCount > 0 && (
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-semibold">{completedCount}</span> of <span className="font-semibold">{totalCount}</span> tasks completed
          </div>
          <div className="text-2xl">
            {completedCount === totalCount && totalCount > 0 }
          </div>
        </div>
      )}

      {/* Todo List */}
      {todos.length === 0 ? (
        <Card className="p-8 text-center border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">No tasks yet</h3>
          <p className="text-gray-500 dark:text-gray-400">Add your first task above to get started!</p>
        </Card>
      ) : (
        <Card className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
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
      )}
    </div>
  );
}
