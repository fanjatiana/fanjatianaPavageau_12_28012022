import propTypes from "prop-types";
import React from "react";
import "../styles/helloUser.css";

const HelloUser = ({ name }) => {
  return (
    <section className="helloUser_container">
      <h2>
        Bonjour <span>{name}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
};

HelloUser.propTypes = {
  name : propTypes.string.isRequired,
}

export default HelloUser;
