import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { useFetch, useFetchById } from "../api/useFetch";
import DashBoard from "../pages/DashBoard";
import LoginPage from "../pages/LoginPage";

const Router = () => {

  return (
    <>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/user/:id" element={<DashBoard />} />
      </Routes>
    </>
  );
};

export default Router;
