export type ListProps<T> = {
  items: T[];
  customRender: (item: T, index?: number, array?: T[]) => React.ReactNode;
};
