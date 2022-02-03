import React from "react";
import Aside from "../containers/Aside";
import Main from "../containers/Main";
import "../styles/dashboard.css";
const DashBoard = () => {
  return (
    <div className="user_dashboard">
      <Aside />
      <Main />
    </div>
  );
};

export default DashBoard;
