import React from "react";
import Icon from "./Icon";

import CaloriesIcon from "../assets/calories-icon.svg";
import CarbsIcon from "../assets/carbs-icon.svg";
import FatIcon from "../assets/fat-icon.svg";
import ProteinIcon from "../assets/protein-icon.svg";
import '../styles/counter_block.css'

const CounterBlock = (props) => {
  const {calorieValue, proteinValue, carbohydrateValue, lipidValue} = props;
  return (
    <>
      <div className="caloriesCounter_block">
        <Icon imgIcon={CaloriesIcon} imgDescription="icon feu" />
        <div className="calories_info">
          <h4>Calories</h4>
          <p>{calorieValue}kCal</p>
        </div>
      </div>
      <div  className="caloriesCounter_block">
        <Icon imgIcon={ProteinIcon} imgDescription="icon cuisse de poulet " />
        <div className="calories_info">
          <h4>Proteines</h4>
          <p>{proteinValue}g</p>
        </div>
      </div>
      <div  className="caloriesCounter_block">
        <Icon imgIcon={CarbsIcon} imgDescription="icon pomme" />
        <div className="calories_info">
          <h4>Glucides</h4>
          <p>{carbohydrateValue}g</p>
        </div>
      </div>
      <div  className="caloriesCounter_block">
        <Icon imgIcon={FatIcon} imgDescription="icon hamburger" />
        <div className="calories_info">
          <h4>Lipides</h4>
          <p>{lipidValue}g</p>
        </div>
      </div>
    </>
  );
};

export default CounterBlock;
