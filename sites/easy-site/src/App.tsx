import { useState } from 'react';
import logo from './logo.svg';
import { Button, Input } from 'thxmx-ui';

function App() {
    const [count, setCount] = useState<number>(0);
    const [value, setValue] = useState<string>('');
    const [value2, setValue2] = useState<string>('');

    return (
        <div className="App">
            <p>count is: {count}</p>
            <p>
                <Button onClick={() => setCount((count) => count + 1)} label="Click here!" color="primary" />
            </p>
            <hr />
            <p>Float: {value}</p>
            <div>
                <Input
                    float
                    label="Float Input"
                    id="float-input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>

            <hr />
            <p>Normal: {value2}</p>
            <div>
                <Input
                    label="Normal Input"
                    id="normal-input"
                    hint="Placeholder"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                />
            </div>
        </div>
    );
}

export default App;
