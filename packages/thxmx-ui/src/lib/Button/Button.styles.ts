import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { TYPE_BUTTON_SIZES, BUTTON_FONT_SIZES, BUTTON_PADDING_SIZES } from './classes';

type ContainerButtonType = {
    variant: 'primary' | 'secondary' | 'error';
    full?: boolean;
    size?: keyof TYPE_BUTTON_SIZES;
    disabled?: boolean;
};

export const ContainerButton = styled.button<ContainerButtonType>(
    ({ variant = 'primary', disabled, full = false, size = 'm' }) => ({
        background: disabled ? colors[`${variant}-lighter`] : colors[variant],
        color: 'white',
        width: full ? '100%' : 'auto',
        outline: 'none',
        fontWeight: 'bold',
        fontSize: BUTTON_FONT_SIZES[size],
        border: 'none',
        padding: BUTTON_PADDING_SIZES[size],
        borderRadius: '6px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all .3s ease-in-out',
        '&:hover': {
            background: disabled ? colors[`${variant}-lighter`] : colors[`${variant}-darker`],
        },
    })
);

export const ContainerLinkButton = styled.a<ContainerButtonType>(({ variant = 'primary', size = 'm' }) => ({
    color: colors[variant],
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
        color: colors[`${variant}-darker`],
    },
}));
