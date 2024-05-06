import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Admin = () => {
  const [toggle, setToggle] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className="admin">
        <div className="container">
          <div className="admin-style">
            <div className="admin-box">
              <h1>Admin Panel</h1>
              <div onClick={() => setToggle(!toggle)} className="admin-sitebar">
                <IoMenu className="sitebar" />
              </div>
            </div>
            <div className={`box ${toggle ? "show" : ""}`}>
              <ul>
                <li>
                  <NavLink to={"create"}>Create User</NavLink>
                </li>
                <li>
                  <NavLink to={"manage"}>Manage</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Admin;
