import { ComponentMeta, ComponentStory } from '@storybook/react';
import List from './List';

export default {
  title: 'ThxmxUi/List',
  component: List,
  argTypes: {
    items: {
      description: 'List of items that you need to render',
      control: { type: 'array' },
    },
    customRender: {
      description: 'Custom render function passed to a map',
      control: { type: 'function' },
    },
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '150px',
    }}
  >
    <List {...args} />
  </div>
);

export const Default = Template.bind({});
Default.storyName = 'Default list';
Default.args = {
  items: [
    {
      name: 'john',
      age: 23,
    },
    {
      name: 'ana',
      age: 76,
    },
  ],
  customRender: (item) => {
    const person = item as { name: string; age: number };
    return (
      <p>
        {person.name}, {person.age}
      </p>
    );
  },
};
