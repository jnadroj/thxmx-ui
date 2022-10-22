import { ComponentMeta, ComponentStory } from '@storybook/react';
import Rate from './Rate';

export default {
  title: 'ThxmxUi/Rate',
  Component: Rate,
} as ComponentMeta<typeof Rate>;

const Template: ComponentStory<typeof Rate> = (args) => (
  <Rate
    {...args}
    style={{
      fontSize: '40px',
    }}
  />
);

export const Default = Template.bind({});
Default.args = {
  value: 3.5,
  count: 5,
  allowHalf: true,
};
