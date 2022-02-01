import React from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {

  return (
    <div>
      <h2>Connexion</h2>
      <p>Veuillez selectionner un identifiant</p>
      <ul>
        <li>
          <NavLink to="/user">Karl</NavLink>
        </li>
        <li>
        <NavLink to="/user12">Cecilia</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LoginPage;
