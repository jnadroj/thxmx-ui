import { forwardRef, Ref } from 'react';

import { InputProps } from './types';
import { FloatInput, FloatLabel, FloatContainer, InputContainer, Label, Input as NormalInput } from './Input.styles';

const Input = (
    {
        label,
        size = 'm',
        full = false,
        disabled = false,
        float = false,
        hint = '',
        name,
        type,
        id,
        value,
        inputProps,
        onBlur,
        onKeyDown,
        onFocus,
        onChange,
    }: InputProps,
    ref: Ref<HTMLInputElement>
) => {
    if (float) {
        return (
            <FloatContainer size={size} full={full}>
                {/* @ts-expect-error (TODO: No overload matches this call) */}
                <FloatInput
                    ref={ref as Ref<HTMLInputElement>}
                    disabled={disabled}
                    id={id}
                    name={name}
                    inputSize={size}
                    value={value}
                    placeholder={label}
                    onKeyDown={onKeyDown}
                    onChange={onChange}
                    onFocus={onFocus}
                    type={type}
                    onBlur={onBlur}
                    {...inputProps}
                />
                <FloatLabel size={size}>{label.substring(0, 20)}</FloatLabel>
            </FloatContainer>
        );
    }

    return (
        <InputContainer size={size} full={full}>
            <Label htmlFor={id} size={size}>
                {label}
            </Label>
            {/* @ts-expect-error (TODO: No overload matches this call) */}
            <NormalInput
                inputSize={size}
                ref={ref as Ref<HTMLInputElement>}
                disabled={disabled}
                // inputSize={size}
                value={value}
                type={type}
                placeholder={hint}
                id={id}
                onChange={onChange}
                onFocus={onFocus}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
                {...inputProps}
            />
        </InputContainer>
    );
};

export default forwardRef(Input);
