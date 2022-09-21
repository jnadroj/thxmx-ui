import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from './lib';
import Tag from './lib/Tag';

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string>('');

    return (
        <Wrapper>
            <h2>Input</h2>
            <Input label="Label" hint="Hint" ref={inputRef} /> <Divisor />
            <h2>Button</h2>
            <Button label="Print" color="primary" onClick={() => setValue(inputRef.current?.value || '')} />
            <Divisor />
            <h2>Tags</h2>
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
const Divisor = styled.div`
    margin-bottom: 2rem;
`;

export default App;
