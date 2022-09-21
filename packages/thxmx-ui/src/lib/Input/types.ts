import { IThxmxSize } from '@/interfaces';

export const THXMX_FLOAT_LABEL_INPUT_FONT_SIZES: IThxmxSize = {
    sm: '14px',
    m: '16px',
    lg: '18px',
};

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
    sm: '30px',
    m: '38px',
    lg: '46px',
};

interface InputBaseProps {
    label: string;
    disabled?: boolean;
}

export interface InputProps extends InputBaseProps {
    size?: 'sm' | 'm' | 'lg';
    full?: boolean;
}
