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
  customRender,
  accessor,
  full = false,
}: SelectProps<T>) {
  const [items, setItems] = useState<T[]>(options);

  const { isOpen, getInputProps, getMenuProps } = useCombobox({
    items: options,
  });

  useEffect(() => {
    if (options.length) setItems([...options]);
  }, [options]);

  return (
    <WrapperSelect full={full}>
      <WrapperSelectInput>
        <Input {...getInputProps()} />
      </WrapperSelectInput>
      {isOpen && (
        <WrapperList {...getMenuProps()}>
          {customRender
            ? items.map(customRender)
            : items.map((item, index: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <Item key={index}>
                  {typeof item === 'string' ? item : item[accessor]}
                </Item>
              ))}
        </WrapperList>
      )}
    </WrapperSelect>
  );
}

export default Select;
