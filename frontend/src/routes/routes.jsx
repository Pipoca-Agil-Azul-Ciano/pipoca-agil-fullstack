import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
const ConfigRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ConfigRoutes;
