import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

const Nav = () => {
  return (
    <div className="block_nav-link">
      <ul className="nav-link_list">
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="*">Profil</NavLink>
        </li>
        <li>
          <NavLink to="*">Réglage</NavLink>
        </li>
        <li>
          <NavLink to="*">Communauté</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
