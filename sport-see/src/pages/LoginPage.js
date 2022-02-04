import React from "react";
import { NavLink } from "react-router-dom";
import { USER_MAIN_DATA } from "../api/data.js";
import "../styles/loginPage.css";
import AvatarMen from "../assets/men.jpg";
import AvatarWomen from "../assets/women.jpg";
const LoginPage = () => {
  return (
    <main className="login_container">
      <h2>Bienvenue sur SportSee</h2>
      <p>Veuillez selectionner un utilisateur</p>
      <ul className="user_list">
        {USER_MAIN_DATA.map((user) => (
          <li>
            <NavLink to={`/user/${user.id}`}>
              {user.userInfos.firstName}
              {user.id=== 12? <img className="avatar" src={AvatarMen}/> : <img className="avatar" src={AvatarWomen}/> }
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default LoginPage;
