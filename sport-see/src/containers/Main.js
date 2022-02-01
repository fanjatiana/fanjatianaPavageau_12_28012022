import React from "react";
import HelloUser from "../components/HelloUser";
import CalorieCounter from "./CalorieCounter";
import  '../styles/main.css';

const Main = () => {
  return (
    <main id = "main_container">
      <HelloUser />
      <CalorieCounter />
    </main>
  );
};

export default Main;
