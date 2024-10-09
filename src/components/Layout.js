import React from "react";
import Icon from "./Icon";
import Navbar from "./Navbar";
import CartIcon from "./Cart";
import { Outlet } from "react-router-dom";
import CargoLine from "./CargoLine";

const Layout = () => {
  return (
    <>
      <div className="navbarDivTop">
        <Icon />
        <div className="navbarDiv">
          <Navbar />
          <CartIcon />
        </div>
      </div>
      <div className="cargoLine">
        <CargoLine />
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
