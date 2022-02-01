import React from "react";
import { NavLink } from "react-router-dom";
import { USER_MAIN_DATA } from "../api/data.js";


const LoginPage = () => {

  return (
    <div>
      <h2>Connexion</h2>
      <p>Veuillez selectionner un utilisateur</p>
      <ul>
      {USER_MAIN_DATA.map((user)=> <li>
          <NavLink to ={`/user/${user.id}`}>{user.userInfos.firstName}</NavLink>
        </li>)}
      </ul>
    </div>
  );
};

export default LoginPage;
