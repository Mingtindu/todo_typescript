import type { FC, FormEvent, ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";
import { useTodos } from "../../context/TodoContext";
import { Form, Input, Button } from "./AddTodoForm.styles";

const AddTodoForm: FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { dispatch } = useTodos();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({ type: "ADD", payload: { title, description } });
    setTitle("");
    setDescription("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") console.log("Pressed Enter");
        }}
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)
        }
      />
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default AddTodoForm;
