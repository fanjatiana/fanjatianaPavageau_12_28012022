import propTypes from "prop-types";
import React from "react";
import "../styles/helloUser.css";

const HelloUser = (props) => {
  const { name } = props;

  return (
    <div className="helloUser_container">
      <h2>
        Bonjour <span>{name}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

HelloUser.propTypes = {
  name : propTypes.string.isRequired,
}

export default HelloUser;
