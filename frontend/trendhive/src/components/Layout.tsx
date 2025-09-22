import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Outlet /> 
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Layout;
