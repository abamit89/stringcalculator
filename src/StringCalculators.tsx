
import React, { useState } from 'react';
import { add } from './stringCalculator';

export const StringCalculator: React.FC = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<number | string>(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(sum);
        } catch (error) {
            setResult((error as Error).message);
        }
    };

    return (
        <div className='string-calculator'>
            <h1>String Calculator</h1>
            <p>"To use this calculator, enter numbers separated by commas, such as 20, 10, 500, 6 and so on.."</p>
            <input type="text" value={input} onChange={handleInputChange} placeholder='Type your numbers'/>
            <button type="button" onClick={handleCalculate}>Calculate</button>
            <div className='result'>Result: {result}</div>
        </div>
    );
};

