import React from "react";
import "./Header.css";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/header-logo.png";

function Navbar() {
  return (
    <>
      <header className="navbar__wrapper">
        <div className="container">
          <nav className="navbar">
            <NavLink to={"/"} className="navbar__logo">
              <img src={logo} alt="" />
            </NavLink>
            <button className="navbar__category-btn">
              <IoMenu />
              <span>Katalog</span>
            </button>
            <div className="navbar__search">
              <input
                className="header-input"
                type="search"
                placeholder="Search..."
              />
            </div>
            <div className="navbar__collection">
              <NavLink to={"/"} className="navbar__item">
                <IoHome />
                <span>Home</span>
              </NavLink>
              <NavLink to={"/admin"} className="navbar__item">
                <FaRegUser />
                <span>Admin</span>
              </NavLink>
              <a className="navbar__item">
                <FaRegHeart />
                <span>Wishes</span>
              </a>
              <a className="navbar__item">
                <FiShoppingCart />
                <span>Cart</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
