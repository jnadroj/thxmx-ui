import { ListProps } from './types';

function List<T>({ items, customRender }: ListProps<T>) {
  return <>{items.map(customRender)}</>;
}

export default List;
