import React from 'react';
import { useFetch } from '../api/useFetch';

const HelloUser = () => {
    const { data, isLoading, error } = useFetch("http://localhost:4000/user/12");



if (error) {
    return (
    
        <div>Error</div>
    );
  }
  return isLoading ? (
    <div>Is Loading</div>
  ) : (
    (
        <div>
            <h2>Bonjour</h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    ));
    
};

export default HelloUser;