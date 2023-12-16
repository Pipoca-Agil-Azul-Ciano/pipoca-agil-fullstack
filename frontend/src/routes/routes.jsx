import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PasswordRecovery from "../pages/PasswordRecovery/PasswordRecovery";
import NewPassword from "../pages/NewPassword/NewPassword";
const ConfigRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/new-password" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ConfigRoutes;
