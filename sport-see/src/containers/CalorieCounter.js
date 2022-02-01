import React from "react";
import { useParams } from "react-router-dom";
import { useFetch, useFetchById } from "../api/useFetch";
import CounterBlock from "../components/Counter_block";

import "../styles/caloriesCounter.css";

const CalorieCounter = () => {
  const url = useParams();
  const userId = url.id;
  const { isLoading, data, error } = useFetchById(userId);
  console.log(data)
  
if(error) return <h2>erreur 404</h2>
  
if (isLoading)  return <>is loading</>
const keyData = {
  calorie : data.Infos.keyData.calorieCount,
  protein: data.Infos.keyData.proteinCount,
  carbohydrate : data.Infos.keyData.carbohydrateCount,
  lipid: data.Infos.keyData.lipidCount,
}
   return (
    <div className="caloriesCounter_container">
      <CounterBlock
        calorieValue={keyData.calorie}
        proteinValue={keyData.protein}
        carbohydrateValue={keyData.carbohydrate}
        lipidValue={keyData.lipid}
      />
    </div>
  );
};

export default CalorieCounter;
