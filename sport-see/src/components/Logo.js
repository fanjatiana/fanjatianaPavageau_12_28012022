import React from "react";
import { Link } from "react-router-dom";
import SportSeeLogo from "../assets/logo.png";
import "../styles/logo.css";

const Logo = () => {
  return (
    <div className="block_logo">
      <Link to="/">
        <h1>
          <img src={SportSeeLogo} alt="logo de l'application SportSee" />
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
