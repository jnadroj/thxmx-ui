import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotation = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const dotsAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

export const LoaderRingContainer = styled.div<{ color: string; size: number; borderSize: number }>(
    ({ color, size, borderSize }) => ({
        display: 'inline-block',
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        '& div': {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            boxSizing: 'border-box',
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            margin: `auto`,
            border: `${borderSize}px solid ${color}`,
            borderRadius: '50%',
            animation: `${loading} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
            borderColor: `${color} transparent transparent transparent`,
        },
        '& div:nth-of-type(1)': {
            animationDelay: '-0.45s',
        },
        '& div:nth-of-type(2)': {
            animationDelay: '-0.3s',
        },
        '& div:nth-of-type(3)': {
            animationDelay: '-0.15s',
        },
    })
);

export const LoaderRotateContainer = styled.div<{ size: number; color: string; borderSize: number }>(
    ({ size, color, borderSize }) => ({
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        display: 'inline-block',
        borderTop: `${borderSize}px solid ${color}`,
        borderRight: `3px solid transparent`,
        boxSizing: 'border-box',
        animation: `${rotation} 1s linear infinite`,
    })
);

export const LoaderDotsContainder = styled.div<{ size: number; color: string }>(({ size, color }) => ({
    width: `${size}px`,
    height: `${size}px`,
    display: 'inline-block',
    position: 'relative',
    '&::after, &::before': {
        content: '""',
        boxSizing: 'border-box',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: color,
        position: 'absolute',
        left: 0,
        top: 0,
        animation: `${dotsAnimation} 2s linear infinite`,
    },
}));
