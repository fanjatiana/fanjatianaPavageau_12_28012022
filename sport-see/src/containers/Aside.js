import React from "react";
import Icon from "../components/Icon";
import Yoga from "../assets/yoga_icon.svg";
import Swimming from "../assets/swimming_icon.svg";
import Cycling from "../assets/cycling_icon.svg";
import BodyBuilding from "../assets/bodyBuilding_icon.svg";
import "../styles/aside.css";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="aside_container">
      <div className="icons_list">
        <Link to="*">
          <Icon imgIcon={Yoga} imgDescription="icon yoga" />
        </Link>
        <Link to="*">
          <Icon imgIcon={Swimming} imgDescription="icon natation" />
        </Link>
        <Link to="*">
          <Icon imgIcon={Cycling} imgDescription="icon cyclisme" />
        </Link>
        <Link to="*">
          <Icon imgIcon={BodyBuilding} imgDescription="icon musculation" />
        </Link>
      </div>
      <div className="copiryght">
        <p>Copiryght, SportSee 2020</p>
      </div>
    </aside>
  );
};

export default Aside;
