import React from "react";
import DashboardHeader from "../components/DashboardHeader";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <DashboardHeader />
      {children}
    </div>
  );
};

export default DashboardLayout;
