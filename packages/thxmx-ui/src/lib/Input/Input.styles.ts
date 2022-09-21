import { IThxmxSize } from '@/interfaces';
import styled from 'styled-components';
import {
    THXMX_FLOAT_LABEL_INPUT_FONT_SIZES,
    THXMX_FLOAT_LABEL_INPUT_HEIGHT_SIZE,
    THXMX_FLOAT_LABEL_INPUT_PADDING_SIZES,
    THXMX_FLOAT_LABEL_INPUT_TOP_SIZE,
    THXMX_INPUT_FONT_SIZES,
} from './types';

type SizeInputProps = keyof IThxmxSize;

interface FloatInputProps {
    size?: SizeInputProps;
    full?: boolean;
}

export const FloatInput = styled.div<FloatInputProps>(({ size = 'm', full = false }) => ({
    position: 'relative',
    width: full ? '100%' : sizes[size],
    margin: '17px 0',
}));

interface FloatLabelProps {
    size: SizeInputProps;
}

export const FloatLabel = styled.label<FloatLabelProps>(({ size = 'm' }) => ({
    left: '10px',
    opacity: '0.6',
    position: 'absolute',
    backgroundColor: 'inherit',
    top: THXMX_FLOAT_LABEL_INPUT_TOP_SIZE[size],
    fontSize: THXMX_FLOAT_LABEL_INPUT_FONT_SIZES[size],
    padding: THXMX_FLOAT_LABEL_INPUT_PADDING_SIZES[size],
}));

export const Input = styled.input<{ disabled?: boolean; inputSize: keyof IThxmxSize }>(({ disabled, inputSize }) => ({
    outline: 0,
    backgroundColor: disabled ? '#dfe6e9' : 'white',
    width: '100%',
    height: THXMX_FLOAT_LABEL_INPUT_HEIGHT_SIZE[inputSize],
    border: `1px solid ${disabled ? '#ccc' : 'black'}`,
    color: disabled ? '#636e72' : 'inherit',
    borderRadius: '4px',
    fontSize: THXMX_INPUT_FONT_SIZES[inputSize],
    padding: '0.5rem',
    '&:placeholder-shown ~ label': {
        visibility: 'hidden',
        zIndex: '-1',
        transition: '0.2s ease-in-out',
    },
    '& ~ label': {
        backgroundColor: disabled ? '#dfe6e9' : '#ffffff',
    },
    '&:not(:placeholder-shown) ~ label, &:focus:not(:placeholder-shown) ~ label': {
        visibility: 'visible',
        zIndex: 1,
        opacity: 1,
        transform: 'translateY(-6px)',
        transition: '0.2s ease-in-out transform',
    },
}));

const sizes: Record<SizeInputProps, string> = {
    sm: '9rem',
    m: '13rem',
    lg: '17rem',
};
