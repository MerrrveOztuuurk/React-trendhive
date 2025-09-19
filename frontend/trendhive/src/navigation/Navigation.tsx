import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";


const Navigation: React.FC = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
