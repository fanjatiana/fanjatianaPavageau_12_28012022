import React from 'react';
import '../styles/sportThemeIcon.css'

const SportThemeIcon = (props) => {
    const {imgIcon, imgDescription} = props;
    return (
        <div className='sport_icon'>
            <img src={imgIcon} alt = {imgDescription}/>
        </div>
    );
};

export default SportThemeIcon;