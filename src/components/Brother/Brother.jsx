import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const [money] =useContext(MoneyContext);
    return (
        <div>
            <h2>Brother</h2>
            <p>Money: {money}</p>
        </div>
    );
};

export default Brother;