/** @jsxImportSource @emotion/react */
import type { FormEvent } from "react";
import * as styles from "./todoForm.style";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
interface Props {
  title: string;
  description: string;
  setTitle: (v: string) => void;
  setDescription: (v: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
export default function TodoForm({
  title,
  description,
  setTitle,
  setDescription,
  handleSubmit, 
}: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4" css={styles.form}>
          <div className="relative">
            <Input
              type="text"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-lg py-3 px-4 rounded-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200 placeholder-gray-400"
              css={styles.input}
            />
          </div>
          
          <div className="relative">
            <Textarea
              placeholder="Add some details... (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full min-h-[100px] py-3 px-4 rounded-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200 placeholder-gray-400 resize-none"
              css={styles.input}
            />
          </div>
        </div>
        
        <Button
          type="submit"
          disabled={!title.trim()}
          className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl"
        >
          ➕ Add Task
        </Button>
      </form>
    </div>
  );
}
