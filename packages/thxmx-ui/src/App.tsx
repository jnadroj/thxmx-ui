import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from './lib';
import Tag from './lib/Tag';

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [tags, setTags] = useState<Array<number>>([1, 2, 3]);
    const [value, setValue] = useState<string>('');

    const handleCloseTag = (tagClicked: number) => {
        let filterTags = tags.filter((tag) => tag !== tagClicked);
        setTags([...filterTags]);
    };

    return (
        <Wrapper>
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
