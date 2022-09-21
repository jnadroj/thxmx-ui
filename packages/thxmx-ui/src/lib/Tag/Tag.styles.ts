import styled from 'styled-components';

import { IThxmxSize } from '@/interfaces';
import { convertHexToRGBA } from '@/utils';
import { colors } from '@/constants';

import {
    THXMX_TAG_FONT_SIZES,
    THXMX_TAG_MARGIN_SIZES,
    THXMX_TAG_PADDING_Y_SIZES,
    THXMX_TAG_PADDING_X_SIZES,
} from './types';

export const TagContainer = styled.span<{ size: keyof IThxmxSize; variant: 'primary' | 'secondary' | 'error' }>(
    ({ size, variant }) => ({
        padding: `${THXMX_TAG_PADDING_Y_SIZES[size]} ${THXMX_TAG_PADDING_X_SIZES[size]}`,
        fontSize: THXMX_TAG_FONT_SIZES[size],
        border: `1px solid ${colors[variant]}`,
        backgroundColor: convertHexToRGBA(colors[`${variant}-lighter`], 0.2),
        color: colors[`${variant}-darker`],
        margin: THXMX_TAG_MARGIN_SIZES[size],
        borderRadius: '3px',
    })
);
