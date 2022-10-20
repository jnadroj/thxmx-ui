import { forwardRef, Ref } from 'react';
import { InputProps } from './types';
import {
    InputContainer,
    Label,
    Input as StyledInput,
    ErrorMessage,
    InputWrapper,
} from './Input.styles';
import { cx } from '@emotion/css';

export default forwardRef(function Input(
    {
        id,
        hint,
        label,
        errorText,
        size = 'm',
        full = false,
        error = false,
        float = false,
        disabled = false,
        renderEndIcon,
        renderStartIcon,
        ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>
) {
    const hasError = error || !!errorText;
    const hasErrorMessage = hasError && !disabled;
    const placeholder = float ? label : hint;

    return (
        <InputContainer size={size} full={full}>
            {!float && (<Label size={size}>{label}</Label>)}
            <InputWrapper size={size} className={cx({disabled, error: hasError})}>
                {renderStartIcon && renderStartIcon()}
                <StyledInput
                    id={id}
                    ref={ref}
                    inputSize={size}
                    disabled={disabled}
                    placeholder={placeholder}
                    {...props}
                 />
                 {renderEndIcon && renderEndIcon()}
                {float && (<Label htmlFor={id} size={size} className='float'>{label}</Label>)}
            </InputWrapper>
            {hasErrorMessage && <ErrorMessage>{errorText}</ErrorMessage>}
        </InputContainer>
    );
})
