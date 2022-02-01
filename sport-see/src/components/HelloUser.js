import React from 'react';
import { useFetch } from '../api/useFetch';
import '../styles/helloUser.css'

const HelloUser = () => {
    const { data, isLoading, error } = useFetch("http://localhost:3000/user/12");

//console.log(data)

if (error) {
    return (
    
        <div>Error</div>
    );
  }
  return isLoading ? (
    <div>Is Loading</div>
  ) : (
    (
        <div className='helloUser_container'>
            <h2>Bonjour</h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    ));
    
};

export default HelloUser;