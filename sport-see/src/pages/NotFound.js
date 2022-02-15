import React from "react";
import { Link } from "react-router-dom";
import "../styles/notFound.css";

import imgError404 from "../assets/404(2).png";
const NotFound = () => {
  return (
    <main className="block_error404">
      <div className="block_img">
        <img src={imgError404} alt="" />
      </div>
      <div className="block_text">
        <h2>Oops page introuvable</h2>
        <Link className="button_back-to-home" to="/">
          Retour vers la page d'accueil
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
