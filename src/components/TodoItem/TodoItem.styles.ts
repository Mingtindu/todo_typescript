import styled from "@emotion/styled";

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: 0.5rem 0;
`;

export const TodoText = styled.span<{ completed: boolean }>`
  cursor: pointer;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#6b7280" : "inherit")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  transition:color 0.3s ease;
  &:hover{
    color: ${(props) =>
      props.completed ? "#6b7280" : props.theme.colors.primary};
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.danger};
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
