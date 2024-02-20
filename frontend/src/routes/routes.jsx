import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PasswordRecovery from "../pages/PasswordRecovery/PasswordRecovery";
import NewPassword from "../pages/NewPassword/NewPassword";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home";
import DashboardSubscriber from "../pages/DashboardSubscriber";
import Profile from "../pages/Profile";
const ConfigRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardsubscriber" element={<DashboardSubscriber />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ConfigRoutes;
