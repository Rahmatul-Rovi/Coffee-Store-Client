import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged Out!",
          text: "Come back soon for more coffee!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => console.error(error.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#E3B577] font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/addCoffee"
            className={({ isActive }) =>
              isActive ? "text-[#E3B577] font-bold" : ""
            }
          >
            Add Coffee
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[#E3B577] font-bold" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#E3B577] font-bold" : ""
          }
        >
          Contact
        </NavLink>
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
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <div className="flex items-center gap-4">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName || "User"}
            >
              <div className="avatar">
                <div className="w-10 rounded-full border-2 border-[#E3B577] ring ring-offset-base-100 ring-offset-2 ring-[#E3B577]/20">
                  <img
                    src={
                      user && user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/mJR9Qxc/user.png"
                    }
                    alt="User profile"
                    onError={(e) => {
                      e.target.src = "https://i.ibb.co/mJR9Qxc/user.png";
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-sm bg-transparent border-2 border-[#E3B577] text-[#E3B577] hover:bg-[#E3B577] hover:text-black transition-all"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/signin"
              className="btn btn-outline btn-warning btn-sm border-[#E3B577] text-[#E3B577] hover:bg-[#E3B577] hover:text-black"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="btn bg-[#E3B577] border-none text-black btn-sm hover:bg-white"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
