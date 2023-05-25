//Import dependencies
import React from "react";
import { Outlet } from "react-router-dom";
import TopHeader from "./siteComponents/topHeader";

//Import components

const Layout = () => {
  return (
    <div>
      <TopHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
