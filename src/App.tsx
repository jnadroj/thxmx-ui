import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Input, ModalContent, Modal, Tag, Loader, Rate } from './lib';
import { colors } from './constants';

const textLorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor odio venenatis tortor sagittis, eget elementum diam ultrices. Morbi congue sit amet metus a suscipit.';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  overflow: auto;
  box-sizing: border-box;
  margin: 25px;
  grid-template-columns: 1fr;
  & > div {
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    overflow: auto;
    max-height: 250px;
  }

  & > div > *:first-of-type {
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 100px;
    grid-gap: 25px;
  }
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
  align-items: center;
`;

function App() {
  const [tags, setTags] = useState<Array<number>>([1, 2, 3]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModal2, setOpenModal2] = useState<boolean>(false);
  const [openModal3, setOpenModal3] = useState<boolean>(false);

  const handleCloseTag = (tagClicked: number) => {
    const filterTags = tags.filter((tag) => tag !== tagClicked);
    setTags([...filterTags]);
  };

  const toggleModal = () => setOpenModal(!openModal);
  const toggleModal2 = () => setOpenModal2(!openModal2);
  const toggleModal3 = () => setOpenModal3(!openModal3);

  const modalProps = useMemo(
    () => ({
      content: textLorem,
      title: 'Main Title',
      confirm: { label: 'Confirm' },
    }),
    []
  );

  return (
    <Wrapper>
      <div>
        <h2>Loaders</h2>
        <div style={{ display: 'flex', gap: '50px' }}>
          <Loader size={32} borderSize={4} color={colors['primary-darker']} />
          <Loader
            type="rotate"
            size={32}
            borderSize={4}
            color={colors.secondary}
          />
          <Loader
            type="dots"
            size={32}
            borderSize={4}
            color={colors['primary-darker']}
          />
        </div>
      </div>
      <div>
        <h2>Input</h2>
        <ContainerComponentInput>
          <Input label="Float" float />
          <Input label="Label" hint="Hint" />
        </ContainerComponentInput>
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
        <h2>Modal</h2>
        <ContainerComponent>
          <Button onClick={toggleModal} label="Modal sm" />
          <Button onClick={toggleModal2} color="secondary" label="Modal m" />
          <Button onClick={toggleModal3} color="error" label="Modal full" />
        </ContainerComponent>
      </div>

      <div>
        <h2>Rate</h2>
        <div>
          <Rate
            count={5}
            defaultValue={3.5}
            style={{ fontSize: 40 }}
            allowHalf
          />
        </div>
      </div>
      <Modal open={openModal} size="sm" onClose={toggleModal}>
        <ModalContent
          {...modalProps}
          size="sm"
          cancel={{ label: 'Cancel', onClick: toggleModal }}
        />
      </Modal>
      <Modal open={openModal2} onClose={toggleModal2}>
        <ModalContent
          {...modalProps}
          cancel={{ label: 'Cancel', onClick: toggleModal2 }}
        />
      </Modal>
      <Modal open={openModal3} size="full" onClose={toggleModal3}>
        <ModalContent
          {...modalProps}
          size="full"
          cancel={{ label: 'Cancel', onClick: toggleModal3 }}
        />
      </Modal>
    </Wrapper>
  );
}

export default App;
