import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';

export default {
    title: 'ThxmxUi/Input',
    Component: Input,
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        full: { description: 'Full width for the input', control: { type: 'radio', options: [true, false] } },
        size: { description: 'Size of the input', control: { type: 'select' }, options: ['sm', 'm', 'lg'] },
        disabled: {
            description: 'Disabled for the input',
            control: { type: 'radio', options: [true, false] },
        },
        label: {
            defaultValue: '',
            description: 'Text to display in the label input',
            control: { type: 'text' },
        },
        hint: {
            defaultValue: '',
            description: 'Text to display in the placeholder when the input is normal',
            control: { type: 'text' },
        },
        id: {
            defaultValue: '',
            description: 'Id for the input and label',
            control: { type: 'text' },
        },
        float: {
            description: 'Type label of the input',
            defaultValue: false,
            control: { type: 'radio', options: [true, false] },
        },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '350px',
        }}
    >
        <Input {...args} id="active" />
        <Input {...args} id="disabled" disabled />
    </div>
);

export const FloatInput = Template.bind({});
FloatInput.args = {
    float: true,
    label: 'Label',
};

export const NormalInput = Template.bind({});
NormalInput.args = {
    hint: 'Placeholder',
};
