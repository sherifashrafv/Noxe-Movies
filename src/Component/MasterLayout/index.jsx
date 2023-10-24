import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";

export default function MasterLayOut({ userData, logout }) {
  return (
    <div>
      <Nav userData={userData} logout={logout} />
      <div className="container">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
