/** @jsxImportSource @emotion/react */
import type { FormEvent } from "react";
import * as styles from "./todo.styles";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

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
    <form onSubmit={handleSubmit} css={styles.form}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        css={styles.input}
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        css={styles.input}
      />
      <Button
        type="submit"
        className="w-full mt-2 text-center text-white bg-blue-500 hover:bg-blue-600"
      >
        Add Todo
      </Button>
    </form>
  );
}
