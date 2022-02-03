import React from "react";
import { Link } from "react-router-dom";
import "../styles/notFound.css";

import imgError404 from "../assets/404.png";
const NotFound = () => {
  return (
    <main className="block_error404">
      <h2>
        <img src={imgError404} alt="" />
      </h2>
      <p>Oops page introuvable</p>
      <Link to="/">Retour vers la page d'accueil</Link>
    </main>
  );
};

export default NotFound;
