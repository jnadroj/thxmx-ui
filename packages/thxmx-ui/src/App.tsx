import styled from 'styled-components';
import { Button, Input } from './lib';

function App() {
    return (
        <Wrapper>
            <Button label="Hello World" color="primary" />
            <Input label="Label" hint="Hint" />
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
