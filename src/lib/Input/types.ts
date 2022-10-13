import { IThxmxSize } from '@/interfaces';

export const THXMX_INPUT_FONT_SIZES: IThxmxSize = {
    sm: '14px',
    m: '16px',
    lg: '18px',
};

export const THXMX_FLOAT_LABEL_INPUT_PADDING_SIZES: IThxmxSize = {
    sm: '0 4px 0 4px',
    m: '0 3px 0 3px',
    lg: '0 2px 0 2px',
};

export const THXMX_FLOAT_LABEL_INPUT_TOP_SIZE: IThxmxSize = {
    sm: '0',
    m: '-2px',
    lg: '-3px',
};

export const THXMX_FLOAT_LABEL_INPUT_HEIGHT_SIZE: IThxmxSize = {
    sm: '48px',
    m: '56px',
    lg: '64px',
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

export interface InputProps extends InputWithLabel {
    size?: LayoutSize;
    full?: boolean;
    float?: boolean;
    hint?: string;
}
