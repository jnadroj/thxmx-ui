export interface SelectProps<T> {
  options: T[];
  accessor: keyof T;
  full?: boolean;
  customRender?: (option: T, index: number, array: T[]) => React.ReactNode;
}
