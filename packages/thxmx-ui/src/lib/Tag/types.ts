import { IThxmxSize } from '@/interfaces';
import React from 'react';

export interface TagProps {
    children: React.ReactNode;
    unremovable?: boolean;
    size?: keyof IThxmxSize;
    color?: 'primary' | 'secondary' | 'error';
    onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const THXMX_TAG_PADDING_Y_SIZES: IThxmxSize = {
    sm: '4px',
    m: '6px',
    lg: '8px',
};

export const THXMX_TAG_PADDING_X_SIZES: IThxmxSize = {
    sm: '7px',
    m: '9px',
    lg: '11px',
};

export const THXMX_TAG_FONT_SIZES: IThxmxSize = {
    sm: '12px',
    m: '14px',
    lg: '16px',
};

export const THXMX_TAG_MARGIN_SIZES: IThxmxSize = {
    sm: '2px',
    m: '3px',
    lg: '4px',
};
