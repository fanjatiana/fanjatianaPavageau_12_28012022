import React from 'react';
import Counter_block from '../components/Counter_block';

import '../styles/caloriesCounter.css'

const CalorieCounter = () => {
    return (
        <div className='caloriesCounter_container'>
            <Counter_block />
        </div>
    );
};

export default CalorieCounter;