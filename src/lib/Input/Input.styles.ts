import { colors } from '@/constants';
import { IThxmxSize } from '@/interfaces';
import styled from '@emotion/styled';
import {
    THXMX_LABEL_INPUT_HEIGHT_SIZE,
    THXMX_LABEL_INPUT_PADDING_SIZES,
    THXMX_LABEL_INPUT_TOP_SIZE,
    THXMX_INPUT_FONT_SIZES,
} from './types';

type SizeInputProps = keyof IThxmxSize;

interface InputContainerProps {
    size?: SizeInputProps;
    full?: boolean;
}

export const Input = styled.input<{inputSize: SizeInputProps}>(
    ({ inputSize }) => ({
        border: 0,
        padding: 0,
        outline: 0,
        width: '100%',
        minHeight: THXMX_LABEL_INPUT_HEIGHT_SIZE[inputSize],
        fontSize: THXMX_INPUT_FONT_SIZES[inputSize],        

        '&:placeholder-shown ~ label.float': {
            visibility: 'hidden',
            transition: '0.2s ease-in-out',
        },

        '& ~ label.float': {
            backgroundColor: '#ffffff',
        },

        '&:not(:placeholder-shown) ~ label.float,&:focus:not(:placeholder-shown) ~ label.float': {
            visibility: 'visible',
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

export const InputContainer = styled.div<InputContainerProps>(({ size = 'm', full }) => ({
    width: full ? '100%' : sizes[size],
    marginBottom: '17px',

    '> label': {
        marginBottom: '5px',
    },
}));

export const Label = styled.label<{ size: SizeInputProps }>(({ size = 'm' }) => ({
    display: 'inline-block',
    fontSize: THXMX_INPUT_FONT_SIZES[size],
    fontWeight: 'bold',
    marginBottom: 5,

    '&.float': {
        position: 'absolute',
        left: '10px',
        opacity: 0.6,
        color: 'black',
        top: THXMX_LABEL_INPUT_TOP_SIZE[size],
        padding: THXMX_LABEL_INPUT_PADDING_SIZES[size],
    }
}));

export const ErrorMessage = styled.span({
    color: colors.error,
    margin: 0,
    marginTop: '7px',
});

export const InputAdornment = styled('div')`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


export const InputWrapper = styled.div<{ size: SizeInputProps }>(({size}) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: '0.5rem',
    borderRadius: '4px',
    border: `1px solid ${colors.black}`,

    '&.disabled ~ label.float': {
        backgroundColor: '#dfe6e9',
    },

    '&.disabled': {
        border: '1px solid #ccc',
        opacity: '0.4',
        color: '#636e72',
    },

    '&.error': {
        border: `1px solid ${colors.error}`
    },
}))