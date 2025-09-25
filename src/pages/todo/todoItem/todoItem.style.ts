/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export const todoItem = (completed: boolean) => css`
  text-decoration: ${completed ? "line-through" : "none"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;
