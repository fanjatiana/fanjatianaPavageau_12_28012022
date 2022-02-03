import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user/:id" element={<DashBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
