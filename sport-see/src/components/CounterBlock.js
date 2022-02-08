import React from "react";
import Icon from "./Icon";

import CaloriesIcon from "../assets/calories-icon.svg";
import CarbsIcon from "../assets/carbs-icon.svg";
import FatIcon from "../assets/fat-icon.svg";
import ProteinIcon from "../assets/protein-icon.svg";
import "../styles/counter_block.css";
import propTypes from "prop-types";

const CounterBlock = (props) => {
  const { calorieValue, proteinValue, carbohydrateValue, lipidValue } = props;
  return (
    <>
      <div className="caloriesCounter_block">
        <Icon imgIcon={CaloriesIcon} imgDescription="icone feu" />
        <div className="calories_info">
          <h4>Calories</h4>
          <p>{calorieValue}kCal</p>
        </div>
      </div>
      <div className="caloriesCounter_block">
        <Icon imgIcon={ProteinIcon} imgDescription="icone cuisse de poulet " />
        <div className="calories_info">
          <h4>Proteines</h4>
          <p>{proteinValue}g</p>
        </div>
      </div>
      <div className="caloriesCounter_block">
        <Icon imgIcon={CarbsIcon} imgDescription="icone pomme" />
        <div className="calories_info">
          <h4>Glucides</h4>
          <p>{carbohydrateValue}g</p>
        </div>
      </div>
      <div className="caloriesCounter_block">
        <Icon imgIcon={FatIcon} imgDescription="icone hamburger" />
        <div className="calories_info">
          <h4>Lipides</h4>
          <p>{lipidValue}g</p>
        </div>
      </div>
    </>
  );
};

CounterBlock.propTypes = {
  calorieValue: propTypes.number,
  proteinValue: propTypes.number,
  carbohydrateValue: propTypes.number,
  lipidValue: propTypes.number,
};

export default CounterBlock;
