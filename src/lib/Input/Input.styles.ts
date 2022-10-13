import { colors } from '@/constants';
import { IThxmxSize } from '@/interfaces';
import styled from '@emotion/styled';
import {
    THXMX_FLOAT_LABEL_INPUT_HEIGHT_SIZE,
    THXMX_FLOAT_LABEL_INPUT_PADDING_SIZES,
    THXMX_FLOAT_LABEL_INPUT_TOP_SIZE,
    THXMX_INPUT_FONT_SIZES,
} from './types';

type SizeInputProps = keyof IThxmxSize;

interface InputContainerProps {
    size?: SizeInputProps;
    full?: boolean;
}

export const Input = styled.input<{inputSize: SizeInputProps}>(
    ({ inputSize }) => ({
        width: '100%',
        minHeight: THXMX_FLOAT_LABEL_INPUT_HEIGHT_SIZE[inputSize],
        fontSize: THXMX_INPUT_FONT_SIZES[inputSize],
        borderRadius: '4px',
        boxSizing: 'border-box',
        border: `1px solid ${colors.black}`,
        outline: 0,
        color: colors.black,
        padding: '0.5rem',

        '&:placeholder-shown ~ label.float': {
            visibility: 'hidden',
            zIndex: -1,
            transition: '0.2s ease-in-out',
        },

        '& ~ label.float': {
            backgroundColor: '#ffffff',
        },

        '&.disabled ~ label.float': {
            backgroundColor: '#dfe6e9',
        },

        '&:not(:placeholder-shown) ~ label.float,&:focus:not(:placeholder-shown) ~ label.float': {
            visibility: 'visible',
            zIndex: 1,
            opacity: 1,
            transform: 'translateY(-6px)',
            transition: '0.2s ease-in-out transform',
        },

        '&.disabled': {
            border: '1px solid #ccc',
            opacity: '0.4',
            color: '#636e72',
        },

        '&.error': {
            border: `1px solid ${colors.error}`
        }
    })
);

const sizes: Record<SizeInputProps, string> = {
    sm: '9rem',
    m: '13rem',
    lg: '17rem',
};

export const InputContainer = styled.div<InputContainerProps>(({ size = 'm', full }) => ({
    position: 'relative',
    width: full ? '100%' : sizes[size],
    display: 'flex',
    flexDirection: 'column-reverse',
    margin: 0,
    marginBottom: '17px',

    '> label': {
        marginBottom: '5px',
    },
}));

export const Label = styled.label<{ size: SizeInputProps }>(({ size = 'm' }) => ({
    fontSize: THXMX_INPUT_FONT_SIZES[size],
    fontWeight: 'bold',
    
    '&.float': {
        left: '10px',
        opacity: '0.6',
        position: 'absolute',
        color: 'black',
        top: THXMX_FLOAT_LABEL_INPUT_TOP_SIZE[size],
        padding: THXMX_FLOAT_LABEL_INPUT_PADDING_SIZES[size],
    }
}));

export const ErrorMessage = styled.span({
    color: colors.error,
    margin: 0,
    marginTop: '7px',
});
