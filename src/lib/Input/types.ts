import { IThxmxSize } from '@/interfaces';
import React from 'react';

export const THXMX_INPUT_FONT_SIZES: IThxmxSize = {
    sm: '14px',
    m: '16px',
    lg: '18px',
};

export const THXMX_LABEL_INPUT_PADDING_SIZES: IThxmxSize = {
    sm: '0 4px 0 4px',
    m: '0 3px 0 3px',
    lg: '0 2px 0 2px',
};

export const THXMX_LABEL_INPUT_TOP_SIZE: IThxmxSize = {
    sm: '0',
    m: '-2px',
    lg: '-3px',
};

export const THXMX_LABEL_INPUT_HEIGHT_SIZE: IThxmxSize = {
    sm: '30px',
    m: '38px', 
    lg: '46px',
};

interface BaseInputProps<T extends HTMLInputElement> {
    disabled?: boolean;
    error?: boolean;
    hint?: string;
    id?: string;
    name?: string;
    errorText?: string;
    type?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<T>) => void;
    onFocus?: (e: React.FocusEvent<T>) => void;
    onBlur?: (e: React.FocusEvent<T>) => void;
    onKeyDown?: (e: React.KeyboardEvent<T>) => void;
}

interface InputWithLabel extends BaseInputProps<HTMLInputElement> {
    label: string;
}

export type LayoutSize = "sm" | "m" | "lg"

interface InputIconProps {
    onClick?(): void
}

export interface InputProps extends InputWithLabel {
    size?: LayoutSize;
    full?: boolean;
    float?: boolean;
    hint?: string;
    renderStartIcon?: (props?: InputIconProps) => React.ReactNode;
    renderEndIcon?: (props?: InputIconProps) => React.ReactNode;
}
