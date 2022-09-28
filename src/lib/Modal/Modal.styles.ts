import styled from '@emotion/styled';

import { ModalSize } from './types';

export const ContainerModalBackground = styled.div<{ open?: boolean }>(({ open }) => ({
    display: open ? 'absolute' : 'none',
    position: 'fixed',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    overflow: 'auto',
    zIndex: 199999,
    backgroundColor: 'rgba(0,0,0,0.4)',
}));

const THXMX_UI_MODAL_WIDTH_SIZE = {
    sm: ['76.6%', '66.6%', '50%'],
    m: ['96.6%', '76.6%', '56.6%'],
    full: ['100%', '100%', '100%'],
};

const THXMX_UI_MODAL_PADDING_Y_SIZE = {
    sm: '48px',
    m: '56px',
    full: '68px',
};

export const ContainerModal = styled.div<{ size: ModalSize }>(({ size }) => ({
    position: 'relative',
    backgroundColor: 'white',
    padding: `${THXMX_UI_MODAL_PADDING_Y_SIZE[size]} 0px`,
    maxHeight: size === 'full' ? '100vh' : '90vh',
    height: size === 'full' ? '100vh' : 'auto',
    width: size === 'full' ? '100vh' : '90%',
    maxWidth: size === 'full' ? '100vh' : '90%',
    boxSizing: 'border-box',
    borderRadius: size === 'full' ? 'none' : '10px',
    margin: '0 auto',
    '@media (min-width: 768px)': {
        width: size === 'full' ? '100%' : `calc(${THXMX_UI_MODAL_WIDTH_SIZE[size][0]} - 64px)`,
        maxWidth: size === 'full' ? '100%' : THXMX_UI_MODAL_WIDTH_SIZE[size][0],
        margin: '0 auto',
    },
    '@media (min-width: 1024px)': {
        width: size === 'full' ? '100%' : `calc(${THXMX_UI_MODAL_WIDTH_SIZE[size][1]} - 184px)`,
        maxWidth: size === 'full' ? '100%' : THXMX_UI_MODAL_WIDTH_SIZE[size][1],
        margin: '0 auto',
    },
    '@media (min-width: 1366px)': {
        width: size === 'full' ? '100%' : `calc(${THXMX_UI_MODAL_WIDTH_SIZE[size][2]} - 288px)`,
        maxWidth: size === 'full' ? '100%' : THXMX_UI_MODAL_WIDTH_SIZE[size][2],
        margin: '0 auto',
    },
}));

export const CloseButtonContainer = styled.div(() => ({
    position: 'absolute',
    cursor: 'pointer',
    top: '15px',
    right: '20px',
}));
