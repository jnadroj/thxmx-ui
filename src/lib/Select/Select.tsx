import { useCombobox } from 'downshift';
import { useState, useEffect } from 'react';
import {
  Item,
  Input,
  WrapperList,
  WrapperSelect,
  WrapperSelectInput,
} from './Select.styles';

import { SelectProps } from './types';

function Select<T>({
  options,
  accessor,
  full = false,
  customRender,
  hint = '',
}: SelectProps<T>) {
  const [items, setItems] = useState<T[]>(options);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const { isOpen, getInputProps, getMenuProps, getItemProps } = useCombobox({
    items: options,
    selectedItem,
    itemToString: (item) => (item ? (item[accessor] as string) : ''),
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (!newSelectedItem) return;
      setSelectedItem(newSelectedItem);
    },
  });

  useEffect(() => {
    if (options.length) setItems([...options]);
  }, [options]);

  return (
    <WrapperSelect full={full}>
      <WrapperSelectInput>
        <Input {...getInputProps()} placeholder={hint} />
      </WrapperSelectInput>
      {isOpen && (
        <WrapperList {...getMenuProps()}>
          {customRender
            ? items.map(customRender)
            : items.map((item, index: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <Item {...getItemProps({ item, index })} key={index}>
                  {typeof item === 'string' ? item : item[accessor]}
                </Item>
              ))}
        </WrapperList>
      )}
    </WrapperSelect>
  );
}

export default Select;
