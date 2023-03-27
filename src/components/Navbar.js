import React from "react";
import "./Navbar.css";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Icons from "./icons";
import Cart from "./Cart";
import { Link, Outlet } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <div className="navbar">
        <Link to="/navbar/dash">
          <Logo></Logo>
        </Link>
        <Searchbar></Searchbar>
        <Icons></Icons>
        <Link to="/navbar/cart">
          <Cart></Cart>
        </Link>
      </div>
      <Outlet />
    </>
  );
}
export default Navbar;
