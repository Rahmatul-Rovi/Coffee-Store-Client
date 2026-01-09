import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#372727] text-white px-4 md:px-20 py-4 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#372727] rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/">
            <h1 className="text-2xl font-rancho font-bold cursor-pointer hover:text-[#E3B577] transition-colors">
              Caffeine Castle
            </h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        <Link
          to="/signin"
          className="btn btn-outline btn-warning btn-sm border-[#E3B577] text-[#E3B577]"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="btn bg-[#E3B577] border-none text-black btn-sm hover:bg-white"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
