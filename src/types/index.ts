// src/types/index.ts
export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export type TodoAction =
  | { type: "ADD"; payload: Todo }
  | { type: "TOGGLE"; payload: number }
  | { type: "DELETE"; payload: number };
  
