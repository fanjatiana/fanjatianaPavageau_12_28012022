import React from "react";
import Icon from "../components/Icon";
import Yoga from "../assets/yoga_icon.svg";
import Swimming from "../assets/swimming_icon.svg";
import Cycling from "../assets/cycling_icon.svg";
import BodyBuilding from "../assets/bodyBuilding_icon.svg";
import "../styles/aside.css";

const Aside = () => {
  return (
    <aside className="aside_container">
      <div className="icons_list">
        <Icon imgIcon={Yoga} imgDescription="icon yoga" />
        <Icon imgIcon={Swimming} imgDescription="icon natation" />
        <Icon imgIcon={Cycling} imgDescription="icon cyclisme" />
        <Icon imgIcon={BodyBuilding} imgDescription="icon musculation" />
      </div>
      <div className="copiryght">
        <p>Copiryght, SportSee 2020</p>
      </div>
    </aside>
  );
};

export default Aside;
