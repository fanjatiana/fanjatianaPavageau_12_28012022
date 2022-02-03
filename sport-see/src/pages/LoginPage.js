import React from "react";
import { NavLink } from "react-router-dom";
import { USER_MAIN_DATA } from "../api/data.js";
import "../styles/loginPage.css";

const LoginPage = () => {
  return (
    <main className="login_container">
      <h2>Connexion</h2>
      <p>Veuillez selectionner un utilisateur</p>
      <ul className="user_list">
        {USER_MAIN_DATA.map((user) => (
          <li>
            <NavLink to={`/user/${user.id}`}>
              {user.userInfos.firstName}
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default LoginPage;
