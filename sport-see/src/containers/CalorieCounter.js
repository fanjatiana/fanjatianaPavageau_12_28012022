import React from "react";
import { useParams } from "react-router-dom";
import { useFetch, useFetchById } from "../api/useFetch";
import CounterBlock from "../components/CounterBlock";
import NotFound from "../pages/NotFound";

import "../styles/caloriesCounter.css";

const CalorieCounter = (props) => {
  const {data} = props;
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
