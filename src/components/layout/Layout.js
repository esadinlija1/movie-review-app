import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

function Layout({ onChangeQuery }) {
  return (
    <div className="conatiner">
      <Header onChangeQuery={onChangeQuery} />
      <Outlet />
    </div>
  );
}

export default Layout;
