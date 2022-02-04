import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

const Nav = () => {
  return (
    <div className="block_nav-link">
      <ul className="nav-link_list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              "header_Nav_link" + (isActive ? " activated" : "")
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="*"
            className={({ isActive }) =>
              "header_Nav_link" + (isActive ? " activated" : "")
            }
          >
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="*"
            className={({ isActive }) =>
              "header_Nav_link" + (isActive ? " activated" : "")
            }
          >
            Réglage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="*"
            className={({ isActive }) =>
              "header_Nav_link" + (isActive ? " activated" : "")
            }
          >
            Communauté
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
