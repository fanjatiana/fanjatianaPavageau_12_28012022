import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../pages/DashBoard";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </>
  );
};

export default Router;
