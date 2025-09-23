import type { ReactNode, ReactElement } from "react";
export interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode; // or ReactElement
}
