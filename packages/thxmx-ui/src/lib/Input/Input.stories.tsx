import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';

export default {
    title: 'ThxmxUi/Input',
    Component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <div>
        <Input {...args} label="Hello" />
        <Input {...args} label="Hello" disabled />
    </div>
);

export const FloatInput = Template.bind({});
