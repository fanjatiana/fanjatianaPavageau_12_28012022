import React from 'react';
import { useFetch } from '../api/useFetch';
import '../styles/helloUser.css'

const HelloUser = (props) => {
  const {name} = props;

return(
        <div className='helloUser_container'>
            <h2>Bonjour {name}</h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
    
};

export default HelloUser;