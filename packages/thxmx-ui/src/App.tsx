import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from './lib';
import Tag from './lib/Tag';

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string>('');

    return (
        <Wrapper>
            <p>{value}</p>
            <Input label="Label" hint="Hint" ref={inputRef} />
            <Button label="Print" color="primary" onClick={() => setValue(inputRef.current?.value || '')} />
            <hr />
            <div style={{ display: 'flex' }}>
                <Tag size="sm">prueba</Tag>
                <Tag size="sm" variant="secondary">
                    prueba
                </Tag>
                <Tag size="sm" variant="error">
                    prueba
                </Tag>
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

export default App;
