import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const GroupedButtons = () => {
    const [state, setState] = useState(2);

    const handleIncrement = () => {
        setState((state) => state + 1);
    };

    const handleDecrement = () => {
        setState((state) => state - 1);
    };

    return (
        <ButtonGroup size="small" aria-label="small outlined button group">
            <Button onClick={handleIncrement}>+</Button>
            <Button disabled>{state}</Button>
            <Button onClick={handleDecrement}>-</Button>
        </ButtonGroup>
    );
};

export default GroupedButtons;
