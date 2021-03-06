import PropTypes from "prop-types";
import React from "react";
import "../styles/icon.css";

const Icon = ({ imgIcon, imgDescription }) => {
  return (
    <div className="icon">
      <img src={imgIcon} alt={imgDescription} />
    </div>
  );
};

Icon.propTypes = {
  imgIcon: PropTypes.string.isRequired,
  imgDescription: PropTypes.string,
};

export default Icon;
