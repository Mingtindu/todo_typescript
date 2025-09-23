import type { ListProps } from "../types/generic";

export function List<T>({ items, render }: ListProps<T>) {
  return <ul>{items.map(render)}</ul>;
}
