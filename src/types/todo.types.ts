// types/todo.types.ts
export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export type TodoAction =
  | { type: "ADD"; payload: { title: string; description: string } }
  | { type: "TOGGLE"; payload: number }
  | { type: "REMOVE"; payload: number };
