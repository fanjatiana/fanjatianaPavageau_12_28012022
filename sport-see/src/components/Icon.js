import React from 'react';
import '../styles/icon.css'

const Icon = (props) => {
    const {imgIcon, imgDescription} = props;
    return (
        <div className='icon'>
            <img src={imgIcon} alt = {imgDescription}/>
        </div>
    );
};

export default Icon;