import React, { ReactNodeArray, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Input, ModalContent, Modal, Tag, Loader } from './lib';
import { colors } from './constants';
import { convertHexToRGBA } from './utils';

const Formulary: React.FC<{ hideForm: () => void }> = ({ hideForm }) => {
    const [values, setValues] = useState({
        name: '',
        lastName: '',
        city: '',
        email: '',
    });

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target);
        if (!event.target.value.trim()) return;
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <WrapperFormulary>
            <div>
                <h1>Formulary</h1>
                <div>
                    <Input label="Name" hint="John" name="name" onChange={handleChangeInput} />
                    <Input label="Last Name" hint="Doe" name="lastName" onChange={handleChangeInput} />
                    <Input label="Email" hint="jdoe@email.com" name="email" onChange={handleChangeInput} />
                    <Input label="City" hint="Florida" name="city" onChange={handleChangeInput} />
                </div>
                <div>
                    <Button label="Hide Form" onClick={hideForm} outline color="dismiss" />
                    <Button label="Send" />
                </div>
            </div>
            <div
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}
            >
                <p>Name: {values.name} </p>
                <p>LastName: {values.lastName}</p>
                <p>Email: {values.email}</p>
                <p>City: {values.city}</p>
            </div>
        </WrapperFormulary>
    );
};

const WrapperFormulary = styled.div({
    backgroundColor: convertHexToRGBA(colors['secondary-lighter'], 0.3),
    padding: 50,
    borderRadius: 34,
    width: '80%',
    margin: '100px auto',
    display: 'flex',
    '& > div': {
        width: '50%',
    },
    '& > div > div:first-of-type': {
        display: 'flex',
        flexWrap: 'wrap',
    },
    '& > div > div:first-of-type > *:not(:last-of-type)': {
        marginRight: 25,
    },
    '& > div > div:last-of-type > *:not(:last-of-type)': {
        marginRight: 10,
        marginTop: 10,
    },
});

function App() {
    const [tags, setTags] = useState<Array<number>>([1, 2, 3]);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openModal2, setOpenModal2] = useState<boolean>(false);
    const [openModal3, setOpenModal3] = useState<boolean>(false);

    const handleCloseTag = (tagClicked: number) => {
        let filterTags = tags.filter((tag) => tag !== tagClicked);
        setTags([...filterTags]);
    };

    const toggleModal = () => setOpenModal(!openModal);
    const toggleModal2 = () => setOpenModal2(!openModal2);
    const toggleModal3 = () => setOpenModal3(!openModal3);

    if (showForm) return <Formulary hideForm={() => setShowForm(false)} />;

    return (
        <Wrapper>
            <Button label="Show Form" onClick={() => setShowForm(!showForm)} outline />
            <Divisor />

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
                <Button label="Print" color="primary" />
                <Button label="Print" color="primary" outline />
                <Button
                    label="Link to github"
                    href="https://github.com/jnadroj/thxmx-ui.git"
                    target="blank"
                    rel="noreferrer"
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
                <Button onClick={toggleModal3} color="error" label="Modal full" />
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
            <Modal open={openModal2} onClose={toggleModal2}>
                <ModalContent
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor odio venenatis tortor sagittis, eget elementum diam ultrices. Morbi congue sit amet metus a suscipit."
                    title="Main title"
                    confirm={{ label: 'Confirm' }}
                    cancel={{ label: 'Cancel', onClick: toggleModal2 }}
                />
            </Modal>
            <Modal open={openModal3} size="full" onClose={toggleModal3}>
                <ModalContent
                    size="full"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor odio venenatis tortor sagittis, eget elementum diam ultrices. Morbi congue sit amet metus a suscipit."
                    title="Main title"
                    confirm={{ label: 'Confirm' }}
                    cancel={{ label: 'Cancel', onClick: toggleModal3 }}
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
    justify-content: center;
    flex-direction: column;
`;

export default App;
