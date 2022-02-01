import React from "react";
import { useFetch } from "../api/useFetch";
import CounterBlock from "../components/Counter_block";

import "../styles/caloriesCounter.css";

const CalorieCounter = () => {
 const { data, isLoading, error } = useFetch("http://localhost:3000/user/12");
 const keyData = data?.data.keyData;
 console.log(keyData)
 
 if (error) {
   return <>
   <h1>Une erreur obscure vient de se répendre</h1>
   </>
 } return !data ? (<>is loading</>)
 : 

  (
    <div className="caloriesCounter_container">
      
      <CounterBlock
        calorieValue = {keyData.calorieCount}
        proteinValue = {keyData.proteinCount}
        carbohydrateValue = {keyData.carbohydrateCount}
        lipidValue = {keyData.lipidCount}
      />
      {/*

      */}
    </div>
  );
};

export default CalorieCounter;
