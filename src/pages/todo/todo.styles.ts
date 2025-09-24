/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left:3rem;
  margin-bottom: 1rem;
`;

export const input = css`
  padding: 0.5rem;
  font-size: 1rem;
`;

export const button = css`
  padding: 0.5rem;
  text: white;
  font-size: 1rem;
  cursor: pointer;
`;

export const todoItem = (completed: boolean) => css`
  text-decoration: ${completed ? "line-through" : "none"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;
