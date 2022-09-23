import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import Button from '../Button';
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
            control: { type: 'select', options: ['sm', 'm', 'lg'] },
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
            <Button onClick={toggleModal} label="Open modal" />
            <Modal open={openModal} onClose={toggleModal}>
                <ModalContent
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor odio venenatis tortor sagittis, eget elementum diam ultrices. Morbi congue sit amet metus a suscipit."
                    title="Main title"
                    confirm={{ label: 'Confirm' }}
                    cancel={{ label: 'Cancel', onClick: toggleModal }}
                />
            </Modal>
        </div>
    );
};

export const Default = Template.bind({});
