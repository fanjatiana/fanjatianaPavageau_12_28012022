import React from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
