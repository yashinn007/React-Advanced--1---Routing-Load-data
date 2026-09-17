import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-blue-950 container mx-auto flex flex-col justify-center items-center p-3">
      <h3 className="text-xl text-emerald-400 font-bold">This is header</h3>
      <nav className="space-x-4 mt-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users2</NavLink>
      </nav>
    </div>
  );
};

export default Header;
