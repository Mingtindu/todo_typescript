import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #3182ce;
    box-shadow: 0 0 0 2px rgba(49, 130, 206, 0.3);
  }
`;

export const Button = styled.button`
  background: #3182ce;
  color: white;
  padding: 0.25rem 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #2b6cb0;
  }
`;
