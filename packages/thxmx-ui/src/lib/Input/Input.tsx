import { forwardRef, Ref } from 'react';

import { InputProps } from './types';
import { FloatInput, FloatLabel, Input as InputStyled } from './Input.styles';

const Input = ({ label, size = 'm', full = false, disabled = false }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
        <FloatInput size={size} full={full}>
            <InputStyled ref={ref as Ref<HTMLInputElement>} disabled={disabled} inputSize={size} placeholder={label} />
            <FloatLabel size={size}>{label}</FloatLabel>
        </FloatInput>
    );
};

export default forwardRef(Input);
