import React from "react";
import { useFetch } from "../api/useFetch";
import Counter_block from "../components/Counter_block";

import "../styles/caloriesCounter.css";

const CalorieCounter = () => {
 const { data, isLoading, error } = useFetch("http://localhost:4000/user/12");
 const keyData = data.data.keyData;
 console.log(keyData)
  return (
    <div className="caloriesCounter_container">
      <Counter_block
        calorieValue = {keyData.calorieCount}
        proteinValue = {keyData.proteinCount}
        carbohydrateValue = {keyData.carbohydrateCount}
        lipidValue = {keyData.lipidCount}
      />
    </div>
  );
};

export default CalorieCounter;
