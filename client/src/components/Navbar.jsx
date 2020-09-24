import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/company_portal">Company Portal</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
