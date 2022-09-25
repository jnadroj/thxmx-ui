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
                <Loader type="rotate" size={32} borderSize={4} color={colors.secondary} />
                <Loader type="dots" size={32} borderSize={4} color={colors['primary-darker']} />
            </div>
            <Divisor />
            <h2>Input</h2>
            <ContainerComponentInput>
                <Input label="Float" float />
                <Input label="With Error" float errorText="Error text" />
                <Input label="Label" hint="Hint" />
                <Input label="With Error" hint="Hint" errorText="Error text" />
                <Divisor />
            </ContainerComponentInput>
            <h2>Button</h2>
            <ContainerComponent style={{ alignItems: 'center' }}>
                <Button label="Print" color="primary" onClick={() => setValue(inputRef.current?.value || '')} />
                <Button label="Print" color="primary" onClick={() => setValue(inputRef.current?.value || '')} outline />
                <Button
                    label="Link to github"
                    href="https://github.com/jnadroj/thxmx-ui.git"
                    target="blank"
                    rel="noreferrer"
                    color="primary"
                    onClick={() => setValue(inputRef.current?.value || '')}
                    as="a"
                />
            </ContainerComponent>

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
            <ContainerComponent>
                <Button onClick={toggleModal} label="Modal sm" />
                <Button onClick={toggleModal2} color="secondary" label="Modal m" />
            </ContainerComponent>
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

const ContainerComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    & > *:not(:last-child) {
        margin-right: 25px;
    }
`;

const ContainerComponentInput = styled.div`
    display: flex;
    flex-direction: column;
    & > *:not(:last-child) {
        margin-right: 25px;
    }
`;

export default App;
