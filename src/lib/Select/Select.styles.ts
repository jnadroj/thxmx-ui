import styled from '@emotion/styled';

import { convertHexToRGBA } from '@/utils';

export const WrapperSelect = styled.div(({ full }: { full?: boolean }) => ({
  position: 'relative',
  width: full ? '100%' : '13rem',
}));

export const WrapperSelectInput = styled.div`
  border: 1px solid black;
  display: flex !important;
`;

export const WrapperList = styled.ul`
  display: flex;
  margin: 0;
  flex-direction: column;
  list-style: none;
  max-height: 20rem;
  position: absolute;
  overflow: auto;
  min-width: 100%;
  border: 1px solid black;
  margin-top: 0.5rem;
  padding: 0;
`;

export const Item = styled.div`
  padding: 0.5rem;
  margin: 0;
  cursor: pointer;
  &:hover {
    background-color: ${convertHexToRGBA('#000', 0.1)};
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  padding: 0.5rem 0.2rem;
`;
