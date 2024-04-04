import DashBoard from "@/Components/UI/Dashboard";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <DashBoard>{children}</DashBoard>
    </div>
  );
};

export default DashboardLayout;
