import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Input, ModalContent, Modal, Tag, Loader } from './lib';
import { colors } from './constants';

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [tags, setTags] = useState<Array<number>>([1, 2, 3]);
    const [value, setValue] = useState<string>('');
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openModal2, setOpenModal2] = useState<boolean>(false);

    const handleCloseTag = (tagClicked: number) => {
        let filterTags = tags.filter((tag) => tag !== tagClicked);
        setTags([...filterTags]);
    };

    const toggleModal = () => setOpenModal(!openModal);
    const toggleModal2 = () => setOpenModal2(!openModal2);

    return (
        <Wrapper>
            <h2>Loaders</h2>
            <div style={{ display: 'flex', gap: '50px' }}>
                <Loader size={32} borderSize={4} color={colors['primary-darker']} />
                <Loader type="rotate" size={32} borderSize={4} color={colors['primary-darker']} />
                <Loader type="dots" size={32} borderSize={4} color={colors['primary-darker']} />
            </div>
            <Divisor />
            <h2>Input</h2>
            <Input label="Label" hint="Hint" ref={inputRef} /> <Divisor />
            <h2>Button</h2>
            <Button label="Print" color="primary" onClick={() => setValue(inputRef.current?.value || '')} />
            <Divisor />
            <h2>Tags</h2>
            <div style={{ display: 'flex' }}>
                <Tag unremovable color="secondary">
                    Unremovable
                </Tag>
                {tags.map((tag) => (
                    <Tag key={tag} onClose={() => handleCloseTag(tag)}>
                        Tag {tag}
                    </Tag>
                ))}
            </div>
            <Divisor />
            <h2>Modal</h2>
            <Button onClick={toggleModal} label="Open modal sm" />
            <Modal open={openModal} size="sm" onClose={toggleModal}>
                <ModalContent
                    size="sm"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor odio venenatis tortor sagittis, eget elementum diam ultrices. Morbi congue sit amet metus a suscipit."
                    title="Main title"
                    confirm={{ label: 'Confirm' }}
                    cancel={{ label: 'Cancel', onClick: toggleModal }}
                />
            </Modal>
            <Divisor />
            <Button onClick={toggleModal2} color="secondary" label="Open modal m" />
            <Modal open={openModal2} onClose={toggleModal2}>
                <ModalContent
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor odio venenatis tortor sagittis, eget elementum diam ultrices. Morbi congue sit amet metus a suscipit."
                    title="Main title"
                    confirm={{ label: 'Confirm' }}
                    cancel={{ label: 'Cancel', onClick: toggleModal2 }}
                />
            </Modal>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;
const Divisor = styled.div`
    margin-bottom: 2rem;
`;

export default App;
