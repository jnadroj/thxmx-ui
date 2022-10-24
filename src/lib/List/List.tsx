import { ListProps } from './types';

function List<T>(props: ListProps<T>) {
  return <>{props.items.map(props.customRender)}</>;
}

export default List;
