import React from "react";
import HelloUser from "../components/HelloUser";
import Aside from "./Aside";

const Main = () => {
  return (
    <main>
      <Aside />
      <HelloUser />
    </main>
  );
};

export default Main;
