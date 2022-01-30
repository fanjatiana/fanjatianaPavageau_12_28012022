import React from 'react';

const SportThemeIcon = (props) => {
    const {imgIcon, imgDescription} = props;
    return (
        <div>
            <img src={imgIcon} alt = {imgDescription}/>
        </div>
    );
};

export default SportThemeIcon;