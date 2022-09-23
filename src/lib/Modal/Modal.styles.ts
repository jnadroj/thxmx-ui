import styled from '@emotion/styled';

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

export const ContainerModal = styled.div<{ size: 'sm' | 'm' | 'lg' }>(({ size }) => ({
    backgroundColor: 'white',
    paddingTop: '48px',
    paddingBottom: '48px',
    maxHeight: '90vh',
    height: 'auto',
    width: '90%',
    maxWidth: '90%',
    borderRadius: '10px',
    margin: '0 auto',
    '@media (min-width: 768px)': { width: 'calc(66.6% - 64px)', maxWidth: '66.6%', margin: '0 auto' },
    '@media (min-width: 1024px)': { width: 'calc(66.6% - 184px)', maxWidth: '66.6%', margin: '0 auto' },
    '@media (min-width: 1366px)': { width: ' calc(50% - 288px)', maxWidth: '50%', margin: '0 auto' },
}));
