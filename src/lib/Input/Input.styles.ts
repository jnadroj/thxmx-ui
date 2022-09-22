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

interface FloatContainerProps {
    size?: SizeInputProps;
    full?: boolean;
}

export const FloatContainer = styled.div<FloatContainerProps>(({ size = 'm', full }) => ({
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
    color: 'black',
    top: THXMX_FLOAT_LABEL_INPUT_TOP_SIZE[size],
    fontSize: THXMX_FLOAT_LABEL_INPUT_FONT_SIZES[size],
    padding: THXMX_FLOAT_LABEL_INPUT_PADDING_SIZES[size],
    fontWeight: 'bold',
}));

export const FloatInput = styled.input<{ disabled?: boolean; inputSize: keyof IThxmxSize }>(
    ({ disabled, inputSize }) => ({
        outline: 0,
        backgroundColor: disabled ? '#dfe6e9' : 'white',
        width: '100%',
        border: `1px solid ${disabled ? '#ccc' : 'black'}`,
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
        },
        '&:not(:placeholder-shown) ~ label, &:focus:not(:placeholder-shown) ~ label': {
            visibility: 'visible',
            zIndex: 1,
            opacity: 1,
            transform: 'translateY(-6px)',
            transition: '0.2s ease-in-out transform',
        },
    })
);

const sizes: Record<SizeInputProps, string> = {
    sm: '9rem',
    m: '13rem',
    lg: '17rem',
};

export const InputContainer = styled.div<FloatContainerProps>(({ size = 'm', full }) => ({
    display: 'inline-flex',
    flexDirection: 'column',
    width: full ? '100%' : sizes[size],
    margin: '17px 0',
    '> label': {
        marginBottom: '5px',
    },
}));

export const Label = styled.label<{ size: SizeInputProps }>(({ size = 'm' }) => ({
    fontSize: THXMX_INPUT_FONT_SIZES[size],
    fontWeight: 'bold',
}));

export const Input = styled.input<{ inputSize: SizeInputProps; disabled?: boolean }>(
    ({ inputSize = 'm', disabled }) => ({
        width: '100%',
        minHeight: THXMX_FLOAT_LABEL_INPUT_HEIGHT_SIZE[inputSize],
        fontSize: THXMX_INPUT_FONT_SIZES[inputSize],
        borderRadius: '4px',
        boxSizing: 'border-box',
        border: `1px solid ${disabled ? '#ccc' : 'black'}`,
        outline: 0,
        backgroundColor: disabled ? '#dfe6e9' : 'white',
        color: disabled ? '#636e72' : 'black',
        padding: '0.5rem',
    })
);
