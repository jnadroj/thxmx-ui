import { forwardRef, Ref } from 'react';
import { InputProps } from './types';
import {
    InputContainer,
    Label,
    Input as StyledInput,
    ErrorMessage,
} from './Input.styles';
import { cx } from '@emotion/css';

const Input = (
    {
        label,
        size = 'm',
        full = false,
        disabled = false,
        error = false,
        float = false,
        hint = '',
        errorText,
        name,
        id,
        ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>
) => {
    const hasError = error || !!errorText;
    const hasErrorMessage = hasError && !disabled;
    const placeholder = float ? label : hint;

    return (
        <InputContainer size={size} full={full}>
            {hasErrorMessage && <ErrorMessage>{errorText}</ErrorMessage>}
            <StyledInput
                ref={ref}
                disabled={disabled}
                id={id}
                name={name}
                inputSize={size}
                placeholder={placeholder}
                className={cx({disabled, error: hasError})}
                {...props}
            />
            <Label htmlFor={id} size={size} className={cx({float})}>
                {label}
            </Label>
        </InputContainer>
    );
};

export default forwardRef(Input);
