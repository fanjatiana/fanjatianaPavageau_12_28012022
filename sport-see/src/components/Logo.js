import React from "react";
import { Link } from "react-router-dom";
import SportSeeLogo from "../assets/logo.png";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <h1>
          <img src={SportSeeLogo} alt="logo de l'application SportSee" />
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
