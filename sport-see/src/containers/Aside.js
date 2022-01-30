import React from "react";
import SportThemeIcon from "../components/SportThemeIcon";
import Yoga from "../assets/yoga_icon.svg";
import Swimming from "../assets/swimming_icon.svg";
import Cycling from "../assets/cycling_icon.svg";
import BodyBuilding from "../assets/bodyBuilding_icon.svg";

const Aside = () => {
  return (
    <aside>
      <SportThemeIcon imgIcon={Yoga} imgDescription="icon yoga" />
      <SportThemeIcon imgIcon={Swimming} imgDescription="icon natation" />
      <SportThemeIcon imgIcon={Cycling} imgDescription="icon cyclisme" />
      <SportThemeIcon imgIcon={BodyBuilding} imgDescription="icon musculation"/>
      <div>
        <p>Copiryght, SportSee 2020</p>
      </div>
    </aside>
  );
};

export default Aside;
