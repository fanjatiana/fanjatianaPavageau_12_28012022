import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/user" element={<DashBoard />} />
      </Routes>
    </>
  );
};

export default Router;
