import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Button from './Button';

const meta: ComponentMeta<typeof Button> = {
    title: 'Design System/Button',
    component: Button,
};
export default meta;

export const Primary: ComponentStoryObj<typeof Button> = {
    args: {
        disabled: false,
        label: 'Primary',
        as: 'button',
    },
};

export const Secondary: ComponentStoryObj<typeof Button> = {
    args: {
        disabled: false,
        label: 'Secondary',
        color: 'secondary',
        as: 'button',
    },
};
export const Error: ComponentStoryObj<typeof Button> = {
    args: {
        disabled: false,
        color: 'error',
        label: 'Error',
        as: 'button',
    },
};
