import styled from 'styled-components';
import { Button } from './lib';

function App() {
    return (
        <Wrapper>
            <Button label="Hello World" color="primary" />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: center;
`;

export default App;
