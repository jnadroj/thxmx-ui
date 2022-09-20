import styled from 'styled-components';
import { colors } from '../../constants/colors';

type ContainerButtonType = {
    variant: 'primary' | 'secondary' | 'error';
};

export const ContainerButton = styled.button<ContainerButtonType>(({ variant = 'primary' }) => ({
    background: colors[variant],
    color: 'white',
    outline: 'none',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all .3s ease-in-out',
    '&:hover': {
        background:
            variant === 'primary'
                ? colors['primary-darker']
                : variant === 'secondary'
                ? colors['secondary-darker']
                : colors['error-darker'],
    },
}));
