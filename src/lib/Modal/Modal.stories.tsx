import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../../lib';
import Modal from './Modal';
import ModalContent from './ModalContent';

export default {
    title: 'ThxmxUi/Modal',
    Component: Modal,
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        size: {
            description: 'Size of the modal component',
            defaultValue: 'm',
            control: { type: 'select', options: ['sm', 'm'] },
        },
        closable: {
            description: 'Indicates whether the modal will close when clicked out of the modal',
            defaultValue: true,
            control: { type: 'select', options: [true, false] },
        },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const toggleModal = () => setOpenModal(!openModal);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'start',
                height: '350px',
            }}
        >
            <Button onClick={toggleModal} label={`Open modal ${args.size}`} size={args.size} />
            <Modal {...args} open={openModal} onClose={toggleModal}>
                <ModalContent
                    size={args.size}
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor odio venenatis tortor sagittis, eget elementum diam ultrices. Morbi congue sit amet metus a suscipit."
                    title="Main title"
                    confirm={{ label: 'Confirm' }}
                    cancel={{ label: 'Cancel', onClick: toggleModal }}
                />
            </Modal>
        </div>
    );
};

export const sm = Template.bind({});
sm.storyName = 'Small';
sm.args = {
    size: 'sm',
};

export const m = Template.bind({});
m.storyName = 'Medium';
m.args = {
    size: 'm',
};
