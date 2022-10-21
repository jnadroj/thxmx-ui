import styled from '@emotion/styled';
import { colors } from '@/constants';
import { IThxmxSize } from '@/interfaces';
import {
  THXMX_FLOAT_LABEL_INPUT_FONT_SIZES,
  THXMX_FLOAT_LABEL_INPUT_HEIGHT_SIZE,
  THXMX_FLOAT_LABEL_INPUT_PADDING_SIZES,
  THXMX_FLOAT_LABEL_INPUT_TOP_SIZE,
  THXMX_INPUT_FONT_SIZES,
} from './types';

type SizeInputProps = keyof IThxmxSize;

interface FloatContainerProps {
  size?: SizeInputProps;
  full?: boolean;
}

const sizes: Record<SizeInputProps, string> = {
  sm: '9rem',
  m: '13rem',
  lg: '17rem',
};

export const FloatContainer = styled.div<FloatContainerProps>(
  ({ size = 'm', full }) => ({
    position: 'relative',
    width: full ? '100%' : sizes[size],
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    marginBottom: '17px',
  })
);

interface FloatLabelProps {
  size: SizeInputProps;
}

export const FloatLabel = styled.label<FloatLabelProps>(({ size = 'm' }) => ({
  left: '10px',
  opacity: '0.6',
  position: 'absolute',
  color: 'black',
  top: THXMX_FLOAT_LABEL_INPUT_TOP_SIZE[size],
  fontSize: THXMX_FLOAT_LABEL_INPUT_FONT_SIZES[size],
  padding: THXMX_FLOAT_LABEL_INPUT_PADDING_SIZES[size],
  fontWeight: 'bold',
}));

export const FloatInput = styled.input<{
  disabled?: boolean;
  inputSize: keyof IThxmxSize;
  error?: boolean;
}>(({ disabled, inputSize, error }) => ({
  outline: 0,
  // backgroundColor: disabled ? '#dfe6e9' : 'white',
  opacity: disabled ? '0.4' : '1',
  width: '100%',
  border: `1px solid ${disabled ? '#ccc' : error ? colors.error : 'black'}`,
  color: disabled ? '#636e72' : 'black',
  borderRadius: '4px',
  minHeight: THXMX_FLOAT_LABEL_INPUT_HEIGHT_SIZE[inputSize],
  boxSizing: 'border-box',
  fontSize: THXMX_INPUT_FONT_SIZES[inputSize],
  padding: '0.5rem',
  '&:placeholder-shown ~ label': {
    visibility: 'hidden',
    zIndex: '-1',
    transition: '0.2s ease-in-out',
  },
  '& ~ label': {
    backgroundColor: disabled ? '#dfe6e9' : '#ffffff',
    // opacity: disabled ? '0.4' : '1',
  },
  '&:not(:placeholder-shown) ~ label, &:focus:not(:placeholder-shown) ~ label':
    {
      visibility: 'visible',
      zIndex: 1,
      opacity: 1,
      transform: 'translateY(-6px)',
      transition: '0.2s ease-in-out transform',
    },
}));

export const InputContainer = styled.div<FloatContainerProps>(
  ({ size = 'm', full }) => ({
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column',
    width: full ? '100%' : sizes[size],
    margin: 0,
    marginBottom: '17px',
    '> label': {
      marginBottom: '5px',
    },
  })
);

export const Label = styled.label<{ size: SizeInputProps }>(
  ({ size = 'm' }) => ({
    fontSize: THXMX_INPUT_FONT_SIZES[size],
    fontWeight: 'bold',
  })
);

export const Input = styled.input<{
  inputSize: SizeInputProps;
  disabled?: boolean;
  error?: boolean;
}>(({ inputSize = 'm', disabled, error = false }) => ({
  width: '100%',
  minHeight: THXMX_FLOAT_LABEL_INPUT_HEIGHT_SIZE[inputSize],
  fontSize: THXMX_INPUT_FONT_SIZES[inputSize],
  borderRadius: '4px',
  boxSizing: 'border-box',
  border: `1px solid ${disabled ? '#ccc' : error ? colors.error : 'black'}`,
  outline: 0,
  // backgroundColor: disabled ? '#dfe6e9' : 'white',
  opacity: disabled ? '0.4' : '1',
  color: disabled ? '#636e72' : 'black',
  padding: '0.5rem',
}));

export const ErrorMessage = styled.span({
  color: colors.error,
  margin: 0,
  marginTop: '7px',
});
